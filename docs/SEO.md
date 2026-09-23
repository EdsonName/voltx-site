# SEO — VoltX

## 1. Finalidade

Este documento define o SEO técnico e editorial da VoltX.

Ele cobre:

- metadata;
- sitemap;
- robots;
- canonical;
- Open Graph;
- dados estruturados;
- páginas públicas;
- performance;
- indexação.

---

## 2. Escopo indexável

Podem ser indexados:

- Home;
- Sobre;
- Serviços;
- páginas de serviço;
- Blog;
- posts publicados;
- páginas públicas úteis.

---

## 3. Conteúdo não indexável

Não deve ser indexado:

- painel administrativo;
- área do cliente;
- login;
- cadastro;
- chats;
- orçamentos privados;
- OS;
- páginas de preview;
- rascunhos;
- rotas internas.

---

## 4. Robots não é segurança

`robots.txt` apenas orienta crawlers.

Nunca usar como mecanismo de proteção.

---

## 5. Sitemap

Sitemap deve ser dinâmico.

Pode incluir:

- Home;
- serviços ativos;
- posts publicados;
- páginas públicas institucionais.

---

## 6. Exclusões do sitemap

Não incluir:

- rascunhos;
- suspensos;
- arquivados;
- recursos privados;
- admin.

---

## 7. Metadata

Cada página pública relevante deve possuir:

```text
title
description
canonical
Open Graph
```

---

## 8. Título

Deve ser específico.

Exemplo:

```text
Instalação de DR | VoltX
```

---

## 9. Description

Deve explicar o conteúdo de forma natural.

Evitar keyword stuffing.

---

## 10. Canonical

Usar canonical para consolidar URL principal.

---

## 11. Open Graph

Campos:

- título;
- descrição;
- imagem;
- URL;
- tipo.

---

## 12. Twitter/X cards

Podem ser adicionadas se houver benefício.

---

## 13. Imagens sociais

Usar imagem adequada e otimizada.

---

## 14. Slugs

Devem ser:

- legíveis;
- estáveis;
- em lowercase;
- sem parâmetros desnecessários.

---

## 15. URLs

Preferir:

```text
/servicos/instalacao-de-dr
/blog/como-funciona-o-dr
```

Evitar:

```text
/page?id=123
```

para conteúdo público principal.

---

## 16. Redirecionamentos

Se slug mudar, criar redirect permanente quando apropriado.

---

## 17. 404

Página inexistente deve retornar status correto.

---

## 18. 410

Conteúdo removido definitivamente pode usar 410 quando fizer sentido.

---

## 19. Performance

SEO depende também de:

- Core Web Vitals;
- imagens otimizadas;
- carregamento eficiente;
- HTML semântico.

---

## 20. SSR/Server Rendering

Next.js deverá aproveitar rendering adequado para conteúdo indexável.

---

## 21. Conteúdo útil

SEO não deve produzir texto artificial apenas para preencher palavras-chave.

---

## 22. Serviços

Cada serviço ativo deve possuir metadata própria.

---

## 23. Blog

Cada post publicado deve possuir metadata.

---

## 24. Hashtags

Páginas de hashtag só devem ser indexadas se tiverem conteúdo suficiente e valor real.

---

## 25. Paginação

Evitar criar milhares de páginas de baixo valor indexável.

---

## 26. Busca interna

Resultados de busca interna normalmente devem receber:

```text
noindex
```

salvo decisão específica.

---

## 27. Dados estruturados

Pode usar JSON-LD para:

- Organization/LocalBusiness quando apropriado;
- Article;
- BreadcrumbList;
- Service;
- Review quando compatível.

---

## 28. Reviews

Nunca gerar dados estruturados falsos ou com avaliações inexistentes.

---

## 29. LocalBusiness

Dados devem refletir informações reais e públicas da VoltX.

---

## 30. NAP

Nome, endereço e telefone devem permanecer consistentes quando exibidos publicamente.

---

## 31. Perfil acadêmico

Informações acadêmicas públicas podem aparecer na página Sobre, mas não devem ser exageradas como credencial profissional que não exista.

---

## 32. Sitemap.xml

Deve ser atualizado automaticamente conforme conteúdo publicado.

---

## 33. robots.txt

Deve permitir áreas públicas e bloquear crawlers de áreas irrelevantes, sem tratar isso como controle de acesso.

---

## 34. Canonical do domínio

Produção prevista:

```text
https://voltx.narrativas.site
```

Subdomínios privados não devem disputar indexação com o site público.

---

## 35. Painel

```text
https://painel-voltx.narrativas.site
```

deve permanecer fora da indexação.

---

## 36. API

```text
https://api-voltx.narrativas.site
```

não é conteúdo de busca pública.

---

## 37. Conteúdo duplicado

Evitar múltiplas URLs para o mesmo artigo sem canonical.

---

## 38. Links internos

Usar links internos úteis entre:

- serviços;
- posts;
- categorias;
- assuntos relacionados.

---

## 39. Breadcrumbs

Usar quando melhorar navegação.

---

## 40. Alt text

Imagens relevantes devem possuir alt text descritivo.

---

## 41. Headings

Usar hierarquia semântica:

```text
h1
h2
h3
```

sem depender apenas de tamanho visual.

---

## 42. Auditoria SEO

Antes de Release relevante:

- verificar metadata;
- sitemap;
- robots;
- canonical;
- 404;
- páginas privadas;
- performance.

---

## 43. Analytics

Não é requisito de SEO.

Qualquer ferramenta de analytics deverá respeitar `LGPD.md`.

---

## 44. Testes

Cobrir:

- sitemap;
- robots;
- metadata;
- canonical;
- noindex;
- páginas privadas;
- redirects.

---

## 45. Regra final

> SEO da VoltX deve ajudar pessoas e buscadores a entender conteúdo público real.
>
> Área privada nunca deve depender de SEO ou robots para permanecer protegida.
