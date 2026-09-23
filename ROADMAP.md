# ROADMAP — VoltX

Este documento organiza a evolução planejada da plataforma VoltX por fases e versões.

> Antes de iniciar qualquer tarefa deste roadmap, agentes e desenvolvedores devem ler `AGENTS.md` e a documentação específica do módulo envolvido.

---

# 1. Objetivo do roadmap

O roadmap existe para evitar desenvolvimento desorganizado, retrabalho e funcionalidades implementadas fora de ordem.

Cada etapa deve respeitar:

```text
planejamento
→ implementação
→ testes
→ documentação e CHANGELOG
→ validação final
→ commit(s)
→ merge aprovado
→ sincronização final com Gitea
→ conferir working tree limpo e remotos
→ tag anotada
→ push da tag
→ GitHub Release
```

O envio ao Gitea faz parte do fluxo oficial do projeto.

Servidor de referência:

```text
ssh andrew@192.168.1.70
```

Em falhas transitórias de conexão ou envio, realizar **no máximo 3 tentativas totais**, incluindo a inicial. Erros estruturais exigem diagnóstico imediato; não repetir cegamente autenticação negada, permissão negada, remote incorreto, non-fast-forward ou histórico divergente. Consultar `docs/GIT_WORKFLOW.md`, seções 23–26 e 89.

Antes de qualquer operação remota, verificar `git remote -v`. A referência SSH não é a URL do remote Git.

Regra:

```text
tentativa 1
→ falhou?
tentativa 2
→ falhou?
tentativa 3
→ falhou?
registrar erro e interromper o fechamento da versão
```

Não criar tag ou Release enquanto o envio obrigatório ao Gitea estiver pendente.

Nenhuma fase deve ser considerada concluída apenas porque o código foi escrito.

---

# 2. Estratégia de versionamento

Durante a fase inicial do projeto, será adotado:

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

Regras:

- `PATCH`: correções sem nova funcionalidade relevante;
- `MINOR`: nova funcionalidade ou módulo compatível;
- `MAJOR`: versão estável principal ou mudança incompatível importante.

Enquanto o projeto ainda estiver em construção:

```text
0.x.x
```

A primeira versão pública estável será:

```text
v1.0.0
```

---

# 3. Regras para fechamento de versão

Fonte do fluxo: [GIT_WORKFLOW.md](docs/GIT_WORKFLOW.md), seção 38. Depois da sincronização, apenas conferir o CHANGELOG; editar exige novo commit, validação e sincronização antes da tag.

Uma versão só poderá ser fechada quando:

- a funcionalidade planejada estiver concluída;
- testes relevantes tiverem sido executados;
- build estiver aprovado;
- validação visual tiver sido realizada quando houver UI;
- documentação tiver sido atualizada;
- regras de negócio tiverem sido revisadas;
- migrations tiverem sido validadas quando aplicável;
- segurança tiver sido revisada;
- nenhuma mensagem visível ao usuário estiver em inglês;
- regressões conhecidas tiverem sido avaliadas.

O CHANGELOG deve ser preparado antes da validação final. Fluxo de fechamento:

```text
CHANGELOG preparado na branch da entrega
→ validação final
→ commit(s)
→ merge aprovado
→ sincronização final com Gitea
→ conferir CHANGELOG, working tree limpo e remotos
→ tag anotada
→ envio da tag
→ GitHub Release
```

O envio ao Gitea pode ser repetido até o limite de 3 tentativas totais somente em falha transitória de conexão ou transmissão.

Se as 3 tentativas falharem:

- não considerar a versão fechada;
- não criar a Release final;
- registrar o problema;
- corrigir a conectividade ou o remoto antes de continuar.

---

# 4. Fase 0 — Fundação documental e arquitetura

## Versão planejada

```text
v0.1.0
```

## Objetivo

Criar a base documental, arquitetural e visual antes do desenvolvimento funcional.

## Entregas

- [x] `AGENTS.md`
- [x] `README.md`
- [x] `ROADMAP.md`
- [x] `CHANGELOG.md`
- [x] `docs/ARQUITETURA.md`
- [x] `docs/REGRAS_NEGOCIO.md`
- [x] `docs/DESIGN.md`
- [x] `docs/API.md`
- [x] `docs/DATABASE.md`
- [x] `docs/CODING_STANDARDS.md`
- [x] `docs/GIT_WORKFLOW.md`
- [x] `docs/VERSIONAMENTO.md`
- [x] `docs/SEGURANCA.md`
- [x] `docs/LGPD.md`
- [x] `docs/POLITICA_PRIVACIDADE.md`
- [x] `docs/TERMOS_DE_USO.md`
- [x] `docs/UX_WRITING.md`
- [x] `docs/VALIDACAO_DADOS.md`
- [x] `docs/ENDERECOS_CEP.md`
- [x] `docs/CONFIGURACOES_NEGOCIO.md`
- [x] estrutura inicial de ADRs;
- [x] definição final da stack;
- [x] definição final do monorepo;
- [x] definição de domínios;
- [x] regras de ambiente;
- [x] convenções de nomes;
- [x] política de branches;
- [x] política de sincronização com Gitea;
- [x] regra de até 3 tentativas de envio ao Gitea;
- [x] política de tags e Releases;
- [x] definição do sitemap;
- [x] definição do robots.txt.

## Critério de conclusão

A implementação só deve começar depois que os documentos principais estiverem coerentes entre si.

---

# 5. Fase 1 — Fundação técnica

## Versão planejada

```text
v0.2.0
```

## Objetivo

Criar a base técnica executável da plataforma.

## Entregas

- [ ] monorepo;
- [ ] aplicação pública;
- [ ] painel administrativo;
- [ ] API;
- [ ] PostgreSQL;
- [ ] Prisma;
- [ ] Redis;
- [ ] armazenamento persistente;
- [ ] Docker;
- [ ] Docker Compose;
- [ ] Nginx;
- [ ] configuração de ambiente;
- [ ] variáveis de ambiente;
- [ ] tratamento central de erros;
- [ ] logging;
- [ ] health checks;
- [ ] estrutura inicial de testes;
- [ ] integração inicial de CI.

## Estrutura planejada

```text
apps/
├── site/
├── painel/
└── api/

packages/
├── ui/
├── types/
└── config/
```

## Critério de conclusão

Todos os serviços devem subir de forma reproduzível e passar por health checks.

---

# 6. Fase 2 — Cadastro, autenticação e segurança

## Versão planejada

```text
v0.3.0
```

## Entregas

- [ ] cadastro de cliente;
- [ ] login;
- [ ] logout;
- [ ] recuperação de senha;
- [ ] alteração de senha;
- [ ] sessão segura;
- [ ] cookies seguros;
- [ ] proteção CSRF quando aplicável;
- [ ] rate limiting;
- [ ] autenticação administrativa;
- [ ] 2FA administrativo;
- [ ] papéis e permissões;
- [ ] validação no backend;
- [ ] proteção contra SQL Injection;
- [ ] proteção XSS;
- [ ] logs de autenticação;
- [ ] auditoria de ações sensíveis.

## Cadastro

Campos previstos:

- [ ] nome;
- [ ] e-mail;
- [ ] telefone/WhatsApp;
- [ ] senha;
- [ ] confirmação de senha;
- [ ] identidade de gênero;
- [ ] opção “Prefiro não informar”;
- [ ] foto de perfil;
- [ ] escolha de tema;
- [ ] consentimentos;
- [ ] aceite dos Termos de Uso;
- [ ] aceite da Política de Privacidade.

---

# 7. Fase 3 — Perfil, aparência e dados do cliente

## Versão planejada

```text
v0.4.0
```

## Entregas

- [ ] perfil do cliente;
- [ ] upload de foto;
- [ ] recorte da imagem;
- [ ] endereços;
- [ ] CEP automático;
- [ ] fallback manual;
- [ ] preferências;
- [ ] notificações;
- [ ] segurança;
- [ ] privacidade;
- [ ] exclusão de conta;
- [ ] exportação de dados;
- [ ] preferências de marketing;
- [ ] temas visuais;
- [ ] modo claro;
- [ ] modo escuro;
- [ ] modo sistema;
- [ ] animações desligadas/suaves/completas;
- [ ] `prefers-reduced-motion`.

## Temas previstos

- [ ] VoltX;
- [ ] Azul;
- [ ] Rosa;
- [ ] Violeta;
- [ ] Rainbow/Pride;
- [ ] outros presets opcionais.

## Componentes tematizáveis

- [ ] borda do avatar;
- [ ] nome do usuário;
- [ ] links;
- [ ] ícones;
- [ ] chat;
- [ ] comentários;
- [ ] barra de leitura;
- [ ] hover;
- [ ] focus;
- [ ] efeitos visuais.

---

# 8. Fase 4 — Configuração profissional da VoltX

## Versão planejada

```text
v0.5.0
```

## Entregas

- [ ] perfil profissional central;
- [ ] nome comercial;
- [ ] nome profissional;
- [ ] telefone;
- [ ] WhatsApp;
- [ ] e-mail;
- [ ] endereço;
- [ ] área de atendimento;
- [ ] texto “Sobre mim”;
- [ ] foto;
- [ ] logotipo;
- [ ] formação acadêmica;
- [ ] cartão acadêmico;
- [ ] controle de exibição pública da RU;
- [ ] atualização automática em todo o site.

## Regra importante

Nenhum telefone, nome, e-mail ou endereço comercial deve ficar hardcoded em componentes quando puder ser administrado pelo painel.

---

# 9. Fase 5 — Serviços

## Versão planejada

```text
v0.6.0
```

## Entregas

- [ ] cadastro de serviços;
- [ ] edição;
- [ ] desativação;
- [ ] arquivamento;
- [ ] exclusão lógica;
- [ ] categorias;
- [ ] imagens;
- [ ] galerias;
- [ ] descrição;
- [ ] SEO;
- [ ] hashtags;
- [ ] serviços em destaque;
- [ ] páginas individuais;
- [ ] serviços relacionados;
- [ ] área de atendimento;
- [ ] CTA de orçamento;
- [ ] CTA de agendamento;
- [ ] CTA de WhatsApp.

---

# 10. Fase 6 — Orçamentos e protocolos

## Versão planejada

```text
v0.7.0
```

## Entregas

- [ ] pedido de orçamento;
- [ ] orçamento autenticado;
- [ ] orçamento de visitante;
- [ ] WhatsApp obrigatório para visitante;
- [ ] verificação do contato quando aplicável;
- [ ] anexos;
- [ ] imagens;
- [ ] vídeos;
- [ ] documentos;
- [ ] formulários específicos por serviço;
- [ ] detecção de CEP fora da área padrão;
- [ ] aviso de atendimento fora da região;
- [ ] CTA para WhatsApp;
- [ ] continuação opcional da solicitação;
- [ ] protocolo automático;
- [ ] número de orçamento;
- [ ] histórico de status;
- [ ] orçamento em rascunho;
- [ ] envio ao cliente;
- [ ] aceite;
- [ ] recusa;
- [ ] expiração.

## Numeração

```text
VX-AAAA-NNNNNN
ORC-AAAA-NNNNNN
```

---

# 11. Fase 7 — Ordens de Serviço e agendamentos

Dependência explícita: agendamentos administrativos operam sobre customer mesmo sem user. A identidade de negócio e os vínculos devem existir nesta fase, sem conta fictícia. Convite, código e ativação permanecem na fase 8; não antecipar todo esse módulo.

## Versão planejada

```text
v0.8.0
```

## Entregas

- [ ] criação de OS;
- [ ] vínculo com protocolo;
- [ ] vínculo com orçamento;
- [ ] criação de agendamento;
- [ ] agenda;
- [ ] disponibilidade;
- [ ] bloqueio de horários;
- [ ] duração prevista;
- [ ] intervalo de deslocamento;
- [ ] feriados;
- [ ] ausência;
- [ ] suspensão de atendimentos;
- [ ] reagendamento;
- [ ] cancelamento;
- [ ] histórico;
- [ ] linha do tempo;
- [ ] criação de agendamento pelo cliente;
- [ ] criação pelo administrador;
- [ ] autoria visível;
- [ ] notificações;
- [ ] conclusão do atendimento;
- [ ] fotos de antes/depois;
- [ ] avaliação pós-serviço.

## Numeração

```text
OS-AAAA-NNNNNN
AG-AAAA-NNNNNN
```

---

# 12. Fase 8 — Pré-cadastro e convite

Esta fase completa o fluxo de convite, código de ativação e criação/vinculação de user ao customer já existente. Agendamentos anteriores mantêm customer_id e autoria; não recriar o cliente nem migrar seu histórico.

## Versão planejada

```text
v0.9.0
```

## Entregas

- [ ] pré-cadastro administrativo;
- [ ] integração do convite com o customer sem conta já suportado pela fase 7;
- [ ] integração dos agendamentos existentes com o fluxo de convite/ativação;
- [ ] geração de código de ativação;
- [ ] expiração;
- [ ] revogação;
- [ ] novo código;
- [ ] ativação da conta;
- [ ] prevenção de duplicidade;
- [ ] acesso aos registros existentes pelo user vinculado ao mesmo customer;
- [ ] histórico de criação;
- [ ] auditoria.

---

# 13. Fase 9 — Blog e CMS

## Versão planejada

```text
v0.10.0
```

## Entregas

- [ ] criação de postagem;
- [ ] edição;
- [ ] rascunho;
- [ ] autosave;
- [ ] retomada do ponto exato;
- [ ] persistência das imagens do rascunho;
- [ ] histórico de versões;
- [ ] editor visual;
- [ ] Markdown;
- [ ] HTML sanitizado;
- [ ] títulos;
- [ ] listas;
- [ ] citações;
- [ ] cores controladas;
- [ ] tamanhos de fonte controlados;
- [ ] links internos;
- [ ] âncoras;
- [ ] imagens;
- [ ] galeria;
- [ ] blocos VoltX;
- [ ] preview;
- [ ] publicação;
- [ ] agendamento de publicação;
- [ ] suspensão;
- [ ] arquivamento;
- [ ] SEO;
- [ ] barra de leitura.

---

# 14. Fase 10 — Hashtags e navegação por conteúdo

## Versão planejada

```text
v0.11.0
```

## Entregas

- [ ] criação de hashtags;
- [ ] sugestão automática;
- [ ] limite por postagem;
- [ ] slug;
- [ ] páginas por hashtag;
- [ ] conteúdos relacionados;
- [ ] assuntos em alta;
- [ ] mesclagem de tags;
- [ ] busca por hashtag;
- [ ] SEO de páginas de tag;
- [ ] sitemap dinâmico.

---

# 15. Fase 11 — Interações sociais

## Versão planejada

```text
v0.12.0
```

## Entregas

- [ ] curtidas;
- [ ] comentários;
- [ ] respostas;
- [ ] edição do próprio comentário;
- [ ] exclusão do próprio comentário;
- [ ] denúncia;
- [ ] moderação;
- [ ] aprovação;
- [ ] ocultação;
- [ ] resposta oficial da VoltX;
- [ ] compartilhamento;
- [ ] conteúdos relacionados.

---

# 16. Fase 12 — Chat em tempo real

## Versão planejada

```text
v0.13.0
```

## Entregas

- [ ] WebSocket;
- [ ] Socket.IO;
- [ ] chat cliente ↔ VoltX;
- [ ] status online;
- [ ] último acesso;
- [ ] mensagens persistentes;
- [ ] anexos;
- [ ] fotos;
- [ ] documentos;
- [ ] citações;
- [ ] histórico permanente;
- [ ] encerramento de atendimento;
- [ ] geração automática de novo protocolo;
- [ ] separação visual entre atendimentos;
- [ ] relação com OS;
- [ ] relação com orçamento;
- [ ] relação com agendamento.

---

# 17. Fase 13 — Caixa administrativa de chats

## Versão planejada

```text
v0.14.0
```

## Entregas

- [ ] lista de conversas;
- [ ] pesquisa por protocolo;
- [ ] pesquisa por OS;
- [ ] pesquisa por orçamento;
- [ ] pesquisa por agendamento;
- [ ] pesquisa por cliente;
- [ ] pesquisa por telefone;
- [ ] pesquisa por e-mail;
- [ ] busca por palavras nas mensagens;
- [ ] filtro por data;
- [ ] filtro “Hoje”;
- [ ] filtro “Iniciadas hoje”;
- [ ] filtro “Recentes”;
- [ ] filtro “Não lidas”;
- [ ] filtro “Precisa de resposta”;
- [ ] filtro “Aguardando cliente”;
- [ ] filtro “Abertos”;
- [ ] filtro “Encerrados”;
- [ ] prioridade normal;
- [ ] prioridade alta;
- [ ] prioridade urgente;
- [ ] conversas fixadas;
- [ ] etiquetas;
- [ ] ordenação;
- [ ] busca dentro de uma conversa;
- [ ] abrir mensagem encontrada;
- [ ] painel lateral de contexto;
- [ ] acesso ao perfil pelo avatar/nome;
- [ ] histórico completo do cliente.

---

# 18. Fase 14 — CRM administrativo

## Versão planejada

```text
v0.15.0
```

## Entregas

- [ ] dashboard;
- [ ] clientes;
- [ ] protocolos;
- [ ] orçamentos;
- [ ] OS;
- [ ] agendamentos;
- [ ] conversas;
- [ ] arquivos;
- [ ] timeline completa;
- [ ] busca global;
- [ ] filtros;
- [ ] status;
- [ ] notas internas;
- [ ] auditoria;
- [ ] atalhos de ação;
- [ ] contato via WhatsApp;
- [ ] contato via chat;
- [ ] contexto automático do protocolo.

---

# 19. Fase 15 — E-mail e WhatsApp

## Versão planejada

```text
v0.16.0
```

## Entregas

- [ ] integração de e-mail;
- [ ] templates;
- [ ] campanhas;
- [ ] consentimentos;
- [ ] opt-out;
- [ ] integração oficial com WhatsApp;
- [ ] mensagens editáveis;
- [ ] templates;
- [ ] contexto de protocolo;
- [ ] contexto de orçamento;
- [ ] contexto de OS;
- [ ] contexto de agendamento;
- [ ] histórico de comunicação.

---

# 20. Fase 16 — LGPD e privacidade completa

## Versão planejada

```text
v0.17.0
```

## Entregas

- [ ] painel de privacidade;
- [ ] acesso aos próprios dados;
- [ ] correção;
- [ ] exportação;
- [ ] consentimentos;
- [ ] revogação;
- [ ] marketing;
- [ ] solicitação de exclusão;
- [ ] período de recuperação quando adotado;
- [ ] anonimização;
- [ ] retenção legal;
- [ ] trilha de auditoria;
- [ ] política de privacidade;
- [ ] termos de uso;
- [ ] cookies;
- [ ] histórico de aceite.

---

# 21. Fase 17 — SEO e indexação

## Versão planejada

```text
v0.18.0
```

## Entregas

- [ ] sitemap dinâmico;
- [ ] robots.txt;
- [ ] metadata;
- [ ] Open Graph;
- [ ] canonical;
- [ ] página por serviço;
- [ ] página por postagem;
- [ ] página por hashtag;
- [ ] exclusão de conteúdo privado do sitemap;
- [ ] indexação controlada;
- [ ] dados estruturados quando aplicável.

---

# 22. Fase 18 — Backups, observabilidade e produção

## Versão planejada

```text
v0.19.0
```

## Entregas

- [ ] backups automáticos;
- [ ] backup externo;
- [ ] política de retenção;
- [ ] restauração testada;
- [ ] logs;
- [ ] métricas;
- [ ] health checks;
- [ ] alertas;
- [ ] hardening;
- [ ] HTTPS;
- [ ] proxy reverso;
- [ ] deploy;
- [ ] rollback;
- [ ] validação em produção;
- [ ] documentação de operação.

---

# 23. Fase 19 — Candidato a versão estável

## Versão planejada

```text
v1.0.0-rc.1
```

## Objetivo

Congelar novas funcionalidades e focar em:

- [ ] bugs;
- [ ] regressões;
- [ ] segurança;
- [ ] acessibilidade;
- [ ] performance;
- [ ] responsividade;
- [ ] documentação;
- [ ] testes;
- [ ] banco;
- [ ] backups;
- [ ] deploy;
- [ ] experiência do usuário.

---

# 24. Fase 20 — Primeira versão pública estável

## Versão

```text
v1.0.0
```

## Critérios mínimos

- [ ] site público operacional;
- [ ] cadastro/login;
- [ ] perfil;
- [ ] serviços;
- [ ] orçamento;
- [ ] protocolos;
- [ ] OS;
- [ ] agendamentos;
- [ ] histórico;
- [ ] blog;
- [ ] hashtags;
- [ ] comentários;
- [ ] chat;
- [ ] painel administrativo;
- [ ] CRM;
- [ ] LGPD;
- [ ] segurança;
- [ ] backup;
- [ ] produção;
- [ ] documentação;
- [ ] testes;
- [ ] Release publicada;
- [ ] tag `v1.0.0`.

---

# 25. Pós-v1.0.0

Repost, CHECKOUT/pagamento e multiatendente completo permanecem condicionais/futuros até decisão formal. Exemplos em módulos não os promovem a requisitos iniciais.

Funcionalidades futuras deverão ser avaliadas antes de entrar no roadmap.

Possibilidades:

- aplicativo móvel;
- PWA;
- pagamentos;
- emissão de documentos;
- assinatura digital;
- integração com calendário externo;
- relatórios avançados;
- dashboards analíticos;
- múltiplos técnicos;
- equipes;
- rotas de atendimento;
- integração financeira;
- integrações externas;
- automações;
- IA de apoio administrativo;
- central de conhecimento;
- monitoramento de equipamentos;
- IoT.

Essas funcionalidades não pertencem automaticamente ao escopo atual.

---

# 26. Regra contra escopo descontrolado

Uma nova ideia não deve ser implementada imediatamente apenas porque parece interessante.

Fluxo esperado:

```text
nova ideia
→ avaliar
→ documentar
→ definir prioridade
→ inserir no roadmap
→ definir versão
→ implementar
```

Isso evita interromper uma funcionalidade em andamento para iniciar outra.

---

# 27. Sincronização com Gitea

O Gitea faz parte do fluxo oficial de persistência e versionamento do projeto VoltX.

Servidor de referência:

```text
ssh andrew@192.168.1.70
```

## Regras

- o repositório local deve ser sincronizado com o Gitea antes do fechamento de uma versão;
- o push deve contemplar os commits esperados da branch ou da `main`, conforme o fluxo definido;
- tags deverão ser enviadas ao remoto quando forem criadas;
- somente falhas transitórias permitem repetição, com limite de 3 tentativas totais;
- erros estruturais devem ser diagnosticados sem repetição cega;
- as tentativas devem ser sequenciais;
- se a terceira tentativa falhar, o processo deve parar;
- a falha deve ficar visível e ser registrada;
- não mascarar erro de autenticação, SSH, rede ou remoto;
- não prosseguir com uma Release final se o estado obrigatório do Gitea estiver dessincronizado.

## Fluxo resumido

As repetições abaixo só se aplicam a falhas transitórias. Erro estrutural interrompe as tentativas para diagnóstico.

```text
commit/merge concluído
        ↓
push para Gitea
        ↓
funcionou?
   ├── sim → continuar
   └── não
        ↓
segunda tentativa
        ↓
funcionou?
   ├── sim → continuar
   └── não
        ↓
terceira tentativa
        ↓
funcionou?
   ├── sim → continuar
   └── não → interromper o fluxo
```

Essa regra também deverá ser documentada em:

```text
docs/GIT_WORKFLOW.md
docs/VERSIONAMENTO.md
```

---

# 28. Relação com GitHub Releases

Cada versão concluída deverá possuir:

- tag Git;
- GitHub Release;
- notas da versão;
- referência às funcionalidades;
- referência a correções;
- referência a mudanças de banco;
- referência a mudanças de API;
- referência a documentação atualizada;
- resultado das validações relevantes.

---

# 29. Relação com GitHub Packages

GitHub Packages não será obrigatório nas primeiras fases.

Quando o fluxo de deploy estiver preparado, poderá hospedar:

```text
imagens Docker
bibliotecas internas
artefatos reutilizáveis
```

Exemplo futuro:

```text
ghcr.io/<usuario>/voltx-site:v1.0.0
ghcr.io/<usuario>/voltx-painel:v1.0.0
ghcr.io/<usuario>/voltx-api:v1.0.0
```

---

# 30. Estado atual

Fase atual:

```text
FASE 1 — Fundação técnica
```

Situação:

```text
INICIADA
```

Versão em desenvolvimento:

```text
v0.2.0
```

A Fase 1 foi iniciada documentalmente. A implementação técnica ainda começará pelas entregas previstas na seção 5; nenhuma entrega técnica futura foi marcada como concluída nesta transição. A v0.2.0 não está publicada.

## Fase 0 — Concluída

Situação:

```text
CONCLUÍDA
```

A fundação documental e arquitetural foi concluída. A v0.1.0 foi publicada em 23/09/2026, com tag anotada sincronizada com Gitea e GitHub e GitHub Release correspondente publicada.

A tag histórica e imutável v0.1.0 aponta para o commit:

```text
b035900c910e15fb3b10ce7de7f75f707ca64b0d
```

O Gitea permanece como remoto principal (`origin`); o GitHub permanece como espelho público (`github`). Esta transição documental não altera a tag nem a Release v0.1.0.

O acervo atual contém 51 arquivos Markdown: quatro na raiz, 40 diretamente em `docs/` e sete ADRs aceitos em `docs/adr/`, incluindo o relatório `docs/AUDITORIA_DOCUMENTACAO.md` na contagem de documentos.

O índice completo está no [README.md](README.md). A auditoria de consistência foi concluída e D01–D15 foram tratadas conforme seu estado: 11 grupos resolvidos, três parcialmente resolvidos e um pendente para pré-produção. As pendências deliberadas de módulo e pré-produção continuam registradas em [docs/AUDITORIA_DOCUMENTACAO.md](docs/AUDITORIA_DOCUMENTACAO.md) e não bloqueiam a fundação documental; devem ser cumpridas nas etapas correspondentes.

As definições de sitemap e robots.txt estão documentadas em [docs/SEO.md](docs/SEO.md). A Fase 0 foi documental e arquitetural: não incluiu a criação do arquivo físico robots.txt nem a implementação de funcionalidades da aplicação.

---

# 31. Regra de ouro do roadmap

> Não correr para a próxima versão antes de fechar corretamente a atual.

A VoltX deverá evoluir de forma incremental, documentada, testada e recuperável.
