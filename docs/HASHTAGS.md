# HASHTAGS — VoltX

## 1. Finalidade

Este documento define o sistema de hashtags da VoltX.

Ele cobre:

- criação;
- normalização;
- associação com conteúdo;
- limite;
- busca;
- páginas públicas;
- moderação;
- tendências.

---

## 2. Conceito

Hashtag é uma entidade reutilizável usada para agrupar conteúdos relacionados.

Exemplos:

```text
#eletrica
#seguranca
#dr
#chuveiro
```

---

## 3. Entidade própria

Hashtag não deve ser apenas texto solto dentro do post.

Modelo conceitual:

```text
tags
post_tags
```

conforme [ARQUITETURA.md](ARQUITETURA.md), seção 31, e [DATABASE.md](DATABASE.md).

---

## 4. Limite por publicação

Regra atual:

```text
máximo de 8 hashtags por post
```

Esse limite deve ser validado no backend.

---

## 5. Entrada

Usuário pode digitar:

```text
#Elétrica
eletrica
#eletrica
```

O sistema deve reconhecer a forma canônica.

---

## 6. Normalização

Chave canônica obrigatória:

```text
lowercase
sem acentos
sem #
trim
```

`#Elétrica`, `#ELETRICA` e `eletrica` resolvem para `eletrica`. O slug utiliza essa chave canônica única.

---

## 7. Acentos

Quando necessário, preservar a forma visual em `display_name`, por exemplo `#elétrica`. A apresentação pode reaplicar `#`, mas acentos ou caixa na exibição não criam outra entidade lógica.

---

## 8. Unicidade

Não criar duplicatas como:

```text
#Eletrica
#eletrica
#ELETRICA
```

para a mesma entidade lógica.

---

## 9. Validação

Permitir apenas caracteres adequados ao padrão definido.

Evitar:

- espaços internos;
- símbolos arbitrários;
- URLs;
- scripts;
- texto excessivamente longo.

---

## 10. Interface de seleção

O editor pode:

- sugerir existentes;
- permitir criar nova;
- mostrar contador;
- impedir a nona hashtag.

---

## 11. Contador

Exemplo:

```text
3/8
```

---

## 12. Página pública

Rota conceitual:

```text
/tag/eletrica
```

Pode listar posts publicados associados.

---

## 13. Busca

Hashtags podem participar da busca pública.

---

## 14. Tendências

A área:

```text
Assuntos em alta
```

pode usar hashtags.

---

## 15. Cálculo de tendência

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: fórmula final de tendências, sem fixar pesos ou janela nesta etapa.

Não deve ser apenas contagem total histórica.

Pode considerar:

- uso recente;
- interações;
- janela de tempo;
- conteúdo publicado.

A fórmula final deverá ser documentada antes de implementação.

---

## 16. Conteúdo não publicado

Rascunhos não devem influenciar tendências públicas.

---

## 17. Hashtags arquivadas

Uma hashtag pode ser desativada ou mesclada se necessário.

---

## 18. Mesclagem

Se existirem duplicatas históricas, um admin pode mesclar:

```text
#energiaeletrica
↓
#eletrica
```

preservando associações.

---

## 19. Moderação

Hashtags abusivas podem ser:

- bloqueadas;
- ocultadas;
- desativadas.

---

## 20. Lista bloqueada

Pode existir denylist para termos inadequados.

Não usar lista enorme sem necessidade real.

---

## 21. Relação com categorias

Categoria e hashtag têm funções diferentes.

Categoria:

```text
estrutura editorial principal
```

Hashtag:

```text
associação transversal
```

---

## 22. Relação com tags

Neste projeto, `tags` é o nome técnico das entidades de hashtag. Não criar um sistema editorial paralelo sem decisão documentada. Categorias continuam distintas, conforme a seção anterior e [ARQUITETURA.md](ARQUITETURA.md).

---

## 23. SEO

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: quantidade/critério exato de elegibilidade para indexação, em conjunto com [SEO.md](SEO.md), seção 24. Não criar deliberadamente páginas vazias ou de baixo valor para SEO.

Páginas de hashtag só devem ser indexadas quando possuírem valor real.

Hashtags vazias ou com pouco conteúdo podem receber `noindex`.

---

## 24. Slug

O slug utiliza a chave canônica definida na seção 6.

---

## 25. API

Endpoints públicos devem retornar apenas hashtags ligadas a conteúdo público.

---

## 26. Permissões

Editor pode associar hashtags.

Admin pode moderar/mesclar.

---

## 27. Auditoria

Ações de moderação podem ser auditadas.

---

## 28. Testes obrigatórios

Cobrir:

- normalização;
- duplicidade;
- limite 8;
- associação;
- remoção;
- busca;
- tendência;
- moderação.

---

## 29. Regra final

> Hashtags devem ser entidades consistentes e reutilizáveis.
>
> A mesma hashtag não pode existir várias vezes apenas por diferença de caixa ou formatação.
