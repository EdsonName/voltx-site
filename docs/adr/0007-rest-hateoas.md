# ADR 0007 — REST versionada com HATEOAS

**Status:** Aceito
**Data:** 23/09/2026

---

## 1. Contexto

A VoltX terá múltiplos consumidores da API:

- site público;
- área do cliente;
- painel administrativo;
- futuras aplicações;
- integrações;
- WebSocket complementar.

A API precisa possuir contratos claros, previsíveis, versionáveis e independentes da interface visual.

---

## 2. Decisão

A API principal da VoltX seguirá:

```text
REST
```

com versionamento por URL:

```text
/api/v1
```

e adoção de princípios HATEOAS quando trouxerem valor ao fluxo.

---

## 3. Exemplo de rota

```text
GET /api/v1/services
GET /api/v1/quotes/:id
POST /api/v1/appointments
```

---

## 4. Versionamento

Versão da API é diferente da versão do produto.

Exemplo:

```text
Produto: v0.8.0
API: /api/v1
```

Uma nova Release do produto não exige necessariamente `/api/v2`.

---

## 5. Quando criar nova versão da API

Nova versão maior da API deve ser considerada quando houver incompatibilidade relevante.

Exemplos:

- remoção de campo obrigatório;
- mudança incompatível de semântica;
- alteração estrutural que quebre consumidores;
- mudança de contrato sem compatibilidade.

---

## 6. Recursos

A API será orientada a recursos.

Exemplos:

```text
/users
/clients
/services
/quotes
/appointments
/work-orders
/conversations
/posts
/notifications
```

---

## 7. Métodos HTTP

Uso esperado:

```text
GET     → leitura
POST    → criação/ação
PUT     → substituição completa quando apropriado
PATCH   → atualização parcial
DELETE  → remoção quando semanticamente adequada
```

---

## 8. Status HTTP

Usar códigos coerentes.

Exemplos:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
429 Too Many Requests
500 Internal Server Error
```

O uso final deverá ser consistente com o framework e os contratos documentados.

---

## 9. Resposta de erro

Formato deve ser previsível.

Exemplo conceitual:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Revise os campos informados.",
  "fields": {
    "email": "Informe um e-mail válido."
  }
}
```

---

## 10. Mensagens

Mensagens visíveis ao usuário devem seguir:

```text
docs/UX_WRITING.md
```

---

## 11. DTOs

A API não deve expor entidades internas diretamente.

Entradas e saídas usam DTOs explícitos.

---

## 12. Segurança

Nunca retornar campos sensíveis como:

```text
password_hash
session_token
activation_code_hash
api_secret
private_key
```

---

## 13. HATEOAS

Quando útil, uma resposta poderá incluir links/ações disponíveis.

Exemplo:

```json
{
  "id": "uuid",
  "status": "SENT",
  "_links": {
    "self": {
      "href": "/api/v1/quotes/uuid"
    },
    "accept": {
      "href": "/api/v1/quotes/uuid/accept",
      "method": "POST"
    },
    "reject": {
      "href": "/api/v1/quotes/uuid/reject",
      "method": "POST"
    }
  }
}
```

---

## 14. Objetivo do HATEOAS

Permitir que a resposta informe ações válidas no estado atual.

Isso reduz a necessidade de o cliente duplicar parte da lógica de transição.

---

## 15. HATEOAS pragmático

A VoltX não precisa aplicar hipertexto de forma excessiva a toda resposta.

Usar principalmente onde houver ganho real:

- status;
- transições;
- próximos passos;
- paginação;
- recursos relacionados.

---

## 16. Autoridade

Os links fornecidos não substituem autorização.

O backend valida tudo novamente quando a ação for chamada.

---

## 17. Estado do recurso

Exemplo:

Orçamento `SENT` pode permitir:

```text
visualizar
aceitar
recusar
```

Orçamento `CANCELLED` não deve anunciar ação de aceite.

---

## 18. Paginação

Respostas de coleção devem utilizar paginação.

Modelo poderá usar:

```text
page/limit
```

ou:

```text
cursor
```

conforme módulo.

---

## 19. Links de paginação

Pode incluir:

```text
self
next
prev
first
last
```

quando aplicável.

---

## 20. Filtros

Parâmetros devem ser validados.

Exemplo:

```text
?status=CONFIRMED
```

---

## 21. Ordenação

Somente campos permitidos.

---

## 22. Busca

Consultas de busca devem possuir limites e proteção contra abuso.

---

## 23. IDs

UUID interno pode ser usado nas rotas autenticadas quando apropriado.

Identificadores públicos também podem existir:

```text
VX-2026-000184
OS-2026-000041
```

Conhecer o identificador não concede autorização.

---

## 24. Idempotência

Operações sensíveis podem aceitar chave idempotente.

Exemplos:

- envio de mensagem;
- criação de pagamento futuro;
- criação de operações suscetíveis a retry;
- webhooks.

---

## 25. POST de ações

Transições de domínio podem usar endpoints explícitos.

Exemplos:

```text
POST /quotes/:id/accept
POST /quotes/:id/reject
POST /appointments/:id/cancel
POST /conversations/:id/close
```

quando isso tornar a intenção mais clara que um `PATCH` genérico.

---

## 26. Não criar RPC disfarçado sem necessidade

Ações explícitas são permitidas para transições de domínio, mas a API continuará estruturada em torno de recursos.

---

## 27. WebSocket

WebSocket complementa REST.

REST continuará responsável por:

- carga inicial;
- histórico;
- listagens;
- operações administrativas;
- ressincronização.

---

## 28. Arquivos

Uploads podem usar endpoints dedicados ou fluxo de signed URL conforme módulo.

---

## 29. Autenticação

Sessão será validada pela API.

---

## 30. Autorização

Toda rota deve verificar:

```text
papel
permissão
propriedade do recurso
```

quando aplicável.

---

## 31. CORS

Somente origens autorizadas.

---

## 32. Cache

GET público poderá usar cache quando apropriado.

Nunca cachear indevidamente conteúdo privado.

---

## 33. ETag

Pode ser avaliado futuramente para cache e concorrência otimista.

---

## 34. Concorrência

Recursos sujeitos a edição concorrente podem usar:

- version field;
- ETag;
- optimistic locking;

conforme necessidade.

---

## 35. OpenAPI

A API deverá possuir documentação OpenAPI/Swagger quando implementada.

---

## 36. Swagger em produção

Se exposto, deverá ser controlado conforme política de segurança.

---

## 37. Contratos

Mudanças de contrato exigem:

- testes;
- documentação;
- atualização de consumidores;
- versionamento quando incompatíveis.

---

## 38. Alternativas consideradas

### GraphQL

Poderoso para consultas flexíveis, porém adicionaria complexidade desnecessária ao desenho atual.

### RPC puro

Simples para algumas ações, mas menos consistente com o modelo de recursos planejado.

### tRPC

Interessante em monorepos TypeScript, mas aumentaria acoplamento entre clientes e backend e não é a escolha atual para API pública/versionada.

### REST sem versionamento

Mais simples no início, porém torna evolução incompatível mais difícil de governar.

---

## 39. Consequências positivas

- contratos previsíveis;
- ampla compatibilidade;
- documentação fácil;
- bom suporte do NestJS;
- evolução controlada;
- independência de framework no consumidor;
- possibilidade de HATEOAS em fluxos de estado.

---

## 40. Consequências negativas

- pode exigir mais endpoints;
- HATEOAS adiciona payload e disciplina;
- versão de API precisa ser governada;
- DTOs exigem manutenção.

---

## 41. Regra contra overengineering

Não adicionar links HATEOAS decorativos sem utilidade.

A informação deve ajudar o consumidor a navegar ou entender ações disponíveis.

---

## 42. Relações

Consultar:

```text
docs/API.md
docs/ARQUITETURA.md
docs/VALIDACAO_DADOS.md
docs/AUTENTICACAO.md
docs/PERMISSOES.md
docs/SEGURANCA.md
```

---

## 43. Decisão final

> A API principal da VoltX utilizará REST versionada em `/api/v1`, com HATEOAS aplicado de forma pragmática a navegação, paginação e transições de estado.
