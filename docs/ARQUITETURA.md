# ARQUITETURA — VoltX

## 1. Finalidade deste documento

Este documento define a arquitetura oficial da plataforma VoltX.

Ele deve ser consultado antes de qualquer decisão que envolva:

- criação ou alteração de aplicações;
- escolha de tecnologias;
- criação de serviços;
- criação ou alteração de endpoints;
- autenticação;
- autorização;
- banco de dados;
- armazenamento;
- filas;
- cache;
- chat em tempo real;
- deploy;
- domínios;
- segurança;
- integração entre módulos;
- comunicação com serviços externos.

> Agentes de desenvolvimento e ferramentas de IA devem ler `AGENTS.md` antes deste documento.

---

# 2. Contexto do projeto

A VoltX não será apenas um site institucional.

Ela será uma plataforma web para:

- divulgação profissional de serviços elétricos;
- cadastro e autenticação de clientes;
- gestão de clientes;
- solicitações de orçamento;
- protocolos;
- Ordens de Serviço;
- agendamentos;
- histórico de atendimentos;
- chat em tempo real;
- blog técnico;
- CMS;
- comentários;
- curtidas;
- hashtags;
- notificações;
- comunicação por e-mail;
- integração com WhatsApp;
- painel administrativo;
- CRM;
- auditoria;
- gerenciamento de dados em conformidade com a LGPD.

---

# 3. Referência visual do protótipo

O protótipo inicial utilizado como referência visual foi construído em:

```text
HTML5
Tailwind CSS via CDN
FontAwesome
JavaScript Vanilla
localStorage
```

Esse protótipo serve como referência para:

- identidade visual;
- grid de três colunas;
- header;
- área de perfil;
- cards de agendamento;
- conteúdo central;
- serviços;
- postagens;
- chat flutuante;
- dark mode;
- footer.

Ele **não representa a arquitetura definitiva de produção**.

A implementação final deverá preservar a linguagem visual aprovada, mas será construída sobre a arquitetura descrita neste documento.

---

# 4. Princípios arquiteturais

A arquitetura da VoltX deverá seguir estes princípios.

## 4.1. Separação de responsabilidades

Cada aplicação ou módulo deve ter responsabilidade clara.

```text
site público
≠
painel administrativo
≠
API
≠
banco de dados
≠
storage
≠
cache/fila
```

## 4.2. Backend como autoridade

O frontend nunca será a autoridade final sobre:

- permissões;
- validações;
- estados;
- regras de negócio;
- preços;
- status;
- relacionamentos;
- autenticação;
- autorização.

Toda ação sensível deverá ser confirmada no backend.

## 4.3. Persistência real

Nenhum dado importante deverá existir apenas:

- no navegador;
- em `localStorage`;
- na memória do processo;
- dentro do filesystem efêmero de um container.

## 4.4. Segurança por projeto

Segurança não será adicionada somente no final.

Ela fará parte de:

- autenticação;
- banco;
- API;
- uploads;
- chat;
- logs;
- sessões;
- permissões;
- infraestrutura;
- backups.

## 4.5. Documentação viva

Mudou comportamento?

A documentação relacionada deverá ser atualizada junto.

## 4.6. Rastreabilidade

Solicitações e atendimentos relevantes deverão possuir identificadores rastreáveis.

Exemplos:

```text
VX-2026-000001
ORC-2026-000001
OS-2026-000001
AG-2026-000001
```

## 4.7. Histórico preservado

Eventos históricos importantes não devem desaparecer simplesmente porque um recurso foi encerrado ou cancelado.

## 4.8. Infraestrutura essencial autohospedável

A VoltX deverá manter controle sobre sua infraestrutura principal.

Nenhuma função essencial poderá depender obrigatoriamente de SaaS externo para existir.

Componentes principais:

```text
PostgreSQL → autohospedado
Redis      → autohospedado
MinIO      → autohospedado ou storage equivalente sob controle da VoltX
```

O Prisma será apenas uma dependência local da API NestJS e não representa serviço externo.

Integrações externas, como WhatsApp, e-mail ou consulta de CEP, deverão ser encapsuladas de forma que possam ser substituídas quando tecnicamente viável.

A indisponibilidade de uma integração externa não deverá tornar inacessíveis os dados centrais da plataforma.

---

# 5. Visão macro

A arquitetura será dividida inicialmente em três aplicações principais:

```text
┌───────────────────────────────────────────────┐
│              INTERNET / CLIENTE               │
└───────────────────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────┐
│       voltx.narrativas.site                   │
│       Site público + área do cliente          │
└───────────────────────────────────────────────┘
                    │
                    │ HTTPS
                    ▼
┌───────────────────────────────────────────────┐
│       api-voltx.narrativas.site               │
│       API REST + WebSocket                    │
└───────────────────────────────────────────────┘
        │               │               │
        ▼               ▼               ▼
 PostgreSQL          Redis         Object Storage


┌───────────────────────────────────────────────┐
│       painel-voltx.narrativas.site            │
│       Painel administrativo privado           │
└───────────────────────────────────────────────┘
                    │
                    │ HTTPS
                    ▼
             mesma API VoltX
```

---

# 6. Domínios planejados

## 6.1. Site público

```text
https://voltx.narrativas.site
```

Responsabilidades:

- Home;
- serviços;
- blog;
- conteúdo público;
- cadastro;
- login;
- área do cliente;
- perfil;
- orçamento;
- agendamentos;
- histórico;
- chat autenticado;
- privacidade;
- termos.

## 6.2. Painel administrativo

```text
https://painel-voltx.narrativas.site
```

Responsabilidades:

- dashboard;
- clientes;
- serviços;
- orçamentos;
- protocolos;
- OS;
- agenda;
- chat;
- blog;
- CMS;
- comentários;
- hashtags;
- e-mails;
- WhatsApp;
- configurações;
- auditoria;
- privacidade;
- segurança.

O painel não deverá ser linkado publicamente.

Mesmo assim, a segurança nunca dependerá de esconder o endereço.

## 6.3. API

```text
https://api-voltx.narrativas.site
```

Base planejada:

```text
/api/v1
```

---

# 7. Stack tecnológica planejada

## 7.1. Frontend público

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
```

Responsável por:

- SSR/SSG quando apropriado;
- SEO;
- páginas públicas;
- área autenticada;
- integração com API;
- interface responsiva;
- acessibilidade.

## 7.2. Painel administrativo

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
```

Aplicação separada do site público.

## 7.3. Backend

```text
NestJS
TypeScript
```

Responsável por:

- autenticação;
- autorização;
- regras de negócio;
- API;
- HATEOAS;
- validações;
- persistência;
- eventos;
- integrações;
- WebSocket.

## 7.4. Banco

```text
PostgreSQL
```

## 7.5. ORM

```text
Prisma
```

## 7.6. Tempo real

```text
WebSocket
Socket.IO
```

## 7.7. Cache e filas

```text
Redis
```

## 7.8. Armazenamento de arquivos

Padrão preferencial:

```text
MinIO autohospedado
```

O projeto deverá funcionar sem exigir AWS S3, Cloudflare R2, Backblaze B2 ou outro serviço externo.

A abstração de Object Storage continuará compatível com S3 para permitir migração ou replicação futura sem acoplar a aplicação a um fornecedor específico.

Em produção, a preferência inicial será:

```text
MinIO
+
volumes persistentes
+
backup externo controlado
```

Um serviço de storage externo poderá ser adotado futuramente como opção, replicação ou backup, mas não deverá se tornar dependência obrigatória sem decisão arquitetural formal registrada em ADR.

## 7.9. Proxy reverso

```text
Nginx
```

## 7.10. Containers

```text
Docker
Docker Compose
```

---

# 8. Organização planejada do repositório

A VoltX deverá evoluir para um monorepo.

Estrutura prevista:

```text
voltx-site/
│
├── apps/
│   ├── site/
│   ├── painel/
│   └── api/
│
├── packages/
│   ├── ui/
│   ├── types/
│   ├── config/
│   └── validation/
│
├── docs/
│
├── infrastructure/
│   ├── nginx/
│   ├── docker/
│   └── scripts/
│
├── public/
│
├── AGENTS.md
├── README.md
├── ROADMAP.md
├── CHANGELOG.md
└── compose.yml
```

> Essa árvore é planejada. Pastas somente deverão ser criadas quando a fase correspondente começar.

---

# 9. Comunicação entre aplicações

O site e o painel nunca acessarão PostgreSQL diretamente.

Fluxo obrigatório:

```text
Frontend
   ↓
API
   ↓
Service
   ↓
Repository/ORM
   ↓
PostgreSQL
```

Para tempo real:

```text
Frontend
   ↓
WebSocket
   ↓
Gateway
   ↓
Service
   ↓
PostgreSQL / Redis
```

---

# 10. API RESTful

A API seguirá princípios REST.

Exemplos:

```text
GET    /api/v1/services
GET    /api/v1/services/{id}
POST   /api/v1/appointments
GET    /api/v1/appointments/{id}
PATCH  /api/v1/appointments/{id}
```

As convenções completas deverão ser documentadas em:

```text
docs/API.md
```

---

# 11. HATEOAS

A API utilizará HATEOAS de forma funcional.

Uma resposta poderá expor ações relacionadas ao estado atual do recurso.

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
    "cancel": {
      "href": "/api/v1/appointments/AG-2026-000053/cancellation",
      "method": "POST"
    }
  }
}
```

Uma ação indisponível pelo estado do recurso não deverá ser exposta como se estivesse disponível.

HATEOAS não será usado apenas como decoração.

---

# 12. Autenticação

Existirão pelo menos dois contextos de autenticação:

```text
cliente
administrador
```

O sistema deverá suportar:

- login;
- logout;
- recuperação de senha;
- alteração de senha;
- sessões;
- expiração;
- revogação;
- logout remoto;
- 2FA administrativo.

Senhas:

```text
entrada
↓
validação
↓
Argon2id
↓
hash
↓
PostgreSQL
```

Senha em texto puro nunca poderá ser armazenada.

---

# 13. Autorização

A arquitetura deverá adotar controle por papéis e permissões.

Papéis inicialmente previstos:

```text
SUPER_ADMIN
ADMIN
ATENDENTE
EDITOR
CLIENTE
```

Mesmo que inicialmente apenas um administrador utilize o painel, a arquitetura não deverá impedir expansão futura.

---

# 14. Dados do negócio centralizados

Informações profissionais mutáveis não devem ficar espalhadas no código.

Exemplos:

```text
nome profissional
nome comercial
telefone
WhatsApp
e-mail
endereço
área de atendimento
foto
logo
sobre mim
dados acadêmicos
```

Esses dados serão armazenados em entidade/configuração própria no banco.

Exemplo conceitual:

```text
business_profile
```

Quando alterados no painel, deverão refletir automaticamente em:

- header;
- footer;
- CTAs;
- página Sobre;
- WhatsApp;
- e-mails;
- serviços;
- formulários;
- metadados aplicáveis.

---

# 15. Clientes

Cada cliente poderá possuir:

- conta;
- perfil;
- foto;
- identidade de gênero;
- tema;
- endereços;
- consentimentos;
- agendamentos;
- orçamentos;
- protocolos;
- OS;
- conversas;
- notificações;
- histórico.

Um cliente nunca poderá acessar dados de outro cliente.

---

# 16. Pré-cadastro

O administrador poderá criar um cliente antes de ele possuir uma conta ativa.

Fluxo:

```text
pré-cadastro
↓
agendamento/orçamento/protocolo
↓
código de ativação
↓
cliente recebe convite
↓
cliente conclui cadastro
↓
registros existentes são vinculados
```

O sistema deverá preservar:

- origem;
- autoria;
- histórico;
- data;
- relações existentes.

---

# 17. Protocolos

Protocolos representarão atendimentos ou solicitações rastreáveis.

Formato planejado:

```text
VX-AAAA-NNNNNN
```

Exemplo:

```text
VX-2026-000184
```

Características:

- único;
- imutável;
- nunca reutilizado;
- pesquisável;
- relacionável.

Pode se relacionar com:

- conversa;
- orçamento;
- OS;
- agendamento;
- atendimento pós-serviço.

---

# 18. Orçamentos

Formato planejado:

```text
ORC-AAAA-NNNNNN
```

Estados previstos:

```text
REQUESTED
UNDER_REVIEW
DRAFT
SENT
VIEWED
ACCEPTED
REJECTED
EXPIRED
CANCELLED
```

A interface deverá traduzir todos os estados para PT-BR.

---

# 19. Ordens de Serviço

Formato:

```text
OS-AAAA-NNNNNN
```

A OS representa um serviço que efetivamente evoluiu para execução.

Ela poderá se relacionar com:

- cliente;
- protocolo;
- orçamento;
- agendamento;
- mensagens;
- anexos;
- materiais;
- histórico.

---

# 20. Agendamentos

Formato:

```text
AG-AAAA-NNNNNN
```

Estados poderão incluir:

```text
REQUESTED
UNDER_REVIEW
CONFIRMED
RESCHEDULE_REQUESTED
IN_TRANSIT
IN_SERVICE
COMPLETED
CANCELLED_BY_CUSTOMER
CANCELLED_BY_VOLTX
NOT_COMPLETED
```

A arquitetura deve impedir conflitos de agenda.

Deverá considerar:

- duração;
- deslocamento;
- horários bloqueados;
- períodos indisponíveis;
- suspensão de novos atendimentos.

---

# 21. Suspensão de atendimentos

O administrador poderá suspender novos agendamentos.

Essa suspensão não deverá derrubar:

- site;
- WhatsApp;
- histórico;
- conta;
- orçamentos já existentes.

A interface pública deverá exibir mensagem clara em PT-BR.

---

# 22. Atendimento fora da região padrão

CEP fora da área padrão não deverá ser tratado como CEP inválido.

Fluxo:

```text
CEP válido
↓
fora da área padrão
↓
alerta ao usuário
↓
opção de continuar
+
opção de WhatsApp
```

O painel deverá identificar visualmente a solicitação como fora da área habitual.

---

# 23. CEP

Todo formulário que receber endereço deverá reutilizar a mesma infraestrutura de CEP.

Fluxo:

```text
CEP
↓
consulta
↓
logradouro
bairro
cidade
UF
```

Caso a consulta falhe:

```text
preenchimento manual
```

A aplicação não deverá ficar bloqueada por indisponibilidade do serviço externo de CEP.

---

# 24. Validação de dados

Validação deverá ocorrer:

```text
frontend
+
backend
```

O frontend melhora a experiência.

O backend é obrigatório.

Campos como:

- CPF;
- telefone;
- CEP;
- e-mail;
- nome;
- endereço;

deverão usar validação adequada ao tipo de dado.

Não será usada uma regra genérica que simplesmente remova pontuação legítima.

---

# 25. SQL Injection

Proteção contra SQL Injection será feita arquiteturalmente.

Nunca:

```text
SQL + valor informado pelo usuário
```

Sempre:

```text
ORM
ou
query parametrizada
```

Caracteres legítimos não deverão ser proibidos apenas por medo de SQL Injection.

---

# 26. Senhas e entrada maliciosa

Senhas não serão interpretadas como código.

Não será feita remoção arbitrária de:

```text
'
"
;
#
<
>
```

da senha.

A senha será tratada como sequência de caracteres e nunca concatenada em:

- SQL;
- shell;
- HTML;
- JavaScript;
- comandos.

---

# 27. Uploads

Uploads serão sempre feitos a partir do dispositivo.

Não permitir:

```text
"cole a URL da sua foto"
```

para fotos de perfil ou imagens editoriais administradas pelo sistema.

Tipos de mídia previstos:

- avatar;
- capa;
- imagem de postagem;
- galeria;
- anexo de chat;
- foto de atendimento;
- documento;
- vídeo.

Todo upload deverá passar por:

- autenticação quando aplicável;
- autorização;
- limite de tamanho;
- validação MIME;
- validação de conteúdo;
- nome interno seguro;
- processamento;
- armazenamento persistente.

---

# 28. Object Storage

O banco não deverá armazenar arquivos binários grandes diretamente como estratégia padrão.

Fluxo:

```text
arquivo
↓
API
↓
validação/processamento
↓
Object Storage
↓
media_id no banco
```

O banco armazena metadados e referência.

---

# 29. Editor de conteúdo

O CMS deverá oferecer:

```text
Visual
Markdown
HTML sanitizado
```

Recursos:

- títulos;
- parágrafos;
- listas;
- destaques;
- imagens;
- galerias;
- links;
- âncoras;
- hashtags;
- blocos especiais;
- SEO;
- preview;
- agendamento;
- rascunho.

HTML arbitrário não será confiável.

Deverá existir sanitização com allowlist de tags/atributos.

---

# 30. Rascunhos persistentes

O editor deverá salvar:

- conteúdo;
- imagens;
- cursor;
- bloco selecionado;
- posição de rolagem;
- hashtags;
- SEO;
- capa;
- estado do editor.

Fluxo:

```text
edição
↓
autosave
↓
banco/storage
↓
fechar navegador
↓
voltar
↓
continuar de onde parou
```

Imagens de rascunho não poderão depender apenas do navegador.

---

# 31. Hashtags

Hashtags deverão possuir estrutura própria.

Conceitualmente:

```text
tags
post_tags
```

Rotas:

```text
/tag/{slug}
```

Hashtags serão usadas para:

- navegação;
- busca;
- relacionados;
- assuntos em alta;
- SEO.

---

# 32. Chat em tempo real

O chat será disponibilizado para clientes autenticados.

Visitantes receberão CTA para WhatsApp.

Arquitetura:

```text
cliente
↓
Socket.IO
↓
API
↓
serviço de chat
↓
PostgreSQL
+
Redis
```

WebSocket é responsável pela entrega em tempo real.

PostgreSQL é responsável pelo histórico persistente.

---

# 33. Conversas e protocolos

Uma conversa poderá ter vários atendimentos ao longo do tempo.

Exemplo visual:

```text
Protocolo A
mensagens...
ENCERRADO

──────── novo atendimento ────────

Protocolo B
mensagens...
ABERTO
```

Encerrar atendimento:

- encerra o protocolo;
- não apaga mensagens;
- não apaga anexos;
- não apaga histórico.

Nova mensagem depois de encerrado:

```text
novo protocolo
```

quando não houver atendimento aberto apropriado.

---

# 34. Citação de mensagens

Uma mensagem poderá referenciar outra.

Conceitualmente:

```text
reply_to_message_id
```

A mensagem citada poderá pertencer inclusive a protocolo anterior, respeitando as permissões da conversa.

---

# 35. Caixa administrativa de chats

O painel deverá oferecer:

- busca por protocolo;
- busca por OS;
- busca por orçamento;
- busca por agendamento;
- busca por nome;
- busca por telefone;
- busca por e-mail;
- busca por conteúdo de mensagem;
- filtro por datas;
- filtro por atividade do dia;
- iniciadas hoje;
- recentes;
- não lidas;
- precisa de resposta;
- aguardando cliente;
- prioridade;
- urgência;
- chats fixados;
- etiquetas;
- abertos;
- encerrados.

Ordenação padrão planejada:

```text
urgentes
↓
prioridade alta
↓
normais
```

Dentro do mesmo nível:

```text
atividade mais recente primeiro
```

---

# 36. Perfil administrativo a partir do chat

Foto e nome do cliente no chat administrativo serão clicáveis.

O administrador poderá acessar:

- perfil;
- endereços;
- protocolos;
- agendamentos;
- OS;
- orçamentos;
- conversas;
- arquivos;
- histórico;
- auditoria.

O retorno ao chat deverá preservar o contexto sempre que possível.

---

# 37. Busca

A arquitetura deverá prever busca global administrativa.

Campos pesquisáveis poderão incluir:

- protocolo;
- OS;
- orçamento;
- agendamento;
- nome;
- telefone;
- CPF;
- e-mail.

A busca pública jamais deverá expor registros privados.

---

# 38. Notificações

Eventos poderão gerar notificações.

Exemplos:

- orçamento enviado;
- orçamento visualizado;
- orçamento aceito;
- agendamento confirmado;
- reagendamento;
- mensagem recebida;
- atendimento em deslocamento;
- atendimento concluído.

Canais futuros:

```text
in-app
e-mail
WhatsApp
```

---

# 39. E-mail

O backend deverá abstrair o provedor de e-mail.

Possíveis provedores:

- Resend;
- Brevo;
- Amazon SES;
- SendGrid.

O restante do sistema não deverá depender diretamente de detalhes específicos do provedor escolhido.

---

# 40. WhatsApp

Integração profissional deverá preferir a plataforma oficial do WhatsApp Business.

O sistema não deverá depender de automação frágil do WhatsApp Web como arquitetura principal.

Dados como número oficial da VoltX deverão vir das configurações do negócio.

Mensagens iniciadas pelo painel poderão incluir contexto:

```text
Protocolo
Orçamento
OS
Agendamento
Serviço
```

---

# 41. Temas visuais

O Design System será baseado em tokens.

Exemplos:

```text
--accent-primary
--accent-secondary
--accent-gradient
--avatar-ring
--link-hover
--icon-accent
--username-color
--chat-background
--chat-user-bubble
--comment-accent
--reading-progress
--focus-ring
```

Temas poderão alterar:

- avatar;
- nome;
- links;
- ícones;
- chat;
- comentários;
- progress bar;
- hover;
- detalhes decorativos.

A identidade visual não deverá ser inferida automaticamente a partir da identidade de gênero.

---

# 42. Idioma

Interface voltada ao usuário:

```text
Português do Brasil
```

Não permitir mensagens visíveis em inglês como padrão.

Textos de interface deverão ser centralizados.

Estrutura planejada:

```text
locales/
└── pt-BR/
    ├── common.json
    ├── auth.json
    ├── appointments.json
    ├── quotes.json
    ├── chat.json
    └── errors.json
```

---

# 43. LGPD

A arquitetura deverá permitir:

- acesso;
- correção;
- exportação;
- revogação de consentimentos;
- exclusão;
- anonimização;
- retenção justificada;
- histórico de consentimento;
- auditoria.

Exclusão de conta não significa obrigatoriamente apagar todos os registros de forma cega.

O tratamento exato deverá obedecer:

```text
docs/LGPD.md
docs/RETENCAO_DADOS.md
docs/POLITICA_PRIVACIDADE.md
```

quando existirem.

---

# 44. Auditoria

Ações administrativas relevantes deverão gerar trilha de auditoria.

Exemplos:

```text
cliente criado
agendamento criado
agendamento cancelado
orçamento alterado
serviço editado
post suspenso
permissão alterada
código de convite gerado
```

A auditoria deverá registrar, quando apropriado:

- ator;
- ação;
- recurso;
- recurso_id;
- data;
- valor anterior;
- valor novo;
- origem.

---

# 45. Soft delete

Recursos com valor histórico não deverão ser apagados fisicamente por padrão.

Quando aplicável:

```text
deleted_at
```

Exemplos:

- cliente;
- postagem;
- serviço;
- comentário;
- registros administrativos.

Exceções deverão ser documentadas.

---

# 46. Logs

Logs técnicos não substituem auditoria.

Logs servem para:

- erros;
- diagnóstico;
- disponibilidade;
- segurança;
- performance.

Auditoria serve para:

- quem fez;
- o que fez;
- quando;
- em qual recurso.

---

# 47. Backup

Persistência sem backup não é suficiente.

Deverão existir:

```text
backup do banco
backup do storage
retenção
cópia externa
teste de restauração
```

Backups não devem permanecer exclusivamente no mesmo disco do servidor principal.

---

# 48. Docker

A aplicação será containerizada.

Nenhum dado persistente poderá depender da camada gravável efêmera de um container.

Volumes ou storage externo deverão ser usados para:

- PostgreSQL;
- Redis quando necessário;
- MinIO;
- dados persistentes aplicáveis.

---

# 49. Nginx

Nginx poderá atuar como:

- proxy reverso;
- terminação TLS;
- roteamento por subdomínio;
- headers de segurança;
- limites de upload quando aplicável.

---

# 50. robots.txt

O site público deverá possuir regras próprias.

Exemplo conceitual:

```text
User-agent: *
Allow: /

Disallow: /minha-conta/
Disallow: /perfil/
Disallow: /agendamentos/
Disallow: /chat/
Disallow: /api/

Sitemap: https://voltx.narrativas.site/sitemap.xml
```

O painel deverá ser tratado separadamente.

Conceitualmente:

```text
User-agent: *
Disallow: /
```

`robots.txt` não é mecanismo de segurança.

---

# 51. Sitemap

O sitemap público deverá ser gerado dinamicamente.

Poderá conter:

- Home;
- Serviços;
- páginas individuais de serviço;
- Blog;
- postagens publicadas;
- páginas de tag elegíveis;
- Sobre;
- Contato;
- páginas institucionais públicas.

Não deverá conter:

- painel;
- perfil;
- chat;
- agendamentos privados;
- orçamentos privados;
- dados de clientes.

---

# 52. SEO

O sistema deverá suportar:

- metadata;
- title;
- description;
- canonical;
- Open Graph;
- slug;
- data de publicação;
- data de atualização;
- dados estruturados quando apropriado.

---

# 53. Observabilidade

Antes de produção, deverão existir:

- health checks;
- logs;
- métricas mínimas;
- monitoramento;
- alertas relevantes.

---

# 54. Git

Fluxo conceitual:

```text
branch
↓
implementação
↓
testes
↓
documentação
↓
validação
↓
merge
↓
sincronização com Gitea
↓
versão
↓
tag
↓
GitHub Release
```

Detalhes obrigatórios deverão estar em:

```text
docs/GIT_WORKFLOW.md
```

---

# 55. Gitea

O servidor de referência é:

```text
ssh andrew@192.168.1.70
```

O envio para o Gitea faz parte do fluxo oficial.

Em caso de falha:

```text
tentativa 1
↓
tentativa 2
↓
tentativa 3
```

Se as três falharem:

- interromper o fechamento;
- não mascarar o erro;
- corrigir o problema antes de concluir a versão.

---

# 56. GitHub

GitHub será usado para:

- repositório remoto;
- tags;
- Releases;
- histórico;
- integração com CI;
- eventualmente Packages.

GitHub Releases documentará versões validadas.

---

# 57. Packages

GitHub Packages poderá ser usado futuramente para imagens Docker.

Exemplo:

```text
ghcr.io/<usuario>/voltx-site:v1.0.0
ghcr.io/<usuario>/voltx-painel:v1.0.0
ghcr.io/<usuario>/voltx-api:v1.0.0
```

Não é requisito da primeira fase.

---

# 58. Versionamento

Será usado Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Durante desenvolvimento:

```text
v0.x.x
```

Primeira versão pública estável:

```text
v1.0.0
```

---

# 59. ADRs

Decisões arquiteturais relevantes deverão ser registradas em:

```text
docs/adr/
```

Exemplos planejados:

```text
0001-postgresql.md
0002-nestjs.md
0003-websocket-chat.md
0004-painel-separado.md
0005-soft-delete.md
0006-object-storage.md
0007-api-rest-hateoas.md
```

Um ADR deve registrar:

- contexto;
- decisão;
- alternativas;
- consequências;
- status;
- data.

---

# 60. Arquitetura de segurança resumida

```text
Internet
   ↓
HTTPS
   ↓
Nginx
   ↓
Frontend/API
   ↓
Autenticação
   ↓
Autorização
   ↓
Validação
   ↓
Service
   ↓
ORM parametrizado
   ↓
PostgreSQL
```

Uploads:

```text
cliente
↓
API
↓
validação
↓
processamento
↓
object storage
```

Chat:

```text
cliente autenticado
↓
WebSocket
↓
authorization
↓
service
↓
persistência
```

---

# 61. Regras de dependência

Um módulo não deverá acessar diretamente tabelas de outro módulo fora das abstrações definidas quando isso puder gerar acoplamento indevido.

Preferir:

```text
Controller
↓
Service
↓
Repository/Prisma
```

Serviços poderão conversar entre si por interfaces e eventos quando necessário.

---

# 62. Eventos de domínio

A arquitetura poderá usar eventos internos para desacoplar ações secundárias.

Exemplo:

```text
appointment.confirmed
```

pode resultar em:

```text
notificação
e-mail
evento de auditoria
```

sem colocar todas essas responsabilidades dentro da mesma função principal.

---

# 63. Idempotência

Operações sensíveis deverão considerar idempotência quando necessário.

Exemplos:

- criação de pagamento futura;
- confirmação;
- callbacks;
- webhooks;
- ações externas.

Regras específicas serão documentadas em `API.md`.

---

# 64. Webhooks

Integrações externas poderão usar webhooks.

Webhooks deverão possuir:

- autenticação/assinatura;
- proteção contra replay quando aplicável;
- idempotência;
- logs;
- tratamento de falha.

---

# 65. Estados internos e tradução visual

Enums internos poderão usar inglês técnico:

```text
CONFIRMED
CANCELLED
PENDING
```

A interface deverá usar:

```text
Confirmado
Cancelado
Pendente
```

Não misturar textos internos com a interface pública.

---

# 66. Configuração por ambiente

Deverão existir ambientes separados conceitualmente:

```text
development
test
production
```

Segredos nunca devem ser commitados.

Usar variáveis de ambiente.

Arquivos de exemplo poderão existir:

```text
.env.example
```

sem valores secretos reais.

---

# 67. Testes arquiteturais

A estratégia de testes deverá contemplar:

- unitários;
- integração;
- API;
- E2E;
- validação visual;
- migrations;
- autenticação;
- autorização.

Detalhes ficarão em:

```text
docs/TESTES.md
```

---

# 68. Performance

A aplicação deverá evitar:

- consultas N+1;
- imagens enormes;
- carregamento desnecessário;
- polling agressivo;
- consultas sem índice em campos críticos.

WebSocket será preferido para chat em tempo real.

Imagens deverão possuir versões otimizadas quando necessário.

---

# 69. Acessibilidade

O projeto deverá considerar:

- contraste;
- foco;
- teclado;
- labels;
- alt text;
- tamanho de alvo;
- `prefers-reduced-motion`;
- leitura em mobile.

A personalização visual nunca poderá prejudicar legibilidade.

---

# 70. Estado atual da arquitetura

Status:

```text
PLANEJADA / EM DOCUMENTAÇÃO
```

Nenhuma decisão descrita como planejada deve ser considerada implementada apenas por existir neste arquivo.

O código deve ser criado progressivamente conforme o `ROADMAP.md`.

---

# 71. Regra de alteração arquitetural

Mudanças significativas nesta arquitetura deverão seguir:

```text
necessidade identificada
↓
análise
↓
ADR quando relevante
↓
atualização de ARQUITETURA.md
↓
atualização dos documentos relacionados
↓
implementação
↓
testes
```

Nunca alterar uma decisão estrutural silenciosamente.

---

# 72. Regra final

> O código deve obedecer à arquitetura documentada.
>
> Se o código e este documento divergirem, a divergência deve ser investigada antes de continuar o desenvolvimento.
>
> Não inventar uma segunda arquitetura dentro do mesmo projeto sem uma decisão formal.
