# VoltX

Plataforma profissional da VoltX para divulgação de serviços elétricos, atendimento a clientes, agendamentos, orçamentos, blog técnico, chat em tempo real e gestão administrativa.

> **Atenção para agentes de desenvolvimento e ferramentas de IA:** antes de alterar qualquer parte deste projeto, leia obrigatoriamente o arquivo [`AGENTS.md`](./AGENTS.md).

---

## 1. Visão geral

A VoltX será uma plataforma web completa voltada para serviços elétricos, atendimento e relacionamento com clientes.

O projeto será dividido em três áreas principais:

- **Site público e área do cliente**
- **Painel administrativo privado**
- **API/backend**

Domínios planejados:

```text
https://voltx.narrativas.site
https://painel-voltx.narrativas.site
https://api-voltx.narrativas.site
```

O site público será a porta de entrada para apresentação profissional, serviços, blog, solicitações de orçamento, cadastro, login e atendimento.

O painel administrativo será separado do site público e destinado somente à administração da VoltX.

---

## 2. Objetivos principais

A plataforma deverá permitir:

- divulgação profissional dos serviços da VoltX;
- cadastro e autenticação de clientes;
- perfil próprio para cada cliente;
- upload de foto de perfil diretamente do dispositivo;
- gerenciamento de endereços;
- solicitação, acompanhamento, cancelamento e reagendamento de atendimentos;
- histórico completo de serviços;
- geração e acompanhamento de orçamentos;
- geração de protocolos;
- criação de Ordens de Serviço (OS);
- chat em tempo real entre cliente e VoltX;
- histórico permanente de conversas;
- blog técnico com editor visual, Markdown e HTML sanitizado;
- hashtags e navegação por assuntos;
- comentários e curtidas;
- compartilhamento de publicações;
- notificações;
- painel administrativo;
- CRM básico;
- integração com WhatsApp;
- envio de e-mails;
- gestão de clientes;
- gestão de serviços;
- gestão de agenda;
- auditoria;
- proteção de dados conforme LGPD;
- armazenamento persistente;
- backups;
- versionamento formal do projeto.

---

## 3. Identidade visual

A identidade principal da VoltX segue uma linguagem:

- moderna;
- técnica;
- profissional;
- voltada à elétrica e tecnologia.

Paleta base:

```text
Fundo escuro:       #020617
Cards:              #0f172a
Cards secundários:  #1e293b
Texto principal:    #f1f5f9
Texto secundário:   #94a3b8
Amarelo elétrico:   #f59e0b
Azul VoltX:         #3b82f6
```

O modo escuro será o padrão inicial.

Também existirão temas opcionais definidos pelo usuário, sem vínculo obrigatório com identidade de gênero.

---

## 4. Estrutura visual principal

A Home seguirá o modelo de grid responsivo em três colunas no desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├──────────────────┬──────────────────────┬───────────────────┤
│ Perfil / Agenda  │ Conteúdo principal   │ Serviços / Tags   │
│                  │ Blog / Destaques     │ Mais lidas        │
│                  │                      │ Orçamento         │
├──────────────────┴──────────────────────┴───────────────────┤
│ Footer                                                      │
└─────────────────────────────────────────────────────────────┘
```

Em dispositivos móveis, o layout será reorganizado em uma única coluna.

---

## 5. Área do cliente

Clientes autenticados poderão acessar:

- perfil;
- foto;
- dados pessoais;
- endereços;
- aparência;
- segurança;
- privacidade;
- notificações;
- agendamentos;
- orçamentos;
- histórico;
- chat;
- protocolos;
- Ordens de Serviço relacionadas.

O usuário poderá solicitar exclusão da conta conforme as regras definidas para LGPD.

---

## 6. Chat

O chat será exclusivo para clientes autenticados.

Visitantes não autenticados receberão CTA para WhatsApp.

Número inicial de atendimento:

```text
+55 61 99901-0739
```

O número não deverá ficar fixo diretamente no código. Ele será obtido a partir das configurações do negócio cadastradas no banco.

O chat deverá oferecer:

- comunicação em tempo real;
- status online;
- último acesso;
- anexos;
- citações de mensagens anteriores;
- pesquisa;
- filtros;
- mensagens não lidas;
- prioridade;
- etiquetas;
- histórico permanente;
- encerramento de atendimento;
- novo protocolo em novo atendimento;
- relação com orçamento, OS e agendamento.

Nenhum histórico de conversa será apagado ao encerrar um atendimento.

---

## 7. Protocolos, orçamentos, OS e agendamentos

Toda solicitação relevante deverá possuir rastreabilidade.

Exemplo:

```text
Protocolo
VX-2026-000001

Orçamento
ORC-2026-000001

Ordem de Serviço
OS-2026-000001

Agendamento
AG-2026-000001
```

Esses identificadores serão imutáveis e nunca reutilizados.

Um mesmo serviço poderá possuir vários protocolos relacionados.

---

## 8. Agendamentos

A VoltX deverá permitir:

- agendamento pelo cliente;
- agendamento criado pelo administrador;
- reagendamento;
- cancelamento;
- histórico;
- bloqueio de horários;
- suspensão de novos atendimentos;
- controle de disponibilidade;
- duração estimada;
- intervalo de deslocamento;
- dias indisponíveis;
- períodos de ausência.

Quando os atendimentos estiverem suspensos, o WhatsApp continuará disponível.

---

## 9. Pré-cadastro de clientes

O administrador poderá iniciar um cadastro para um cliente ainda sem conta.

O sistema poderá:

1. criar o pré-cadastro;
2. criar agendamento;
3. gerar código de ativação;
4. enviar o código ao cliente;
5. permitir que o cliente finalize o cadastro;
6. vincular automaticamente os registros já existentes à nova conta.

O sistema deverá registrar claramente quando um agendamento tiver sido criado pela VoltX e não pelo cliente.

---

## 10. Blog e CMS

O blog contará com editor avançado de conteúdo.

Recursos planejados:

- modo visual;
- Markdown;
- HTML sanitizado;
- títulos;
- parágrafos;
- listas;
- citações;
- imagens;
- galerias;
- links;
- âncoras;
- destaques;
- cores controladas;
- tamanhos de fonte controlados;
- blocos especiais VoltX;
- hashtags;
- autosave;
- histórico de versões;
- salvamento de rascunho;
- retomada exatamente do ponto onde a edição parou;
- preservação das imagens do rascunho;
- publicação agendada;
- suspensão;
- arquivamento;
- SEO;
- barra de progresso de leitura.

---

## 11. Hashtags

Hashtags serão recursos de navegação reais.

Exemplo:

```text
#eletrica
#seguranca
#dr
#chuveiro
#automacao
```

Rotas:

```text
/tag/eletrica
/tag/seguranca
/tag/dr
```

As páginas de hashtag poderão reunir postagens e outros conteúdos relacionados.

---

## 12. Dados e segurança

O frontend nunca será considerado fonte confiável para validação.

Todas as entradas deverão ser validadas novamente no backend.

Regras principais:

- consultas parametrizadas ou ORM;
- nenhuma concatenação direta de SQL;
- senha nunca armazenada em texto puro;
- hash de senha com algoritmo seguro;
- validação de CPF;
- validação de telefone;
- normalização de CEP;
- consulta automática de CEP;
- preenchimento manual como fallback;
- HTML sanitizado;
- upload validado;
- rate limiting;
- autorização;
- autenticação;
- logs;
- auditoria;
- proteção contra XSS;
- proteção contra CSRF quando aplicável;
- proteção contra SQL Injection;
- cookies seguros;
- controle de sessão.

Senhas serão tratadas como dados opacos e não terão caracteres removidos por “sanitização”.

---

## 13. Persistência

Dados importantes nunca poderão depender apenas do filesystem interno de containers.

Persistência planejada:

```text
PostgreSQL
Object Storage
Redis
Backups
```

Arquivos como:

- fotos de perfil;
- imagens do blog;
- anexos de chat;
- fotos de atendimento;
- documentos;

deverão ser armazenados de forma persistente.

---

## 14. API

A API será RESTful, versionada e utilizará HATEOAS conforme definido na documentação técnica.

Base planejada:

```text
/api/v1
```

Exemplo:

```text
GET /api/v1/services
GET /api/v1/posts
GET /api/v1/appointments
POST /api/v1/appointments
```

As representações poderão expor links relacionados por meio de `_links`.

---

## 15. Tecnologias planejadas

```text
Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

Backend
- NestJS
- TypeScript

API
- REST
- HATEOAS

Banco
- PostgreSQL

ORM
- Prisma

Tempo real
- WebSocket / Socket.IO

Cache e filas
- Redis

Arquivos
- MinIO / S3 compatível

Infraestrutura
- Docker
- Docker Compose
- Nginx

Testes
- Vitest
- Jest
- Playwright
```

A escolha definitiva de tecnologias deverá sempre respeitar os documentos de arquitetura e ADRs.

---

## 16. Idioma da interface

Toda interface visível ao usuário deverá ser apresentada em português do Brasil.

Isso inclui:

- botões;
- menus;
- mensagens;
- erros;
- validações;
- carregamentos;
- tooltips;
- toasts;
- modais;
- status;
- notificações;
- e-mails.

Não deverão aparecer textos como:

```text
Save
Cancel
Loading...
Not Found
Invalid password
```

Usar:

```text
Salvar
Cancelar
Carregando...
Não encontrado
Senha inválida
```

---

## 17. Configurações do negócio

Dados profissionais da VoltX deverão ficar centralizados no banco.

Exemplos:

- nome profissional;
- nome comercial;
- telefone;
- WhatsApp;
- e-mail;
- endereço;
- área de atendimento;
- descrição;
- foto;
- logo;
- dados acadêmicos;
- informações da página “Sobre mim”.

Ao alterar um desses dados no painel, a mudança deverá refletir automaticamente em todas as áreas do site que utilizam essa informação.

---

## 18. Perfil acadêmico

A seção “Sobre mim” poderá apresentar um cartão acadêmico com informações cadastradas no painel.

Informações iniciais:

```text
Curso: Engenharia Elétrica
Instituição: UNINTER
Registro Universitário: RU 4696655
Situação: Cursando
Previsão de conclusão: 2029
```

A exibição pública do registro universitário deverá ser configurável.

---

## 19. LGPD e privacidade

A plataforma deverá contemplar:

- acesso aos próprios dados;
- correção;
- exportação;
- gerenciamento de consentimentos;
- preferências de marketing;
- solicitação de exclusão de conta;
- anonimização quando aplicável;
- retenção quando houver obrigação legal;
- auditoria das solicitações;
- política de privacidade;
- termos de uso.

A implementação deverá seguir a documentação específica de LGPD.

---

## 20. SEO

O projeto deverá possuir:

```text
robots.txt
sitemap.xml
```

O sitemap deverá ser gerado dinamicamente conforme o conteúdo público.

Conteúdo privado não deverá aparecer no sitemap.

Exemplos de áreas privadas:

```text
/minha-conta
/perfil
/agendamentos
/chat
/painel
```

---

## 21. Git e versionamento

O projeto seguirá desenvolvimento por funcionalidades.

Fluxo esperado:

```text
branch
→ implementação
→ testes
→ documentação
→ validação
→ merge
→ versão
→ tag
→ GitHub Release
```

Versionamento:

```text
MAJOR.MINOR.PATCH
```

Exemplos:

```text
v0.1.0
v0.2.0
v0.2.1
v1.0.0
```

Tags deverão representar estados validados do projeto e não qualquer commit isolado.

---

## 22. Releases e Packages

GitHub Releases será utilizado para documentar versões oficiais.

GitHub Packages poderá ser utilizado posteriormente para distribuir:

- imagens Docker;
- bibliotecas internas;
- outros artefatos reutilizáveis.

Exemplo futuro:

```text
ghcr.io/<usuario>/voltx-site:v1.0.0
ghcr.io/<usuario>/voltx-api:v1.0.0
```

---

## 23. Documentação

Documentação planejada:

```text
AGENTS.md
README.md
ROADMAP.md
CHANGELOG.md

docs/
├── ARQUITETURA.md
├── REGRAS_NEGOCIO.md
├── DESIGN.md
├── API.md
├── DATABASE.md
├── CODING_STANDARDS.md
├── GIT_WORKFLOW.md
├── VERSIONAMENTO.md
├── SEGURANCA.md
├── LGPD.md
├── POLITICA_PRIVACIDADE.md
├── TERMOS_DE_USO.md
├── UX_WRITING.md
├── CLIENTES.md
├── SERVICOS.md
├── ORCAMENTOS.md
├── AGENDAMENTOS.md
├── PROTOCOLOS_OS.md
├── CHAT.md
├── BLOG.md
├── EDITOR_CONTEUDO.md
├── HASHTAGS.md
├── MIDIA_UPLOADS.md
├── VALIDACAO_DADOS.md
├── ENDERECOS_CEP.md
├── CONFIGURACOES_NEGOCIO.md
└── adr/
```

A documentação faz parte do software e deve ser atualizada junto com mudanças de comportamento.

---

## 24. Regras para agentes de desenvolvimento

Antes de modificar este projeto:

```text
LEIA AGENTS.md
```

Esse arquivo define:

- ordem obrigatória de leitura;
- documentos de referência;
- regras de arquitetura;
- regras de negócio;
- segurança;
- Git;
- versionamento;
- testes;
- documentação;
- padrões de código;
- validação visual.

Nenhum agente deve reinventar decisões já documentadas sem justificativa e atualização formal da arquitetura.

---

## 25. Estado atual

O projeto encontra-se em fase inicial de:

```text
documentação
+
design
+
definição de arquitetura
```

A implementação do código deverá começar somente após a consolidação dos documentos principais.

---

## 26. Diretório local de desenvolvimento

Ambiente Windows:

```text
G:\PROJETOS\voltx-site
```

---

## 27. Regra de ouro

> Antes de criar código novo, entender o que já foi decidido.  
> Antes de alterar comportamento, consultar as regras.  
> Antes de concluir uma funcionalidade, testar, validar e documentar.
