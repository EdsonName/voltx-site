# CHANGELOG — VoltX

Todas as mudanças relevantes da plataforma VoltX deverão ser registradas neste arquivo.

Este projeto segue versionamento semântico:

```text
MAJOR.MINOR.PATCH
```

Formato adotado:

```text
v0.1.0
v0.2.0
v0.2.1
v1.0.0
```

> Antes de alterar este arquivo, consulte `AGENTS.md`, `ROADMAP.md` e `docs/VERSIONAMENTO.md`.

---

# Como usar este arquivo

Cada versão deverá registrar mudanças nas categorias aplicáveis:

```text
Adicionado
Alterado
Corrigido
Removido
Segurança
Banco de dados
API
Interface
Documentação
Infraestrutura
```

Não é obrigatório preencher todas as categorias em toda versão.

Mudanças pequenas e irrelevantes para o histórico funcional não precisam ser descritas isoladamente.

---

# [Não lançado]

## Infraestrutura

- Registrados e validados site, painel, API e quatro pacotes compartilhados como membros reais do workspace pnpm; raiz e sete membros reconhecidos, ainda sem dependências ou frameworks específicos.
- Validada executavelmente a raiz do workspace com Node.js 24.21.0 e pnpm 12.6.0, com primeiro lockfile e leitura recursiva do workspace, sem instalação das aplicações.

## Adicionado

- Configuração-base do workspace pnpm criada, com package.json raiz e pnpm-workspace.yaml; aplicações e pacotes internos ainda não inicializados, com validação executável pendente.
- Políticas de arquivos ignorados e normalização de line endings formalizadas em .gitignore e .gitattributes, sem renormalização histórica do repositório.
- Estrutura física inicial do monorepo para site, painel, API, pacotes compartilhados e infraestrutura, com READMEs de finalidade; sem inicialização de aplicações, workspace, dependências ou infraestrutura executável.

## Documentação

- Criado catálogo central da stack técnica, versões aprovadas, datas de revisão e estado das dependências da fundação v0.2.0.
- README e estado atual do ROADMAP atualizados para refletir as pastas criadas e as decisões pendentes de gerenciador de pacotes, formato de workspace e versões da stack; entregas técnicas permanecem desmarcadas.
- Formalizados os papéis dos remotos Git: Gitea (`origin`) como remoto principal e GitHub (`github`) como espelho público, com ordem de sincronização, preservação do upstream e política de tentativas controladas.
- Documentado o uso do GitHub CLI para Releases e operações específicas do GitHub, mantendo credenciais apenas no ambiente local.
- Fase 0 marcada como concluída após a publicação da v0.1.0 em 23/09/2026.
- Fase 1 — Fundação técnica definida como fase atual, iniciada documentalmente.
- Iniciado o ciclo documental da futura v0.2.0, sem implementação técnica nesta transição.

A seção da v0.1.0 abaixo preserva o registro histórico da preparação do fechamento. Seu texto não foi reescrito após a publicação; o estado vigente está na seção Estado atual.

---

# [0.1.0] — 2026-09-23

## Objetivo

Primeira versão documental e arquitetural da VoltX.

A fundação documental está consolidada. Esta entrada registra a preparação do fechamento em 2026-09-23; a versão permanece em fechamento, com tag e GitHub Release pendentes, e não está publicada. Nenhuma funcionalidade da aplicação foi implementada nesta versão; as referências a API, banco, segurança, autenticação e interface representam definições, requisitos ou arquitetura planejada.

## Adicionado

- `AGENTS.md`
- `README.md`
- `ROADMAP.md`
- `CHANGELOG.md`
- `docs/ARQUITETURA.md`
- `docs/REGRAS_NEGOCIO.md`
- `docs/DESIGN.md`
- `docs/API.md`
- `docs/DATABASE.md`
- `docs/CODING_STANDARDS.md`
- `docs/GIT_WORKFLOW.md`
- `docs/VERSIONAMENTO.md`
- `docs/SEGURANCA.md`
- `docs/LGPD.md`
- `docs/POLITICA_PRIVACIDADE.md`
- `docs/TERMOS_DE_USO.md`
- `docs/UX_WRITING.md`
- `docs/VALIDACAO_DADOS.md`
- `docs/ENDERECOS_CEP.md`
- `docs/CONFIGURACOES_NEGOCIO.md`
- docs/AUDITORIA_DOCUMENTACAO.md;
- estrutura inicial de ADRs;
- estratégia inicial para `robots.txt`;
- estratégia para `sitemap.xml` dinâmico.

## Alterado

- Incorporadas as decisões D01–D15 do responsável: identidade customer/user, contratos REST e erros, consentimentos, OS, revisões comerciais, chat, agenda, configurações e fechamento de versão; pendências locais e de pré-produção preservadas. Alteração exclusivamente documental.
- Revisão documental de consistência, navegação e fontes canônicas, registrada em `docs/AUDITORIA_DOCUMENTACAO.md`; nenhuma funcionalidade implementada.

## Corrigido

- Corrigidas divergências documentais de enums, protocolos, hashtags, armazenamento, referências e fluxo Git/Gitea.

## Segurança

- Requisitos iniciais de segurança definidos conceitualmente.
- Validação obrigatória no backend planejada.
- Uso de ORM/queries parametrizadas planejado.
- Proteção contra SQL Injection, XSS e uploads inseguros prevista.
- Senhas deverão ser tratadas como dados opacos e armazenadas apenas como hash seguro.

## Banco de dados

- PostgreSQL definido como banco principal planejado.
- Persistência de dados e arquivos tratada como requisito obrigatório.

## API

- API RESTful versionada planejada.
- Uso pragmático de HATEOAS documentado em `docs/API.md` e no ADR 0007.

## Interface

- Interface pública deverá usar português do Brasil.
- Modo escuro definido como padrão visual inicial.
- Tema VoltX baseado em grafite, amarelo elétrico e azul.
- Personalização de temas por preferência do usuário planejada.
- Header com usuário autenticado, foto, nome, saudação dinâmica e horário planejado.
- Home planejada com grid responsivo de três colunas no desktop.
- Barra de progresso de leitura em artigos planejada.

## Documentação

A versão `v0.1.0` consolida as definições e os requisitos documentais de:

- arquitetura;
- regras de negócio;
- design system;
- stack;
- API;
- banco de dados;
- padrões de código;
- regras de Git;
- versionamento;
- segurança;
- LGPD;
- política de privacidade;
- termos de uso;
- idioma da interface;
- validação de dados;
- CEP;
- configurações do negócio;
- regras de sincronização com Gitea antes do fechamento de versões, com até três tentativas totais somente em falha transitória e diagnóstico imediato de erros estruturais;
- política de tags;
- GitHub Releases;
- uso futuro de GitHub Packages.

Documentação principal criada, inventariada e revisada, com auditoria de consistência concluída. D01–D15 foram tratadas conforme seu estado; pendências deliberadas de módulo e pré-produção permanecem registradas no relatório da auditoria e não bloqueiam a fundação documental. AGENTS.md define a entrada obrigatória para agentes, README.md apresenta a plataforma e ROADMAP.md organiza as fases e versões.

## Infraestrutura

- Domínios planejados:
  - `voltx.narrativas.site`
  - `painel-voltx.narrativas.site`
  - `api-voltx.narrativas.site`
- Gitea previsto como remoto obrigatório de sincronização.
- Servidor de referência:
  - `andrew@192.168.1.70`

## Critério de fechamento

A versão só poderá ser marcada como concluída quando:

- documentos principais estiverem criados;
- documentos não apresentarem contradições conhecidas;
- arquitetura estiver definida;
- regras de Git e versionamento estiverem definidas;
- fluxo com Gitea estiver definido;
- tag `v0.1.0` puder ser criada;
- GitHub Release correspondente puder ser publicada.

---

# Convenção para versões futuras

Exemplo:

```md
# [0.2.0] — AAAA-MM-DD

## Adicionado

- Fundação técnica do monorepo.
- Aplicação pública.
- Painel administrativo.
- API.
- PostgreSQL.
- Docker.

## Alterado

- ...

## Corrigido

- ...

## Segurança

- ...

## Banco de dados

- Migration `...`.

## API

- Novo endpoint `...`.

## Interface

- ...

## Documentação

- Atualizado `ARQUITETURA.md`.
- Atualizado `API.md`.

## Infraestrutura

- ...
```

---

# Regras do CHANGELOG

1. Toda versão oficial deve possuir uma seção própria.
2. A versão deve corresponder à tag Git.
3. A versão deve corresponder à GitHub Release.
4. Mudanças de API devem ser citadas.
5. Mudanças de banco devem ser citadas.
6. Mudanças de segurança relevantes devem ser citadas.
7. Mudanças de comportamento devem ser citadas.
8. Documentação importante alterada deve ser citada.
9. Correções relevantes devem ser registradas.
10. Não registrar senhas, tokens, segredos ou dados pessoais sensíveis.
11. Não marcar uma versão como lançada antes da validação.
12. O envio ao Gitea deve estar concluído antes do fechamento final da versão.
13. Em falha transitória de envio ao Gitea, limitar a três tentativas totais. Erros estruturais exigem diagnóstico sem repetição cega, conforme `docs/GIT_WORKFLOW.md`.
14. Após três falhas, o processo de fechamento da versão deve ser interrompido.
15. Não apagar o histórico de versões antigas.

---

# Fluxo de fechamento de versão

Seguir [GIT_WORKFLOW.md](docs/GIT_WORKFLOW.md), seção 38. Preparar este CHANGELOG na branch da entrega, antes da validação final e dos commits. Após merge aprovado e sincronização final, somente conferir. Edição posterior exige novo commit, validação e sincronização antes de tag anotada, push da tag e GitHub Release.

Somente em falha transitória no envio ao Gitea, seguindo `docs/GIT_WORKFLOW.md`:

```text
1ª tentativa
↓ falhou

2ª tentativa
↓ falhou

3ª tentativa
↓ falhou

interromper o fechamento
```

---

# Estado atual

```text
Versão publicada mais recente: v0.1.0
Versão em desenvolvimento: v0.2.0
Fase atual: Fase 1 — Fundação técnica
```

A v0.1.0 foi publicada em 23/09/2026. A v0.2.0 está em desenvolvimento, com início apenas documental da Fase 1 e implementação técnica ainda por começar; não está publicada. Ainda não existe uma versão estável pública v1.0.0 da VoltX.
