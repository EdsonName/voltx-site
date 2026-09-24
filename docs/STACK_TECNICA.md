# Stack técnica da VoltX

## Propósito e autoridade

Inventário operacional canônico das tecnologias, aplicações, ferramentas, serviços e versões da VoltX. A matriz inicial se aplica à **v0.2.0 em desenvolvimento — Fase 1: Fundação técnica**, antes do bootstrap do workspace.

Este documento centraliza aprovação de versões, situação de adoção, fontes, suporte e revisões. Não substitui [ARQUITETURA.md](ARQUITETURA.md), [ADRs aceitos](../README.md#23-documentação), [DEPLOY.md](DEPLOY.md), [DATABASE.md](DATABASE.md) ou documentos dos módulos. A hierarquia de [AGENTS.md](../AGENTS.md#5-hierarquia-de-autoridade-da-documentação) permanece válida: regras de negócio, ADRs e arquitetura prevalecem sobre este inventário. Mudança arquitetural exige decisão formal, não simples edição de uma linha da tabela.

As versões abaixo foram aprovadas pelo responsável após as pesquisas das Etapas 2A e 2A.1. A última verificação técnica dessa matriz é **23/09/2026**, independentemente da data de edição deste arquivo. Não representa nova pesquisa nem atualização automática das versões.

## Situação de adoção e status

O repositório contém documentação, pastas com READMEs de finalidade e configuração raiz do workspace aceita pelo pnpm, com lockfile inicial validado. Aplicações e pacotes possuem sete manifests mínimos e são reconhecidos como membros do workspace; frameworks, código dos pacotes e infraestrutura executável ainda não foram inicializados. Git e os remotos já fazem parte do fluxo operacional; suas versões não foram inventariadas. Nenhum serviço da aplicação é declarado implantado por este catálogo.

| Status | Significado |
|---|---|
| APROVADA | Versão aprovada para bootstrap/uso; não significa instalada ou homologada. |
| VERSÃO PENDENTE | Componente aprovado cuja versão técnica ainda precisa ser pesquisada e escolhida. |
| VERSÃO OBSERVADA | Versão identificada no ambiente; não implica versão mínima ou fixação obrigatória pelo projeto. |
| VERSÃO OPERACIONAL A INVENTARIAR | Versão instalada ainda não coletada; inventariar não implica fixar uma versão exata. |
| NÃO SE APLICA | Não há versão operacional de software a controlar para esta entidade; a escolha arquitetural permanece sujeita a revisão. |
| ESPECIFICAÇÃO APROVADA / VERSÃO DA ESPECIFICAÇÃO A DEFINIR | Especificação escolhida, cuja edição ainda requer decisão formal. |
| VALIDAÇÃO EXECUTÁVEL PENDENTE | Combinação documentalmente compatível, ainda não homologada pela aplicação. |
| DECISÃO ARQUITETURAL PENDENTE | Tecnologia ou distribuição precisa ser reavaliada antes de sua adoção operacional. |
| DESCONTINUADA | Não usar sem decisão explícita. |

**Situação conjunta da matriz aprovada: VALIDAÇÃO EXECUTÁVEL PENDENTE.** As linhas APROVADA registram a decisão de versão; este estado conjunto registra a ausência de homologação. Não há declaração de prontidão para produção.

## Validação executável

**24/09/2026 — validação executável parcial da fundação (Etapa 2C).**

- Node.js 24.21.0 executado no ambiente de desenvolvimento.
- npm 11.19.0 observado com a distribuição instalada do Node.
- pnpm 12.6.0 executado, com package.json raiz e pnpm-workspace.yaml aceitos.
- pnpm-lock.yaml inicial presente e validado pelo comando `pnpm install --lockfile-only --ignore-scripts` do pnpm 12.6.0.
- `pnpm list --recursive --depth -1` concluído com exit code 0; somente a raiz voltx-site aparece, pois ainda não existem manifests filhos em apps/* e packages/*.
- Nenhum node_modules foi criado e nenhuma dependência da aplicação foi instalada.

A validação é **PARCIAL**. A situação conjunta da matriz continua **VALIDAÇÃO EXECUTÁVEL PENDENTE**: Next.js, React, NestJS, TypeScript, Prisma, PostgreSQL, Redis, Nginx e demais integrações ainda não foram homologados. Este marco não declara prontidão para produção nem substitui a última verificação técnica/documental da matriz, de **23/09/2026**; versões aprovadas, próximas revisões e suporte/EOL permanecem inalterados.

**24/09/2026 — workspace pnpm validado com raiz + sete membros reais (Etapa 2D).**

`pnpm list --recursive --depth -1` reconheceu voltx-site, @voltx/api, @voltx/painel, @voltx/site, @voltx/config, @voltx/types, @voltx/ui e @voltx/validation, com exit code 0 e sem erro de parsing/configuração. Os sete filtros individuais também reconheceram seus respectivos projetos com exit code 0. Os manifests dos membros contêm somente name e private: true, sem dependencies/devDependencies ou dependências específicas.

O comando `pnpm install --lockfile-only --ignore-scripts` executado pelo pnpm 12.6.0 não acrescentou importers vazios ao lockfile. Não houve edição manual; não se atribui causa a esse resultado. Isso não impede reconhecer os diretórios como membros do workspace. Quando a primeira dependência real for adicionada a um membro, a consistência entre manifest e lockfile será validada explicitamente.

A matriz geral continua **VALIDAÇÃO EXECUTÁVEL PENDENTE**, pois frameworks e serviços ainda não foram homologados. Não houve instalação de dependências nem criação de node_modules nesta etapa.

**24/09/2026 — primeiro teste de dependência real em membro concluído (Etapa 2E).**

@voltx/types recebeu TypeScript 6.0.3 como devDependency exata por `pnpm --filter @voltx/types add -D -E typescript@6.0.3 --lockfile-only --ignore-scripts`. O pnpm registrou o importer packages/types com specifier e versão 6.0.3, além dos importers vazios dos demais membros. A consistência manifest × lockfile foi validada por `pnpm install --lockfile-only --frozen-lockfile --ignore-scripts`, com exit code 0 e SHA256 idêntico antes e depois. Nenhum node_modules foi criado na raiz ou no membro.

TypeScript não foi executado nem compilado: esta validação cobre somente manifest, lockfile e workspace. A validação executável do compilador permanece pendente de instalação física, typecheck e compilação apropriada. A matriz geral continua **VALIDAÇÃO EXECUTÁVEL PENDENTE**; versões aprovadas, pesquisa documental de 23/09/2026, próximas revisões e EOL permanecem inalterados.

## Matriz técnica inicial

“Onde é usada” indica o destino planejado, salvo referências explícitas ao fluxo Git existente. Para itens sem versão pesquisada, “Não realizada” significa ausência de verificação técnica de versão, não ausência de decisão documental.

| Tecnologia | Categoria | Finalidade | Onde é usada | Versão aprovada / registro operacional | Status | Última verificação | Próxima revisão | Suporte/EOL | Fonte oficial |
|---|---|---|---|---|---|---|---|---|---|
| Node.js | Runtime | Executar ferramentas e aplicações | Desenvolvimento; site, painel e API | 24 LTS / 24.21.0 | APROVADA | 23/09/2026 | 23/12/2026 | 30/04/2028 (linha 24) | [Oficial](https://github.com/nodejs/Release) |
| pnpm | Gerenciador | Gerenciar dependências e workspaces | Raiz do monorepo | 12.6.0 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://github.com/pnpm/pnpm/releases/tag/v12.6.0) |
| Next.js | Front-end | Renderização e aplicações web | apps/site; apps/painel | 16.3.6 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://nextjs.org/docs/app/getting-started/installation) |
| React | Front-end | Componentes e interface | apps/site; apps/painel; packages/ui | 19.3.0 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://react.dev/versions) |
| React DOM | Front-end | Integração React com o DOM | apps/site; apps/painel | 19.3.0 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://react.dev/reference/react-dom) |
| NestJS | Back-end | API e regras de negócio | apps/api | 12.1.0 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://github.com/nestjs/nest/releases/tag/v12.1.0) |
| TypeScript | Linguagem | Tipagem estática; strict obrigatório | Aplicações e pacotes compartilhados | 6.0.3 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://www.typescriptlang.org/docs/) |
| Prisma CLI | ORM | Schema, geração e migrations | Dependência local de desenvolvimento em apps/api | 7.10.0 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://www.prisma.io/docs/orm/v7) |
| @prisma/client | ORM | Acesso tipado ao banco | apps/api | 7.10.0 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://www.prisma.io/docs/orm/v7) |
| PostgreSQL | Banco | Fonte de verdade e histórico permanente | Serviço autohospedado consumido pela API | 18.6 | APROVADA | 23/09/2026 | 23/12/2026 | 14/11/2030 (linha 18) | [Oficial](https://www.postgresql.org/support/versioning/) |
| Redis | Cache | Cache, filas e estado temporário | Serviço autohospedado; API e chat | 8.10.2 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://github.com/redis/redis/releases/tag/8.10.2) |
| Nginx | Infraestrutura | Proxy reverso, HTTPS e roteamento | infrastructure/nginx; borda dos serviços | 1.30.5 | APROVADA | 23/09/2026 | 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://nginx.org/en/download.html) |
| MinIO | Armazenamento | Objetos compatíveis com S3 | Serviço autohospedado originalmente previsto | SEM VERSÃO APROVADA | DECISÃO ARQUITETURAL PENDENTE | 23/09/2026 (situação upstream) | Antes da implementação/implantação; acompanhamento até 23/12/2026 | Community sem manutenção; upstream arquivado em 25/04/2026 | [Oficial](https://github.com/minio/minio) |
| Tailwind CSS | UI | Estilização | Site, painel e packages/ui | A DEFINIR | VERSÃO PENDENTE | Não realizada para versão | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://tailwindcss.com/docs) |
| shadcn/ui | UI | Base de componentes | Site, painel e packages/ui | A DEFINIR | VERSÃO PENDENTE | Não realizada para versão | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://ui.shadcn.com/docs) |
| Socket.IO | Tempo real | Eventos e comunicação do chat | API, site e painel | A DEFINIR | VERSÃO PENDENTE | Não realizada para versão | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://socket.io/docs/v4/) |
| WebSocket | Tempo real | Protocolo de comunicação bidirecional | Chat; implementação associada ao Socket.IO | NÃO SE APLICA — protocolo | NÃO SE APLICA | Não se aplica à versão de dependência | 23/12/2026 — revisão arquitetural | NÃO SE APLICA | [Oficial](https://www.rfc-editor.org/rfc/rfc6455) |
| Docker | Infraestrutura | Execução em containers | infrastructure/docker; ambientes futuros | A DEFINIR | VERSÃO PENDENTE | Não realizada para versão | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://docs.docker.com/) |
| Docker Compose | Infraestrutura | Composição dos serviços | Infraestrutura futura | A DEFINIR | VERSÃO PENDENTE | Não realizada para versão | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://docs.docker.com/compose/) |
| Git | Desenvolvimento | Histórico e branches | Repositório local e remotos existentes | VERSÃO OPERACIONAL A INVENTARIAR | VERSÃO OPERACIONAL A INVENTARIAR | Versão local não coletada | 23/12/2026 — inventário operacional | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://git-scm.com/docs) |
| GitHub CLI | Operação | Releases e operações GitHub | Ambiente de desenvolvimento/operação | VERSÃO OBSERVADA NO AMBIENTE: 2.101.0 | VERSÃO OBSERVADA | Verificação anterior informada pelo responsável; data específica não registrada | 23/12/2026 — revisão operacional | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://cli.github.com/manual/) |
| Gitea | Operação | Hospedagem Git principal | Remoto origin já configurado; servidor autohospedado | VERSÃO DO SERVIDOR A INVENTARIAR | VERSÃO OPERACIONAL A INVENTARIAR | Versão instalada não coletada | 23/12/2026 — inventário do servidor | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://docs.gitea.com/) |
| GitHub | Operação | Espelho público e Releases | Remoto github já configurado; serviço gerenciado | NÃO SE APLICA — versão do serviço | NÃO SE APLICA | Não se aplica à versão do serviço | 23/12/2026 — revisão arquitetural | NÃO SE APLICA | [Oficial](https://docs.github.com/) |
| ESLint | Desenvolvimento | Análise estática de código | Aplicações e pacotes futuros | A DEFINIR | VERSÃO PENDENTE | Não realizada para versão | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://eslint.org/docs/latest/) |
| Argon2id | Back-end | Algoritmo de hashing escolhido arquiteturalmente | Autenticação na API; implementação/biblioteca a escolher posteriormente | NÃO SE APLICA — algoritmo | NÃO SE APLICA | Não se aplica à versão de pacote | 23/12/2026 — revisão arquitetural | NÃO SE APLICA | [Oficial](https://www.rfc-editor.org/rfc/rfc9106) |
| OpenAPI | Back-end | Especificação dos contratos HTTP | API; edição ainda não definida formalmente | VERSÃO DA ESPECIFICAÇÃO A DEFINIR | ESPECIFICAÇÃO APROVADA / VERSÃO DA ESPECIFICAÇÃO A DEFINIR | Edição não definida | Antes da adoção; acompanhamento em 23/12/2026 | NÃO PUBLICADO / NÃO CONFIRMADO | [Oficial](https://spec.openapis.org/oas/latest.html) |
| Swagger | Back-end | Ecossistema de ferramentas para contratos HTTP | API; pacote/ferramenta concreta ainda não aprovada | NÃO SE APLICA ao ecossistema; selecionar ferramenta antes de atribuir versão | NÃO SE APLICA | Ferramenta concreta não selecionada | Antes da seleção; acompanhamento em 23/12/2026 | NÃO SE APLICA ao ecossistema | [Oficial](https://swagger.io/tools/) |
| Inter | UI | Fonte principal da interface | Site e painel | NÃO SE APLICA — fonte visual, sem artefato versionado específico adotado | NÃO SE APLICA | Não se aplica ao versionamento operacional atual | 23/12/2026 — revisão arquitetural/visual | NÃO SE APLICA | [Oficial](https://rsms.me/inter/) |

WebSocket é protocolo; GitHub é serviço gerenciado; Inter é uma escolha tipográfica; Argon2id é um algoritmo aprovado. Não se exige versão operacional de software dessas entidades. A biblioteca concreta de Argon2id será escolhida posteriormente. Inter só exigirá rastreio de versão se for adotado um pacote ou artefato versionado específico. Números de RFC não são versões de dependências.

OpenAPI é a especificação, com edição a definir. Swagger é um ecossistema de ferramentas: nenhuma versão será atribuída antes de existir pacote/ferramenta concreta aprovada. Essa seleção é distinta da definição da edição OpenAPI.

Ferramentas operacionais podem ter versão observada, versão mínima quando houver requisito futuro ou versão fixada apenas com motivo técnico. GitHub CLI 2.101.0 é uma observação anterior do ambiente informada pelo responsável, não um pin obrigatório nem uma nova coleta nesta revisão. Git ainda requer inventário local; Gitea requer inventário da versão efetiva do servidor. Nenhuma conexão ao servidor foi realizada para esse levantamento.

Os links dos itens VERSÃO PENDENTE identificam suas fontes oficiais para a pesquisa futura; não representam consulta técnica de versão em 23/09/2026. NÃO PUBLICADO / NÃO CONFIRMADO não afirma inexistência de suporte: apenas indica que nenhum calendário foi confirmado neste inventário.

## Aplicações e pacotes

| Unidade | Finalidade | Situação |
|---|---|---|
| apps/site | Site público e área do cliente; Next.js e React | Pasta com README; aplicação não inicializada |
| apps/painel | Administração separada; Next.js e React | Pasta com README; aplicação não inicializada |
| apps/api | API NestJS, Prisma e integração com serviços | Pasta com README; aplicação não inicializada |
| packages/ui | Componentes visuais compartilhados | Pasta com README; pacote não inicializado |
| packages/types | Tipos e contratos compartilhados | Pasta com README; pacote não inicializado |
| packages/config | Configurações técnicas compartilhadas | Pasta com README; pacote não inicializado |
| packages/validation | Validações compartilháveis, sem substituir validação no backend | Pasta com README; pacote não inicializado |
| infrastructure/nginx, infrastructure/docker e infrastructure/scripts | Configuração de infraestrutura e automação | Pastas com READMEs; sem infraestrutura executável |

O formato aprovado para o workspace é pnpm, com `pnpm-workspace.yaml`, inclusão de `apps/*` e `packages/*` e referências `workspace:*` para dependências internas. O bootstrap permanece pendente. Mantêm-se o ignore seletivo e LF como padrão textual, com CRLF apenas para `.bat`/`.cmd` quando apropriado; os respectivos arquivos ainda não existem.

## Origem das escolhas documentais

- [ARQUITETURA.md](ARQUITETURA.md), seções 7, 8 e 12: aplicações, stack principal e Argon2id.
- [DESIGN.md](DESIGN.md), seção 6: Inter como fonte principal; Manrope, Outfit e Poppins são alternativas permitidas, não adoções obrigatórias.
- [CHAT.md](CHAT.md), seção 3, e [ADR 0003](adr/0003-websocket-chat.md): Socket.IO/WebSocket, PostgreSQL e Redis.
- [DEPLOY.md](DEPLOY.md): Docker, Compose, Nginx e serviços autohospedados.
- [CODING_STANDARDS.md](CODING_STANDARDS.md), seção 91: ESLint. A preferência por Prettier na seção 92 não é convertida aqui em adoção fechada.
- [GIT_WORKFLOW.md](GIT_WORKFLOW.md): Git, Gitea principal, GitHub espelho e GitHub CLI.
- [ADR 0007](adr/0007-rest-hateoas.md), seção 35: documentação OpenAPI/Swagger.

REST, HATEOAS, HTTPS, persistência e ausência de dependência SaaS obrigatória para funções essenciais continuam sendo diretrizes arquiteturais, não novas dependências instaláveis. O GitHub usado no desenvolvimento não é requisito de runtime da aplicação.

Vitest, Jest e Playwright aparecem como possibilidades em [TESTES.md](TESTES.md), seção 41; a seleção e distribuição por aplicativo continuam abertas. A biblioteca do editor também permanece pendente em [ARQUITETURA.md](ARQUITETURA.md), seção 29. Não se consideram adotados ferramentas opcionais, alternativas rejeitadas, dependências transitivas ou tecnologias exclusivas do protótipo.

As referências anteriores a versões ainda pendentes no README e no estado inicial do roadmap descrevem o estágio anterior à aprovação desta matriz. Este catálogo registra a decisão posterior de versões sem marcar bootstrap, implementação ou fase como concluídos; ROADMAP e arquitetura não são alterados por este registro.

## Compatibilidade e validação pendente

- Node 24.21.0 é a referência da linha 24 LTS.
- pnpm 12.6.0 substitui a proposta de pesquisa 12.5.1; isso não representa migração instalada. Ver [release oficial](https://github.com/pnpm/pnpm/releases/tag/v12.6.0).
- TypeScript 6.0.3 é a versão única aprovada, com strict obrigatório. A revisão considerou o fluxo de upgrade do [Nest 12](https://docs.nestjs.com/migration-guide), que utiliza TypeScript 6, e os requisitos de CLI/schematics. As versões dessas ferramentas auxiliares deverão ser fixadas antes de seu uso; nenhuma aprovação implícita é concedida a seus defaults de testes ou lint.
- Prisma CLI e client permanecem em 7.10.0. Não usar resolução flutuante para Prisma 8: a [situação de releases consultada](https://www.prisma.io/docs/orm/release-status) indicava release candidate. A recomendação de TypeScript 5.9.x no [guia Prisma 7](https://www.prisma.io/docs/orm/v6/more/upgrades/to-v7) exige validar a combinação aprovada com TypeScript 6, mesmo atendendo aos requisitos publicados.
- A homologação futura inclui instalação por lockfile, peers, build/typecheck dos frontends, compilação e inicialização Nest, decorators, geração/carregamento do client Prisma, consulta ao PostgreSQL e execução Linux/Docker.
- O formato ESM/CommonJS da API, imports e geração do client precisam ser coerentes; nenhuma configuração é criada por este documento.
- PostgreSQL 18 exige observar os caminhos de volume e PGDATA da [imagem oficial](https://github.com/docker-library/docs/blob/master/postgres/README.md). Artefatos de dependências do Windows não devem ser transportados indiscriminadamente para Linux.

## Pendência — armazenamento S3 compatível

MinIO foi escolhido originalmente em [ARQUITETURA.md](ARQUITETURA.md) e no [ADR 0006](adr/0006-object-storage.md). A situação da distribuição Community mudou: o repositório upstream foi arquivado em **25/04/2026**, declara ausência de manutenção e informa distribuição somente por código-fonte, com binários históricos sem atualização. Fonte verificada em 23/09/2026: [MinIO oficial](https://github.com/minio/minio).

**Não existe nesta etapa uma distribuição Community atual aprovada para produção da VoltX. Nenhuma versão MinIO está aprovada nesta matriz.**

O status é **DECISÃO ARQUITETURAL PENDENTE**. A decisão precisa ser reaberta antes da implementação/implantação do armazenamento. Construir uma imagem própria não elimina a questão da manutenção upstream.

Nenhum substituto foi escolhido. O ADR 0006 permanece inalterado nesta tarefa; o catálogo sinaliza a necessidade de revisão formal, sem revogar nem substituir silenciosamente a decisão original. Essa pendência não impede criar os arquivos-base do workspace, mas impede considerar o armazenamento liberado.

## Calendário de revisão

A política geral é revisão trimestral. Para a matriz pesquisada em **23/09/2026**, a próxima revisão programada é **23/12/2026**. A revisão trimestral é o limite máximo normal.

Antecipar a revisão diante de:

- vulnerabilidade relevante;
- fim de suporte;
- release de segurança;
- incompatibilidade entre componentes;
- atualização necessária para uma release da VoltX;
- mudança de infraestrutura;
- dependência bloqueadora.

Próxima revisão não é data automática de atualização. Revisar não significa obrigatoriamente atualizar. Componentes com VERSÃO PENDENTE devem ter sua versão pesquisada e aprovada antes da adoção; a revisão trimestral não autoriza esperar quando forem bloqueadores. Itens NÃO SE APLICA continuam sujeitos a revisão arquitetural, mesmo sem versão operacional a controlar.

Cada revisão deve registrar evidências, data real da verificação, decisão de manter ou atualizar e próxima revisão. Não substituir datas históricas pela data de uma edição meramente editorial. Suporte/EOL deve ser confirmado oficialmente; não deduzir calendário de manutenção pelo número da versão.

## Política de atualização

1. Consultar a fonte oficial.
2. Avaliar changelog e release notes.
3. Avaliar segurança.
4. Conferir a compatibilidade da matriz.
5. Testar localmente.
6. Validar Docker quando aplicável.
7. Atualizar a documentação.
8. Atualizar o lockfile quando aplicável.
9. Registrar a mudança no CHANGELOG.
10. Somente depois integrar à main, seguindo [GIT_WORKFLOW.md](GIT_WORKFLOW.md).

Se a alteração do lockfile modificar a resolução validada, repetir os testes afetados antes da integração. Atualizações de major não devem ser automáticas. Atualizações de segurança podem exigir revisão antecipada.

Para imagens, usar versão completa e variante explícita, com digest validado na entrega quando aplicável. Não usar `latest` como política de produção. Um digest fixo exige atualização deliberada para receber correções. Nenhum digest ou tag de distribuição adicional é aprovado implicitamente pela versão do serviço nesta tabela.

## Relação com package.json e referências executáveis

Este documento é a referência humana/documental. Quando o workspace existir, `package.json`, lockfile, Dockerfiles, Compose e demais manifests serão as referências executáveis das versões efetivamente resolvidas e implantáveis.

Divergência entre implementação e catálogo é inconsistência a corrigir, não autorização para atualizar silenciosamente qualquer lado. A correção deve preservar a hierarquia documental e registrar a decisão aprovada. Lockfiles deverão ser versionados; segredos nunca devem fazer parte dos manifests versionados.

## Histórico da matriz técnica

| Data | Tecnologia | Versão anterior | Nova versão | Motivo | Versão VoltX |
|---|---|---|---|---|---|
| 23/09/2026 | Fundação da matriz técnica | — | matriz inicial | Fundação técnica da v0.2.0 | v0.2.0 |
