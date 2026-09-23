# ADR 0001 — PostgreSQL como banco principal

**Status:** Aceito
**Data:** 22/09/2026

---

## 1. Contexto

A VoltX precisa de um banco de dados relacional confiável para armazenar:

- usuários;
- clientes;
- permissões;
- serviços;
- orçamentos;
- protocolos;
- Ordens de Serviço;
- agendamentos;
- chat;
- conteúdo;
- consentimentos;
- auditoria;
- configurações;
- demais dados transacionais.

O projeto também definiu como requisito arquitetural a possibilidade de operar sem dependência obrigatória de banco de dados SaaS externo.

---

## 2. Decisão

O banco principal da VoltX será:

```text
PostgreSQL
```

O PostgreSQL será **autohospedado** na infraestrutura controlada pela VoltX.

No desenvolvimento e, preferencialmente, também na produção:

```text
Docker
↓
PostgreSQL
↓
volume persistente
```

O ORM adotado será:

```text
Prisma
```

O Prisma será uma dependência local da API e não representa um serviço externo.

---

## 3. Fluxo

```text
NestJS API
↓
Prisma
↓
PostgreSQL autohospedado
```

---

## 4. Motivos

PostgreSQL foi escolhido por oferecer:

- modelo relacional robusto;
- transações ACID;
- constraints;
- foreign keys;
- índices;
- JSONB quando necessário;
- suporte maduro;
- ampla documentação;
- facilidade de autohospedagem;
- boa integração com Prisma;
- capacidade adequada para a evolução da VoltX.

---

## 5. Fonte de verdade

PostgreSQL será a fonte de verdade para os dados transacionais permanentes.

Redis não substituirá o PostgreSQL para histórico de negócio.

---

## 6. Persistência

Os dados devem ficar em volume persistente.

Recriar container não pode apagar o banco.

---

## 7. Rede

Em produção, PostgreSQL não deverá ficar exposto diretamente à internet pública.

O acesso deverá ocorrer pela rede interna da infraestrutura.

---

## 8. Usuários do banco

A aplicação deverá utilizar credenciais com o menor privilégio necessário.

Credenciais administrativas não devem ser utilizadas pela aplicação comum.

---

## 9. Migrations

Alterações de schema deverão ocorrer por migrations versionadas.

Não editar manualmente banco de produção sem registro.

---

## 10. Tipos

Diretrizes principais:

```text
UUID         → chaves internas quando apropriado
TIMESTAMPTZ  → datas/hora
NUMERIC      → valores monetários
JSONB        → dados flexíveis quando realmente necessário
```

---

## 11. Nomenclatura

Banco:

```text
snake_case
```

Exemplos:

```text
created_at
customer_id
work_order_number
```

---

## 12. Alternativas consideradas

### MySQL / MariaDB

São bancos maduros e válidos, mas PostgreSQL foi considerado mais alinhado ao desenho atual da plataforma e ao uso planejado com Prisma.

### SQLite

Adequado para aplicações menores ou locais, mas não será usado como banco principal da VoltX.

### Supabase

Oferece PostgreSQL gerenciado e serviços adicionais, mas criaria dependência de plataforma externa para uma função central.

### Neon

PostgreSQL gerenciado em nuvem, porém também introduziria dependência externa obrigatória.

### Railway e equivalentes

Podem hospedar banco, mas não serão a base obrigatória da arquitetura.

---

## 13. Consequências positivas

- independência de SaaS de banco;
- controle sobre os dados;
- facilidade de backup próprio;
- migrations versionadas;
- boa integridade relacional;
- arquitetura portátil.

---

## 14. Consequências negativas

A VoltX passa a ser responsável por:

- atualização;
- backup;
- restore;
- monitoramento;
- segurança;
- disponibilidade;
- armazenamento.

Essa responsabilidade é aceita por ser coerente com a decisão de autohospedagem.

---

## 15. Regra de independência

Nenhum agente ou desenvolvedor deverá substituir silenciosamente:

```text
PostgreSQL autohospedado
```

por:

```text
Supabase
Neon
Railway
outro banco SaaS
```

Uma mudança desse tipo exige novo ADR.

---

## 16. Relações

Consultar:

```text
docs/ARQUITETURA.md
docs/DATABASE.md
docs/BACKUP.md
docs/DEPLOY.md
docs/SEGURANCA.md
```

---

## 17. Decisão final

> A VoltX utilizará PostgreSQL autohospedado como banco principal e Prisma como ORM local da API.
