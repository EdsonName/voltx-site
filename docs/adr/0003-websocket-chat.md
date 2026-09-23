# ADR 0003 — WebSocket e Socket.IO para o chat

**Status:** Aceito
**Data:** 22/09/2026

---

## 1. Contexto

A VoltX terá um sistema de atendimento em tempo real entre:

```text
Cliente autenticado ↔ VoltX
```

O sistema precisa suportar:

- mensagens em tempo real;
- presença;
- não lidas;
- reconexão;
- protocolos;
- múltiplos atendimentos ao longo do tempo;
- inbox administrativa;
- histórico permanente.

O chat não poderá ser apenas simulação de frontend.

---

## 2. Decisão

O tempo real será implementado com:

```text
Socket.IO
sobre WebSocket
```

integrado ao backend NestJS.

---

## 3. Persistência

A arquitetura será:

```text
Cliente
↓
Socket.IO
↓
NestJS
↓
PostgreSQL
```

PostgreSQL será a fonte de verdade das mensagens permanentes.

---

## 4. Redis

Redis será utilizado quando necessário para:

- presença;
- pub/sub;
- sincronização entre instâncias;
- locks;
- estado temporário;
- filas.

---

## 5. Redis não é histórico

Mensagens permanentes não devem existir somente no Redis.

---

## 6. Protocolo

Uma conversa poderá possuir vários protocolos ao longo do tempo.

Exemplo:

```text
Conversa
├── protocolo encerrado
├── protocolo encerrado
└── protocolo atual
```

---

## 7. Encerramento

Encerrar atendimento não apaga conversa ou histórico.

---

## 8. Reconexão

O cliente deverá conseguir reconectar e ressincronizar estado.

---

## 9. Idempotência

Retry de rede não deve duplicar mensagem.

---

## 10. Autenticação

Toda conexão deve validar sessão.

---

## 11. Autorização

Cada evento deve verificar se o usuário pode acessar a conversa.

Conhecer `conversation_id` não concede acesso.

---

## 12. Presença

Estados como:

```text
Online
Ausente
Ocupado
Offline
```

podem utilizar Redis.

---

## 13. Eventos temporários

Exemplos:

```text
typing
presence
```

não precisam ser persistidos como mensagens.

---

## 14. Alternativas consideradas

### Polling HTTP

Mais simples, porém menos adequado para experiência de chat em tempo real e gera requisições repetidas.

### Server-Sent Events

Útil para comunicação servidor → cliente, mas o chat exige comunicação bidirecional natural.

### WebSocket nativo

Seria possível, porém Socket.IO oferece reconexão, eventos e abstrações úteis para o caso.

### Serviço SaaS de chat

Foi rejeitado como dependência central porque o histórico e o funcionamento principal devem permanecer sob controle da VoltX.

---

## 15. Consequências positivas

- baixa latência;
- eventos bidirecionais;
- reconexão;
- integração com NestJS;
- possibilidade de escala com Redis;
- controle completo do histórico.

---

## 16. Consequências negativas

- maior complexidade que HTTP puro;
- necessidade de tratar reconexão;
- necessidade de idempotência;
- necessidade de sincronização entre instâncias futuras.

---

## 17. Fallback

A API REST ainda poderá ser usada para:

- carregar histórico;
- buscar conversas;
- operações administrativas;
- sincronização inicial.

---

## 18. Regra contra simulações

Não manter em produção:

```text
setTimeout
respostas fake
mensagens hardcoded
chat apenas visual
```

---

## 19. Relações

Consultar:

```text
docs/CHAT.md
docs/NOTIFICACOES.md
docs/PROTOCOLOS_OS.md
docs/ARQUITETURA.md
docs/SEGURANCA.md
```

---

## 20. Decisão final

> O chat da VoltX utilizará Socket.IO/WebSocket para tempo real, Redis para estado temporário quando necessário e PostgreSQL para histórico permanente.
