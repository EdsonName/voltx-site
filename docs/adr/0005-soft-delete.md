# ADR 0005 — Soft delete e preservação de histórico

**Status:** Aceito  
**Data:** 22/09/2026

---

## 1. Contexto

A VoltX possui entidades cujo histórico não pode desaparecer apenas porque foram:

- canceladas;
- encerradas;
- arquivadas;
- desativadas;
- removidas da interface.

Exemplos:

- clientes;
- serviços;
- agendamentos;
- protocolos;
- OS;
- comentários;
- mídia;
- conteúdo editorial.

Ao mesmo tempo, aplicar soft delete indiscriminadamente a todas as tabelas criaria complexidade desnecessária.

---

## 2. Decisão

A VoltX adotará **soft delete seletivo**.

Isso significa:

> entidades com necessidade real de histórico poderão usar exclusão lógica, enquanto outras poderão usar exclusão física quando seguro e permitido.

---

## 3. Campo conceitual

Quando aplicável:

```text
deleted_at
```

ou status equivalente.

---

## 4. Consultas normais

Registros excluídos logicamente não devem aparecer em consultas comuns.

---

## 5. Histórico

Relacionamentos históricos poderão continuar apontando para o registro lógico.

---

## 6. Cancelamento não é delete

Estados como:

```text
CANCELLED
ARCHIVED
SUSPENDED
```

não devem ser substituídos automaticamente por soft delete.

Status de negócio e exclusão lógica são conceitos diferentes.

---

## 7. Agendamentos

Cancelamento preserva registro.

Não requer necessariamente `deleted_at`.

---

## 8. Serviços

Serviço antigo pode usar:

```text
INACTIVE
ARCHIVED
```

em vez de exclusão.

---

## 9. Clientes

Solicitação de exclusão LGPD não deve ser resolvida apenas com soft delete.

Pode exigir:

- anonimização;
- remoção;
- retenção seletiva.

---

## 10. Conteúdo

Posts podem usar arquivamento/suspensão.

Soft delete poderá existir para remoção administrativa.

---

## 11. Comentários

Podem usar remoção lógica para preservar contexto e auditoria.

---

## 12. Auditoria

A ação de soft delete deve registrar:

- ator;
- data;
- recurso;
- motivo quando aplicável.

---

## 13. Restore

Entidades apropriadas poderão ser restauradas por usuário autorizado.

---

## 14. Exclusão física

Pode ocorrer quando:

- não houver necessidade histórica;
- retenção permitir;
- dependências forem tratadas;
- obrigação de privacidade exigir.

---

## 15. LGPD

Soft delete não significa conformidade automática.

Registro marcado como deletado continua contendo dados pessoais.

---

## 16. Retenção

A política de retenção continua sendo autoridade para ciclo de vida do dado.

Consultar:

```text
RETENCAO_DADOS.md
```

---

## 17. Alternativas consideradas

### Exclusão física para tudo

Simplifica consultas, mas destrói histórico necessário.

### Soft delete para tudo

Preserva histórico, mas aumenta complexidade e risco de “dados mortos” eternos.

### Apenas status

Adequado para várias entidades, mas não cobre todos os casos de remoção lógica.

---

## 18. Consequências positivas

- histórico preservado;
- possibilidade de restauração;
- rastreabilidade;
- menor risco de exclusão acidental.

---

## 19. Consequências negativas

- consultas precisam filtrar corretamente;
- unicidade pode exigir tratamento;
- retenção precisa remover/anonimizar dados eventualmente;
- risco de vazamento se filtros forem esquecidos.

---

## 20. Prisma

A camada de acesso deve padronizar filtros quando soft delete estiver presente.

---

## 21. Índices

Índices e constraints podem precisar considerar `deleted_at`.

---

## 22. Testes

Cobrir:

- ocultação em consultas;
- restauração;
- autorização;
- unicidade;
- retenção;
- relações históricas.

---

## 23. Regra final

> Soft delete será usado quando houver motivo de negócio ou auditoria.
>
> Não será aplicado automaticamente a todas as tabelas, nem usado como substituto de anonimização e retenção LGPD.
