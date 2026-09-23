# GIT WORKFLOW — VoltX

## 1. Finalidade

Este documento define o fluxo Git oficial da plataforma VoltX.

Ele deve ser seguido por:

- desenvolvedores;
- Codex;
- agentes de IA;
- scripts de automação;
- revisões de versão.

> Antes de trabalhar no repositório, leia `AGENTS.md`, `ROADMAP.md`, `CODING_STANDARDS.md` e `VERSIONAMENTO.md` quando este último existir.

---

# 2. Objetivos do fluxo

O fluxo Git da VoltX deve garantir:

```text
rastreabilidade
isolamento de mudanças
validação antes de merge
histórico legível
sincronização confiável
versionamento previsível
rollback possível
```

---

# 3. Branch principal

A branch principal será:

```text
main
```

A `main` deve representar sempre um estado:

- integrado;
- validado;
- documentado;
- apto a servir de base para a próxima mudança.

Não desenvolver funcionalidades longas diretamente na `main`.

---

# 4. Tipos de branch

Padrões:

```text
feat/
fix/
docs/
refactor/
chore/
test/
hotfix/
```

Exemplos:

```text
feat/agendamento-disponibilidade
feat/chat-protocolos
fix/repost-conteudo
docs/api-hateoas
refactor/perfil-cliente
chore/docker-postgresql
test/orcamentos-e2e
hotfix/login-producao
```

---

# 5. Uma funcionalidade por branch

Quando possível, trabalhar uma funcionalidade por branch.

Evitar:

```text
feat/agendamento-e-chat-e-blog-e-layout
```

Preferir:

```text
feat/agendamento-disponibilidade
feat/chat-protocolos
feat/blog-editor
```

---

# 6. Início de uma nova funcionalidade

Fluxo:

```text
main atualizada
↓
criar branch
↓
implementar
↓
testar
↓
documentar
↓
validar
```

---

# 7. Atualização da main antes de criar branch

Antes de iniciar nova feature:

```text
git switch main
git pull
```

Depois:

```text
git switch -c feat/nome-da-funcionalidade
```

Se houver mais de um remoto, a origem correta deverá ser confirmada antes de qualquer `pull`.

---

# 8. Commits

Commits devem ser:

- objetivos;
- coerentes;
- relacionados à mudança;
- escritos em PT-BR;
- tecnicamente úteis.

Exemplo:

```text
feat: adiciona bloqueio de conflitos na agenda
```

---

# 9. Prefixos de commit

Padrões sugeridos:

```text
feat:
fix:
docs:
refactor:
test:
chore:
perf:
security:
```

Exemplos:

```text
feat: adiciona protocolo automático no chat
fix: corrige contador de mensagens não lidas
docs: documenta fluxo de sincronização com gitea
refactor: separa regras de orçamento do controller
test: cobre conflito de horários na agenda
chore: adiciona serviço postgres ao compose
security: reforça validação de upload
```

---

# 10. Commits pequenos e úteis

Evitar um único commit gigante quando a mudança puder ser dividida logicamente.

Mas também evitar commits sem valor:

```text
fix
ajuste
teste
mais ajuste
agora vai
```

---

# 11. Commit deve representar estado válido

Sempre que possível, cada commit deve:

- compilar;
- não quebrar testes importantes;
- ter mensagem clara.

Commits intermediários temporários podem existir em branch local, mas devem ser organizados antes de uma integração relevante quando necessário.

---

# 12. Código e documentação

Se a funcionalidade altera comportamento documentado:

```text
código
+
documentação
```

devem ser atualizados no mesmo trabalho.

---

# 13. Antes do merge

Checklist mínimo:

```text
lint
typecheck
testes relevantes
build quando aplicável
validação visual
responsividade
UI em PT-BR
documentação
segurança
sem segredos
```

---

# 14. Validação visual

Toda mudança de interface deve ser conferida visualmente antes de merge.

Validar:

```text
mobile
tablet
desktop
```

quando aplicável.

---

# 15. Testes

Não fazer merge de funcionalidade crítica sem executar os testes relacionados.

Exemplos:

- autenticação;
- agendamento;
- orçamento;
- chat;
- permissões;
- migrations.

---

# 16. Merge

A integração deve ocorrer somente quando a branch estiver pronta.

Fluxo conceitual:

```text
feature
↓
validação
↓
main
```

O método de merge poderá variar conforme o contexto:

```text
merge commit
squash
rebase
```

A escolha deve preservar histórico legível.

---

# 17. Squash

Usar squash quando a branch tiver muitos commits intermediários sem valor histórico.

Exemplo:

```text
wip
ajuste
ajuste 2
corrige typo
```

podem virar:

```text
feat: adiciona painel de disponibilidade da agenda
```

---

# 18. Merge commit

Pode ser usado quando a sequência de commits possui valor histórico real.

---

# 19. Rebase

Pode ser usado para manter histórico linear quando apropriado.

Nunca reescrever silenciosamente histórico compartilhado sem necessidade.

---

# 20. Após o merge

Depois de integrar:

```text
git switch main
```

Confirmar:

```text
git status
git log --oneline
```

Antes do fechamento da versão, a `main` deve ser sincronizada com os remotos obrigatórios.

---

# 21. Remotos

A VoltX poderá possuir mais de um remoto.

Pelo menos:

```text
GitHub
Gitea
```

Os nomes exatos dos remotos devem ser verificados com:

```text
git remote -v
```

Nunca assumir nomes sem conferir.

---

# 22. Gitea

O Gitea faz parte do fluxo oficial da VoltX.

Servidor de referência:

```text
ssh andrew@192.168.1.70
```

A sincronização com Gitea deve acontecer antes do fechamento de versão.

---

# 23. Regra das três tentativas

A conexão ou o envio ao Gitea pode falhar ocasionalmente na primeira tentativa.

Por isso:

```text
tentativa 1
↓ falhou?

tentativa 2
↓ falhou?

tentativa 3
↓ falhou?

interromper
```

Nunca considerar uma única falha inicial como encerramento definitivo.

---

# 24. O que repetir

Em caso de erro transitório de:

- SSH;
- conexão;
- rede;
- timeout;
- push;

a operação pode ser repetida até três vezes.

---

# 25. O que não repetir cegamente

Se o erro indicar:

```text
autenticação inválida
permissão negada
remote inexistente
branch rejeitada
divergência de histórico
non-fast-forward
```

não repetir comandos destrutivos cegamente.

Primeiro diagnosticar.

A regra das três tentativas não autoriza ignorar erro estrutural.

---

# 26. Falha após três tentativas

Se a terceira tentativa falhar:

- parar o fluxo;
- registrar o erro;
- não mascarar a falha;
- não declarar sincronização concluída;
- não fechar a versão;
- não publicar Release final.

---

# 27. Confirmação de sincronização

Depois de um push aparentemente bem-sucedido, confirmar o estado quando necessário.

Exemplos:

```text
git status
git log
git remote -v
```

e verificar o remoto apropriado.

---

# 28. GitHub

GitHub será usado para:

- remoto;
- histórico;
- tags;
- Releases;
- integração com CI;
- eventualmente Packages.

---

# 29. Ordem de sincronização

Fluxo de fechamento:

```text
merge na main
↓
push da main
↓
sincronização com Gitea
↓
confirmar
↓
tag
↓
push da tag
↓
GitHub Release
```

---

# 30. Push de branch

Durante desenvolvimento, branches podem ser enviadas ao remoto para:

- backup;
- colaboração;
- CI;
- revisão.

Mas isso não significa que a feature está pronta.

---

# 31. Push não é Release

Um `git push` não representa versão oficial.

Versão oficial exige:

```text
estado validado
+
tag
+
CHANGELOG
+
Release
```

---

# 32. Tags

Usar tags anotadas.

Exemplo:

```text
v0.1.0
v0.2.0
v1.0.0
```

---

# 33. Tag anotada

Formato conceitual:

```text
git tag -a v0.1.0 -m "Versão 0.1.0 - Fundação documental"
```

---

# 34. Tags não devem marcar qualquer commit

Não criar tag para:

- typo;
- 2px de ajuste;
- comentário;
- commit intermediário;
- experimento.

Tag deve marcar incremento funcional ou versão planejada.

---

# 35. Push de tags

Depois de criar tag:

```text
git push <remote> v0.1.0
```

ou estratégia equivalente definida no momento.

A tag deve chegar aos remotos necessários.

---

# 36. GitHub Release

A Release deve usar a tag correspondente.

Exemplo:

```text
v0.1.0
```

Notas devem incluir:

- funcionalidades;
- correções;
- alterações de API;
- alterações de banco;
- segurança;
- documentação;
- validações executadas.

---

# 37. CHANGELOG

Antes da Release:

```text
CHANGELOG.md
```

deve estar atualizado.

---

# 38. Ordem correta da versão

Fluxo:

```text
código pronto
↓
testes
↓
documentação
↓
merge
↓
Gitea sincronizado
↓
CHANGELOG
↓
tag
↓
push tag
↓
Release
```

---

# 39. Branch depois do merge

Depois que a feature estiver integrada e validada, a branch pode ser removida.

Local:

```text
git branch -d nome-da-branch
```

Remoto:

```text
git push <remote> --delete nome-da-branch
```

Somente remover quando realmente não for mais necessária.

---

# 40. Branch protegida

Quando possível, a `main` deve usar proteção contra mudanças acidentais.

Exemplos:

- exigir checks;
- impedir force push;
- impedir delete;
- exigir revisão em cenário colaborativo.

---

# 41. Force push

Evitar:

```text
git push --force
```

Preferir, quando realmente necessário:

```text
git push --force-with-lease
```

Mesmo assim, usar com extremo cuidado.

Nunca fazer force push na `main` como rotina.

---

# 42. Reset

Comandos destrutivos como:

```text
git reset --hard
```

não devem ser usados sem confirmar impacto.

Antes:

```text
git status
git log
```

---

# 43. Clean

Comando:

```text
git clean -fd
```

pode apagar arquivos não rastreados.

Nunca executar automaticamente sem verificar o que será removido.

Preferir antes:

```text
git clean -nd
```

---

# 44. Checkout de arquivo

Restaurar arquivo pode destruir mudança local.

Antes de:

```text
git restore
```

confirmar se há conteúdo que precisa ser preservado.

---

# 45. Stash

Pode ser usado para troca rápida de contexto.

Exemplo:

```text
git stash
```

Mas não deve virar armazenamento permanente de trabalho esquecido.

---

# 46. Troca de funcionalidade

Se precisar interromper uma feature para trabalhar em outra:

```text
commit seguro
ou
stash consciente
↓
trocar branch
```

Nunca misturar duas features por pressa.

---

# 47. Hotfix

Problema crítico de produção:

```text
hotfix/nome
```

Fluxo rápido, mas ainda exige:

- validação;
- teste;
- documentação;
- sincronização;
- versão patch.

---

# 48. Versionamento de hotfix

Exemplo:

```text
v1.2.0
↓
hotfix
↓
v1.2.1
```

---

# 49. Migrations

Mudança de banco deve ser commitada junto com:

- schema;
- migration;
- código compatível;
- documentação.

---

# 50. Segredos

Nunca versionar:

```text
.env
*.pem
*.key
id_rsa
tokens
senhas
dumps com dados reais
```

---

# 51. `.gitignore`

Deve incluir, conforme stack:

```text
node_modules
.next
dist
coverage
.env
.env.*
```

com exceção de arquivos seguros como:

```text
.env.example
```

quando definido.

---

# 52. Binários

Evitar versionar binários grandes sem necessidade.

Mídias reais de produção não pertencem ao Git.

---

# 53. Dumps

Dumps de banco com dados reais não devem ser commitados.

Backups pertencem à estratégia de backup, não ao repositório.

---

# 54. Git LFS

Somente considerar se existir necessidade real de versionar arquivos grandes.

Não adotar prematuramente.

---

# 55. Submodules

Evitar submodules sem necessidade arquitetural clara.

---

# 56. Monorepo

A VoltX será um monorepo.

Uma branch pode afetar mais de uma aplicação quando a funcionalidade exigir.

Exemplo:

```text
apps/site
apps/painel
apps/api
packages/types
```

Isso continua sendo uma única feature se fizer parte do mesmo fluxo funcional.

---

# 57. Commits por camada

Uma feature pode ter commits separados como:

```text
feat: adiciona entidade de agendamento
feat: cria endpoints de disponibilidade
feat: adiciona interface de agenda
test: cobre conflito de horários
docs: atualiza regras de agendamento
```

Isso é aceitável se cada commit fizer sentido.

---

# 58. Mensagens em PT-BR

Commits devem permanecer em português do Brasil.

Evitar mistura:

```text
feat: add appointment validation
```

Preferir:

```text
feat: adiciona validação de agendamento
```

---

# 59. Referência a issue

Se houver issue:

```text
Refs #123
```

ou padrão adotado futuramente.

---

# 60. Commits de segurança

Não colocar detalhes sensíveis em mensagem de commit.

Evitar expor:

- credenciais;
- segredos;
- dados reais;
- vulnerabilidade explorável sem necessidade.

---

# 61. Revert

Se uma mudança integrada precisar ser desfeita, preferir:

```text
git revert
```

quando o histórico já foi compartilhado.

Evitar reescrever histórico publicado.

---

# 62. Revert de migration

Migration exige estratégia específica.

Não simplesmente apagar arquivo aplicado.

---

# 63. Bisect

`git bisect` pode ser usado para localizar regressões difíceis.

Não é fluxo cotidiano, mas é ferramenta válida.

---

# 64. Cherry-pick

Pode ser usado quando um commit específico precisa ser levado para outra branch.

Usar conscientemente.

---

# 65. Recuperação

Antes de qualquer ação destrutiva, lembrar que Git oferece:

```text
reflog
```

como ferramenta de recuperação.

---

# 66. Automação futura

Scripts poderão automatizar:

- lint;
- testes;
- build;
- validação de docs;
- sincronização;
- tags;
- releases.

Mas automação nunca deve esconder falha.

---

# 67. CI

CI deverá validar:

```text
lint
typecheck
testes
build
```

e futuramente:

```text
security scan
migration validation
```

---

# 68. Falha de CI

Não fazer merge ignorando falha sem entender causa.

---

# 69. Release candidate

Antes de `v1.0.0`, versões podem usar:

```text
v1.0.0-rc.1
v1.0.0-rc.2
```

---

# 70. Beta

Se necessário:

```text
v0.9.0-beta.1
```

---

# 71. Packages

GitHub Packages pode ser usado futuramente para imagens Docker.

Isso não substitui tags nem Releases.

---

# 72. Docker e Git

Arquivos como:

```text
Dockerfile
compose.yml
nginx.conf
```

devem ser versionados.

Volumes e dados persistentes não.

---

# 73. Arquivos gerados

Não versionar:

```text
dist
.next
coverage
node_modules
```

salvo exceção documentada.

---

# 74. Documentação

Arquivos em:

```text
docs/
```

são parte do produto.

Não tratar documentação como conteúdo secundário.

---

# 75. ADRs

ADRs aceitos não devem ser reescritos silenciosamente.

Nova decisão substitutiva deve:

- criar novo ADR;
- indicar superseded quando aplicável.

---

# 76. README

Mudanças de visão geral ou setup devem atualizar:

```text
README.md
```

---

# 77. ROADMAP

Funcionalidade nova relevante deve ser alinhada ao:

```text
ROADMAP.md
```

antes ou durante a implementação.

---

# 78. CHANGELOG

Não preencher o CHANGELOG com ruído.

Registrar mudanças relevantes para versões.

---

# 79. Estado antes de trocar de branch

Sempre conferir:

```text
git status
```

---

# 80. Estado antes de push

Conferir:

```text
git status
git log --oneline
git remote -v
```

quando houver dúvida.

---

# 81. Estado antes de tag

Conferir:

```text
branch correta
commit correto
testes
documentação
Gitea sincronizado
```

---

# 82. Estado antes de Release

Confirmar:

```text
tag publicada
CHANGELOG atualizado
Gitea sincronizado
GitHub sincronizado
```

---

# 83. Não inventar remotos

Agentes de IA devem conferir:

```text
git remote -v
```

antes de assumir:

```text
origin
gitea
github
```

---

# 84. Não inventar branch

Antes de comandos:

```text
git branch --show-current
```

quando o contexto não estiver claro.

---

# 85. Não inventar estado

Nunca dizer:

```text
"já foi enviado"
"está sincronizado"
"merge concluído"
```

sem validar.

---

# 86. Terminal

No ambiente local Windows, comandos Git deverão indicar:

```text
PowerShell
```

quando esse for o terminal correto.

---

# 87. Caminho raiz local

Projeto:

```text
G:\PROJETOS\voltx-site
```

Antes de comandos:

```powershell
Set-Location "G:\PROJETOS\voltx-site"
```

---

# 88. Servidor Gitea

Referência:

```text
ssh andrew@192.168.1.70
```

Esse endereço não deve ser confundido com a URL do remoto Git.

A URL real do remoto deve ser lida com:

```text
git remote -v
```

---

# 89. Regra das três tentativas detalhada

Tentativas devem ocorrer somente quando fizer sentido repetir.

Pseudo-fluxo:

```text
push
↓
erro transitório?
├── não → diagnosticar
└── sim
    ↓
    tentativa 2
    ↓
    falhou por motivo transitório?
    ├── não → diagnosticar
    └── sim
        ↓
        tentativa 3
        ↓
        falhou?
        ├── não → continuar
        └── sim → interromper
```

---

# 90. Autenticação SSH

Se SSH pedir confirmação ou houver problema de chave, não automatizar aceitação insegura.

Diagnosticar corretamente.

---

# 91. Chaves SSH

Chaves privadas nunca entram no repositório.

---

# 92. Proteção de dados

Não colocar dados reais de clientes em commit, branch ou descrição de Release.

---

# 93. Pull antes de push

Não executar `pull` automaticamente sem entender se existem mudanças locais.

Fluxo seguro:

```text
git status
↓
avaliar
↓
pull/rebase quando apropriado
```

---

# 94. Conflitos

Conflitos devem ser resolvidos conscientemente.

Não aceitar automaticamente “ours” ou “theirs” sem revisar.

---

# 95. Conflitos de documentação

Se duas branches alterarem regras, reconciliar significado, não apenas texto.

---

# 96. Conflitos de migration

Migration conflitante exige análise de ordem e estado real do banco.

---

# 97. Release oficial

Uma versão só é oficial quando:

```text
tag
+
Release
+
CHANGELOG
+
sincronização
+
validação
```

---

# 98. Regra de encerramento da branch

Feature concluída:

```text
merge
↓
validação na main
↓
sincronização
↓
branch pode ser removida
```

---

# 99. Fluxo resumido oficial

```text
main atualizada
↓
nova branch
↓
implementação
↓
commits
↓
testes
↓
documentação
↓
validação visual
↓
merge
↓
push
↓
Gitea (até 3 tentativas em falha transitória)
↓
confirmar sincronização
↓
CHANGELOG
↓
tag anotada
↓
push da tag
↓
GitHub Release
```

---

# 100. Regra final

> Git não é apenas backup.
>
> Ele é o histórico técnico da VoltX.
>
> Cada branch, commit, merge, tag e Release deve ajudar a entender como o sistema evoluiu e permitir recuperar estados anteriores com segurança.
