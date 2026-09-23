# SERVIÇOS — VoltX

## 1. Finalidade

Este documento define como os serviços oferecidos pela VoltX serão cadastrados, exibidos e relacionados a:

- orçamentos;
- agendamentos;
- Ordens de Serviço;
- conteúdo;
- SEO;
- avaliações.

---

## 2. Fonte de verdade

Serviços devem vir do banco.

Evitar cards fixos no frontend.

---

## 3. Entidade principal

Um serviço poderá possuir:

```text
id
nome
slug
categoria
resumo
descrição
status
destaque
imagem principal
galeria
permite orçamento
permite agendamento
área de atendimento
faixa de preço opcional
tags
SEO
```

---

## 4. Status

Estados possíveis:

```text
DRAFT
ACTIVE
INACTIVE
ARCHIVED
```

Interface:

```text
Rascunho
Ativo
Inativo
Arquivado
```

---

## 5. Serviço ativo

Somente serviço ativo deve aparecer publicamente, salvo preview autorizado.

---

## 6. Categorias

Serviços poderão pertencer a categoria.

Exemplos:

```text
Instalação
Manutenção
Diagnóstico
Quadros elétricos
Iluminação
Proteção
```

A lista final será administrável.

---

## 7. Slug

Cada serviço deverá possuir slug público único.

Exemplo:

```text
instalacao-de-dr
```

---

## 8. Resumo

Texto curto para cards.

Não duplicar descrição longa integralmente.

---

## 9. Descrição

Pode conter:

- objetivo;
- quando é indicado;
- como funciona;
- observações;
- limitações;
- cuidados.

---

## 10. Segurança

Descrições não devem incentivar procedimento elétrico inseguro.

---

## 11. Imagem principal

Cada serviço poderá possuir mídia principal.

Usar sistema de uploads da VoltX.

---

## 12. Galeria

Serviço poderá ter múltiplas mídias.

Exemplos:

- fotos;
- antes/depois;
- diagramas;
- vídeos curtos.

---

## 13. Orçamento

Campo:

```text
allows_quote
```

define se o serviço pode iniciar fluxo de orçamento.

---

## 14. Agendamento

Campo:

```text
allows_scheduling
```

define se pode iniciar fluxo direto de agendamento.

---

## 15. Orçamento antes do agendamento

Determinados serviços podem exigir orçamento prévio.

Essa regra deve ser configurável.

---

## 16. Área de atendimento

Serviço pode possuir:

- área padrão;
- regra de deslocamento;
- observação para regiões externas.

Endereço fora da área habitual não deve ser rejeitado automaticamente.

---

## 17. Preço

Preço público será opcional.

Pode existir:

```text
A partir de
Faixa estimada
Sob orçamento
```

Não mostrar valor falso apenas para preencher layout.

---

## 18. Faixa de preço

Quando houver:

- valor mínimo;
- valor máximo;
- observação.

Usar tipo monetário seguro.

---

## 19. Destaque

Campo:

```text
featured
```

pode controlar exibição em áreas de destaque.

---

## 20. Ordem

Pode existir ordem manual para listas curadas.

Não depender exclusivamente da ordem de criação.

---

## 21. Tags

Serviços podem usar tags internas ou públicas para busca e associação.

---

## 22. SEO

Campos possíveis:

```text
seo_title
seo_description
canonical_url
og_image
```

quando necessário.

---

## 23. Página pública

Rota conceitual:

```text
/servicos/[slug]
```

Conteúdo:

- título;
- descrição;
- galeria;
- benefícios;
- observações;
- CTA;
- orçamento;
- agendamento;
- contato.

---

## 24. CTA

Ações possíveis:

```text
Solicitar orçamento
Agendar atendimento
Falar pelo WhatsApp
```

Mostrar apenas ações válidas para o serviço.

---

## 25. Serviço indisponível

Se um serviço for desativado:

- não permitir nova contratação;
- preservar referências históricas;
- não apagar orçamentos/OS antigos.

---

## 26. Arquivamento

`ARCHIVED` representa serviço preservado para histórico, mas fora de operação.

---

## 27. Relação com orçamento

Itens de orçamento devem registrar referência ao serviço quando aplicável.

Também devem preservar snapshot textual/preço necessário para histórico.

---

## 28. Relação com OS

OS pode referenciar um ou mais serviços.

---

## 29. Relação com agendamento

Agendamento pode apontar serviço principal.

---

## 30. Relação com avaliações

Avaliação pode apontar serviço executado.

---

## 31. Busca pública

Serviços ativos podem aparecer na busca pública.

Nunca incluir dados privados de clientes.

---

## 32. Painel administrativo

Operações:

```text
Criar serviço
Editar serviço
Ativar
Desativar
Arquivar
Destacar
Gerenciar galeria
```

---

## 33. Exclusão

Evitar exclusão física de serviço já utilizado em histórico.

Preferir:

```text
INACTIVE
ARCHIVED
```

---

## 34. Validação

Obrigatórios mínimos:

```text
nome
slug
resumo
descrição
categoria
status
```

Outros campos dependem da configuração.

---

## 35. Auditoria

Alterações relevantes podem registrar:

- autor;
- data;
- estado anterior;
- estado novo.

---

## 36. Testes obrigatórios

Cobrir:

- criação;
- slug único;
- ativação;
- desativação;
- publicação;
- CTA;
- permissões;
- preservação histórica.

---

## 37. Regra final

> Serviços da VoltX devem ser dados administráveis, não conteúdo fixo espalhado pelo frontend.
>
> Alterar um serviço não pode destruir o histórico de orçamentos, agendamentos ou Ordens de Serviço já existentes.
