# BLOG — VoltX

## 1. Finalidade

Este documento define o blog e o CMS editorial da VoltX.

Ele cobre:

- artigos;
- categorias;
- hashtags (entidades `tags`);
- publicação;
- revisões;
- comentários;
- likes;
- SEO;
- mídia;
- moderação.

---

## 2. Objetivo

O blog será usado para publicar conteúdo sobre:

- elétrica;
- eletrônica;
- segurança;
- manutenção;
- instalações;
- eficiência;
- tecnologia;
- assuntos relacionados à atuação da VoltX.

---

## 3. Fonte de verdade

Posts devem ser persistidos no banco.

Não manter conteúdo editorial importante apenas em arquivos estáticos.

---

## 4. Status de post

Estados planejados:

```text
DRAFT
SCHEDULED
PUBLISHED
SUSPENDED
ARCHIVED
```

Interface:

```text
Rascunho
Agendado
Publicado
Suspenso
Arquivado
```

---

## 5. Estrutura de post

Campos possíveis:

```text
título
slug
resumo
conteúdo
imagem de capa
autor
categoria
hashtags (entidades tags)
status
data de publicação
SEO
revisão
```

---

## 6. Slug

Deve ser único.

Exemplo:

```text
como-funciona-o-disjuntor-dr
```

---

## 7. Resumo

Usado em:

- cards;
- busca;
- metadata;
- compartilhamento.

---

## 8. Conteúdo

Editor deverá suportar:

- visual;
- Markdown;
- HTML sanitizado.

A decisão final da biblioteca de editor poderá ser formalizada por ADR.

---

## 9. Estado completo do editor

Salvar estrutura suficiente para continuar edição sem perda.

---

## 10. Autosave

Editor deve possuir salvamento automático.

Interface:

```text
Salvando...
Salvo às 22:57
```

---

## 11. Rascunho persistente

Fechar navegador não deve apagar rascunho salvo.

---

## 12. Revisões

Alterações relevantes podem gerar histórico de revisão.

Campos:

- autor;
- data;
- versão;
- conteúdo.

---

## 13. Publicação

Publicar deve validar:

- título;
- slug;
- conteúdo;
- permissões;
- metadata mínima.

---

## 14. Agendamento de publicação

Post poderá ser agendado.

Timezone:

```text
America/Sao_Paulo
```

---

## 15. Suspensão

Post publicado poderá ser suspenso sem apagar histórico.

---

## 16. Arquivamento

Post antigo poderá ser arquivado.

---

## 17. Categorias

Exemplos:

```text
Instalações
Segurança
Manutenção
Eletrônica
Tecnologia
```

Devem ser administráveis.

---

## 18. Tags

`tags` é o nome técnico das hashtags. O CMS utiliza o sistema único definido em [HASHTAGS.md](HASHTAGS.md) e [ARQUITETURA.md](ARQUITETURA.md), seção 31.

---

## 19. Hashtags

Hashtags são entidades próprias.

Regra atual:

```text
máximo de 8 por post
```

---

## 20. Página pública

Rota:

```text
/blog/[slug]
```

---

## 21. Leitura

Página pode incluir:

- título;
- autor;
- data;
- tempo estimado;
- progresso de leitura;
- conteúdo;
- hashtags;
- comentários;
- posts relacionados.

---

## 22. Progresso de leitura

Artigos devem possuir barra fina de progresso de leitura, conforme RN-BLOG-011. A barra deve refletir apenas a área do artigo, não a página inteira.

---

## 23. Comentários

Usuário autenticado poderá comentar.

Visitante apenas lê.

---

## 24. Novo comentário

Campo de comentário deve estar visível quando o usuário possuir permissão.

Não depender de já existirem comentários.

---

## 25. Respostas

Comentários podem suportar respostas conforme arquitetura definida.

---

## 26. Likes

Posts e/ou comentários podem receber likes conforme regra.

---

## 27. Repost

Repost é condicional/futuro, fora do escopo inicial até decisão formal. Este exemplo não cria uma entrega no roadmap.

Se existir repost de conteúdo editorial/social, deve preservar conteúdo original visível e referência ao autor.

Não criar repost vazio.

---

## 28. Moderação

Comentários têm conjunto inicial `VISIBLE`, `HIDDEN`, `PENDING`, `REMOVED`, já descrito em [DATABASE.md](DATABASE.md), seção 60. Sua matriz ainda exige definição antes de implementar; não confundir com os estados canônicos dos posts.

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: matriz de transições com estado atual → ação → próximo estado → ator permitido, conforme [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), seção 29. Usar os estados já documentados necessários ao comportamento do módulo, sem inventar novos estados para completar a matriz. Estados específicos de canal não precisam coincidir com os de outros canais.

Comentários e conteúdo podem ser:

- denunciados;
- ocultados;
- removidos;
- restaurados.

---

## 29. Sanitização

HTML deve seguir allowlist.

Nunca armazenar/renderizar scripts arbitrários.

---

## 30. Mídia

Uploads devem utilizar Object Storage da VoltX.

Não depender de URL externa como método principal.

---

## 31. Imagem de capa

Deve possuir:

- arquivo;
- alt text;
- variantes;
- metadata.

---

## 32. SEO

Cada post pode possuir:

```text
seo_title
seo_description
canonical
og_image
```

---

## 33. Sitemap

Posts publicados devem entrar no sitemap dinâmico.

Rascunhos, suspensos e privados não.

---

## 34. Robots

Conteúdo público indexável conforme `SEO.md`.

---

## 35. Busca pública

Busca poderá indexar:

- título;
- resumo;
- conteúdo;
- hashtags.

---

## 36. Posts relacionados

Podem ser calculados por:

- categoria;
- hashtags (entidades `tags`);
- relevância.

---

## 37. Painel editorial

Ações:

```text
Criar artigo
Editar
Salvar rascunho
Visualizar
Agendar
Publicar
Suspender
Arquivar
```

---

## 38. Permissões

`EDITOR` e papéis superiores podem operar CMS conforme `PERMISSOES.md`.

---

## 39. Auditoria

Publicação, suspensão e remoção devem gerar histórico.

---

## 40. Conteúdo técnico e segurança

Artigos sobre elétrica devem evitar incentivar práticas inseguras.

Quando houver risco, incluir contexto adequado.

---

## 41. Direitos autorais

Não copiar conteúdo de terceiros sem autorização/licença.

---

## 42. Dados estruturados

SEO poderá usar schema apropriado para artigos.

---

## 43. Testes obrigatórios

Cobrir:

- rascunho;
- autosave;
- publicação;
- agendamento;
- revisão;
- comentários;
- permissões;
- sanitização;
- hashtags;
- SEO.

---

## 44. Regra final

> O blog da VoltX deve funcionar como um CMS real, com histórico, segurança, SEO e persistência.
>
> Conteúdo publicado nunca deve depender de estado temporário do navegador.
