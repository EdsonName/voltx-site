# Auditoria da Documentação VoltX

> As seções originais abaixo preservam o registro da primeira auditoria. O estado atual das decisões está em **Resolução das decisões D01–D15** e na segunda auditoria ao final; a tabela histórica não significa que todos os grupos continuam pendentes.

## Data da auditoria

23/09/2026 — timezone operacional `America/Sao_Paulo`.

## Escopo

Auditoria documental da Fase 0, versão planejada v0.1.0, sem fechar versão. Leitura integral dos 50 arquivos Markdown existentes no baseline `faf10d8` (`docs: consolida fundação documental da VoltX`), incluindo sete ADRs com status Aceito. Este relatório é o 51º Markdown após a auditoria e não entra na contagem do acervo original.

Preparação confirmada: working tree limpo; branch `docs/auditoria-consistencia`; remote `origin` com fetch/push em `http://192.168.1.70:3000/Edson/voltx-site.git`. Nenhuma operação remota, alteração de remote ou configuração Git foi realizada.

Hierarquia aplicada: regras de negócio → ADRs aceitos → arquitetura → módulo específico → API/banco → código, respeitando AGENTS como regra de trabalho e as decisões expressas pelo responsável na solicitação. Não houve pesquisa jurídica externa nem avaliação de conformidade legal; o exame de privacidade comparou exclusivamente os documentos do projeto.

Foram corrigidos **36 grupos de inconsistências**, identificados como C01–C36. A contagem é por problema documental, não por ocorrência, linha ou substituição. Foram modificados **28 arquivos existentes** e criado **1 relatório**, totalizando **29 arquivos na entrega**. Duas referências textuais apontavam para arquivos ausentes e foram corrigidas; nenhum hyperlink Markdown estava quebrado no baseline.

Não foram criadas tabelas, migrations, endpoints executáveis, dependências, aplicações ou pastas de implementação. Os exemplos de contrato e persistência são especificações planejadas. Não há validação funcional, visual ou de banco a declarar nesta tarefa exclusivamente documental.

## Arquivos analisados

Inventário inicial: 4 arquivos na raiz, 39 diretamente em `docs/` e 7 em `docs/adr/`. Todos foram lidos integralmente; a ausência de ESCOPO_V1 foi detectada antes das alterações. A ordem geral de leitura de AGENTS foi seguida para os documentos existentes, antes da leitura específica e dos ADRs.

- [AGENTS.md](../AGENTS.md)
- [CHANGELOG.md](../CHANGELOG.md)
- [README.md](../README.md)
- [ROADMAP.md](../ROADMAP.md)
- [docs/adr/0001-postgresql.md](adr/0001-postgresql.md)
- [docs/adr/0002-nestjs.md](adr/0002-nestjs.md)
- [docs/adr/0003-websocket-chat.md](adr/0003-websocket-chat.md)
- [docs/adr/0004-painel-separado.md](adr/0004-painel-separado.md)
- [docs/adr/0005-soft-delete.md](adr/0005-soft-delete.md)
- [docs/adr/0006-object-storage.md](adr/0006-object-storage.md)
- [docs/adr/0007-rest-hateoas.md](adr/0007-rest-hateoas.md)
- [docs/AGENDAMENTOS.md](AGENDAMENTOS.md)
- [docs/API.md](API.md)
- [docs/ARQUITETURA.md](ARQUITETURA.md)
- [docs/AUTENTICACAO.md](AUTENTICACAO.md)
- [docs/AVALIACOES.md](AVALIACOES.md)
- [docs/BACKUP.md](BACKUP.md)
- [docs/BLOG.md](BLOG.md)
- [docs/CHAT.md](CHAT.md)
- [docs/CLIENTES.md](CLIENTES.md)
- [docs/CODING_STANDARDS.md](CODING_STANDARDS.md)
- [docs/CONFIGURACOES_NEGOCIO.md](CONFIGURACOES_NEGOCIO.md)
- [docs/CONSENTIMENTOS.md](CONSENTIMENTOS.md)
- [docs/COOKIES.md](COOKIES.md)
- [docs/DATABASE.md](DATABASE.md)
- [docs/DEPLOY.md](DEPLOY.md)
- [docs/DESIGN.md](DESIGN.md)
- [docs/EDITOR_CONTEUDO.md](EDITOR_CONTEUDO.md)
- [docs/EMAIL.md](EMAIL.md)
- [docs/ENDERECOS_CEP.md](ENDERECOS_CEP.md)
- [docs/GIT_WORKFLOW.md](GIT_WORKFLOW.md)
- [docs/HASHTAGS.md](HASHTAGS.md)
- [docs/LGPD.md](LGPD.md)
- [docs/MIDIA_UPLOADS.md](MIDIA_UPLOADS.md)
- [docs/NOTIFICACOES.md](NOTIFICACOES.md)
- [docs/ORCAMENTOS.md](ORCAMENTOS.md)
- [docs/PERMISSOES.md](PERMISSOES.md)
- [docs/POLITICA_PRIVACIDADE.md](POLITICA_PRIVACIDADE.md)
- [docs/PROTOCOLOS_OS.md](PROTOCOLOS_OS.md)
- [docs/REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md)
- [docs/RETENCAO_DADOS.md](RETENCAO_DADOS.md)
- [docs/SEGURANCA.md](SEGURANCA.md)
- [docs/SEO.md](SEO.md)
- [docs/SERVICOS.md](SERVICOS.md)
- [docs/TERMOS_DE_USO.md](TERMOS_DE_USO.md)
- [docs/TESTES.md](TESTES.md)
- [docs/UX_WRITING.md](UX_WRITING.md)
- [docs/VALIDACAO_DADOS.md](VALIDACAO_DADOS.md)
- [docs/VERSIONAMENTO.md](VERSIONAMENTO.md)
- [docs/WHATSAPP.md](WHATSAPP.md)

## Inconsistências encontradas

As fontes indicadas são documentos do repositório, com caminhos relativos à raiz. As decisões pendentes D01–D15 estão em seção própria e não entram na contagem de correções.


| ID  | Arquivo/trecho                                                                                                                                                       | Conflito ou omissão                                                                                                                              | Documento canônico/evidência                                                                    | Ação tomada                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| C01 | AGENTS.md §3                                                                                                                                                        | Leitura obrigatória de ESCOPO_V1 (arquivo inexistente).                                                                                          | Inventário real; ROADMAP.md                                                                      | Removida a dependência inexistente; roadmap indicado para escopo. Não foi inventado documento substituto.                          |
| C02 | docs/ARQUITETURA.md §59                                                                                                                                             | Nome antigo 0007-api-rest-hateoas na lista de ADRs.                                                                                               | docs/adr/0007-rest-hateoas.md                                                                     | Corrigido o nome para o arquivo existente; ADR preservado.                                                                           |
| C03 | AGENTS.md §§3–4,31                                                                                                                                                | Entrada não encaminhava para comunicações, notificações, avaliações e todos os ADRs aceitos.                                               | Inventário; documentos dos módulos                                                              | Acrescentadas referências e ligação ao índice completo.                                                                          |
| C04 | README.md §23                                                                                                                                                       | Árvore apresentada como planejada omitia documentos já existentes.                                                                              | Inventário real                                                                                  | Substituída por índice navegável dos 50 documentos e relatório.                                                                  |
| C05 | AGENTS.md §37; docs/CODING_STANDARDS.md §101                                                                                                                       | Ordens abreviadas de leitura omitiam etapas obrigatórias.                                                                                        | AGENTS.md §3                                                                                     | Remetidas à sequência completa, sem duplicar listas divergentes.                                                                   |
| C06 | ROADMAP.md §30                                                                                                                                                      | Próximos documentos recomendados já existiam; estado listava só três arquivos.                                                                | Inventário; baseline faf10d8                                                                     | Atualizado estado documental, preservando Fase 0 em andamento e checkboxes.                                                          |
| C07 | CHANGELOG.md; docs/LGPD.md §§23,38; docs/ARQUITETURA.md §43; docs/GIT_WORKFLOW.md §1                                                                             | Referências condicionadas à existência ou criação futura de documentos já presentes.                                                        | Inventário real                                                                                  | Retiradas condições obsoletas; revisão registrada apenas em Não lançado.                                                        |
| C08 | README.md §21; AGENTS.md §§28–29                                                                                                                                 | Fluxos resumidos omitiam sincronização obrigatória com Gitea.                                                                                  | RN-GIT-003; docs/GIT_WORKFLOW.md                                                                  | Inserida sincronização antes da versão/tag/Release.                                                                               |
| C09 | ROADMAP.md §§1,3,27; CHANGELOG.md; docs/REGRAS_NEGOCIO.md RN-GIT-004/005; docs/ARQUITETURA.md §55; docs/CODING_STANDARDS.md §109; docs/GIT_WORKFLOW.md §§23,25 | Resumos mandavam repetir qualquer falha e não distinguiam limite total.                                                                          | Instrução expressa do responsável; docs/GIT_WORKFLOW.md §§24–26,89; docs/SEGURANCA.md §142 | Limitado a três tentativas totais em falha transitória; erros estruturais exigem diagnóstico. Nenhuma tentativa remota executada. |
| C10 | docs/GIT_WORKFLOW.md §§7,21,80; resumos de Git em ROADMAP.md, docs/ARQUITETURA.md e docs/CODING_STANDARDS.md                                                       | Conferência de remote condicionada a dúvida ou múltiplos remotes; destinos planejados pareciam já configurados.                               | Instrução do responsável; docs/GIT_WORKFLOW.md §§83,88                                       | Verificação antes de operação remota explicitada e SSH distinguido da URL Git. Remote real preservado.                           |
| C11 | ROADMAP.md §3                                                                                                                                                       | CHANGELOG aparecia depois da GitHub Release.                                                                                                      | docs/VERSIONAMENTO.md §§12,22                                                                   | Movido para antes da tag/Release. O problema adicional do commit de fechamento permanece em D11.                                     |
| C12 | docs/VERSIONAMENTO.md §11                                                                                                                                           | Preferir tags anotadas enfraquecia Usar tags anotadas.                                                                                            | docs/GIT_WORKFLOW.md §32; fluxo oficial do responsável                                          | Uniformizada a exigência de tag anotada.                                                                                            |
| C13 | docs/ARQUITETURA.md §§4.8,7.8; docs/DATABASE.md §2.1; README.md §15; docs/TERMOS_DE_USO.md §32                                                                  | MinIO aparecia como mera preferência ou alternativa equivalente; autohospedagem qualificada como sempre que possível.                           | ADR 0006; ADR 0001; arquitetura §4.8                                                             | Explicitado MinIO autohospedado como principal, preservando alternativas futuras mediante decisão formal.                           |
| C14 | README.md §15                                                                                                                                                       | Resumo não explicava monorepo planejado, Prisma local e papéis de Redis/PostgreSQL.                                                             | docs/ARQUITETURA.md §§4.8,8; ADRs 0001/0003/0004                                                | Incluído resumo e vínculo à arquitetura; nenhuma pasta criada.                                                                    |
| C15 | docs/SEGURANCA.md §§5–6                                                                                                                                           | Argon2id apenas preferencial; regra de senha não explicitava trim/transformação.                                                               | docs/ARQUITETURA.md §12; docs/AUTENTICACAO.md §6; docs/VALIDACAO_DADOS.md §18                  | Alinhado hash e tratamento opaco já definidos, sem criar política de comprimento.                                                  |
| C16 | docs/CODING_STANDARDS.md §§4–7                                                                                                                                    | Modelo de cabeçalho omitia arquivo e documentos relacionados exigidos na entrada.                                                                | AGENTS.md §8                                                                                     | Completados modelos documentais TypeScript, CSS e SQL; nenhum arquivo de código editado.                                            |
| C17 | docs/AGENDAMENTOS.md §§5–6                                                                                                                                        | ON_THE_WAY, IN_PROGRESS, CANCELLED_BY_CLIENT e NO_SHOW divergiam dos enums centrais.                                                              | RN-AG-007                                                                                         | Usados IN_TRANSIT, IN_SERVICE, CANCELLED_BY_CUSTOMER e NOT_COMPLETED, mantendo rótulos PT-BR.                                       |
| C18 | docs/CLIENTES.md §3                                                                                                                                                 | Faltava INVITED; DELETION_REQUESTED divergente.                                                                                                   | RN-CLI-005                                                                                        | Incluído INVITED e usado DELETION_PENDING. Estados de solicitação LGPD permanecem separados.                                      |
| C19 | docs/DATABASE.md §145                                                                                                                                               | FAILED em mídia; REJECTED e DELETED ausentes.                                                                                                    | ADR 0006 §15; docs/MIDIA_UPLOADS.md §25                                                         | Alinhado conjunto documental ao ADR; estados FAILED de envio externo preservados.                                                    |
| C20 | docs/DATABASE.md §77                                                                                                                                                | Filtro de depoimento usava APPROVED, ausente no módulo de avaliações.                                                                          | docs/AVALIACOES.md §§7–9                                                                       | Filtro usa PUBLISHED, com opt-in independente e obrigatório. Não foi definido fluxo de moderação novo.                           |
| C21 | docs/DATABASE.md §15                                                                                                                                                | Permissões com ponto e ações diferentes do padrão recurso:ação.                                                                             | docs/PERMISSOES.md §12                                                                           | Exemplos substituídos pelos já documentados no módulo; nenhuma permissão criada.                                                 |
| C22 | docs/API.md §56                                                                                                                                                     | Notificações usavam /me e POST para leitura; módulo define /notifications e PATCH.                                                             | docs/NOTIFICACOES.md §37 (módulo acima do contrato geral)                                       | Alinhadas rotas e leitura em lote já documentada; isolamento por usuário reafirmado. Não há API implementada sendo migrada.      |
| C23 | docs/ORCAMENTOS.md §26                                                                                                                                              | Associação a protocolo descrita como opcional.                                                                                                  | RN-ORC-005                                                                                        | Todo orçamento deve possuir protocolo relacionado.                                                                                  |
| C24 | docs/PROTOCOLOS_OS.md §9; docs/CLIENTES.md §23; docs/CHAT.md §8; docs/TERMOS_DE_USO.md §12                                                                       | Protocolo de chat opcional; criação de novo atendimento sem condição de outro aberto; solicitação relevante apenas poderia gerar protocolo. | RN-PROT-001; RN-CHAT-004/007                                                                      | Reafirmada obrigatoriedade e condição para novo protocolo.                                                                         |
| C25 | docs/ORCAMENTOS.md §5                                                                                                                                               | Antispam apresentado como facultativo.                                                                                                            | RN-ORC-003/004                                                                                    | Proteção contra abuso obrigatória; verificação quando aplicável, sem inventar critérios.                                      |
| C26 | docs/DATABASE.md §91; docs/PROTOCOLOS_OS.md §5                                                                                                                     | Proibição de MAX + 1 condicionada à concorrência permitia interpretação de exceção.                                                       | Decisão canônica expressa do responsável; contador transacional documentado                    | Proibição inequívoca e referência ao contador existente.                                                                         |
| C27 | docs/HASHTAGS.md §§3,22; docs/BLOG.md §§1,5,18,35,36; docs/EDITOR_CONTEUDO.md §§6,26                                                                           | hashtags/post_hashtags e tags editoriais paralelas contrastavam com tags/post_tags.                                                               | docs/ARQUITETURA.md §31; AGENTS.md §16                                                          | Uniformizados nomes e sistema único; categorias permanecem distintas.                                                               |
| C28 | docs/HASHTAGS.md §12                                                                                                                                                | Rota /hashtag/eletrica divergia da rota central.                                                                                                  | RN-TAG-005; docs/ARQUITETURA.md §31                                                              | Corrigido para /tag/eletrica.                                                                                                        |
| C29 | AGENTS.md §24; docs/BLOG.md §22                                                                                                                                    | Barra de leitura apresentada como opcional.                                                                                                       | RN-BLOG-011/012                                                                                   | Explicitada obrigatoriedade em artigos e cálculo apenas no conteúdo principal.                                                     |
| C30 | docs/EDITOR_CONTEUDO.md §12                                                                                                                                         | Se houver modo Markdown enfraquecia requisito existente.                                                                                          | RN-BLOG-001                                                                                       | Modo Markdown tratado como exigido; renderização segura preservada.                                                                |
| C31 | docs/ENDERECOS_CEP.md §6                                                                                                                                            | Consulta automática descrita apenas como possibilidade.                                                                                          | RN-PERFIL-004/005                                                                                 | Tentativa de preenchimento automático obrigatória e fallback manual preservado.                                                    |
| C32 | docs/LGPD.md §7; docs/POLITICA_PRIVACIDADE.md §7                                                                                                                   | Campo de gênero descrito como possibilidade, embora obrigatório com resposta de privacidade.                                                    | RN-TEMA-001/002                                                                                   | Alinhado requisito, mantendo Prefiro não informar e revisão jurídica pendente. Não se exige revelar a identidade.                |
| C33 | README.md §3                                                                                                                                                        | Cores de Cards/Card secundário usavam níveis diferentes do design.                                                                              | docs/DESIGN.md §4.1                                                                              | Corrigidos nomes/valores de superfície e cards no resumo.                                                                           |
| C34 | docs/CHAT.md §19; docs/DESIGN.md §§25,60,77; docs/UX_WRITING.md §§22,40                                                                                         | Online, Offline e Voltar para a Home em textos destinados à interface.                                                                           | RN-GERAL-001; regra PT-BR                                                                         | Mapeados para Conectado, Desconectado e Voltar para o início. Enums e exemplos do ADR aceito preservados.                           |
| C35 | docs/AVALIACOES.md §19; docs/RETENCAO_DADOS.md §30                                                                                                                 | Moderación e anonymização.                                                                                                                     | Terminologia PT-BR dos próprios documentos                                                       | Corrigido para Moderação e anonimização.                                                                                         |
| C36 | README.md §7                                                                                                                                                        | Um mesmo serviço com vários protocolos confundia catálogo com execução.                                                                      | AGENTS.md §18; conceitos de docs/PROTOCOLOS_OS.md                                                | Explicitado que a relação se refere à Ordem de Serviço.                                                                          |

## Referências quebradas encontradas


| Origem                  | Referência anterior (histórica)                       | Verificação                                     | Correção                                                                                            |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| AGENTS, seção 3       | ESCOPO_V1, sob docs, extensão Markdown                 | Arquivo ausente; nenhum equivalente de mesmo nome | Removida da leitura obrigatória; escopo existente encaminhado ao roadmap. Nenhum escopo novo criado. |
| Arquitetura, seção 59 | 0007-api-rest-hateoas, sob docs/adr, extensão Markdown | Nome divergente do arquivo real                   | Referência corrigida para[0007-rest-hateoas.md](adr/0007-rest-hateoas.md).                           |

Resultado: **2 referências textuais encontradas e 2 corrigidas; 0 links Markdown quebrados no baseline**. Nomes antigos são descritos sem formar novas referências ativas inexistentes neste relatório.

Referências em código delimitado não são hyperlinks: nomes como `API.md` nos documentos técnicos e `RETENCAO_DADOS.md` no ADR 0005 são referências abreviadas ao acervo, não caminhos relativos executáveis. A validação resolve nome único no diretório documental/ADRs; caminhos com `docs/` são relativos à raiz. Links clicáveis são resolvidos estritamente a partir do documento de origem. Os ADRs aceitos não foram reescritos para mudar esse estilo.

## Duplicações relevantes

- Enums de orçamento, cliente, agendamento e blog: fonte principal em `REGRAS_NEGOCIO.md`; listas locais podem apoiar leitura, mas devem apontar para a regra e manter os valores. Agendamentos e clientes foram alinhados.
- Regra de três tentativas: resumos mantidos para orientar leitura, com distinção explícita entre falha transitória e estrutural; detalhes em `GIT_WORKFLOW.md`.
- Ordem de leitura: listas abreviadas substituídas por referência à seção 3 de AGENTS.
- Tags/hashtags: unificado o nome técnico `tags`; categorias e etiquetas de CRM/chat continuam conceitos distintos.
- Marketing e privacidade: repetições úteis mantidas; não foram reduzidas a ponto de esconder opt-in, separação de canais ou histórico. A divergência de modelagem de consentimentos está em D01.
- Contatos e dados acadêmicos em exemplos: mantidos como exemplos/configuração inicial. Não autorizam hardcode; a fonte é `CONFIGURACOES_NEGOCIO.md`. Os dados do cabeçalho técnico pertencem à autoria documental, não à configuração pública.

## Terminologia normalizada

- Agendamento: `IN_TRANSIT`, `IN_SERVICE`, `CANCELLED_BY_CUSTOMER`, `NOT_COMPLETED`.
- Cliente: `INVITED`, `DELETION_PENDING`; solicitação de exclusão possui ciclo separado.
- Mídia: `REJECTED` e `DELETED` conforme ADR 0006; `FAILED` continua válido para envio externo.
- Depoimento: `PUBLISHED` com opt-in explícito, sem inventar `APPROVED`.
- Permissões: exemplos `recurso:ação`, como `clients:read`.
- Hashtag: entidade `tags`, vínculo `post_tags`, rota `/tag/{slug}`.
- Presença visível: Conectado/Desconectado; enums técnicos não foram traduzidos.
- Catálogo de serviço e Ordem de Serviço mantidos como conceitos diferentes.
- Corrigidas grafias Moderação e anonimização.

## Contradições corrigidas

C01–C36 detalham todas as correções. Destaques: enums divergentes; protocolo obrigatório; condição de novo atendimento; limite de tentativas do Gitea; MinIO principal; sequência sem MAX + 1; contratos documentais de notificações; nomenclatura única de hashtags; leitura/CEP/Markdown obrigatórios conforme regras centrais.

Os sete ADRs aceitos permanecem idênticos ao baseline. PostgreSQL autohospedado, Prisma local, NestJS/TypeScript, Next.js separado para site e painel, MinIO, Redis temporário, Socket.IO, REST `/api/v1`, HATEOAS pragmático, papéis iniciais, Argon2id, snake_case, TypeScript strict, UUID quando apropriado, TIMESTAMPTZ, NUMERIC, E.164 e soft delete seletivo foram preservados.

## Decisões do responsável necessárias

Todos os itens abaixo têm classificação **DECISÃO DO RESPONSÁVEL NECESSÁRIA**. Não constituem requisitos novos nem autorização para implementação. Alguns são conflitos entre exemplos; outros são lacunas já presentes que impedem fechar o contrato do módulo.


| ID  | Documentos/trechos                                                                                                                     | Questão a decidir                                                                                                                                                                                                                                                                                                                                                                                                  | Ação nesta auditoria                                                                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D01 | LGPD §9; CONSENTIMENTOS §§4,11,29; DATABASE §§11,66–68                                                                           | `COOKIES` genérico versus `COOKIES_ANALYTICS`/`COOKIES_MARKETING` e `TESTIMONIAL_PUBLICATION`; `version` versus `document_version`; consentimento de visitante sem usuário; duplicação entre preferências, consents e legal_acceptances. Definir representação e fonte do estado vigente, separando aceite legal de marketing.                                                                               | Não escolhido entre módulos de mesma autoridade; preservadas regras de opt-in e histórico.                                                                                                       |
| D02 | ADR 0007 §9; VALIDACAO_DADOS §40; API §§19,21                                                                                      | Erro conceitual`{code,message,fields}` versus envelope `{error:{code,message,details}}`. O ADR chama o exemplo de conceitual; não declara schema obrigatório suficiente para eliminar a alternativa.                                                                                                                                                                                                              | Ambos preservados; definir envelope final e códigos antes da implementação.                                                                                                                      |
| D03 | ADR 0007 §§6,13,18,25; ARQUITETURA §§10–11; API §§4,11,14,31,39,42,54; VALIDACAO_DADOS §30                                     | `/clients` versus `/customers`; UUID/id versus slug/número comercial; `/accept` versus `/acceptance`, `/cancel` versus `/cancellation`; `page/limit` ou cursor versus `page/pageSize`. Exemplos ilustrativos não fecham contratos uniformes. HATEOAS aponta caminhos não listados no catálogo.                                                                                                                  | Não renomeados contratos a partir de exemplos. Definir rotas, identificadores, paginação e links efetivamente disponíveis. C22 resolve apenas notificações, cujo módulo especifica as rotas. |
| D04 | RN-CLI-004/008; CLIENTES §§3,6; DATABASE §§9,27,36,42,79                                                                           | `customer_id` sem entidade/FK conceitual clara; pré-cadastro separado com `linked_user_id`; endereço pertence a usuário. Como vincular atendimento antes da conta ativa e preservar todos os vínculos após ativação?                                                                                                                                                                                         | Regra de preservação mantida; não criada tabela, FK ou estratégia de migração inventada.                                                                                                      |
| D05 | AGENTS §18; PROTOCOLOS_OS §§15,21; DATABASE §§34,79–80; SERVICOS §28                                                            | Uma OS pode ter vários protocolos, mas modelo lista apenas`work_orders.protocol_id`; vários serviços na OS versus `service_id`; vínculo de orçamento ao agendamento e snapshots não detalhados.                                                                                                                                                                                                               | Necessidade registrada; escolher modelagem de cardinalidade e histórico antes do schema.                                                                                                           |
| D06 | SERVICOS §§4,26,34; DATABASE §25; ORCAMENTOS §§18,22–23; DATABASE §§29–31                                                     | Serviço tem DRAFT/ACTIVE/INACTIVE/ARCHIVED mas tabela lista só`is_active`; revisões e versão aceita de orçamento sem estrutura explícita.                                                                                                                                                                                                                                                                     | Não inventada substituição de campo ou novas tabelas. Formalizar persistência e estados possíveis.                                                                                             |
| D07 | CHAT §§9–10; DATABASE §§45–46; API §§48–49; PERMISSOES §25                                                                   | Tipos TEXT/IMAGE/FILE/SYSTEM versus TEXT/IMAGE/VIDEO/DOCUMENT/SYSTEM; protocol_id/sender_id versus conversation_protocol_id/sender_user_id; nomes de eventos exemplificativos diferentes.                                                                                                                                                                                                                           | Não presumida equivalência FILE/DOCUMENT nem remoção de VIDEO. Definir contrato de mensagens e eventos.                                                                                         |
| D08 | PROTOCOLOS_OS §16; SERVICOS §4; AVALIACOES §§3,5,7,10,21; NOTIFICACOES §§28,35; EMAIL §23; WHATSAPP §20; DATABASE §60         | Enums/propriedades descritos como exemplos: OS OPEN/SCHEDULED/IN_PROGRESS/PAUSED/COMPLETED/CANCELLED; serviço DRAFT; avaliação PUBLISHED/HIDDEN/REPORTED/REMOVED; prioridade CRITICAL de notificações; estados de comentários. Definir transições, elegibilidade sem OS, edição e identidade pública. READ de WhatsApp e CANCELLED de e-mail podem ser específicos do canal, sem presumir divergência. | Registrados para formalização, sem promover exemplos a conjuntos definitivos. C20 apenas elimina APPROVED isolado no filtro subordinado.                                                          |
| D09 | AGENDAMENTOS §4; DATABASE §37; RN-AG-002/003/004                                                                                     | Origem cliente/admin/atendente/integração futura versus CUSTOMER/ADMIN/PRE_REGISTRATION. Pré-cadastro descreve condição do cliente; atendente descreve ator.                                                                                                                                                                                                                                                   | Autoria preservada; definir mapeamento e separação entre ator, canal e condição da conta.                                                                                                       |
| D10 | CONFIGURACOES_NEGOCIO §§3,16,18,42; DATABASE §§21,23,41,147,149                                                                    | business_settings/site_settings; business_exceptions/business_hour_exceptions; accept_public_quotes/allow_guest_quotes; show_academic_id/show_academic_registration; suspensão e accept_new_appointments. Não está claro quais são aliases, campos distintos ou projeções.                                                                                                                                    | Nenhum nome ou precedência escolhido; necessário modelo único antes de implementar.                                                                                                              |
| D11 | GIT_WORKFLOW §§38,99; VERSIONAMENTO §§22,44; ROADMAP §3                                                                           | Fluxo manda atualizar CHANGELOG após sincronizar, mas exige working tree limpo e remotos sincronizados para tag. Falta explicitar o commit, eventual branch/merge e nova sincronização do próprio fechamento.                                                                                                                                                                                                   | Corrigida apenas ordem obviamente errada no roadmap (C11); definir como fechamento entra no commit/tag, sem operações Git de publicação nesta tarefa.                                           |
| D12 | AUTENTICACAO §§7,14,21,24; ORCAMENTOS §§5,19,28; AGENDAMENTOS §§17,19–20; PROTOCOLOS_OS §§12,19–20; EDITOR_CONTEUDO §§2,13 | Faltam parâmetros de senha/sessão/token, critérios de verificação do visitante, aceite externo, gatilho de OS, confirmação/cancelamento/reagendamento/reabertura, biblioteca e representação canônica do editor.                                                                                                                                                                                          | Mantidas as condições e decisões futuras existentes. Definir por módulo antes de implementar; não introduzida política arbitrária.                                                           |
| D13 | LGPD §§18,23,62; RETENCAO_DADOS §36; COOKIES §§11–12; BACKUP §§8–9; POLITICA_PRIVACIDADE §43; TERMOS_DE_USO §44             | Prazos/base/responsável por categoria, duração dos cookies, RPO/RTO/frequência e revisão jurídica seguem abertos. “Histórico permanente” em resumos significa persistência, mas não define retenção ilimitada.                                                                                                                                                                                         | Prazos A definir preservados. Revisão de bases, identidade de gênero, menores, contato formal e textos públicos não substituída por decisão do auditor.                                       |
| D14 | BLOG §27; CONSENTIMENTOS §13; CHAT §§29–30; DATABASE §138; ROADMAP fases 7,8,19 e pós-v1                                        | Repost, CHECKOUT, fila/atribuição multiatendente e implementação de agendamento administrativo antes da fase de pré-cadastro podem induzir escopo não fechado ou dependências fora de ordem.                                                                                                                                                                                                                 | Não adicionadas entregas ao roadmap nem removidos exemplos condicionais. Confirmar escopo e sequência das dependências.                                                                          |
| D15 | HASHTAGS §§6–7,15,23; SEO §24; MIDIA_UPLOADS §§15–17,38; NOTIFICACOES §10                                                      | Política final de acentos/slug, fórmula de tendências, elegibilidade SEO, limites/formatos por módulo e gatilho de leitura de notificação ainda não definidos.                                                                                                                                                                                                                                               | Exemplos preservados; decidir antes da implementação dependente.                                                                                                                                  |

### Comparação dos status


| Domínio                       | Fonte e resultado                                                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orçamentos                    | RN-ORC-007, arquitetura e módulo concordam nos nove estados; nenhuma tradução alterou enum.                                                                       |
| Agendamentos                   | Dez estados de RN-AG-007; quatro nomes divergentes corrigidos (C17).                                                                                                 |
| Clientes                       | Seis estados de RN-CLI-005; INVITED incluído e DELETION_PENDING corrigido (C18).                                                                                    |
| Blog                           | Cinco estados concordantes em RN-BLOG-010 e BLOG.                                                                                                                    |
| Mídia                         | Seis estados do ADR 0006; DATABASE alinhado (C19).                                                                                                                   |
| Avaliações                   | APPROVED isolado eliminado no filtro do banco (C20); formalização de transições permanece em D08.                                                                |
| OS/serviços/comentários      | Listas exemplificativas ou modelagem insuficiente; D06/D08.                                                                                                          |
| Chat                           | Prioridades NORMAL/HIGH/URGENT definidas em RN-CHAT-014; leitura por timestamps; tipos/eventos pendentes em D07. Não criado enum de conversa/protocolo inexistente. |
| Notificações/e-mail/WhatsApp | Estados de envio por canal, distintos de leitura interna por read_at; especificidades registradas em D08.                                                            |
| Privacidade                    | Estados de solicitação de exclusão concordam entre LGPD e RETENCAO_DADOS; não confundidos com status do cliente.                                                 |

## Arquivos alterados

28 arquivos existentes modificados:

- [AGENTS.md](../AGENTS.md)
- [CHANGELOG.md](../CHANGELOG.md)
- [README.md](../README.md)
- [ROADMAP.md](../ROADMAP.md)
- [docs/AGENDAMENTOS.md](AGENDAMENTOS.md)
- [docs/API.md](API.md)
- [docs/ARQUITETURA.md](ARQUITETURA.md)
- [docs/AVALIACOES.md](AVALIACOES.md)
- [docs/BLOG.md](BLOG.md)
- [docs/CHAT.md](CHAT.md)
- [docs/CLIENTES.md](CLIENTES.md)
- [docs/CODING_STANDARDS.md](CODING_STANDARDS.md)
- [docs/DATABASE.md](DATABASE.md)
- [docs/DESIGN.md](DESIGN.md)
- [docs/EDITOR_CONTEUDO.md](EDITOR_CONTEUDO.md)
- [docs/ENDERECOS_CEP.md](ENDERECOS_CEP.md)
- [docs/GIT_WORKFLOW.md](GIT_WORKFLOW.md)
- [docs/HASHTAGS.md](HASHTAGS.md)
- [docs/LGPD.md](LGPD.md)
- [docs/ORCAMENTOS.md](ORCAMENTOS.md)
- [docs/POLITICA_PRIVACIDADE.md](POLITICA_PRIVACIDADE.md)
- [docs/PROTOCOLOS_OS.md](PROTOCOLOS_OS.md)
- [docs/REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md)
- [docs/RETENCAO_DADOS.md](RETENCAO_DADOS.md)
- [docs/SEGURANCA.md](SEGURANCA.md)
- [docs/TERMOS_DE_USO.md](TERMOS_DE_USO.md)
- [docs/UX_WRITING.md](UX_WRITING.md)
- [docs/VERSIONAMENTO.md](VERSIONAMENTO.md)

Arquivo criado: [docs/AUDITORIA_DOCUMENTACAO.md](AUDITORIA_DOCUMENTACAO.md).

## Arquivos não alterados por falta de decisão

Os trechos dos itens D01–D15 foram preservados, inclusive quando outros trechos do mesmo documento receberam correções independentes. A presença de um arquivo na lista de alterados não significa resolução de todas as suas pendências.

Documentos integralmente preservados que contêm decisões pendentes: [CONSENTIMENTOS.md](CONSENTIMENTOS.md), [AUTENTICACAO.md](AUTENTICACAO.md), [CONFIGURACOES_NEGOCIO.md](CONFIGURACOES_NEGOCIO.md), [SERVICOS.md](SERVICOS.md), [NOTIFICACOES.md](NOTIFICACOES.md), [EMAIL.md](EMAIL.md), [WHATSAPP.md](WHATSAPP.md), [MIDIA_UPLOADS.md](MIDIA_UPLOADS.md), [COOKIES.md](COOKIES.md), [BACKUP.md](BACKUP.md), [SEO.md](SEO.md), [VALIDACAO_DADOS.md](VALIDACAO_DADOS.md) e [PERMISSOES.md](PERMISSOES.md).

Os sete ADRs aceitos foram preservados integralmente por autoridade documental. TESTES também permaneceu inalterado por não exigir correção neste escopo.

## Validação final

- Inventário após correções: **51 Markdown**, sendo 50 do acervo original e este relatório.
- Referências textuais verificadas com expressão para nomes terminados em `.md`, considerando raiz, diretório do documento e nome único no acervo; conferência de capitalização exata. Links Markdown resolvidos pelo caminho relativo real. **Nenhum destino ativo inexistente ou com caixa divergente permaneceu.**
- Buscas com `rg` por tecnologias alternativas, domínios, estados, SaaS, mensagens inglesas e termos antigos, seguidas de leitura contextual. Menções a Supabase/Neon/Railway, GraphQL/tRPC, AWS/R2/B2 permanecem como alternativas rejeitadas ou futuras, não dependências centrais adotadas.
- Domínios de aplicação permanecem somente `voltx.narrativas.site`, `painel-voltx.narrativas.site` e `api-voltx.narrativas.site`. Endereço de Gitea, placeholders de e-mail e exemplos ghcr.io não são novos domínios da aplicação.
- Inglês remanescente em contraexemplos, nomes técnicos, enums, nomes de presets ou ADR aceito não foi traduzido indiscriminadamente. Valores visíveis de status devem passar por mapeamento PT-BR.
- Sessões/hash de tokens, RBAC/IDOR, CSRF/CORS, XSS/SQL parametrizado, uploads, 2FA, rate limiting, WebSocket autorizado, logs sem segredos e isolamento de PostgreSQL/Redis/MinIO foram confrontados; parâmetros ainda abertos registrados em D12/D13.
- Marketing por e-mail e WhatsApp continua separado e desmarcado inicialmente; aceite legal não habilita marketing; depoimento exige opt-in explícito. Nenhum prazo de retenção foi inventado.
- `git diff --check`: aprovado, sem erros de whitespace. Relatório novo validado também separadamente porque ainda não é rastreado.
- `git diff --stat`: `28 files changed, 201 insertions(+), 208 deletions(-)`; resume apenas os 28 arquivos rastreados modificados; o relatório novo não aparece nessa estatística por ainda não ter sido adicionado ao índice.
- Verificação de escopo por `git diff --name-only` e `git status --short`: apenas Markdown. Nenhum código-fonte, aplicação, dependência, migration ou infraestrutura criado/alterado.
- Nenhum commit, merge, push, tag, Release ou mudança de versão. Nenhuma operação remota. Baseline e branch preservados; diff aguardando revisão do responsável.
- Build, lint, typecheck, testes de aplicação e validação visual não executados: nenhuma implementação ou UI foi alterada. Esta auditoria não declara implementação ou fase concluída e não autoriza ignorar D01–D15.

## Resolução das decisões D01–D15

23/09/2026 — segunda etapa exclusivamente documental, autorizada pelas decisões expressas do responsável após revisão dos 15 grupos. As tabelas e validações anteriores descrevem a primeira auditoria e permanecem como histórico.

Verificação inicial desta etapa: branch `docs/auditoria-consistencia`; 28 Markdown rastreados modificados e este relatório não rastreado, exatamente como ao final da primeira auditoria. Nenhum código-fonte modificado. Remote `origin` preservado em `http://192.168.1.70:3000/Edson/voltx-site.git`, sem operações remotas.


| ID  | Situação atual              | Aplicação e fonte documental                                                                                                                                                                                                                                                                                                                                                      |
| --- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D01 | RESOLVIDA                     | [CONSENTIMENTOS.md](CONSENTIMENTOS.md) §§4,11: legal_acceptances para documentos legais; consents para opcionais/revogáveis; document_version; visitante sem user; histórico auditável e preferências derivadas. LGPD e DATABASE alinhados.                                                                                                                                   |
| D02 | RESOLVIDA                     | [API.md](API.md) §19 define o único envelope error/code/message/details, com field/code/message opcionais no detalhe. VALIDACAO_DADOS remete ao contrato. Exemplo conceitual do ADR 0007 preservado.                                                                                                                                                                              |
| D03 | RESOLVIDA                     | [API.md](API.md) §§4,8,11,14 e catálogo: customers, ações accept/reject/cancel/close, page/pageSize e cursor por contexto; UUID, slug e número comercial distintos. Inconsistência residual dos exemplos de coleção/filtro corrigida após a revisão final; cinco links HATEOAS reconferidos por método HTTP, caminho e contexto de autorização, conforme nota abaixo. |
| D04 | RESOLVIDA                     | [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md) §4; [DATABASE.md](DATABASE.md) §§9.1,12,42,79: customer separado de user; user_id inicialmente nulo; endereços e vínculos no customer. Ativação preserva identidade e histórico. CLIENTES, autenticação, arquitetura, API e permissões alinhados.                                                                                 |
| D05 | RESOLVIDA                     | [PROTOCOLOS_OS.md](PROTOCOLOS_OS.md) §§15,18; [DATABASE.md](DATABASE.md) §§34–36: OS com múltiplos protocolos/serviços, associações conceituais sem principal presumido, snapshots e referência à revisão aceita; vínculo de agendamento ao orçamento explicitado.                                                                                                    |
| D06 | RESOLVIDA                     | [SERVICOS.md](SERVICOS.md) §4 e regras centrais fixam DRAFT/ACTIVE/INACTIVE/ARCHIVED. [ORCAMENTOS.md](ORCAMENTOS.md) §§18,22–23 e DATABASE §§29–31 definem revisão enviada imutável, mesmo ORC e aceite por revisão específica. Itens/anexos comerciais vinculados à revisão.                                                                                          |
| D07 | RESOLVIDA                     | [CHAT.md](CHAT.md) §§9–10: TEXT/IMAGE/VIDEO/DOCUMENT/SYSTEM; conversation_protocol_id/sender_user_id com mapeamento camelCase. [API.md](API.md) §49 é o catálogo único de nomes Socket.IO; PERMISSOES remete a ele.                                                                                                                                                          |
| D08 | PARCIALMENTE RESOLVIDA        | Conjuntos centrais/ADRs preservados.[REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md) §29 exige matriz de transições por módulo; pendências locais indicadas abaixo. Nenhuma transição inventada.                                                                                                                                                                                       |
| D09 | RESOLVIDA                     | [AGENDAMENTOS.md](AGENDAMENTOS.md) §4; DATABASE §§36–37: autoria separada do snapshot da condição do cliente; ativação não altera retrospectivamente nenhum deles. Integração futura não virou enum obrigatório.                                                                                                                                                       |
| D10 | RESOLVIDA                     | [CONFIGURACOES_NEGOCIO.md](CONFIGURACOES_NEGOCIO.md) §§3,16,18,42: fontes únicas; accept_public_quotes distinto de allow_guest_quotes; horários, exceções e suspensão separados; suspensão ativa prevalece; show_academic_registration canônico. DATABASE alinhado.                                                                                                        |
| D11 | RESOLVIDA                     | [GIT_WORKFLOW.md](GIT_WORKFLOW.md) §38 é o fluxo canônico: CHANGELOG antes de validação final/commits/merge/sincronização. Depois, só conferir; edição exige novo commit, validação e sincronização. Resumos alinhados em VERSIONAMENTO, ROADMAP, AGENTS, README, arquitetura e CHANGELOG. Nenhuma operação de fechamento executada.                                |
| D12 | PARCIALMENTE RESOLVIDA        | Confirmação administrativa sem automatismo presumido; OS por ação explícita; protocolo novo conforme regra; proibição de aceite anônimo irrestrito; content_json canônico e content_html derivado. Parâmetros e fluxos condicionais restantes listados abaixo.                                                                                                            |
| D13 | PENDENTE PARA PRÉ-PRODUÇÃO | [RETENCAO_DADOS.md](RETENCAO_DADOS.md), LGPD, COOKIES, BACKUP, Política e Termos mantêm valores A definir e revisão final pendente. Histórico persistente não é retenção infinita.                                                                                                                                                                                          |
| D14 | RESOLVIDA                     | [ROADMAP.md](../ROADMAP.md), fases 7–8: customer sem user permite agendamento administrativo; convite/código/ativação continuam posteriores. Sem conta fictícia ou antecipação integral do módulo. Repost, CHECKOUT/pagamento e multiatendente completo continuam condicionais/futuros.                                                                                     |
| D15 | PARCIALMENTE RESOLVIDA        | [HASHTAGS.md](HASHTAGS.md) §§6–7,24: chave lowercase/sem acentos/sem #, display_name separado. [NOTIFICACOES.md](NOTIFICACOES.md) §§8–11: abertura individual marca leitura por read_at, com ações explícitas individual/todas. Parâmetros restantes abaixo.                                                                                                              |

Resultado: **11 grupos resolvidos**, **3 parcialmente resolvidos** e **1 pendente para pré-produção**. Aplicar D01–D15 inclui preservar os adiamentos aprovados; não significa fechar todas as regras locais.

### Correção residual D03 após revisão final

Na revisão final do diff foi identificada uma inconsistência residual nos exemplos de coleção e filtro de agendamentos. Os exemplos foram alinhados a `GET /api/v1/me/appointments`, para o próprio cliente autenticado, preservando `page/pageSize` e sem criar rotas. A afirmação anterior de alinhamento completo era incorreta; após a correção, foram conferidos os cinco links HATEOAS de API.md: consulta do agendamento próprio, cancelamento autorizado desse agendamento, duas páginas da coleção própria e consulta de mídia conforme visibilidade/permissão do arquivo. Método HTTP, caminho e contexto de autorização correspondem aos contratos já documentados nas seções 24 e 42. D03 permanece **RESOLVIDA** após essa nova conferência. `POST /api/v1/appointments` continua válido para criação.

### Pendências mantidas de D08

Classificação: **PENDENTE ANTES DO MÓDULO**; nos documentos, **DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**.

- Matrizes de estado atual → ação → próximo estado → ator permitido para os módulos afetados. Conjuntos canônicos de orçamento, agendamento, cliente, blog e mídia não foram reabertos; serviço tem os quatro estados aprovados em D06.
- Formalização das transições de OS, avaliações, comentários, serviços e canais externos, usando apenas estados já listados e necessários ao comportamento existente. READ de WhatsApp e CANCELLED de e-mail não precisam ser artificialmente igualados.
- Avaliações: elegibilidade de atendimento equivalente sem OS, forma pública do nome/condições de avatar e janela/condições de edição. A escala sugerida e o arredondamento continuam detalhes locais a formalizar, sem política nova nesta etapa.
- Notificações: eventual uso e comportamento da prioridade CRITICAL, sem substituir prioridades canônicas do chat.

Fontes locais: [PROTOCOLOS_OS.md](PROTOCOLOS_OS.md) §16, [SERVICOS.md](SERVICOS.md) §4, [AVALIACOES.md](AVALIACOES.md) §§3,5,7,10–11,16,21, [BLOG.md](BLOG.md) §28, [NOTIFICACOES.md](NOTIFICACOES.md) §§28,35, [EMAIL.md](EMAIL.md) §23 e [WHATSAPP.md](WHATSAPP.md) §20.

### Pendências mantidas de D12

Este grupo continua composto por decisões independentes, sem escolha A/B única.

- **DEFINIR ANTES DA IMPLEMENTAÇÃO DE AUTENTICAÇÃO**: tamanho mínimo final de senha, duração de sessão, duração de tokens, quantidade exata de tentativas e duração de bloqueios. Mantidos Argon2id, senha opaca, tokens temporários, hash aplicável, rate limiting, proteção contra brute force e sessões revogáveis.
- **DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: critérios de verificação do contato do visitante; condições/atores das transições de cancelamento e reagendamento.
- Antes de habilitar fluxo condicional: mecanismo seguro/rastreável de aceite sem login, condições de OS direta/sem orçamento e eventual reabertura explícita. Nenhum mecanismo ou habilitação foi presumido; a regra atual de novo contato continua produzindo protocolo conforme RN-CHAT-007.
- Biblioteca do editor: decisão técnica anterior à implementação (ADR se relevante). Não é nova decisão de produto nem reabertura dos modos visual/Markdown/HTML sanitizado ou do content_json canônico.

Fontes: [AUTENTICACAO.md](AUTENTICACAO.md) §7, [ORCAMENTOS.md](ORCAMENTOS.md) §§5,19, [AGENDAMENTOS.md](AGENDAMENTOS.md) §§17,19–20, [PROTOCOLOS_OS.md](PROTOCOLOS_OS.md) §§12,20 e [EDITOR_CONTEUDO.md](EDITOR_CONTEUDO.md) §§2,13.

### Pendências mantidas de D13

**PENDENTE PARA PRÉ-PRODUÇÃO — A definir**: prazos/políticas por categoria e responsáveis, duração final dos cookies, frequência final de backup, RPO, RTO, parâmetros dependentes da operação real e revisão jurídica final. Política de Privacidade e Termos seguem como rascunhos antes da publicação final. A arquitetura e o banco permitem aplicação das políticas futuras.

A duração de sessão/token necessária para implementar autenticação é tratada em D12; a tabela final de cookies em produção continua em D13. Não foram criados prazos legais nem promessa de retenção ilimitada.

### Pendências mantidas de D15

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**:

- fórmula final de tendências;
- quantidade/critério exato para indexar páginas de hashtag;
- limites exatos de upload por tipo/módulo;
- formatos finais permitidos por módulo.

Permanecem obrigatórios: máximo de 8 hashtags por post, validação MIME/magic bytes/tamanho, limites por tipo/módulo e ausência de páginas vazias ou de baixo valor deliberadamente criadas para SEO.

## Segunda auditoria de consistência

Foram analisados os **51 arquivos Markdown** do inventário atual, incluindo este relatório e os sete ADRs aceitos. Os documentos envolvidos foram lidos integralmente antes de editados. Referências e buscas de termos foram executadas sobre todo o acervo; a comparação semântica considerou a hierarquia documental e as decisões expressas do responsável.


| Verificação solicitada                            | Resultado                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1–2,25 — Inventário e referências               | 51 Markdown; nenhum destino ativo inexistente encontrado na segunda etapa. As duas referências corrigidas na primeira etapa permanecem corrigidas.                                                                                                                                                  |
| 3–4 — Enums e status                              | Orçamento, agendamento, cliente e blog comparados às regras centrais; mídia ao ADR 0006; chat comparado ao banco. Sem divergências nos conjuntos canônicos. Matrizes pendentes não foram inventadas.                                                                                           |
| 5,9–10 — Entidades, customer/user e pré-cadastro | customer mantém identidade comercial, endereços e relações antes/depois da ativação; user representa autenticação. Permissões consultam o vínculo correto.                                                                                                                                 |
| 6–8 — Rotas, paginação e recursos               | Após a correção residual D03, os cinco links HATEOAS dos exemplos de API foram reconferidos contra os contratos das seções 24 e 42, considerando método HTTP, caminho e contexto de autorização. UUID/slug/número comercial têm papéis distintos; cursor continua permitido por contexto. |
| 11–12 — Consentimentos e erros                    | Aceites legais separados de opcionais; versões e visitante documentados. Envelope único de erro; exemplos JSON conferidos sintaticamente.                                                                                                                                                          |
| 13–14 — OS e orçamento                           | Cardinalidades múltiplas e snapshots explícitos; revisão comercial imutável após envio, aceite específico e número ORC preservado.                                                                                                                                                            |
| 15–16 — Chat e agenda                             | Tipos/mapeamentos de mensagem e nomes de eventos centralizados; autoria e condição histórica separadas; confirmação sem automatismo presumido.                                                                                                                                                  |
| 17 — Configurações                               | Aliases consolidados sem fundir conceitos diferentes; suspensão não destrói agenda habitual.                                                                                                                                                                                                      |
| 18 — Git/Release                                   | Ordem conferida: preparar CHANGELOG, validar, commitar, integrar e sincronizar; depois apenas conferir antes da tag. Nenhum comando de publicação executado.                                                                                                                                       |
| 19–20 — Hashtags e notificações                 | Chave normalizada única, display_name e limite 8 preservados; leitura individual ao abrir/clicar e ações explícitas usam read_at.                                                                                                                                                                |
| 21 — Retenção                                    | A definir/PENDENTE PARA PRÉ-PRODUÇÃO mantidos; persistência não significa retenção infinita.                                                                                                                                                                                                  |
| 22 — UI em PT-BR                                   | Inglês em enums, identificadores, nomes próprios, contraexemplos e ADRs não foi confundido com novas mensagens visíveis. Textos de interface permanecem subordinados a UX_WRITING.                                                                                                               |
| 23–24 — SaaS e domínios                          | PostgreSQL/Redis/MinIO autohospedados, Prisma local e integrações substituíveis preservados. Domínios de aplicação continuam voltx.narrativas.site, painel-voltx.narrativas.site e api-voltx.narrativas.site.                                                                                  |

Busca contextual dos termos antigos: /clients e page/limit permanecem em ADR aceito e no histórico; /acceptance, /cancellation, FILE genérico e show_academic_id apenas no histórico da auditoria; is_active permanece legitimamente em categorias/horários e em explicação rejeitando seu uso como ciclo completo de serviço. COOKIES genérico não permanece como tipo oficial de consentimento; o nome do documento continua válido. MAX + 1 aparece como proibição, não como solução.

**Novas decisões de produto encontradas:** nenhuma além das lacunas já registradas nos grupos parciais e de pré-produção. Não foram criados grupos adicionais. A expressão **DECISÃO DO RESPONSÁVEL NECESSÁRIA** na tabela original é registro histórico; as pendências atuais estão discriminadas acima, incluindo detalhes técnicos que cabem à implementação após definição local.

### Arquivos alterados nesta segunda etapa

**38 arquivos Markdown**, apurados por comparação de SHA-256 com o início desta etapa, sem contar novamente como novas edições os quatro arquivos tocados apenas na primeira auditoria (DESIGN, ENDERECOS_CEP, SEGURANCA e UX_WRITING). O working tree acumulado contém 42 Markdown: 41 rastreados modificados e este relatório não rastreado.

- [AGENTS.md](../AGENTS.md)
- [CHANGELOG.md](../CHANGELOG.md)
- [README.md](../README.md)
- [ROADMAP.md](../ROADMAP.md)
- [docs/AGENDAMENTOS.md](AGENDAMENTOS.md)
- [docs/API.md](API.md)
- [docs/ARQUITETURA.md](ARQUITETURA.md)
- [docs/AUDITORIA_DOCUMENTACAO.md](AUDITORIA_DOCUMENTACAO.md)
- [docs/AUTENTICACAO.md](AUTENTICACAO.md)
- [docs/AVALIACOES.md](AVALIACOES.md)
- [docs/BACKUP.md](BACKUP.md)
- [docs/BLOG.md](BLOG.md)
- [docs/CHAT.md](CHAT.md)
- [docs/CLIENTES.md](CLIENTES.md)
- [docs/CODING_STANDARDS.md](CODING_STANDARDS.md)
- [docs/CONFIGURACOES_NEGOCIO.md](CONFIGURACOES_NEGOCIO.md)
- [docs/CONSENTIMENTOS.md](CONSENTIMENTOS.md)
- [docs/COOKIES.md](COOKIES.md)
- [docs/DATABASE.md](DATABASE.md)
- [docs/EDITOR_CONTEUDO.md](EDITOR_CONTEUDO.md)
- [docs/EMAIL.md](EMAIL.md)
- [docs/GIT_WORKFLOW.md](GIT_WORKFLOW.md)
- [docs/HASHTAGS.md](HASHTAGS.md)
- [docs/LGPD.md](LGPD.md)
- [docs/MIDIA_UPLOADS.md](MIDIA_UPLOADS.md)
- [docs/NOTIFICACOES.md](NOTIFICACOES.md)
- [docs/ORCAMENTOS.md](ORCAMENTOS.md)
- [docs/PERMISSOES.md](PERMISSOES.md)
- [docs/POLITICA_PRIVACIDADE.md](POLITICA_PRIVACIDADE.md)
- [docs/PROTOCOLOS_OS.md](PROTOCOLOS_OS.md)
- [docs/REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md)
- [docs/RETENCAO_DADOS.md](RETENCAO_DADOS.md)
- [docs/SEO.md](SEO.md)
- [docs/SERVICOS.md](SERVICOS.md)
- [docs/TERMOS_DE_USO.md](TERMOS_DE_USO.md)
- [docs/VALIDACAO_DADOS.md](VALIDACAO_DADOS.md)
- [docs/VERSIONAMENTO.md](VERSIONAMENTO.md)
- [docs/WHATSAPP.md](WHATSAPP.md)

### Validação e limites da segunda etapa

- Referências locais e textuais conferidas em todo o acervo; **0 referências quebradas restantes**.
- `git diff --check`: aprovado, sem erros. O relatório não rastreado também foi verificado separadamente quanto a whitespace e estrutura Markdown.
- `git diff --stat` acumulado: **41 files changed, 690 insertions(+), 773 deletions(-)**. O relatório não rastreado não entra nessa estatística; ela inclui a primeira auditoria.
- `git status --short`: 41 Markdown rastreados modificados e este relatório como não rastreado; índice vazio, HEAD `faf10d8` e branch preservados.
- Enums canônicos e ordem de fechamento conferidos; exemplos JSON válidos e blocos cercados balanceados.
- Hashes SHA-256 dos **sete ADRs byte a byte inalterados** em relação ao início desta etapa.
- Somente Markdown alterado; nenhum código-fonte, configuração executável, dependência, migration, tabela real, aplicação ou infraestrutura criado/alterado. Nenhuma pasta nova.
- CHANGELOG atualizado somente em Não lançado e nas instruções do fluxo; versão planejada permanece a mesma, sem fechamento.
- Nenhum commit, merge, push, tag, Release, operação remota ou alteração de remote.
- Build, lint, typecheck, testes de aplicação e validação visual não se aplicam: esta etapa não implementa funcionalidade nem modifica UI.
- O diff acumulado permanece disponível para revisão do responsável; nenhuma autorização de implementação é inferida desta entrega.
