# NOTIFICAÇÕES — VoltX

## 1. Finalidade

Este documento define o sistema de notificações da VoltX.

Ele cobre:

- notificações internas;
- preferências;
- eventos;
- leitura;
- e-mail;
- WhatsApp;
- segurança;
- privacidade.

---

## 2. Canais

Canais possíveis:

```text
IN_APP
EMAIL
WHATSAPP
```

Outros poderão ser adicionados futuramente.

---

## 3. Fonte de verdade

Eventos e notificações internas devem ser persistidos quando necessário.

---

## 4. Notificação interna

Pode aparecer em:

- sino do cabeçalho;
- central de notificações;
- badge.

---

## 5. Tipos de evento

Exemplos:

```text
QUOTE_UPDATED
APPOINTMENT_CONFIRMED
APPOINTMENT_CANCELLED
NEW_CHAT_MESSAGE
WORK_ORDER_UPDATED
SECURITY_ALERT
```

---

## 6. Texto visível

Sempre em PT-BR.

Exemplos:

```text
Seu agendamento foi confirmado.
Seu orçamento foi atualizado.
Edson respondeu sua mensagem.
```

---

## 7. Link de ação

Notificação pode apontar para recurso relacionado.

Exemplo:

```text
Ver orçamento
Ver agendamento
Abrir conversa
```

---

## 8. Lida/não lida

`read_at` é a fonte canônica do estado de leitura: ausente significa não lida; preenchido registra leitura.

---

## 9. Contador

Badge deve refletir quantidade consistente de notificações não lidas.

---

## 10. Marcar como lida

Ao abrir/clicar uma notificação individual, marcá-la como lida. Também manter a ação explícita **Marcar como lida**, quando fizer sentido na interface. Abrir a lista, por si só, não equivale a abrir cada notificação.

---

## 11. Marcar todas

Manter essa ação explícita quando adequada à interface; atualizar `read_at` das notificações próprias alcançadas pela ação.

Ação:

```text
Marcar todas como lidas
```

---

## 12. Preferências

Usuário pode configurar canais opcionais.

Exemplo:

```text
Notificações na plataforma
E-mail
WhatsApp
```

---

## 13. Operacional versus marketing

Notificação operacional não é o mesmo que marketing.

---

## 14. Marketing

Só enviar por canal quando houver consentimento apropriado.

---

## 15. Segurança

Alertas de segurança podem ser enviados mesmo quando marketing estiver desativado, conforme necessidade legítima.

---

## 16. Exemplos de segurança

```text
Nova sessão iniciada
Senha alterada
2FA ativado
2FA desativado
```

---

## 17. Orçamentos

Eventos:

- recebido;
- em análise;
- enviado;
- atualizado;
- aceito;
- recusado;
- expirado.

---

## 18. Agenda

Eventos:

- solicitado;
- confirmado;
- reagendado;
- cancelado;
- lembrete;
- em deslocamento.

---

## 19. Chat

Nova mensagem pode gerar notificação quando usuário não estiver com conversa ativa.

---

## 20. OS

Eventos:

- criada;
- atualizada;
- iniciada;
- concluída;
- cancelada.

---

## 21. Avaliações

Pode notificar:

```text
Seu atendimento foi concluído. Que tal avaliar o serviço?
```

---

## 22. Duplicidade

Um mesmo evento não deve gerar múltiplas notificações idênticas por retry.

---

## 23. Idempotência

Cada evento deve possuir identificador ou chave idempotente quando necessário.

---

## 24. Fila

Envios externos podem usar fila.

Redis poderá participar como infraestrutura de fila, mas o evento importante deve permanecer rastreável.

---

## 25. Falha de envio

Falha em e-mail ou WhatsApp não deve apagar notificação interna.

---

## 26. Retry

Retries de integrações externas devem possuir:

- limite;
- backoff;
- idempotência.

---

## 27. Histórico

Pode registrar:

- evento;
- canal;
- status;
- tentativa;
- erro técnico seguro;
- data de envio.

---

## 28. Status de envio

A lista abaixo é o conjunto inicial para os comportamentos já descritos, usando apenas estados necessários ao canal. Não introduzir transições automáticas apenas pela ordem da lista.

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: matriz de transições com estado atual → ação → próximo estado → ator permitido, conforme [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), seção 29. Usar os estados já documentados necessários ao comportamento do módulo, sem inventar novos estados para completar a matriz. Estados específicos de canal não precisam coincidir com os de outros canais.

Exemplo:

```text
PENDING
SENT
DELIVERED
FAILED
CANCELLED
```

---

## 29. E-mail

Regras específicas em:

```text
EMAIL.md
```

---

## 30. WhatsApp

Regras específicas em:

```text
WHATSAPP.md
```

---

## 31. Privacidade

Não incluir dados excessivos em notificação.

Exemplo no lock screen:

```text
Você recebeu uma nova mensagem na VoltX.
```

pode ser preferível a expor conteúdo sensível.

---

## 32. Preferências por tipo

Futuramente, usuário poderá configurar:

```text
Agenda
Orçamentos
Chat
Marketing
Segurança
```

---

## 33. Notificações obrigatórias

Alguns eventos críticos podem não ser desativáveis.

Exemplos:

- segurança;
- alteração importante de conta;
- comunicação operacional essencial.

---

## 34. Painel administrativo

Admin pode receber notificações de:

- novo orçamento;
- novo chat;
- agendamento solicitado;
- erro operacional;
- alerta de segurança.

---

## 35. Prioridade

A eventual adoção da prioridade `CRITICAL` e seu comportamento permanecem **DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**. Esta lista não substitui as prioridades canônicas do chat.

Pode existir:

```text
NORMAL
HIGH
CRITICAL
```

---

## 36. Expiração

Notificações antigas podem ser arquivadas segundo política de retenção.

---

## 37. API

Endpoints conceituais:

```text
GET /api/v1/notifications
PATCH /api/v1/notifications/:id/read
POST /api/v1/notifications/read-all
```

---

## 38. WebSocket

Notificação interna pode chegar em tempo real.

Persistência continua sendo necessária para histórico enquanto não lida.

---

## 39. Testes obrigatórios

Cobrir:

- criação;
- contador;
- leitura;
- preferências;
- duplicidade;
- retry;
- falha externa;
- autorização.

---

## 40. Regra final

> Notificação deve informar, não incomodar.
>
> Eventos operacionais, marketing e segurança devem permanecer claramente separados.
