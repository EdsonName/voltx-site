# API — VoltX

## 1. Finalidade

Este documento define o padrão oficial da API da plataforma VoltX.

Ele deve ser consultado antes de:

- criar endpoint;
- alterar endpoint;
- remover endpoint;
- alterar payload;
- alterar resposta;
- alterar autenticação;
- alterar códigos HTTP;
- alterar paginação;
- alterar filtros;
- alterar HATEOAS;
- alterar uploads;
- criar webhooks;
- criar eventos relacionados à API.

> Antes de alterar esta especificação, consulte `AGENTS.md`, `ARQUITETURA.md` e `REGRAS_NEGOCIO.md`.

---

# 2. Base da API

Domínio planejado:

```text
https://api-voltx.narrativas.site
```

Versão inicial:

```text
/api/v1
```

Exemplo:

```text
https://api-voltx.narrativas.site/api/v1/services
```

---

# 3. Estilo arquitetural

A API será:

```text
RESTful
versionada
orientada a recursos
com HATEOAS
```

Princípios:

- URLs representam recursos;
- verbos HTTP representam ações;
- respostas usam códigos HTTP coerentes;
- recursos expõem links relacionados quando apropriado;
- ações disponíveis dependem do estado atual do recurso.

---

# 4. Convenções de URL

Usar substantivos no plural.

Correto:

```text
/services
/customers
/appointments
/quotes
/protocols
```

Evitar:

```text
/getServices
/createAppointment
/deleteCustomer
```

---

# 5. Versionamento

Versão na URL:

```text
/api/v1
```

Mudança incompatível significativa:

```text
/api/v2
```

Mudanças compatíveis não exigem nova versão principal da API.

---

# 6. Formato padrão

Content-Type:

```text
application/json
```

Respostas devem usar UTF-8.

---

# 7. Datas

Datas e horários devem usar ISO 8601.

Exemplo:

```text
2026-09-25T14:30:00-03:00
```

Evitar formatos ambíguos.

---

# 8. Identificadores públicos

Recursos com numeração de negócio podem possuir identificador público legível.

Exemplos:

```text
VX-2026-000184
ORC-2026-000072
OS-2026-000041
AG-2026-000053
```

O identificador interno do banco pode ser diferente.

---

# 9. Autenticação

A API deverá suportar autenticação de:

```text
cliente
administrador
```

Endpoints sensíveis exigem autenticação.

A estratégia definitiva de sessão/token deverá respeitar `AUTENTICACAO.md`.

---

# 10. Autorização

Autenticação não implica autorização.

Exemplo:

```text
cliente A
não pode acessar
dados privados do cliente B
```

Papéis previstos:

```text
SUPER_ADMIN
ADMIN
ATENDENTE
EDITOR
CLIENTE
```

---

# 11. HATEOAS

A API utilizará `_links`.

Exemplo:

```json
{
  "id": "AG-2026-000053",
  "status": "CONFIRMED",
  "_links": {
    "self": {
      "href": "/api/v1/appointments/AG-2026-000053"
    },
    "customer": {
      "href": "/api/v1/customers/123"
    },
    "service": {
      "href": "/api/v1/services/7"
    },
    "cancel": {
      "href": "/api/v1/appointments/AG-2026-000053/cancellation",
      "method": "POST"
    }
  }
}
```

---

# 12. HATEOAS condicionado ao estado

Uma ação não disponível não deve aparecer como possível.

Exemplo:

Agendamento concluído:

```text
COMPLETED
```

não deve expor:

```text
cancel
```

como ação disponível.

---

# 13. Coleções

Listas podem usar:

```text
_embedded
_links
page
pageSize
totalItems
totalPages
```

Exemplo:

```json
{
  "page": 1,
  "pageSize": 20,
  "totalItems": 51,
  "totalPages": 3,
  "_embedded": {
    "appointments": []
  },
  "_links": {
    "self": {
      "href": "/api/v1/appointments?page=1&pageSize=20"
    },
    "next": {
      "href": "/api/v1/appointments?page=2&pageSize=20"
    }
  }
}
```

---

# 14. Paginação

Parâmetros padrão:

```text
page
pageSize
```

Exemplo:

```text
GET /api/v1/posts?page=2&pageSize=20
```

Limite máximo deverá ser definido para evitar abuso.

---

# 15. Filtros

Exemplo:

```text
GET /api/v1/appointments?status=CONFIRMED
```

Filtros combináveis quando fizer sentido.

---

# 16. Ordenação

Padrão:

```text
sort
order
```

Exemplo:

```text
GET /api/v1/posts?sort=publishedAt&order=desc
```

---

# 17. Busca textual

Exemplo:

```text
GET /api/v1/admin/search?q=VX-2026-000184
```

Busca administrativa pode pesquisar múltiplos tipos.

---

# 18. Códigos HTTP

Padrões:

```text
200 OK
201 Created
202 Accepted
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests
500 Internal Server Error
503 Service Unavailable
```

---

# 19. Erro padrão

Formato sugerido:

```json
{
  "error": {
    "code": "APPOINTMENT_CONFLICT",
    "message": "Já existe um atendimento incompatível com esse horário.",
    "details": []
  }
}
```

A mensagem visível deve estar em PT-BR.

---

# 20. Código de erro interno

O campo:

```text
code
```

deve ser estável e útil para frontend e logs.

Exemplo:

```text
INVALID_CPF
INVALID_PHONE
APPOINTMENT_CONFLICT
UNAUTHORIZED_RESOURCE
RATE_LIMIT_EXCEEDED
```

---

# 21. Validação

Payload inválido:

```text
422 Unprocessable Entity
```

Exemplo:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Revise os campos destacados.",
    "details": [
      {
        "field": "cpf",
        "message": "CPF inválido."
      }
    ]
  }
}
```

---

# 22. Idempotência

Operações sensíveis podem exigir chave de idempotência.

Header:

```text
Idempotency-Key
```

Aplicações futuras:

- pagamentos;
- webhooks;
- operações externas;
- comandos repetíveis por falha de rede.

---

# 23. Rate limiting

Endpoints suscetíveis a abuso devem ser limitados.

Exemplos:

- login;
- recuperação de senha;
- cadastro;
- validação de código;
- orçamento sem conta;
- busca pesada;
- envio de mensagem;
- upload.

---

# 24. Uploads

Uploads devem usar endpoint próprio ou fluxo multipart.

Exemplo:

```text
POST /api/v1/media
```

Metadados retornados:

```json
{
  "id": "media_123",
  "type": "image",
  "status": "READY",
  "_links": {
    "self": {
      "href": "/api/v1/media/media_123"
    }
  }
}
```

---

# 25. Tipos de mídia

Previstos:

```text
AVATAR
POST_IMAGE
POST_COVER
CHAT_ATTACHMENT
SERVICE_IMAGE
SERVICE_GALLERY
APPOINTMENT_IMAGE
DOCUMENT
VIDEO
```

---

# 26. Endpoints de autenticação

```text
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
GET  /api/v1/auth/session
```

Admin:

```text
POST /api/v1/admin/auth/login
POST /api/v1/admin/auth/logout
```

---

# 27. Perfil do cliente

```text
GET   /api/v1/me
PATCH /api/v1/me
```

Foto:

```text
POST /api/v1/me/avatar
```

Preferências:

```text
GET   /api/v1/me/preferences
PATCH /api/v1/me/preferences
```

---

# 28. Endereços

```text
GET    /api/v1/me/addresses
POST   /api/v1/me/addresses
GET    /api/v1/me/addresses/{id}
PATCH  /api/v1/me/addresses/{id}
DELETE /api/v1/me/addresses/{id}
```

---

# 29. CEP

Exemplo:

```text
GET /api/v1/addresses/cep/{cep}
```

Resposta:

```json
{
  "cep": "72860000",
  "street": "Rua Exemplo",
  "district": "Centro",
  "city": "Novo Gama",
  "state": "GO",
  "serviceArea": {
    "status": "STANDARD"
  }
}
```

Fora da área:

```json
{
  "serviceArea": {
    "status": "OUTSIDE_STANDARD_AREA",
    "message": "Este endereço está fora da área habitual de atendimento."
  }
}
```

---

# 30. Configurações do negócio

Público:

```text
GET /api/v1/business-profile
```

Admin:

```text
GET   /api/v1/admin/business-profile
PATCH /api/v1/admin/business-profile
```

---

# 31. Serviços

Público:

```text
GET /api/v1/services
GET /api/v1/services/{slug}
```

Admin:

```text
POST   /api/v1/admin/services
PATCH  /api/v1/admin/services/{id}
DELETE /api/v1/admin/services/{id}
```

A exclusão poderá ser lógica.

---

# 32. Hashtags

Público:

```text
GET /api/v1/tags
GET /api/v1/tags/{slug}
GET /api/v1/tags/{slug}/posts
```

Admin:

```text
POST   /api/v1/admin/tags
PATCH  /api/v1/admin/tags/{id}
DELETE /api/v1/admin/tags/{id}
```

---

# 33. Blog

Público:

```text
GET /api/v1/posts
GET /api/v1/posts/{slug}
```

Admin:

```text
POST  /api/v1/admin/posts
GET   /api/v1/admin/posts/{id}
PATCH /api/v1/admin/posts/{id}
```

Ações:

```text
POST /api/v1/admin/posts/{id}/publish
POST /api/v1/admin/posts/{id}/suspend
POST /api/v1/admin/posts/{id}/archive
```

---

# 34. Rascunhos

```text
POST  /api/v1/admin/posts/{id}/draft
PATCH /api/v1/admin/posts/{id}/draft
```

Estado do editor poderá ser salvo em payload específico.

---

# 35. Histórico de versões do post

```text
GET /api/v1/admin/posts/{id}/versions
GET /api/v1/admin/posts/{id}/versions/{versionId}
POST /api/v1/admin/posts/{id}/versions/{versionId}/restore
```

---

# 36. Comentários

```text
GET  /api/v1/posts/{postId}/comments
POST /api/v1/posts/{postId}/comments
```

Próprio comentário:

```text
PATCH  /api/v1/comments/{id}
DELETE /api/v1/comments/{id}
```

Admin:

```text
POST /api/v1/admin/comments/{id}/hide
POST /api/v1/admin/comments/{id}/approve
```

---

# 37. Curtidas

```text
POST   /api/v1/posts/{postId}/likes
DELETE /api/v1/posts/{postId}/likes
```

---

# 38. Protocolos

Cliente:

```text
GET /api/v1/me/protocols
GET /api/v1/me/protocols/{protocolNumber}
```

Admin:

```text
GET  /api/v1/admin/protocols
GET  /api/v1/admin/protocols/{protocolNumber}
POST /api/v1/admin/protocols
```

---

# 39. Orçamentos

Cliente:

```text
POST /api/v1/quotes
GET  /api/v1/me/quotes
GET  /api/v1/me/quotes/{quoteNumber}
```

Ações:

```text
POST /api/v1/me/quotes/{quoteNumber}/acceptance
POST /api/v1/me/quotes/{quoteNumber}/rejection
```

Admin:

```text
GET   /api/v1/admin/quotes
GET   /api/v1/admin/quotes/{quoteNumber}
PATCH /api/v1/admin/quotes/{quoteNumber}
POST  /api/v1/admin/quotes/{quoteNumber}/send
```

---

# 40. Orçamento sem conta

Exemplo:

```text
POST /api/v1/public/quote-requests
```

Requer WhatsApp.

Fluxo de verificação pode usar:

```text
POST /api/v1/public/quote-requests/verification
POST /api/v1/public/quote-requests/verification/confirm
```

---

# 41. Ordens de Serviço

Cliente:

```text
GET /api/v1/me/work-orders
GET /api/v1/me/work-orders/{osNumber}
```

Admin:

```text
GET  /api/v1/admin/work-orders
GET  /api/v1/admin/work-orders/{osNumber}
POST /api/v1/admin/work-orders
PATCH /api/v1/admin/work-orders/{osNumber}
```

---

# 42. Agendamentos

Cliente:

```text
POST /api/v1/appointments
GET  /api/v1/me/appointments
GET  /api/v1/me/appointments/{appointmentNumber}
```

Cancelamento:

```text
POST /api/v1/me/appointments/{appointmentNumber}/cancellation
```

Reagendamento:

```text
POST /api/v1/me/appointments/{appointmentNumber}/reschedule-request
```

---

# 43. Agendamentos administrativos

```text
GET  /api/v1/admin/appointments
POST /api/v1/admin/appointments
GET  /api/v1/admin/appointments/{appointmentNumber}
PATCH /api/v1/admin/appointments/{appointmentNumber}
```

Ações:

```text
POST /api/v1/admin/appointments/{appointmentNumber}/confirm
POST /api/v1/admin/appointments/{appointmentNumber}/cancel
POST /api/v1/admin/appointments/{appointmentNumber}/complete
```

---

# 44. Disponibilidade

```text
GET /api/v1/availability
```

Exemplo:

```text
GET /api/v1/availability?date=2026-09-25
```

Admin:

```text
GET  /api/v1/admin/availability
POST /api/v1/admin/availability/blocks
```

---

# 45. Suspensão de agenda

```text
POST /api/v1/admin/availability/suspension
DELETE /api/v1/admin/availability/suspension
```

---

# 46. Pré-cadastro de cliente

Admin:

```text
POST /api/v1/admin/pre-registrations
```

Código:

```text
POST /api/v1/admin/pre-registrations/{id}/activation-code
```

Ativação pública:

```text
POST /api/v1/auth/activate-pre-registration
```

---

# 47. Chat

REST para histórico:

```text
GET /api/v1/me/conversations
GET /api/v1/me/conversations/{id}
GET /api/v1/me/conversations/{id}/messages
```

Tempo real:

```text
WebSocket / Socket.IO
```

---

# 48. Envio de mensagem

Pode ser via WebSocket.

Evento conceitual:

```text
chat.message.send
```

Payload:

```json
{
  "conversationId": "conv_123",
  "content": "Boa tarde.",
  "replyToMessageId": null
}
```

---

# 49. Eventos de chat

Conceitos:

```text
chat.message.sent
chat.message.delivered
chat.message.read
chat.protocol.closed
chat.protocol.created
chat.priority.changed
```

---

# 50. Encerrar atendimento

Admin:

```text
POST /api/v1/admin/conversations/{id}/close
```

Payload:

```json
{
  "reason": "ATENDIMENTO_CONCLUIDO",
  "internalNote": "Cliente orientado."
}
```

---

# 51. Prioridade

Admin:

```text
PATCH /api/v1/admin/conversations/{id}/priority
```

Payload:

```json
{
  "priority": "HIGH"
}
```

---

# 52. Etiquetas de chat

```text
POST   /api/v1/admin/conversations/{id}/labels
DELETE /api/v1/admin/conversations/{id}/labels/{labelId}
```

---

# 53. Pesquisa no chat

Admin:

```text
GET /api/v1/admin/conversations/search
```

Parâmetros possíveis:

```text
q
protocol
workOrder
customer
from
to
unread
priority
status
```

---

# 54. Perfil administrativo do cliente

```text
GET /api/v1/admin/customers/{id}
```

Sub-recursos:

```text
GET /api/v1/admin/customers/{id}/appointments
GET /api/v1/admin/customers/{id}/quotes
GET /api/v1/admin/customers/{id}/work-orders
GET /api/v1/admin/customers/{id}/protocols
GET /api/v1/admin/customers/{id}/conversations
GET /api/v1/admin/customers/{id}/timeline
```

---

# 55. Busca global administrativa

```text
GET /api/v1/admin/search
```

Exemplo:

```text
GET /api/v1/admin/search?q=OS-2026-000041
```

---

# 56. Notificações

Cliente:

```text
GET /api/v1/me/notifications
POST /api/v1/me/notifications/{id}/read
```

---

# 57. Privacidade

```text
GET /api/v1/me/privacy
PATCH /api/v1/me/privacy
```

---

# 58. Exportação de dados

```text
POST /api/v1/me/privacy/export
```

Pode retornar:

```text
202 Accepted
```

quando processamento for assíncrono.

---

# 59. Exclusão de conta

```text
POST /api/v1/me/privacy/deletion-request
```

Confirmação poderá exigir reautenticação.

---

# 60. Consentimentos

```text
GET   /api/v1/me/consents
PATCH /api/v1/me/consents
```

---

# 61. E-mail administrativo

Conceitualmente:

```text
POST /api/v1/admin/communications/email
```

---

# 62. WhatsApp administrativo

Conceitualmente:

```text
POST /api/v1/admin/communications/whatsapp
```

O payload pode incluir contexto de:

- protocolo;
- orçamento;
- OS;
- agendamento.

---

# 63. Auditoria

Admin:

```text
GET /api/v1/admin/audit-logs
GET /api/v1/admin/audit-logs/{id}
```

---

# 64. Health checks

```text
GET /health
GET /health/ready
GET /health/live
```

---

# 65. Webhooks

Base planejada:

```text
/api/v1/webhooks
```

Exemplos futuros:

```text
/api/v1/webhooks/whatsapp
/api/v1/webhooks/email
```

---

# 66. Segurança de webhooks

Webhooks devem validar:

- assinatura;
- origem;
- replay;
- idempotência.

---

# 67. CORS

CORS deverá permitir somente origens necessárias.

Exemplos:

```text
https://voltx.narrativas.site
https://painel-voltx.narrativas.site
```

Não usar `*` em produção para endpoints autenticados.

---

# 68. CSRF

Quando autenticação usar cookies de sessão, proteção CSRF deverá ser aplicada conforme o fluxo adotado.

---

# 69. Cookies

Quando utilizados:

```text
HttpOnly
Secure
SameSite adequado
```

---

# 70. Cache HTTP

Conteúdo público pode usar cache quando seguro.

Conteúdo privado não deve ser cacheado publicamente.

---

# 71. ETag e Last-Modified

Podem ser usados em conteúdo público para eficiência.

---

# 72. Soft delete e API

DELETE pode representar exclusão lógica.

A resposta não deve fingir que o histórico deixou de existir quando a regra exige retenção.

---

# 73. Auditoria de API

Ações administrativas sensíveis devem gerar auditoria.

Exemplos:

```text
PATCH /admin/services/{id}
POST /admin/appointments
POST /admin/conversations/{id}/close
```

---

# 74. Mensagens em PT-BR

Toda mensagem retornada destinada à interface deve estar em português do Brasil.

Exemplo correto:

```json
{
  "message": "Agendamento criado com sucesso."
}
```

Evitar:

```json
{
  "message": "Appointment created successfully."
}
```

---

# 75. Campos internos em inglês

Campos e enums internos podem usar inglês técnico.

Exemplo:

```text
status
createdAt
updatedAt
CONFIRMED
CANCELLED
```

A interface traduz.

---

# 76. Naming

JSON:

```text
camelCase
```

Exemplo:

```json
{
  "createdAt": "...",
  "customerId": "..."
}
```

Banco poderá usar padrão definido em `DATABASE.md`.

---

# 77. Null

Campos opcionais podem usar `null` quando semanticamente apropriado.

Evitar misturar:

```text
""
0
null
```

sem regra clara.

---

# 78. PATCH

Usar `PATCH` para alteração parcial.

Usar `PUT` somente se houver necessidade real de substituição completa.

---

# 79. DELETE

Usar apenas quando semântica de remoção fizer sentido.

Para ações de negócio como cancelamento, preferir sub-recurso/ação.

Exemplo:

```text
POST /appointments/{id}/cancellation
```

em vez de:

```text
DELETE /appointments/{id}
```

---

# 80. Ações de domínio

Ações que representam transição de estado podem usar sub-recursos explícitos.

Exemplos:

```text
/acceptance
/rejection
/cancellation
/confirmation
/completion
```

Isso melhora legibilidade.

---

# 81. Links HATEOAS mínimos

Recursos importantes devem expor pelo menos:

```text
self
```

e links contextuais úteis.

---

# 82. Segurança de links

HATEOAS não substitui autorização.

Mesmo que um link não seja exposto, o backend deve bloquear ação não autorizada.

---

# 83. Documentação futura

A API deverá ter documentação navegável.

Opções:

```text
OpenAPI
Swagger
```

A especificação gerada deve refletir o comportamento real.

---

# 84. Contratos

Mudança de contrato deve considerar compatibilidade.

Exemplos:

- remover campo;
- mudar tipo;
- renomear campo;
- mudar significado.

Mudanças incompatíveis exigem análise de versionamento.

---

# 85. Testes da API

Cobrir:

- autenticação;
- autorização;
- validação;
- HATEOAS;
- filtros;
- paginação;
- estados;
- erros;
- rate limiting;
- uploads.

---

# 86. Regra final

> A API não deve ser apenas um conjunto de endpoints.
>
> Ela deve representar os recursos e estados reais da VoltX de forma consistente, segura, versionada e documentada.
