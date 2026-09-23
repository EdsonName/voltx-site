# EDITOR DE CONTEÚDO — VoltX

## 1. Finalidade

Este documento define o editor de conteúdo da VoltX.

Ele complementa:

- `BLOG.md`;
- `MIDIA_UPLOADS.md`;
- `HASHTAGS.md`;
- `SEGURANCA.md`;
- `PERMISSOES.md`;
- `UX_WRITING.md`.

---

## 2. Objetivo

O editor deve permitir criar conteúdo de forma segura, persistente e previsível.

Ele deverá suportar, conforme implementação:

```text
modo visual
Markdown
HTML sanitizado
```

A biblioteca final do editor deverá ser definida antes da implementação ou registrada em ADR, caso represente decisão arquitetural relevante.

---

## 3. Persistência

Conteúdo nunca deve existir apenas no estado temporário do navegador.

Rascunhos devem ser persistidos no backend.

---

## 4. Autosave

O editor deverá possuir salvamento automático.

Estados visíveis:

```text
Salvando...
Salvo às 22:57
Não foi possível salvar
```

---

## 5. Recuperação de rascunho

Se houver rascunho não finalizado:

```text
Você possui um rascunho não finalizado.
```

Ações:

```text
Continuar de onde parei
Abrir do início
```

---

## 6. Estrutura do documento

Um documento editorial pode conter:

- título;
- resumo;
- corpo;
- imagem de capa;
- categoria;
- tags;
- hashtags;
- autor;
- SEO;
- status;
- data de publicação.

---

## 7. Título

Obrigatório para publicação.

Deve possuir limite de tamanho configurado.

---

## 8. Slug

Pode ser sugerido automaticamente a partir do título.

Exemplo:

```text
Como funciona o disjuntor DR
↓
como-funciona-o-disjuntor-dr
```

O autor poderá editar antes da publicação, respeitando unicidade.

---

## 9. Resumo

Deve ser separado do corpo.

Será usado em:

- cards;
- busca;
- SEO;
- compartilhamento.

---

## 10. Corpo do conteúdo

Deve suportar elementos editoriais úteis:

- títulos;
- subtítulos;
- parágrafos;
- listas;
- links;
- citações;
- imagens;
- código quando necessário;
- tabelas;
- separadores.

---

## 11. HTML

HTML manual só pode ser aceito quando passar por sanitização.

Bloquear:

- scripts;
- eventos inline;
- `javascript:`;
- iframes não autorizados;
- tags perigosas.

---

## 12. Markdown

Se houver modo Markdown, o resultado renderizado deverá passar pelas mesmas regras de segurança do conteúdo visual.

---

## 13. Estado canônico

A implementação deverá definir uma representação canônica do conteúdo.

Não manter três versões independentes e divergentes de:

```text
visual
Markdown
HTML
```

---

## 14. Revisões

Alterações relevantes podem gerar revisões.

Cada revisão pode registrar:

- autor;
- data;
- conteúdo;
- título;
- resumo;
- metadata.

---

## 15. Preview

O editor deverá permitir visualização antes da publicação.

Preview não deve ser indexável publicamente.

---

## 16. Publicação

Antes de publicar, validar:

- título;
- slug;
- conteúdo;
- permissões;
- status;
- metadata mínima.

---

## 17. Agendamento

Pode permitir:

```text
Agendar publicação
```

Timezone:

```text
America/Sao_Paulo
```

---

## 18. Suspensão

Conteúdo publicado poderá ser suspenso.

Isso não deve apagá-lo.

---

## 19. Arquivamento

Conteúdo antigo pode ser arquivado preservando histórico.

---

## 20. Imagem de capa

Deve usar upload próprio da VoltX.

Não depender de URL externa como método principal.

---

## 21. Mídia embutida

Imagens inseridas no corpo devem ser persistidas no Object Storage.

---

## 22. Upload local

Fluxo esperado:

```text
selecionar arquivo
↓
validar
↓
enviar
↓
armazenar
↓
receber identificador
↓
inserir no conteúdo
```

---

## 23. Alt text

Toda imagem editorial relevante deve possuir texto alternativo.

---

## 24. Créditos

Se mídia exigir atribuição, o editor deve permitir registrar crédito/fonte.

---

## 25. Hashtags

Regra atual:

```text
máximo de 8 por publicação
```

---

## 26. Tags editoriais

Tags e hashtags não são necessariamente a mesma entidade.

A regra final deverá ser consistente com `HASHTAGS.md`.

---

## 27. SEO

Campos:

```text
seo_title
seo_description
canonical
og_image
```

podem ser editáveis.

---

## 28. Contador

A interface pode exibir contadores úteis.

Exemplo:

```text
Hashtags: 3/8
```

---

## 29. Links

Links externos devem ser validados.

Evitar esquemas inseguros.

---

## 30. Conteúdo colado

Texto vindo de Word, sites ou outros editores deve ser limpo de estilos indesejados quando possível.

---

## 31. Segurança elétrica

Conteúdos técnicos devem evitar instruções perigosas sem contexto adequado.

---

## 32. Permissões

Papéis autorizados:

```text
EDITOR
ADMIN
SUPER_ADMIN
```

conforme `PERMISSOES.md`.

---

## 33. Concorrência de edição

Se dois usuários editarem o mesmo conteúdo, o sistema deverá evitar perda silenciosa.

Estratégias possíveis:

- versionamento;
- optimistic locking;
- aviso de conflito.

---

## 34. Histórico de publicação

Registrar:

- quem publicou;
- quando;
- versão;
- estado anterior.

---

## 35. Exclusão

Preferir arquivamento ou soft delete quando houver histórico importante.

---

## 36. Erro de salvamento

Mensagem:

```text
Não foi possível salvar suas alterações.
Tente novamente.
```

Não fingir sucesso.

---

## 37. Saída do editor

Ao sair com alterações não salvas, alertar quando necessário.

---

## 38. Testes obrigatórios

Cobrir:

- autosave;
- recuperação;
- sanitização;
- upload;
- preview;
- publicação;
- agendamento;
- revisão;
- permissões;
- conflito de edição.

---

## 39. Regra final

> O editor da VoltX deve preservar conteúdo, histórico e segurança.
>
> Nenhuma publicação pode depender de estado temporário do navegador.
