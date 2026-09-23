# ADR 0002 — NestJS como backend principal

**Status:** Aceito  
**Data:** 22/09/2026

---

## 1. Contexto

A VoltX necessita de uma API capaz de concentrar:

- autenticação;
- autorização;
- regras de negócio;
- acesso ao banco;
- chat;
- uploads;
- notificações;
- integrações;
- auditoria;
- validação;
- administração.

O backend deverá ser modular, testável e adequado a uma aplicação com crescimento de domínio.

---

## 2. Decisão

O backend principal será construído com:

```text
NestJS
+
TypeScript
```

---

## 3. Estrutura conceitual

```text
Controller
↓
Service
↓
Repository / Prisma
↓
PostgreSQL
```

---

## 4. Motivos

NestJS foi escolhido por oferecer:

- arquitetura modular;
- dependency injection;
- controllers;
- services;
- guards;
- interceptors;
- pipes;
- WebSocket gateways;
- integração com TypeScript;
- boa estrutura para testes;
- organização adequada a domínios.

---

## 5. Modularização

Módulos deverão ser organizados por domínio.

Exemplos:

```text
AuthModule
ClientsModule
ServicesModule
QuotesModule
AppointmentsModule
ProtocolsModule
WorkOrdersModule
ChatModule
BlogModule
NotificationsModule
```

---

## 6. Controllers

Devem ser finos.

Responsabilidades:

- receber requisição;
- validar entrada;
- chamar camada de negócio;
- retornar resposta.

---

## 7. Services

Concentram regras de negócio e orquestração.

---

## 8. Prisma

NestJS acessará PostgreSQL por Prisma.

---

## 9. Guards

Autenticação e autorização devem utilizar guards reutilizáveis.

Evitar duplicação manual de verificação em cada endpoint.

---

## 10. DTOs

Entradas e saídas devem possuir contratos explícitos.

Não expor modelo Prisma cru sem controle.

---

## 11. Validação

Validação de backend é obrigatória.

Frontend não é autoridade.

---

## 12. API

A API seguirá:

```text
REST
/api/v1
HATEOAS quando definido
```

---

## 13. WebSocket

NestJS poderá hospedar gateways Socket.IO para o chat.

---

## 14. Alternativas consideradas

### Express puro

Mais simples e flexível, porém exigiria definir manualmente grande parte da organização arquitetural.

### Fastify puro

Bom desempenho, mas o projeto ainda precisaria estruturar por conta própria módulos, DI, guards e convenções.

### Next.js API Routes

Adequado para várias aplicações, mas o domínio da VoltX justifica uma API independente e centralizada.

### AdonisJS

Framework completo e válido, mas NestJS foi escolhido pela estrutura modular e integração com os demais requisitos planejados.

---

## 15. Consequências positivas

- arquitetura previsível;
- boa separação de responsabilidades;
- facilidade de testes;
- suporte a WebSocket;
- TypeScript ponta a ponta;
- escalabilidade organizacional.

---

## 16. Consequências negativas

- maior estrutura inicial;
- curva de aprendizado;
- risco de abstração excessiva se módulos forem criados sem necessidade.

---

## 17. Regra de simplicidade

NestJS não deve ser usado para criar camadas artificiais.

Arquitetura deve ser modular, mas proporcional à complexidade real.

---

## 18. Relações

Consultar:

```text
docs/ARQUITETURA.md
docs/API.md
docs/CODING_STANDARDS.md
docs/AUTENTICACAO.md
docs/PERMISSOES.md
```

---

## 19. Decisão final

> NestJS + TypeScript será a base da API da VoltX.
