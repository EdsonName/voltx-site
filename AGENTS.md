# AGENTS.md — Instruções obrigatórias para agentes de desenvolvimento

> **Projeto:** VoltX — Plataforma de Serviços Elétricos  
> **Domínio público previsto:** `https://voltx.narrativas.site`  
> **Painel administrativo previsto:** `https://painel-voltx.narrativas.site`  
> **Idioma obrigatório da interface:** Português do Brasil (`pt-BR`)  
> **Status deste documento:** Regra de entrada obrigatória para qualquer agente de IA, automação ou desenvolvedor que altere o projeto.

---

## 1. Finalidade deste arquivo

Este é o primeiro documento que deve ser lido antes de qualquer alteração no projeto VoltX.

A função deste arquivo não é repetir toda a documentação. Ele existe para dizer **quais documentos consultar, em qual ordem, quais regras são obrigatórias e quando o agente deve parar em vez de inventar uma solução**.

Nenhum agente deve começar uma implementação apenas olhando o código existente.

Antes de criar, alterar, remover, renomear ou reorganizar qualquer funcionalidade, o agente deve consultar a documentação indicada neste arquivo.

---

## 2. Regra principal

> **Não invente comportamento novo quando já existir decisão documentada.**

Se uma funcionalidade já possuir regra de negócio, arquitetura, contrato de API, modelo de banco, decisão de design ou ADR correspondente, essa documentação deve ser seguida.

Se houver dúvida ou contradição relevante entre documentos, o agente deve interromper a implementação e apontar a inconsistência antes de continuar.

---

## 3. Ordem obrigatória de leitura

Antes de qualquer alteração, ler nesta ordem:

1. `AGENTS.md`
2. `README.md`
3. `ROADMAP.md`
4. `docs/ESCOPO_V1.md`
5. `docs/ARQUITETURA.md`
6. `docs/REGRAS_NEGOCIO.md`
7. `docs/CODING_STANDARDS.md`
8. `docs/GIT_WORKFLOW.md`
9. `docs/VERSIONAMENTO.md`
10. `docs/SEGURANCA.md`

Depois dessa leitura geral, consultar também a documentação específica do módulo que será alterado.

---

## 4. Documentação por área

### 4.1 Interface, identidade visual e textos

Consultar:

- `docs/DESIGN.md`
- `docs/UX_WRITING.md`
- `docs/MIDIA_UPLOADS.md`

### 4.2 API

Consultar:

- `docs/API.md`
- `docs/SEGURANCA.md`
- `docs/REGRAS_NEGOCIO.md`

A API será versionada, orientada a recursos, seguirá REST e adotará HATEOAS conforme regras definidas em `docs/API.md` e ADR correspondente.

### 4.3 Banco de dados

Consultar:

- `docs/DATABASE.md`
- `docs/REGRAS_NEGOCIO.md`
- `docs/LGPD.md`
- `docs/RETENCAO_DADOS.md`

### 4.4 Autenticação e contas

Consultar:

- `docs/AUTENTICACAO.md`
- `docs/CLIENTES.md`
- `docs/PERMISSOES.md`
- `docs/SEGURANCA.md`
- `docs/LGPD.md`

### 4.5 Serviços

Consultar:

- `docs/SERVICOS.md`
- `docs/REGRAS_NEGOCIO.md`
- `docs/API.md`
- `docs/DATABASE.md`

### 4.6 Orçamentos

Consultar:

- `docs/ORCAMENTOS.md`
- `docs/PROTOCOLOS_OS.md`
- `docs/REGRAS_NEGOCIO.md`
- `docs/API.md`
- `docs/DATABASE.md`

### 4.7 Agendamentos

Consultar:

- `docs/AGENDAMENTOS.md`
- `docs/PROTOCOLOS_OS.md`
- `docs/CLIENTES.md`
- `docs/REGRAS_NEGOCIO.md`

### 4.8 Chat e atendimento

Consultar:

- `docs/CHAT.md`
- `docs/PROTOCOLOS_OS.md`
- `docs/CLIENTES.md`
- `docs/SEGURANCA.md`
- `docs/REGRAS_NEGOCIO.md`

### 4.9 Blog, CMS e editor de conteúdo

Consultar:

- `docs/BLOG.md`
- `docs/EDITOR_CONTEUDO.md`
- `docs/HASHTAGS.md`
- `docs/MIDIA_UPLOADS.md`
- `docs/SEO.md`
- `docs/SEGURANCA.md`

### 4.10 Endereços e CEP

Consultar:

- `docs/ENDERECOS_CEP.md`
- `docs/VALIDACAO_DADOS.md`
- `docs/SEGURANCA.md`

### 4.11 LGPD, privacidade e termos

Consultar:

- `docs/LGPD.md`
- `docs/POLITICA_PRIVACIDADE.md`
- `docs/TERMOS_DE_USO.md`
- `docs/CONSENTIMENTOS.md`
- `docs/RETENCAO_DADOS.md`
- `docs/COOKIES.md`

### 4.12 Configurações do negócio

Consultar:

- `docs/CONFIGURACOES_NEGOCIO.md`
- `docs/DESIGN.md`
- `docs/REGRAS_NEGOCIO.md`

### 4.13 Deploy, backup e produção

Consultar:

- `docs/DEPLOY.md`
- `docs/BACKUP.md`
- `docs/SEGURANCA.md`

### 4.14 Testes

Consultar:

- `docs/TESTES.md`
- documentação específica do módulo alterado.

---

## 5. Hierarquia de autoridade da documentação

Quando houver conflito entre fontes do projeto, usar esta ordem de prioridade:

1. `docs/REGRAS_NEGOCIO.md`
2. ADRs aceitos em `docs/adr/`
3. `docs/ARQUITETURA.md`
4. documentação específica do módulo
5. `docs/API.md` e `docs/DATABASE.md`
6. `docs/DESIGN.md` e `docs/UX_WRITING.md`
7. código existente

O código antigo **não prevalece automaticamente** sobre uma regra de negócio mais recente e documentada.

Quando uma decisão nova alterar uma decisão arquitetural anterior, criar ou atualizar um ADR em vez de modificar silenciosamente a arquitetura.

---

## 6. Antes de escrever código

Antes da primeira alteração, o agente deve identificar:

- qual funcionalidade está sendo criada ou alterada;
- qual versão do roadmap está sendo trabalhada;
- quais regras de negócio se aplicam;
- quais tabelas ou relacionamentos podem ser afetados;
- quais endpoints podem ser afetados;
- quais permissões são necessárias;
- quais dados pessoais serão tratados;
- quais documentos precisam ser atualizados;
- quais testes deverão ser executados;
- se haverá alteração visual que exige validação em tela;
- se a mudança exige nova versão, tag e GitHub Release.

Se alguma dessas respostas não estiver clara e a decisão puder alterar o comportamento do produto, não presumir. Consultar a documentação ou pedir decisão.

---

## 7. Padrão obrigatório de código

Todo código deve seguir `docs/CODING_STANDARDS.md`.

Regras gerais:

- comentários técnicos em português do Brasil;
- linguagem natural, direta e útil entre desenvolvedores;
- evitar comentários com cara de texto automático ou burocrático;
- explicar principalmente **por que** determinada decisão existe;
- não comentar sintaxe óbvia apenas para aumentar a quantidade de comentários;
- funções, classes, módulos, fluxos relevantes e blocos não triviais devem possuir explicação adequada;
- arquivos de código devem possuir o cabeçalho padronizado definido em `docs/CODING_STANDARDS.md`;
- regras de negócio importantes não podem existir apenas no código;
- qualquer regra nova deve ser registrada na documentação correspondente.

---

## 8. Cabeçalho obrigatório nos arquivos de código

O cabeçalho padrão deve conter, quando aplicável:

- projeto VoltX;
- autor;
- curso;
- instituição de ensino;
- cidade e estado;
- telefone profissional informado para o projeto;
- nome do arquivo;
- data e hora da criação;
- data e hora da última modificação;
- finalidade do arquivo;
- principais ligações com outros arquivos ou módulos;
- documentos relacionados.

O formato exato para TypeScript, CSS, SQL e demais linguagens deve ser consultado em `docs/CODING_STANDARDS.md`.

A data existente no cabeçalho serve como contexto humano e **não substitui o histórico do Git**.

---

## 9. Idioma da interface

Toda interface destinada ao usuário deve estar em português do Brasil.

Isso inclui:

- botões;
- menus;
- labels;
- placeholders;
- tooltips;
- mensagens de validação;
- toasts;
- modais;
- telas vazias;
- estados de carregamento;
- erros;
- páginas 404 e 500;
- e-mails;
- notificações;
- status apresentados ao cliente;
- mensagens do chat;
- mensagens do painel administrativo.

Não deixar textos como:

- `Save`
- `Cancel`
- `Loading...`
- `Delete`
- `Invalid password`
- `Not found`
- `Something went wrong`

Usar equivalentes em PT-BR, seguindo `docs/UX_WRITING.md`.

Enums e nomes técnicos internos podem permanecer em inglês quando isso fizer sentido para o código, mas a camada visual deve traduzir corretamente.

---

## 10. Segurança

Segurança não é funcionalidade opcional nem item para adicionar no final.

Nunca:

- confiar apenas na validação do frontend;
- concatenar dados do usuário diretamente em SQL;
- armazenar senhas em texto puro;
- registrar senha em log;
- executar conteúdo fornecido pelo usuário como código;
- permitir HTML não sanitizado no CMS;
- permitir upload sem validação real no backend;
- confiar apenas na extensão do arquivo;
- expor dados de um cliente para outro;
- colocar segredo, token ou senha no repositório;
- tratar `robots.txt` como mecanismo de segurança;
- usar URL obscura do painel como única proteção;
- remover registros históricos relevantes sem verificar regras de retenção e LGPD.

Consultas ao banco devem usar ORM e/ou consultas parametrizadas.

Senhas são dados opacos. Não remover caracteres especiais da senha para tentar impedir injeção. A arquitetura deve garantir que a senha nunca seja interpretada como SQL, HTML, JavaScript ou comando de shell.

Consultar sempre `docs/SEGURANCA.md` e `docs/VALIDACAO_DADOS.md`.

---

## 11. Validação e normalização de dados

Cada tipo de dado possui regra própria.

Exemplos:

- telefone deve ser validado e normalizado;
- CPF deve ter formato e dígitos verificadores validados;
- CEP deve ser normalizado e consultado quando aplicável;
- nomes devem aceitar caracteres legítimos do português, acentos, apóstrofos e hífens quando válidos;
- endereços devem aceitar pontuação legítima;
- e-mails devem ser validados;
- uploads devem ser verificados no backend;
- conteúdo HTML permitido deve passar por sanitização específica.

Não criar listas simplistas de "caracteres proibidos" como substituto para segurança real.

Consultar `docs/VALIDACAO_DADOS.md`.

---

## 12. CEP e endereços

Todo formulário que utilizar CEP deve seguir `docs/ENDERECOS_CEP.md`.

Comportamento esperado:

1. usuário informa o CEP;
2. sistema normaliza o valor;
3. consulta serviço de CEP configurado;
4. tenta preencher logradouro, bairro, cidade e UF;
5. mantém número, complemento e dados específicos sob controle do usuário;
6. se a consulta falhar, permitir preenchimento manual;
7. endereços fora da área padrão de atendimento não devem ser recusados automaticamente;
8. quando fora da área padrão, exibir aviso e opção de contato pelo WhatsApp.

---

## 13. Configurações do negócio

Dados comerciais mutáveis não devem ficar duplicados ou hardcoded em componentes.

Exemplos:

- nome profissional;
- nome da empresa;
- WhatsApp;
- telefone;
- e-mail;
- endereço;
- área de atendimento;
- texto "Sobre mim";
- fotografia profissional;
- formação acadêmica exibida publicamente;
- links institucionais.

Esses dados devem vir da fonte central definida em `docs/CONFIGURACOES_NEGOCIO.md`.

Se o número de WhatsApp for alterado no painel, todos os CTAs, páginas, mensagens e links que dependam dele devem passar a usar automaticamente o novo valor.

---

## 14. Uploads e mídia

Fotos de perfil, imagens do blog, anexos do chat, fotos de serviços e demais mídias devem ser enviadas pelo dispositivo do usuário.

Não depender de URL externa fornecida pelo usuário como mecanismo principal de upload.

Arquivos não devem ficar presos ao filesystem efêmero de um container Docker.

Usar storage persistente conforme `docs/MIDIA_UPLOADS.md` e `docs/ARQUITETURA.md`.

---

## 15. Editor de conteúdo e rascunhos

O editor do CMS deve seguir `docs/EDITOR_CONTEUDO.md`.

Regras obrigatórias já definidas:

- permitir edição visual;
- permitir Markdown;
- permitir HTML sanitizado;
- permitir upload de imagens pelo dispositivo;
- permitir imagens entre parágrafos ou posicionadas conforme opções válidas do design;
- permitir títulos, parágrafos, listas, links, âncoras e blocos especiais;
- permitir hashtags;
- permitir salvar rascunho manualmente;
- possuir autosave;
- preservar imagens do rascunho;
- permitir retomar a edição aproximadamente do ponto onde o usuário parou;
- manter histórico de versões conforme regras documentadas;
- nunca executar JavaScript arbitrário inserido pelo editor.

---

## 16. Hashtags

Hashtags não são apenas texto decorativo.

Seguir `docs/HASHTAGS.md`.

Ao clicar em uma hashtag, o usuário deve ser direcionado para a página agregadora correspondente, exibindo apenas conteúdos públicos e permitidos.

Não criar sistemas paralelos de tags fora do padrão documentado.

---

## 17. Chat e protocolos

O chat deve seguir `docs/CHAT.md` e `docs/PROTOCOLOS_OS.md`.

Regras já definidas:

- somente clientes autenticados usam o chat interno do site;
- visitantes recebem CTA para WhatsApp;
- cada atendimento possui protocolo;
- encerrar atendimento não apaga conversa;
- quando o atendimento estiver encerrado e o cliente iniciar novo contato, deve nascer novo protocolo quando não houver outro atendimento aberto aplicável;
- o histórico de protocolos anteriores permanece visível;
- deve existir separação visual entre atendimentos antigos e novos;
- mensagens antigas podem ser citadas;
- a foto e o nome do cliente no painel levam ao perfil administrativo;
- o perfil administrativo exibe histórico de agendamentos e demais vínculos;
- conversas podem possuir prioridade;
- prioridades altas ficam acima das conversas normais;
- o painel deve permitir busca por protocolo, cliente, OS, orçamento, agendamento e palavras das mensagens;
- filtros devem incluir data, hoje, recentes, não lidas, precisa de resposta, aguardando cliente, abertas e encerradas;
- conversas encerradas continuam pesquisáveis;
- histórico nunca deve ser apagado apenas porque um atendimento foi encerrado.

---

## 18. Protocolos, orçamento, OS e agendamentos

Seguir `docs/PROTOCOLOS_OS.md`, `docs/ORCAMENTOS.md` e `docs/AGENDAMENTOS.md`.

Conceitos não devem ser misturados:

- **protocolo:** identifica uma solicitação ou atendimento;
- **orçamento:** proposta comercial relacionada a uma necessidade;
- **OS:** ordem de serviço vinculada à execução real de um trabalho;
- **agendamento:** reserva de data e horário para atendimento.

Uma mesma OS pode possuir vários protocolos relacionados ao longo da vida do serviço.

Códigos gerados não devem ser reutilizados.

Histórico deve ser preservado.

---

## 19. Agendamentos criados pelo administrador

O painel administrativo pode criar agendamentos diretamente para clientes.

Quando o cliente ainda não possuir conta ativa:

1. criar pré-cadastro;
2. gerar código/token de ativação seguro;
3. permitir envio do convite ao cliente;
4. cliente usa o código para concluir o cadastro;
5. vínculos anteriores permanecem associados;
6. o agendamento passa a aparecer na conta ativada;
7. deve continuar visível que aquele agendamento foi criado originalmente pela VoltX/administração.

Nunca reatribuir silenciosamente a autoria original do agendamento.

---

## 20. Agenda e suspensão de atendimentos

O administrador deve poder suspender novos atendimentos.

Quando suspensos:

- o site informa indisponibilidade de novos horários;
- o WhatsApp continua disponível quando configurado;
- agendamentos existentes permanecem acessíveis;
- a suspensão não apaga agenda anterior;
- motivo público e motivo interno podem ser tratados separadamente.

Consultar `docs/AGENDAMENTOS.md` e `docs/CONFIGURACOES_NEGOCIO.md`.

---

## 21. Clientes sem conta solicitando orçamento

Pedidos de orçamento sem conta devem exigir WhatsApp e seguir as proteções definidas em `docs/ORCAMENTOS.md` e `docs/SEGURANCA.md`.

Não assumir que apenas exigir um número digitado torna a solicitação autêntica.

O fluxo pode exigir verificação do número, limites de tentativa, rate limiting e outras medidas previstas na documentação.

---

## 22. LGPD e exclusão de conta

Clientes devem possuir acesso às opções definidas em `docs/LGPD.md`.

A área de privacidade deve contemplar, conforme as regras finais documentadas:

- acesso aos dados;
- correção;
- exportação quando aplicável;
- consentimentos;
- preferências de marketing;
- solicitação de exclusão da conta.

Excluir conta não significa necessariamente apagar imediatamente todo registro existente.

Antes de eliminar ou anonimizar dados, seguir regras de retenção, obrigações legais, histórico, auditoria e demais bases aplicáveis descritas em:

- `docs/LGPD.md`
- `docs/RETENCAO_DADOS.md`
- `docs/POLITICA_PRIVACIDADE.md`

---

## 23. Sistema de temas

O tema institucional da VoltX é independente da identidade de gênero do usuário.

Temas visuais são preferências escolhidas pelo próprio usuário.

Nunca inferir automaticamente um tema por identidade de gênero.

O sistema deve permitir temas como:

- VoltX padrão;
- azul;
- rosa;
- violeta;
- rainbow/Pride;
- outros presets documentados.

Componentes que podem herdar tokens temáticos incluem:

- borda do avatar;
- nome do usuário;
- links e hovers;
- ícones;
- chat;
- balões de comentário;
- barra de progresso de leitura;
- efeitos visuais permitidos.

Animações devem possuir opção para reduzir ou desativar e respeitar `prefers-reduced-motion`.

Consultar `docs/DESIGN.md`.

---

## 24. Barra de progresso de leitura

Artigos podem exibir barra fina de progresso de leitura.

A barra deve representar o progresso dentro do conteúdo principal do artigo e não simplesmente a altura total da página com comentários e rodapé.

A cor pode herdar o tema visual ativo conforme `docs/DESIGN.md`.

---

## 25. SEO, robots.txt e sitemap

Consultar `docs/SEO.md`.

Regras básicas:

- `robots.txt` não é mecanismo de segurança;
- áreas privadas não devem depender de `Disallow` para proteção;
- sitemap deve listar apenas URLs públicas apropriadas;
- conteúdo privado, perfil, chat, painel, agendamentos privados e APIs não entram no sitemap público;
- o sitemap deve ser gerado/adaptado automaticamente conforme conteúdo público publicado;
- posts e serviços públicos podem entrar no sitemap;
- páginas de hashtag só devem ser indexadas conforme regra de SEO documentada.

---

## 26. API

A API deve seguir `docs/API.md`.

Diretrizes já definidas:

- REST;
- versionamento, por exemplo `/api/v1/...`;
- HATEOAS com propósito real;
- contratos consistentes;
- métodos HTTP corretos;
- códigos HTTP corretos;
- paginação;
- filtros;
- ordenação;
- autenticação;
- autorização;
- idempotência quando aplicável;
- rate limiting;
- uploads controlados;
- WebSocket para funcionalidades em tempo real quando definido pela arquitetura.

Links HATEOAS devem refletir o estado real do recurso quando isso for útil.

Não adicionar ações impossíveis apenas para manter formato uniforme.

---

## 27. Banco de dados

Antes de qualquer alteração estrutural:

1. consultar `docs/DATABASE.md`;
2. verificar regras de negócio relacionadas;
3. criar migration apropriada;
4. preservar histórico quando exigido;
5. verificar impacto de LGPD e retenção;
6. atualizar `docs/DATABASE.md` no mesmo trabalho;
7. atualizar `docs/API.md` se o contrato externo mudar.

Nada importante deve existir apenas no armazenamento local do navegador.

Dados persistentes devem usar infraestrutura definida em `docs/ARQUITETURA.md`.

---

## 28. Git e fluxo de desenvolvimento

Seguir `docs/GIT_WORKFLOW.md`.

Regra geral:

```text
branch
→ implementação
→ testes
→ documentação
→ validação local
→ validação visual quando aplicável
→ commit
→ merge
→ versão
→ tag
→ GitHub Release
```

Não desenvolver diretamente na `main`, salvo decisão explicitamente documentada para tarefa excepcional.

Uma feature por vez sempre que possível.

Não deixar alterações soltas de uma funcionalidade enquanto inicia outra sem necessidade.

---

## 29. Versionamento, tags, Releases e Packages

Seguir `docs/VERSIONAMENTO.md`.

O projeto usa versionamento semântico.

Durante a fase inicial, versões podem seguir:

```text
v0.MINOR.PATCH
```

Interpretação geral:

- `PATCH`: correção compatível;
- `MINOR`: nova funcionalidade compatível;
- `MAJOR`: mudança incompatível ou marco principal.

Não criar tag para todo commit pequeno.

Uma versão deve representar um estado funcional validado.

Quando uma versão for concluída:

1. atualizar `CHANGELOG.md`;
2. criar tag anotada;
3. publicar a tag;
4. criar GitHub Release;
5. publicar Packages/containers apenas quando fizer parte do fluxo definido.

GitHub Packages não substitui Releases.

Releases documentam versões do produto; Packages armazenam artefatos distribuíveis, como imagens Docker ou pacotes reutilizáveis.

---

## 30. Documentação viva

Documentação faz parte da implementação.

Se uma alteração mudar comportamento, atualizar a documentação correspondente no mesmo trabalho.

Exemplos:

```text
Mudou regra de negócio
→ REGRAS_NEGOCIO.md

Mudou API
→ API.md

Mudou banco
→ DATABASE.md

Mudou layout ou tema
→ DESIGN.md

Mudou chat
→ CHAT.md

Mudou agendamento
→ AGENDAMENTOS.md

Mudou segurança
→ SEGURANCA.md
```

Não deixar para "documentar depois" uma mudança que já alterou o contrato ou comportamento do sistema.

---

## 31. ADRs

Decisões arquiteturais importantes devem ser registradas em `docs/adr/`.

Exemplos previstos:

- PostgreSQL como banco principal;
- NestJS no backend;
- WebSocket/Socket.IO no chat;
- painel administrativo separado;
- soft delete onde aplicável;
- object storage para mídias;
- REST + HATEOAS;
- estratégia de autenticação;
- estratégia de versionamento.

Não substituir tecnologias estruturais silenciosamente.

---

## 32. Testes e validação antes de concluir

Antes de declarar uma tarefa concluída, verificar quando aplicável:

- build;
- lint;
- typecheck;
- testes unitários;
- testes de integração;
- testes E2E;
- migrations;
- banco persistente;
- autorização;
- validação de inputs;
- uploads;
- responsividade;
- tema claro/escuro;
- temas personalizados quando afetados;
- mensagens em PT-BR;
- ausência de erro visível em inglês;
- acessibilidade básica;
- regressões;
- documentação;
- validação visual.

Alterações de interface não devem ser consideradas concluídas sem validação visual.

---

## 33. Não mascarar erros

O sistema deve fornecer feedback visível e útil ao usuário.

Não engolir falhas silenciosamente.

Mensagens técnicas internas podem ser registradas em logs apropriados, mas o usuário deve receber mensagem clara em PT-BR, sem exposição de stack trace, SQL, segredo ou detalhe sensível.

---

## 34. Não usar dados fictícios em produção

Mocks, seeds e dados artificiais podem existir apenas quando explicitamente previstos para desenvolvimento e teste.

Nunca apresentar dados simulados como se fossem informações reais do cliente ou do negócio.

Contadores, visualizações, curtidas, status e históricos reais devem vir das fontes persistentes correspondentes.

---

## 35. Quando parar e pedir decisão

O agente deve parar antes de implementar quando:

- documentos relevantes se contradisserem;
- faltar regra para uma situação que altera comportamento do produto;
- houver risco de perda de dados;
- houver mudança incompatível de API;
- houver mudança estrutural de banco não prevista;
- houver dúvida de autorização ou privacidade;
- uma decisão puder alterar retenção de dados pessoais;
- uma tecnologia estrutural precisar ser substituída;
- uma regra existente precisar ser removida;
- o escopo solicitado ultrapassar claramente a versão atual do roadmap.

Não inventar uma decisão apenas para terminar mais rápido.

---

## 36. Checklist final do agente

Antes de entregar qualquer alteração, responder internamente:

- [ ] Li o `AGENTS.md`?
- [ ] Consultei o roadmap?
- [ ] Li as regras de negócio relacionadas?
- [ ] Consultei arquitetura e ADRs relevantes?
- [ ] Consultei a documentação específica do módulo?
- [ ] Mantive a interface em PT-BR?
- [ ] Mantive validação obrigatória no backend?
- [ ] Evitei SQL concatenado e outros atalhos inseguros?
- [ ] Preservei histórico quando exigido?
- [ ] Atualizei documentação junto da mudança?
- [ ] Executei os testes aplicáveis?
- [ ] Fiz validação visual quando alterei UI?
- [ ] Verifiquei se a mudança exige nova versão/tag/Release?
- [ ] Evitei criar regra paralela para algo que já existe?

Se alguma resposta for "não", a tarefa ainda não está pronta para ser considerada concluída.

---

## 37. Resumo para agentes com pouco contexto

Se você chegou ao projeto sem conhecer a VoltX:

1. pare;
2. leia este arquivo inteiro;
3. leia `ROADMAP.md`;
4. leia `docs/ARQUITETURA.md`;
5. leia `docs/REGRAS_NEGOCIO.md`;
6. leia `docs/CODING_STANDARDS.md`;
7. consulte a documentação específica da funcionalidade solicitada;
8. só então altere código.

A prioridade do projeto é manter **consistência, segurança, rastreabilidade, documentação viva e evolução por versões**, sem reinventar o que já foi decidido.
