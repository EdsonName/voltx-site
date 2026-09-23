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

> Antes de alterar este arquivo, consulte `AGENTS.md`, `ROADMAP.md` e `docs/VERSIONAMENTO.md` quando este último já existir.

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

Mudanças em desenvolvimento que ainda não pertencem a uma versão publicada devem ficar nesta seção.

## Adicionado

- Estrutura documental inicial do projeto.
- `AGENTS.md` como arquivo de entrada obrigatória para agentes e ferramentas de IA.
- `README.md` com visão geral da plataforma.
- `ROADMAP.md` com planejamento por fases e versões.
- Regra de sincronização com o Gitea antes do fechamento de versões.
- Regra de até três tentativas de envio ao Gitea em caso de falha inicial.

## Alterado

- Nenhuma alteração consolidada até o momento.

## Corrigido

- Nenhuma correção consolidada até o momento.

## Removido

- Nenhuma remoção consolidada até o momento.

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
- Uso de HATEOAS definido como padrão arquitetural a ser documentado em `docs/API.md`.

## Interface

- Interface pública deverá usar português do Brasil.
- Modo escuro definido como padrão visual inicial.
- Tema VoltX baseado em grafite, amarelo elétrico e azul.
- Personalização de temas por preferência do usuário planejada.
- Header com usuário autenticado, foto, nome, saudação dinâmica e horário planejado.
- Home baseada em grid responsivo com três colunas no desktop.
- Barra de progresso de leitura em artigos planejada.

## Documentação

- Iniciada a documentação estrutural do projeto.
- Definida a criação futura de documentos específicos para arquitetura, regras de negócio, API, banco, segurança, LGPD, design, chat, agendamentos e demais módulos.

## Infraestrutura

- Domínios planejados:
  - `voltx.narrativas.site`
  - `painel-voltx.narrativas.site`
  - `api-voltx.narrativas.site`
- Gitea previsto como remoto obrigatório de sincronização.
- Servidor de referência:
  - `andrew@192.168.1.70`

---

# [0.1.0] — Planejada

## Objetivo

Primeira versão documental e arquitetural da VoltX.

Esta versão será fechada somente quando a fundação documental estiver consolidada e coerente.

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
- estrutura inicial de ADRs;
- `robots.txt` inicial;
- estratégia para `sitemap.xml` dinâmico.

## Documentação

A versão `v0.1.0` deverá consolidar:

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
- regras de sincronização com Gitea;
- política de tags;
- GitHub Releases;
- uso futuro de GitHub Packages.

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
13. Se o envio ao Gitea falhar, devem ser feitas até três tentativas.
14. Após três falhas, o processo de fechamento da versão deve ser interrompido.
15. Não apagar o histórico de versões antigas.

---

# Fluxo de fechamento de versão

```text
funcionalidade concluída
        ↓
testes
        ↓
documentação
        ↓
validação
        ↓
merge
        ↓
push para Gitea
        ↓
confirmar sincronização
        ↓
atualizar CHANGELOG
        ↓
criar tag anotada
        ↓
enviar tag
        ↓
criar GitHub Release
```

Em caso de falha no envio ao Gitea:

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
Versão em preparação: v0.1.0
Status: documentação e arquitetura
```

Ainda não existe uma versão estável pública da VoltX.
