# DATABASE — VoltX

## 1. Finalidade

Este documento define o modelo conceitual e as regras de persistência da plataforma VoltX.

Ele deve ser consultado antes de:

- criar tabela;
- remover tabela;
- alterar coluna;
- alterar relacionamento;
- criar migration;
- criar índice;
- criar constraint;
- alterar regra de soft delete;
- alterar identificadores públicos;
- alterar histórico;
- alterar auditoria;
- alterar persistência de chat;
- alterar persistência de CMS;
- alterar persistência de consentimentos.

> Antes de alterar este documento, consulte `AGENTS.md`, `ARQUITETURA.md`, `REGRAS_NEGOCIO.md` e `API.md`.

---

# 2. Banco principal

Banco definido:

```text
PostgreSQL
```

ORM:

```text
Prisma
```

O PostgreSQL será **autohospedado pela VoltX** e executado em infraestrutura controlada pelo projeto, preferencialmente por Docker.

A aplicação não dependerá obrigatoriamente de serviços externos de banco de dados, como:

```text
Supabase
Neon
Railway
ou equivalentes
```

O Prisma **não é um serviço externo**. Ele será uma dependência local da API NestJS e será utilizado para:

- acesso tipado ao PostgreSQL;
- consultas;
- relacionamentos;
- transações;
- migrations;
- evolução controlada do schema.

Fluxo principal:

```text
API NestJS
    ↓
Prisma
    ↓
PostgreSQL autohospedado
```

O PostgreSQL será a fonte de verdade dos dados transacionais da plataforma.

## 2.1. Regra de independência de serviços externos

A infraestrutura essencial da VoltX deverá ser autohospedável.

As funções principais da plataforma não poderão depender obrigatoriamente de SaaS externo para continuar funcionando.

Isso inclui, no mínimo:

```text
PostgreSQL → autohospedado
Redis      → autohospedado
Arquivos   → MinIO ou storage equivalente sob controle da VoltX
```

Serviços externos poderão ser integrados quando trouxerem benefício real, mas deverão ser tratados como integrações substituíveis sempre que tecnicamente possível.

Exemplos:

```text
WhatsApp Business Platform
provedor de e-mail
serviços externos de CEP
```

A indisponibilidade de uma integração externa não deverá corromper nem comprometer os dados principais da VoltX.

---

# 3. Princípios

## 3.1. Persistência real

Dados importantes não podem depender apenas de:

- navegador;
- localStorage;
- memória do processo;
- filesystem efêmero de container.

## 3.2. Histórico preservado

Registros históricos relevantes devem ser preservados.

## 3.3. Relacionamentos explícitos

As relações entre:

- cliente;
- protocolo;
- orçamento;
- OS;
- agendamento;
- conversa;

devem ser persistidas no banco.

## 3.4. Soft delete

Quando houver valor histórico, preferir exclusão lógica.

## 3.5. Auditoria

Ações administrativas sensíveis devem possuir trilha de auditoria.

---

# 4. Convenção de nomes

Banco:

```text
snake_case
```

Exemplos:

```text
created_at
updated_at
customer_id
business_profile
work_orders
```

Código TypeScript poderá usar:

```text
camelCase
```

O ORM fará o mapeamento quando necessário.

---

# 5. Chaves primárias

Estratégia recomendada:

```text
UUID
```

Exemplo:

```text
id UUID PRIMARY KEY
```

Motivos:

- evita sequências previsíveis;
- facilita integração entre serviços;
- adequado para entidades distribuídas;
- não expõe contagem interna.

Identificadores públicos de negócio continuarão separados.

---

# 6. Identificadores públicos

Exemplos:

```text
protocol_number
quote_number
work_order_number
appointment_number
```

Formato:

```text
VX-2026-000001
ORC-2026-000001
OS-2026-000001
AG-2026-000001
```

Esses identificadores devem possuir:

```text
UNIQUE
NOT NULL
```

---

# 7. Datas padrão

Tabelas principais devem possuir, quando aplicável:

```text
created_at
updated_at
deleted_at
```

Tipo recomendado:

```text
TIMESTAMPTZ
```

---

# 8. Exclusão lógica

Quando aplicável:

```text
deleted_at TIMESTAMPTZ NULL
```

Registro ativo:

```text
deleted_at IS NULL
```

Não usar soft delete cegamente em todas as tabelas.

---

# 9. Usuários

Tabela:

```text
users
```

Responsabilidade:

- identidade da conta;
- autenticação;
- status;
- segurança.

Campos conceituais:

```text
id
email
phone
password_hash
status
email_verified_at
phone_verified_at
last_login_at
created_at
updated_at
deleted_at
```

Constraints:

```text
email UNIQUE
phone UNIQUE quando aplicável
```

---

# 10. Perfis

Tabela:

```text
user_profiles
```

Campos:

```text
id
user_id
display_name
legal_name
gender_identity
avatar_media_id
bio
created_at
updated_at
```

Relacionamento:

```text
users 1 ── 1 user_profiles
```

---

# 11. Preferências do usuário

Tabela:

```text
user_preferences
```

Campos:

```text
id
user_id
theme
color_mode
animation_level
show_last_seen
marketing_email
marketing_whatsapp
created_at
updated_at
```

---

# 12. Endereços

Tabela:

```text
addresses
```

Campos:

```text
id
user_id
label
postal_code
street
number
complement
district
city
state
reference
is_primary
service_area_status
created_at
updated_at
deleted_at
```

Valores possíveis para área:

```text
STANDARD
OUTSIDE_STANDARD_AREA
```

---

# 13. Perfis administrativos

Tabela:

```text
admin_profiles
```

Campos:

```text
id
user_id
display_name
avatar_media_id
created_at
updated_at
```

---

# 14. Papéis

Tabela:

```text
roles
```

Exemplos:

```text
SUPER_ADMIN
ADMIN
ATENDENTE
EDITOR
CLIENTE
```

---

# 15. Permissões

Tabela:

```text
permissions
```

Exemplos:

```text
customers.read
customers.write
appointments.read
appointments.write
posts.publish
chat.manage
```

---

# 16. Usuários e papéis

Tabela:

```text
user_roles
```

Campos:

```text
user_id
role_id
```

Constraint:

```text
UNIQUE(user_id, role_id)
```

---

# 17. Papéis e permissões

Tabela:

```text
role_permissions
```

Campos:

```text
role_id
permission_id
```

---

# 18. Sessões

Tabela:

```text
user_sessions
```

Campos:

```text
id
user_id
session_token_hash
ip_address
user_agent
created_at
last_seen_at
expires_at
revoked_at
```

Nunca armazenar token de sessão em texto puro quando houver alternativa segura.

---

# 19. Recuperação de senha

Tabela:

```text
password_reset_tokens
```

Campos:

```text
id
user_id
token_hash
expires_at
used_at
created_at
```

---

# 20. 2FA administrativo

Tabela:

```text
two_factor_methods
```

Campos conceituais:

```text
id
user_id
method
secret_encrypted
enabled_at
disabled_at
created_at
```

---

# 21. Perfil do negócio

Tabela:

```text
business_profile
```

Pode existir apenas um registro ativo inicialmente.

Campos:

```text
id
business_name
professional_name
phone
whatsapp
email
address_text
service_area_description
about_text
profile_media_id
logo_media_id
show_academic_registration
created_at
updated_at
```

---

# 22. Formação acadêmica

Tabela:

```text
academic_profiles
```

Campos:

```text
id
business_profile_id
institution
course
registration_number
status
expected_completion_year
is_primary
is_public
created_at
updated_at
```

Relacionamento:

```text
business_profile 1 ── N academic_profiles
```

---

# 23. Configurações gerais

Tabela:

```text
site_settings
```

Pode armazenar configurações que não pertencem diretamente ao perfil do negócio.

Exemplos:

```text
id
key
value_json
created_at
updated_at
```

Usar com moderação.

Configuração estrutural importante não deve virar JSON genérico sem necessidade.

---

# 24. Categorias de serviço

Tabela:

```text
service_categories
```

Campos:

```text
id
name
slug
description
is_active
created_at
updated_at
deleted_at
```

---

# 25. Serviços

Tabela:

```text
services
```

Campos:

```text
id
category_id
name
slug
summary
description
cover_media_id
is_active
is_featured
allows_quote
allows_scheduling
service_area_description
price_from
price_to
seo_title
seo_description
created_at
updated_at
deleted_at
```

Constraints:

```text
slug UNIQUE
```

---

# 26. Galeria de serviço

Tabela:

```text
service_media
```

Campos:

```text
id
service_id
media_id
position
caption
created_at
```

---

# 27. Protocolos

Tabela:

```text
protocols
```

Campos:

```text
id
protocol_number
customer_id
type
status
subject
opened_at
closed_at
closed_by
close_reason
created_at
updated_at
```

Constraint:

```text
protocol_number UNIQUE
```

---

# 28. Contador de protocolos

Tabela conceitual:

```text
document_sequences
```

Campos:

```text
id
document_type
year
last_number
updated_at
```

Exemplo:

```text
PROTOCOL
QUOTE
WORK_ORDER
APPOINTMENT
```

Constraint:

```text
UNIQUE(document_type, year)
```

A geração deverá ser transacional para evitar duplicidade.

---

# 29. Orçamentos

Tabela:

```text
quotes
```

Campos:

```text
id
quote_number
customer_id
protocol_id
service_id
status
subtotal
discount
total
valid_until
sent_at
viewed_at
accepted_at
rejected_at
cancelled_at
created_at
updated_at
deleted_at
```

Constraint:

```text
quote_number UNIQUE
```

---

# 30. Itens do orçamento

Tabela:

```text
quote_items
```

Campos:

```text
id
quote_id
type
description
quantity
unit
unit_price
total
position
created_at
updated_at
```

Tipos possíveis:

```text
LABOR
MATERIAL
TRAVEL
OTHER
```

---

# 31. Histórico do orçamento

Tabela:

```text
quote_status_history
```

Campos:

```text
id
quote_id
from_status
to_status
changed_by
reason
created_at
```

---

# 32. Solicitações públicas de orçamento

Tabela:

```text
public_quote_requests
```

Campos:

```text
id
protocol_id
name
whatsapp
email
service_id
postal_code
description
service_area_status
verification_status
created_at
updated_at
```

Dados deverão ser minimizados e protegidos.

---

# 33. Verificação de contato

Tabela:

```text
contact_verifications
```

Campos:

```text
id
channel
destination
code_hash
attempts
max_attempts
expires_at
verified_at
revoked_at
created_at
```

---

# 34. Ordens de Serviço

Tabela:

```text
work_orders
```

Campos:

```text
id
work_order_number
customer_id
protocol_id
quote_id
service_id
status
description
started_at
completed_at
cancelled_at
created_at
updated_at
deleted_at
```

Constraint:

```text
work_order_number UNIQUE
```

---

# 35. Histórico de OS

Tabela:

```text
work_order_status_history
```

Campos:

```text
id
work_order_id
from_status
to_status
changed_by
reason
created_at
```

---

# 36. Agendamentos

Tabela:

```text
appointments
```

Campos:

```text
id
appointment_number
customer_id
protocol_id
work_order_id
service_id
address_id
status
scheduled_start
scheduled_end
created_by
origin
cancelled_at
cancelled_by
cancellation_reason
created_at
updated_at
deleted_at
```

Constraint:

```text
appointment_number UNIQUE
```

---

# 37. Origem do agendamento

Campo:

```text
origin
```

Valores previstos:

```text
CUSTOMER
ADMIN
PRE_REGISTRATION
```

---

# 38. Histórico do agendamento

Tabela:

```text
appointment_status_history
```

Campos:

```text
id
appointment_id
from_status
to_status
changed_by
reason
created_at
```

---

# 39. Eventos do agendamento

Tabela:

```text
appointment_events
```

Pode registrar:

- criação;
- confirmação;
- reagendamento;
- cancelamento;
- deslocamento;
- início;
- conclusão.

Campos:

```text
id
appointment_id
event_type
actor_id
metadata_json
created_at
```

---

# 40. Bloqueios de agenda

Tabela:

```text
schedule_blocks
```

Campos:

```text
id
starts_at
ends_at
reason
created_by
created_at
updated_at
```

---

# 41. Suspensão de novos agendamentos

Tabela:

```text
scheduling_suspensions
```

Campos:

```text
id
starts_at
ends_at
public_reason
internal_reason
allow_quotes
created_by
created_at
updated_at
```

---

# 42. Pré-cadastros

Tabela:

```text
pre_registrations
```

Campos:

```text
id
name
phone
email
status
linked_user_id
created_by
created_at
updated_at
```

---

# 43. Códigos de ativação

Tabela:

```text
activation_codes
```

Campos:

```text
id
pre_registration_id
code_hash
attempts
max_attempts
expires_at
used_at
revoked_at
created_at
```

Nunca armazenar código em texto puro.

---

# 44. Conversas

Tabela:

```text
conversations
```

Campos:

```text
id
customer_id
status
priority
last_message_at
pinned_at
created_at
updated_at
```

---

# 45. Protocolos de conversa

Tabela:

```text
conversation_protocols
```

Permite múltiplos atendimentos dentro da mesma conversa histórica.

Campos:

```text
id
conversation_id
protocol_id
opened_at
closed_at
closed_by
close_reason
created_at
```

Relacionamento:

```text
conversations 1 ── N conversation_protocols
```

---

# 46. Mensagens

Tabela:

```text
messages
```

Campos:

```text
id
conversation_id
conversation_protocol_id
sender_user_id
type
content
reply_to_message_id
sent_at
delivered_at
read_at
edited_at
deleted_at
created_at
```

Tipos:

```text
TEXT
IMAGE
VIDEO
DOCUMENT
SYSTEM
```

---

# 47. Citação de mensagens

Campo:

```text
reply_to_message_id
```

Relacionamento auto-referenciado:

```text
messages N ── 1 messages
```

---

# 48. Anexos de mensagem

Tabela:

```text
message_attachments
```

Campos:

```text
id
message_id
media_id
created_at
```

---

# 49. Etiquetas de chat

Tabela:

```text
conversation_labels
```

Campos:

```text
id
name
slug
description
created_at
updated_at
```

Tabela de vínculo:

```text
conversation_label_links
```

Campos:

```text
conversation_id
label_id
created_at
```

---

# 50. Eventos de chat

Tabela:

```text
conversation_events
```

Campos:

```text
id
conversation_id
conversation_protocol_id
event_type
actor_id
metadata_json
created_at
```

Exemplos:

```text
PROTOCOL_OPENED
PROTOCOL_CLOSED
PRIORITY_CHANGED
LABEL_ADDED
PINNED
UNPINNED
```

---

# 51. Mídias

Tabela:

```text
media
```

Campos:

```text
id
owner_user_id
type
storage_provider
storage_key
mime_type
file_size
width
height
duration_seconds
original_name
status
created_at
deleted_at
```

---

# 52. Variantes de imagem

Tabela:

```text
media_variants
```

Campos:

```text
id
media_id
variant
storage_key
width
height
file_size
created_at
```

Exemplos:

```text
THUMBNAIL
SMALL
MEDIUM
LARGE
```

---

# 53. Posts

Tabela:

```text
posts
```

Campos:

```text
id
author_id
category_id
title
slug
summary
content_json
content_html
cover_media_id
status
seo_title
seo_description
published_at
scheduled_at
suspended_at
archived_at
created_at
updated_at
deleted_at
```

Constraint:

```text
slug UNIQUE
```

---

# 54. Categorias de post

Tabela:

```text
post_categories
```

Campos:

```text
id
name
slug
description
created_at
updated_at
deleted_at
```

---

# 55. Revisões de post

Tabela:

```text
post_revisions
```

Campos:

```text
id
post_id
editor_user_id
revision_number
content_json
content_html
seo_json
editor_state_json
created_at
```

Constraint:

```text
UNIQUE(post_id, revision_number)
```

---

# 56. Estado do editor

O campo:

```text
editor_state_json
```

pode guardar:

- cursor;
- bloco selecionado;
- modo;
- scroll;
- painel aberto;
- seleção de imagem.

Não armazenar lógica de negócio crítica apenas em JSON.

---

# 57. Hashtags

Tabela:

```text
tags
```

Campos:

```text
id
name
slug
usage_count
created_at
updated_at
deleted_at
```

Constraint:

```text
slug UNIQUE
```

---

# 58. Posts e hashtags

Tabela:

```text
post_tags
```

Campos:

```text
post_id
tag_id
created_at
```

Constraint:

```text
UNIQUE(post_id, tag_id)
```

---

# 59. Serviços e hashtags

Estrutura preparada para:

```text
service_tags
```

Campos:

```text
service_id
tag_id
created_at
```

---

# 60. Comentários

Tabela:

```text
comments
```

Campos:

```text
id
post_id
user_id
parent_comment_id
content
status
edited_at
deleted_at
created_at
updated_at
```

Estados possíveis:

```text
VISIBLE
HIDDEN
PENDING
REMOVED
```

---

# 61. Curtidas em posts

Tabela:

```text
post_likes
```

Campos:

```text
post_id
user_id
created_at
```

Constraint:

```text
UNIQUE(post_id, user_id)
```

---

# 62. Curtidas em comentários

Opcional:

```text
comment_likes
```

Campos:

```text
comment_id
user_id
created_at
```

---

# 63. Denúncias

Tabela:

```text
reports
```

Campos:

```text
id
reporter_user_id
target_type
target_id
reason
description
status
reviewed_by
reviewed_at
created_at
```

---

# 64. Notificações

Tabela:

```text
notifications
```

Campos:

```text
id
user_id
type
title
message
data_json
read_at
created_at
```

---

# 65. Preferências de notificação

Tabela:

```text
notification_preferences
```

Campos:

```text
id
user_id
event_type
in_app_enabled
email_enabled
whatsapp_enabled
created_at
updated_at
```

---

# 66. Consentimentos

Tabela:

```text
consents
```

Campos:

```text
id
user_id
consent_type
version
granted
granted_at
revoked_at
source
created_at
```

Tipos:

```text
TERMS
PRIVACY
MARKETING_EMAIL
MARKETING_WHATSAPP
COOKIES
```

---

# 67. Histórico de termos

Tabela:

```text
legal_documents
```

Campos:

```text
id
type
version
content_hash
published_at
created_at
```

---

# 68. Aceites de documentos

Tabela:

```text
legal_acceptances
```

Campos:

```text
id
user_id
legal_document_id
accepted_at
ip_address
user_agent
```

---

# 69. Solicitações de exportação

Tabela:

```text
data_export_requests
```

Campos:

```text
id
user_id
status
requested_at
completed_at
expires_at
media_id
```

---

# 70. Solicitações de exclusão

Tabela:

```text
account_deletion_requests
```

Campos:

```text
id
user_id
status
requested_at
confirmed_at
scheduled_for
completed_at
reason
created_at
updated_at
```

---

# 71. Retenção de dados

Tabela conceitual:

```text
data_retention_records
```

Pode registrar casos em que parte dos dados precisa permanecer retida.

Campos:

```text
id
user_id
resource_type
resource_id
reason
retain_until
created_at
```

---

# 72. Comunicações por e-mail

Tabela:

```text
email_messages
```

Campos:

```text
id
user_id
template
subject
destination
status
provider_message_id
sent_at
delivered_at
failed_at
created_at
```

---

# 73. Comunicações por WhatsApp

Tabela:

```text
whatsapp_messages
```

Campos:

```text
id
user_id
protocol_id
quote_id
work_order_id
appointment_id
direction
template
content
provider_message_id
status
sent_at
delivered_at
read_at
failed_at
created_at
```

---

# 74. Auditoria

Tabela:

```text
audit_logs
```

Campos:

```text
id
actor_user_id
action
resource_type
resource_id
old_values_json
new_values_json
ip_address
user_agent
created_at
```

Auditoria não deve ser alterada pelo usuário comum.

---

# 75. Logs de segurança

Tabela conceitual:

```text
security_events
```

Campos:

```text
id
user_id
event_type
severity
ip_address
user_agent
metadata_json
created_at
```

Exemplos:

```text
LOGIN_FAILED
LOGIN_SUCCESS
PASSWORD_CHANGED
SESSION_REVOKED
TWO_FACTOR_FAILED
RATE_LIMIT_TRIGGERED
```

---

# 76. Avaliações pós-serviço

Tabela:

```text
service_reviews
```

Campos:

```text
id
customer_id
work_order_id
rating
comment
allow_public_testimonial
status
created_at
updated_at
```

Constraint recomendada:

```text
UNIQUE(customer_id, work_order_id)
```

---

# 77. Depoimentos públicos

Não é necessário duplicar dados em tabela separada inicialmente.

Pode usar:

```text
service_reviews
```

com:

```text
allow_public_testimonial = true
status = APPROVED
```

---

# 78. Timeline unificada

A timeline administrativa pode ser construída a partir das entidades de origem.

Evitar duplicar todo histórico em uma única tabela sem necessidade.

Opcionalmente:

```text
customer_timeline_events
```

pode ser usado se a performance exigir.

---

# 79. Relação principal entre entidades

Visão simplificada:

```text
users
  │
  ├── user_profiles
  ├── user_preferences
  ├── addresses
  ├── consents
  ├── notifications
  │
  └── protocols
        │
        ├── quotes
        │     │
        │     └── quote_items
        │
        ├── work_orders
        │     │
        │     └── appointments
        │
        └── conversation_protocols
              │
              └── messages
```

---

# 80. Fluxo de atendimento

```text
customer
   ↓
protocol
   ↓
quote
   ↓
work_order
   ↓
appointment
```

Nem todo protocolo precisa gerar orçamento.

Nem todo orçamento precisa gerar OS.

Nem toda OS precisa possuir exatamente um agendamento.

---

# 81. Conversa e protocolo

```text
customer
  │
  └── conversation
        │
        ├── conversation_protocol A
        │       └── messages
        │
        └── conversation_protocol B
                └── messages
```

A conversa é o histórico geral.

O protocolo delimita um atendimento.

---

# 82. Integridade referencial

Sempre que possível:

```text
FOREIGN KEY
```

deve ser utilizada.

Evitar referências soltas por texto.

---

# 83. Cascade delete

Usar com cuidado.

Exemplo:

Apagar fisicamente um usuário não deve automaticamente apagar:

- OS;
- protocolos;
- auditoria;
- histórico legal.

Cascades devem ser analisados por relação.

---

# 84. Índices essenciais

Criar índices para campos de busca frequente.

Exemplos:

```text
users.email
users.phone
protocols.protocol_number
quotes.quote_number
work_orders.work_order_number
appointments.appointment_number
posts.slug
services.slug
tags.slug
messages.conversation_id
messages.sent_at
audit_logs.created_at
```

---

# 85. Índices compostos

Exemplos úteis:

```text
appointments(status, scheduled_start)
messages(conversation_id, sent_at)
notifications(user_id, read_at)
quotes(customer_id, status)
protocols(customer_id, status)
```

---

# 86. Busca textual

PostgreSQL Full Text Search poderá ser avaliado para:

- blog;
- mensagens;
- busca administrativa.

Não adicionar solução externa de busca antes de haver necessidade real.

---

# 87. Índices para chat

Chat tende a crescer rapidamente.

Índices recomendados:

```text
messages(conversation_id, sent_at DESC)
conversation_protocols(conversation_id, opened_at DESC)
conversations(priority, last_message_at DESC)
```

---

# 88. Índices para agenda

Recomendado:

```text
appointments(scheduled_start, scheduled_end)
appointments(status, scheduled_start)
schedule_blocks(starts_at, ends_at)
```

---

# 89. Conflitos de agenda

A aplicação deve validar conflitos transacionalmente.

Quando possível, estudar uso de:

```text
EXCLUDE constraints
```

com ranges do PostgreSQL para evitar sobreposição.

A decisão final deverá ser registrada em ADR se adotada.

---

# 90. Transações

Operações compostas devem usar transação.

Exemplo:

```text
aceitar orçamento
↓
alterar status
↓
registrar histórico
↓
criar evento
↓
criar OS quando aplicável
```

Tudo deve concluir ou falhar de forma consistente.

---

# 91. Geração de números públicos

A geração de:

```text
VX
ORC
OS
AG
```

deve ser transacional.

Nunca usar:

```text
SELECT MAX(...) + 1
```

sem mecanismo seguro de concorrência.

---

# 92. Valores monetários

Nunca armazenar dinheiro em `float`.

Preferir:

```text
NUMERIC(12,2)
```

ou precisão adequada.

---

# 93. Telefones

Armazenamento normalizado:

```text
E.164
```

Exemplo:

```text
+5561999010739
```

A formatação visual ocorre na interface.

---

# 94. CPF

Quando necessário:

- normalizar para dígitos;
- validar checksum;
- proteger acesso;
- não expor publicamente.

Indexação deve ser avaliada com cuidado por privacidade.

---

# 95. CEP

Armazenar normalizado:

```text
72860000
```

Interface pode exibir:

```text
72.860-000
```

---

# 96. E-mail

Normalizar conforme estratégia definida.

A comparação deve evitar duplicidades triviais.

---

# 97. JSONB

PostgreSQL permite:

```text
JSONB
```

Usar para:

- metadados;
- estado do editor;
- dados flexíveis de evento;
- snapshots de auditoria.

Não usar JSONB para evitar modelar relações importantes.

---

# 98. Conteúdo do CMS

Estratégia:

```text
content_json
+
content_html
```

`content_json` preserva estrutura do editor.

`content_html` oferece representação renderizável sanitizada.

---

# 99. Revisões

Cada versão relevante de uma postagem pode gerar registro em:

```text
post_revisions
```

Não sobrescrever silenciosamente todo histórico editorial.

---

# 100. Mídia e banco

Arquivos grandes não serão armazenados diretamente no PostgreSQL como padrão.

Banco guarda:

- metadados;
- storage_key;
- tipo;
- tamanho;
- dimensões;
- proprietário.

Arquivo fica no Object Storage.

---

# 101. Storage key

Exemplo:

```text
avatars/2026/09/uuid.webp
posts/2026/09/uuid.webp
chat/2026/09/uuid.pdf
```

Nunca confiar no nome original como nome físico final.

---

# 102. Conteúdo apagado

Quando mídia for excluída logicamente:

```text
deleted_at
```

A limpeza física do storage poderá ser assíncrona conforme política de retenção.

---

# 103. Migrations

Toda alteração estrutural deve usar migration.

Nunca alterar produção manualmente sem registro reproduzível.

---

# 104. Regras de migration

Migration deve:

- ter nome claro;
- ser versionada no Git;
- ser revisada;
- ser testada localmente;
- preservar dados quando aplicável;
- possuir estratégia de rollback ou recuperação quando necessário.

---

# 105. Seeds

Seeds de produção não devem conter dados fictícios indevidos.

Seeds podem ser usados para:

- roles;
- permissions;
- configurações estruturais;
- dados técnicos mínimos.

---

# 106. Dados de teste

Testes automatizados devem usar ambiente isolado.

Nunca executar testes destrutivos contra banco de produção.

---

# 107. Backups

Banco deve possuir:

```text
backup automático
retenção
cópia externa
teste de restauração
```

Backup é requisito operacional, não opcional.

---

# 108. Restore

A estratégia de backup só é considerada válida se a restauração for testada periodicamente.

---

# 109. Auditoria e LGPD

Audit logs podem conter dados sensíveis.

Devem ser protegidos por permissão.

Não registrar:

- senha;
- token;
- segredo;
- código de 2FA em texto puro.

---

# 110. Logs de alterações

Para campos sensíveis, snapshots podem precisar de mascaramento.

Exemplo:

```text
phone:
antes: ******0739
depois: ******4512
```

quando apropriado.

---

# 111. Retenção

Políticas definitivas serão descritas em:

```text
RETENCAO_DADOS.md
```

O banco deve permitir implementar essas políticas.

---

# 112. Exclusão de conta

Fluxo conceitual:

```text
pedido de exclusão
↓
validação
↓
período/condições aplicáveis
↓
anonimização/exclusão
↓
preservação legal quando necessária
↓
auditoria
```

---

# 113. Anonimização

Quando aplicável, dados históricos podem ser preservados sem identificar diretamente o cliente.

Exemplo:

```text
nome → Cliente anonimizado
e-mail → removido
telefone → removido
```

Registros financeiros/operacionais sujeitos a retenção devem seguir política específica.

---

# 114. Integridade do histórico

Nunca alterar retroativamente número de:

- protocolo;
- orçamento;
- OS;
- agendamento.

---

# 115. Status

Enums de domínio devem ser centralizados.

Exemplo:

```text
AppointmentStatus
QuoteStatus
WorkOrderStatus
ProtocolStatus
PostStatus
```

Evitar strings livres para estados principais.

---

# 116. Tradução de enums

Banco pode armazenar:

```text
CONFIRMED
```

Interface mostra:

```text
Confirmado
```

---

# 117. Performance

Monitorar:

- consultas lentas;
- N+1;
- índices ausentes;
- tabelas grandes;
- crescimento de mensagens;
- crescimento de auditoria.

---

# 118. Particionamento

Não usar particionamento prematuramente.

Pode ser considerado futuramente para:

- messages;
- audit_logs;
- security_events;

se volume justificar.

---

# 119. Cache

Redis pode acelerar:

- sessão;
- presença de chat;
- filas;
- locks;
- cache temporário.

Redis não substitui PostgreSQL para histórico permanente.

---

# 120. Presença online

Status de presença pode ficar temporariamente no Redis.

Exemplo:

```text
user_online
last_seen
socket_id
```

Persistir no PostgreSQL somente dados necessários ao histórico.

---

# 121. Filas

Eventos assíncronos poderão usar Redis/queue.

Exemplos:

- envio de e-mail;
- envio de WhatsApp;
- processamento de imagem;
- geração de exportação;
- limpeza de mídia;
- notificações.

---

# 122. Consistência eventual

Ações secundárias podem ser assíncronas.

Exemplo:

```text
agendamento confirmado
```

pode persistir imediatamente.

Depois, em background:

```text
e-mail
WhatsApp
notificação
```

Falha na notificação não deve desfazer necessariamente o agendamento.

---

# 123. Outbox pattern

Pode ser adotado futuramente para eventos críticos.

A decisão deverá ser registrada em ADR.

---

# 124. Segurança de conexão

Produção:

```text
TLS
```

Aplicação nunca deve expor PostgreSQL diretamente à internet pública.

---

# 125. Usuário do banco

Aplicação deve possuir usuário próprio com privilégios mínimos necessários.

Não usar superuser PostgreSQL na aplicação.

---

# 126. Segredos

Credenciais do banco ficam em:

```text
variáveis de ambiente
secret manager
```

Nunca no Git.

---

# 127. Ambientes

Bancos separados:

```text
development
test
production
```

Não compartilhar banco de produção com desenvolvimento.

---

# 128. Prisma

Prisma deverá refletir as constraints reais do banco.

O schema ORM não deve ser tratado como desculpa para ignorar:

- índices;
- constraints;
- transações;
- integridade referencial.

---

# 129. Relação com API

Toda entidade pública da API deve mapear conscientemente para o modelo de dados.

Nunca expor tabela inteira automaticamente.

A API usa DTOs próprios.

---

# 130. Dados privados

Campos privados nunca devem ser retornados apenas porque existem no modelo.

Exemplos:

```text
password_hash
session_token_hash
code_hash
two_factor_secret
```

Esses campos jamais saem pela API.

---

# 131. Views

Views PostgreSQL podem ser usadas quando trouxerem benefício claro.

Exemplos futuros:

```text
customer_service_summary
admin_chat_summary
```

Não criar views apenas por estética.

---

# 132. Materialized views

Somente se houver necessidade real de performance analítica.

---

# 133. Constraints de unicidade

Exemplos:

```text
users.email
services.slug
posts.slug
tags.slug
protocols.protocol_number
quotes.quote_number
work_orders.work_order_number
appointments.appointment_number
```

---

# 134. Integridade de tags

Máximo de 8 hashtags por post é regra de negócio.

A aplicação deve validar.

Uma constraint adicional no banco poderá ser estudada, mas não é obrigatória inicialmente.

---

# 135. Comentários

Exclusão pelo usuário poderá manter registro lógico.

O conteúdo pode ser substituído visualmente por:

```text
Comentário removido
```

quando o histórico da thread precisar ser preservado.

---

# 136. Mensagens de chat

Mensagens de atendimento não devem ser fisicamente apagadas por encerramento de protocolo.

---

# 137. Estado lido

O campo simples:

```text
read_at
```

é suficiente enquanto existir apenas um destinatário administrativo efetivo.

Se múltiplos atendentes exigirem leitura individual, criar:

```text
message_reads
```

no futuro.

---

# 138. Multiatendente futuro

A modelagem deve permitir futura tabela:

```text
conversation_assignments
```

Campos possíveis:

```text
conversation_id
admin_user_id
assigned_at
unassigned_at
```

Não é obrigatória na primeira versão.

---

# 139. Histórico de prioridade

Mudanças relevantes podem ser registradas em:

```text
conversation_events
```

Não é necessário criar tabela separada.

---

# 140. Arquivos do atendimento

Fotos de antes/depois podem ser ligadas à OS.

Tabela:

```text
work_order_media
```

Campos:

```text
id
work_order_id
media_id
type
caption
created_at
```

Tipos:

```text
BEFORE
AFTER
DOCUMENT
OTHER
```

---

# 141. Arquivos do orçamento

Tabela:

```text
quote_media
```

Campos:

```text
id
quote_id
media_id
created_at
```

---

# 142. Arquivos do agendamento

Tabela:

```text
appointment_media
```

Campos:

```text
id
appointment_id
media_id
created_at
```

---

# 143. Segurança de anexos

Metadados devem permitir validar:

- MIME;
- tamanho;
- extensão original;
- hash;
- status de processamento.

Campo opcional:

```text
content_hash
```

---

# 144. Deduplicação de mídia

Pode ser avaliada futuramente por hash.

Não implementar antes de haver necessidade.

---

# 145. Status de processamento de mídia

Exemplos:

```text
UPLOADING
PROCESSING
READY
FAILED
QUARANTINED
```

---

# 146. Conteúdo temporário

Uploads ainda não vinculados podem possuir:

```text
expires_at
```

para limpeza posterior.

---

# 147. Configuração de agenda

Tabela:

```text
scheduling_settings
```

Campos:

```text
id
default_duration_minutes
travel_buffer_minutes
timezone
accept_new_appointments
updated_at
```

---

# 148. Horário de atendimento

Tabela:

```text
business_hours
```

Campos:

```text
id
weekday
start_time
end_time
is_active
created_at
updated_at
```

---

# 149. Exceções de horário

Tabela:

```text
business_hour_exceptions
```

Campos:

```text
id
date
start_time
end_time
is_closed
reason
created_at
updated_at
```

Pode representar:

- feriado;
- horário especial;
- indisponibilidade.

---

# 150. Timezone

Timezone deve ser explícita.

Padrão operacional atual:

```text
America/Sao_Paulo
```

Persistir horários com timezone corretamente.

---

# 151. Relatórios

Relatórios administrativos devem preferir consultas sobre dados existentes.

Evitar duplicar dados apenas para mostrar dashboard.

---

# 152. Estatísticas

Campos derivados como:

```text
total_comments
total_likes
```

podem ser calculados ou cacheados.

Não adicionar contadores persistentes sem necessidade de performance.

---

# 153. Contadores

Se contadores forem persistidos, devem possuir estratégia de consistência.

---

# 154. Busca global

Busca por:

```text
protocolo
OS
orçamento
agendamento
nome
telefone
CPF
e-mail
```

deve usar índices adequados.

---

# 155. Dados sensíveis

CPF, telefone, e-mail e endereço exigem controle de acesso.

Não expor em logs públicos.

---

# 156. Criptografia de campo

Pode ser usada em dados altamente sensíveis conforme necessidade.

A decisão deve considerar impacto em busca e indexação.

Registrar em ADR quando adotada.

---

# 157. Auditoria de alteração de dados profissionais

Mudanças em:

```text
business_profile
academic_profiles
```

devem ser auditadas.

---

# 158. Auditoria editorial

Publicação, suspensão, arquivamento e restauração de revisão devem ser auditados.

---

# 159. Auditoria de permissões

Mudanças em roles e permissions devem ser auditadas obrigatoriamente.

---

# 160. Regra de migrations em produção

Fluxo:

```text
backup
↓
migration validada
↓
aplicação controlada
↓
health check
↓
verificação
```

Mudanças destrutivas exigem cuidado adicional.

---

# 161. Zero-downtime

Quando possível, mudanças de schema em produção devem seguir estratégia compatível com deploy sem indisponibilidade.

Exemplo:

```text
adicionar coluna
↓
deploy compatível
↓
migrar dados
↓
remover legado em versão posterior
```

---

# 162. Documentação de migration

Mudanças relevantes de banco devem aparecer em:

```text
CHANGELOG.md
```

e, quando necessário:

```text
docs/DATABASE.md
```

---

# 163. ERD

Um diagrama ER oficial poderá ser criado futuramente a partir do schema Prisma.

Ele deverá refletir o modelo real e não substituir este documento.

---

# 164. Estado atual

Status:

```text
MODELO PLANEJADO
```

Nenhuma tabela descrita aqui deve ser considerada criada apenas por existir neste documento.

A implementação ocorrerá conforme o `ROADMAP.md`.

---

# 165. Regra de alteração

Antes de alterar o modelo:

```text
necessidade
↓
regra de negócio
↓
impacto na API
↓
impacto no banco
↓
migration
↓
testes
↓
documentação
```

---

# 166. Regra final

> O banco deve preservar a verdade operacional da VoltX.
>
> Dados históricos importantes não devem desaparecer por conveniência de interface.
>
> Integridade, rastreabilidade, segurança e capacidade de recuperação têm prioridade sobre atalhos de implementação.
