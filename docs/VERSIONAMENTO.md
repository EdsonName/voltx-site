# VERSIONAMENTO — VoltX

## 1. Finalidade

Este documento define a estratégia oficial de versionamento da plataforma VoltX.

Ele deve ser consultado antes de criar versões, tags, prereleases, GitHub Releases ou artefatos distribuíveis.

> Antes de versionar, leia `AGENTS.md`, `ROADMAP.md`, `CHANGELOG.md` e `GIT_WORKFLOW.md`.

---

## 2. Padrão adotado

A VoltX utilizará Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Exemplos:

```text
0.1.0
0.2.0
0.2.1
1.0.0
```

As tags Git usarão o prefixo `v`:

```text
v0.1.0
v1.0.0
```

---

## 3. Significado

### MAJOR

Usar quando houver mudança incompatível importante.

Exemplo:

```text
1.4.2 → 2.0.0
```

### MINOR

Usar quando houver nova funcionalidade compatível.

Exemplo:

```text
1.4.2 → 1.5.0
```

### PATCH

Usar para correções compatíveis.

Exemplo:

```text
1.4.2 → 1.4.3
```

---

## 4. Fase inicial 0.x

Enquanto a VoltX estiver em desenvolvimento inicial, serão usadas versões:

```text
0.x.x
```

A primeira versão pública estável será:

```text
v1.0.0
```

---

## 5. Quando usar PATCH

Usar PATCH para:

- correções de bugs;
- regressões;
- pequenos ajustes visuais;
- correções de segurança compatíveis;
- pequenas correções de texto ou comportamento sem nova funcionalidade relevante.

Exemplo:

```text
v0.6.0
↓
corrige conflito de agenda
↓
v0.6.1
```

---

## 6. Quando usar MINOR

Usar MINOR para:

- nova funcionalidade;
- novo módulo;
- nova tela importante;
- novo endpoint compatível;
- melhoria funcional relevante;
- expansão compatível da plataforma.

Exemplo:

```text
v0.6.1
↓
adiciona fluxo completo de orçamento
↓
v0.7.0
```

---

## 7. Quando usar MAJOR

Usar MAJOR quando houver:

- quebra de contrato público;
- mudança incompatível de API;
- mudança estrutural de banco incompatível;
- nova geração principal da plataforma.

---

## 8. Versão não é commit

Nem todo commit gera versão.

Fluxo normal:

```text
commit
commit
commit
merge
↓
versão
```

---

## 9. Versão não é branch

Branch representa trabalho isolado.

Versão representa estado consolidado e validado do produto.

---

## 10. Versão oficial

Uma versão oficial exige:

```text
código validado
+
documentação
+
CHANGELOG
+
sincronização dos remotos
+
tag
+
GitHub Release
```

---

## 11. Tags

Formato:

```text
vMAJOR.MINOR.PATCH
```

Exemplos:

```text
v0.1.0
v0.5.2
v1.0.0
```

Preferir tags anotadas.

Exemplo:

```text
git tag -a v0.1.0 -m "Versão 0.1.0 - Fundação documental"
```

---

## 12. Quando criar tag

Somente depois de:

- testes;
- documentação;
- validação;
- merge;
- sincronização com Gitea;
- atualização do CHANGELOG.

---

## 13. Quando não criar tag

Não criar tag para:

- typo isolado;
- commit intermediário;
- experimento;
- ajuste local não validado;
- mudança ainda não integrada.

---

## 14. CHANGELOG

Toda versão oficial deve possuir entrada correspondente em:

```text
CHANGELOG.md
```

Exemplo:

```text
# [0.6.0] — 2026-10-15
```

Registrar quando aplicável:

- Adicionado;
- Alterado;
- Corrigido;
- Removido;
- Segurança;
- Banco de dados;
- API;
- Interface;
- Documentação;
- Infraestrutura.

---

## 15. GitHub Release

Toda versão oficial deve possuir GitHub Release correspondente.

Exemplo:

```text
Tag: v0.6.0
Release: v0.6.0
```

As notas devem resumir:

- o que mudou;
- novas funcionalidades;
- correções;
- mudanças de banco;
- mudanças de API;
- segurança;
- documentação;
- validações executadas.

---

## 16. Prereleases

Formatos permitidos:

```text
-alpha
-beta
-rc
```

Exemplos:

```text
v1.0.0-alpha.1
v1.0.0-beta.1
v1.0.0-rc.1
```

### Alpha

Funcionalidade ainda experimental.

### Beta

Funcionalidade principal pronta, mas ainda em validação.

### Release Candidate

Versão praticamente pronta para publicação.

Exemplo:

```text
v1.0.0-rc.2
↓
validação final
↓
v1.0.0
```

---

## 17. Hotfix

Correção crítica após versão publicada gera PATCH.

Exemplo:

```text
v1.3.0
↓
hotfix
↓
v1.3.1
```

---

## 18. Alterações de banco

Migration compatível pode entrar em MINOR ou PATCH conforme impacto.

Mudança incompatível pode exigir MAJOR.

Toda alteração relevante deve aparecer no CHANGELOG.

---

## 19. Alterações de API

Novo endpoint compatível:

```text
MINOR
```

Correção sem quebra:

```text
PATCH
```

Mudança incompatível de contrato:

```text
MAJOR
```

A versão do produto e a versão da rota da API são conceitos diferentes.

Exemplo válido:

```text
Produto: v0.6.0
API: /api/v1
```

---

## 20. Alterações visuais

Novo componente ou fluxo visual importante pode justificar MINOR.

Correção visual normalmente usa PATCH.

Mudança estética sozinha não exige MAJOR.

---

## 21. v0.1.0

A primeira versão planejada será:

```text
v0.1.0
```

Objetivo:

```text
fundação documental e arquitetural
```

Antes da tag, devem estar consolidados ao menos:

- arquitetura;
- regras de negócio;
- design;
- API;
- banco;
- padrões de código;
- Git;
- versionamento;
- segurança inicial;
- documentação principal.

---

## 22. Fluxo oficial de fechamento

```text
branch concluída
↓
testes
↓
documentação
↓
validação
↓
merge na main
↓
push
↓
sincronização com Gitea
↓
confirmar sincronização
↓
atualizar CHANGELOG
↓
criar tag anotada
↓
enviar tag
↓
publicar GitHub Release
```

---

## 23. Gitea

O Gitea faz parte do fechamento oficial.

Servidor de referência:

```text
ssh andrew@192.168.1.70
```

A URL real do remoto Git deve ser confirmada com:

```text
git remote -v
```

---

## 24. Regra das três tentativas

Se houver falha transitória no envio ao Gitea:

```text
1ª tentativa
↓ falhou

2ª tentativa
↓ falhou

3ª tentativa
↓ falhou

interromper
```

Após a terceira falha:

- não considerar a versão fechada;
- não publicar Release final;
- registrar o problema;
- corrigir o remoto ou a conectividade antes de continuar.

---

## 25. Erros estruturais no Gitea

Erros como:

```text
permissão negada
autenticação inválida
remote incorreto
non-fast-forward
histórico divergente
```

não devem ser repetidos cegamente.

Primeiro diagnosticar.

---

## 26. GitHub Packages

GitHub Packages poderá ser usado futuramente para:

- imagens Docker;
- pacotes internos;
- artefatos reutilizáveis.

Exemplo:

```text
ghcr.io/<usuario>/voltx-site:v1.0.0
ghcr.io/<usuario>/voltx-painel:v1.0.0
ghcr.io/<usuario>/voltx-api:v1.0.0
```

Packages não substitui tags nem Releases.

---

## 27. Tag `latest`

Pode existir futuramente:

```text
latest
```

para apontar para a versão estável atual.

Mas nunca depender apenas de `latest`.

Sempre manter tags imutáveis:

```text
v1.0.0
v1.0.1
```

---

## 28. Ambientes e versões

Ambientes:

```text
development
test
production
```

não são versões.

Exemplo:

```text
v1.0.0
```

é uma versão do produto, não um ambiente.

---

## 29. Rollback

Toda Release relevante deve possuir estratégia de retorno.

Exemplo:

```text
v1.4.0
↓ problema
rollback
↓
v1.3.2
```

ou correção:

```text
v1.4.1
```

Mudanças de banco precisam considerar compatibilidade com rollback.

---

## 30. Mudanças de schema

Quando necessário, preferir estratégia:

```text
expand
↓
deploy compatível
↓
migrar dados
↓
contract
```

para reduzir risco em produção.

---

## 31. Releases reprodutíveis

Uma versão deve ser reproduzível a partir de:

```text
tag
+
código
+
configuração documentada
```

Segredos não fazem parte da versão.

---

## 32. Dependências

Atualização de dependência pode resultar em PATCH, MINOR ou MAJOR conforme impacto.

Atualização de segurança compatível normalmente será PATCH.

---

## 33. Runtime e ferramentas

Versões importantes de runtime devem ser documentadas.

Exemplos:

```text
Node.js
PostgreSQL
Redis
MinIO
```

Lockfiles devem ser versionados quando o gerenciador escolhido os gerar.

---

## 34. Versão exposta pela aplicação

A aplicação pode expor sua versão em:

- health check;
- painel administrativo;
- logs de inicialização;
- tela técnica.

Exemplo:

```json
{
  "status": "ok",
  "version": "0.6.0"
}
```

---

## 35. Versão publicada é imutável

Uma Release oficial não deve ser alterada silenciosamente para apontar a outro commit.

Se algo mudar:

```text
nova versão
```

---

## 36. Artefatos imutáveis

Uma imagem Docker marcada como:

```text
v1.0.0
```

não deve ser substituída silenciosamente por outro build.

---

## 37. Notas de Release

Devem ser escritas em PT-BR.

Exemplo de nome:

```text
VoltX v0.1.0 — Fundação documental
```

---

## 38. Numeração coerente

Evitar pular versões sem justificativa.

Exemplo:

```text
v0.3.0
↓
v0.9.0
```

só deve acontecer se o roadmap explicar a mudança.

---

## 39. Estado de uma versão

Uma versão planejada pode estar em:

```text
PLANEJADA
EM DESENVOLVIMENTO
RC
PUBLICADA
```

---

## 40. Data da versão

Release oficial deve registrar data no formato:

```text
AAAA-MM-DD
```

Timezone operacional:

```text
America/Sao_Paulo
```

---

## 41. Versionamento de documentos legais

Política de Privacidade e Termos de Uso podem possuir versão própria.

Exemplo:

```text
Política de Privacidade 1.0
Termos de Uso 1.0
```

Essa numeração é independente da versão do software.

Aceites devem registrar a versão exata do documento legal aceito.

---

## 42. Versionamento da API

Mudança incompatível da API pode criar:

```text
/api/v2
```

Quando possível, a transição pode manter temporariamente:

```text
/api/v1
/api/v2
```

com depreciação documentada.

---

## 43. Depreciação

Ao descontinuar endpoint ou comportamento público, registrar:

- recurso afetado;
- versão em que foi marcado como obsoleto;
- alternativa;
- versão prevista de remoção.

---

## 44. Checklist antes da tag

Confirmar:

```text
branch correta
main atualizada
git status limpo
lint aprovado
typecheck aprovado
testes aprovados
build aprovado
migrations validadas
documentação atualizada
CHANGELOG atualizado
Gitea sincronizado
```

---

## 45. Checklist depois da tag

Confirmar:

```text
tag enviada
remotos sincronizados
GitHub Release criada
artefatos publicados quando aplicável
versão implantada validada quando houver deploy
```

---

## 46. Segurança

Mudanças de segurança relevantes devem aparecer no CHANGELOG e nas notas da Release sem revelar detalhes que facilitem exploração desnecessária.

---

## 47. Infraestrutura autohospedável

Nenhuma versão pode introduzir silenciosamente dependência obrigatória de SaaS externo para componentes essenciais.

Componentes centrais:

```text
PostgreSQL
Redis
MinIO
```

devem permanecer autohospedáveis conforme `ARQUITETURA.md`.

---

## 48. Integrações externas

WhatsApp, e-mail e consulta de CEP podem usar provedores externos.

Esses provedores devem ser tratados como integrações substituíveis sempre que tecnicamente possível.

Trocar o provedor não exige MAJOR se os contratos internos permanecerem compatíveis.

---

## 49. Automação futura

Scripts poderão automatizar:

- verificações;
- testes;
- build;
- tag;
- push;
- Release.

A automação deve parar em qualquer erro.

A regra de três tentativas deve ser usada apenas para falhas transitórias do Gitea.

---

## 50. Release parcial

Não considerar fechamento concluído se houver estado inconsistente.

Exemplo:

```text
tag criada
mas Gitea não sincronizado
```

ou:

```text
Release publicada
mas tag não chegou ao remoto obrigatório
```

O estado deve ser corrigido antes de considerar a versão finalizada.

---

## 51. Auditoria da versão

Uma Release deve permitir responder:

```text
qual commit?
qual tag?
quando?
o que mudou?
quais testes foram executados?
quais migrations foram aplicadas?
qual documentação mudou?
```

---

## 52. Relação com ROADMAP

`ROADMAP.md` define:

```text
o que queremos entregar
```

Este documento define:

```text
como numeramos e publicamos essa entrega
```

---

## 53. Relação com GIT_WORKFLOW

`GIT_WORKFLOW.md` define:

```text
como o código chega até uma versão
```

Este documento define:

```text
quando esse estado merece um número oficial
```

---

## 54. Regra final

> Uma versão VoltX deve representar um estado real, validado, documentado e recuperável do projeto.
>
> O número da versão não é decoração.
>
> Código, tag, CHANGELOG, remotos e Release devem apontar para a mesma realidade.
