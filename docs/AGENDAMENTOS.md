# AGENDAMENTOS — VoltX

## 1. Finalidade

Este documento define o fluxo de agenda e agendamentos da VoltX.

Ele cobre:

- horários disponíveis;
- solicitação;
- confirmação;
- reagendamento;
- cancelamento;
- suspensão da agenda;
- criação administrativa;
- histórico;
- integração com cliente, orçamento, protocolo e OS.

---

## 2. Princípio

Agendamento representa uma reserva operacional de atendimento.

Ele não deve ser tratado apenas como evento visual de calendário.

---

## 3. Identificador

Agendamentos poderão possuir identificador público.

Formato planejado:

```text
AG-2026-000001
```

---

## 4. Origem

Pode ser criado por:

```text
cliente
administrador
atendente
integração futura
```

A origem deve ser registrada.

---

## 5. Estados

Estados conceituais:

```text
REQUESTED
UNDER_REVIEW
CONFIRMED
RESCHEDULE_REQUESTED
ON_THE_WAY
IN_PROGRESS
COMPLETED
CANCELLED_BY_CLIENT
CANCELLED_BY_VOLTX
NO_SHOW
```

---

## 6. Tradução

```text
REQUESTED            → Solicitado
UNDER_REVIEW         → Em análise
CONFIRMED            → Confirmado
RESCHEDULE_REQUESTED → Reagendamento solicitado
ON_THE_WAY           → Em deslocamento
IN_PROGRESS          → Em atendimento
COMPLETED            → Concluído
CANCELLED_BY_CLIENT  → Cancelado pelo cliente
CANCELLED_BY_VOLTX   → Cancelado pela VoltX
NO_SHOW               → Não realizado
```

---

## 7. Disponibilidade

Disponibilidade deve ser calculada pelo backend.

Pode considerar:

- horário comercial;
- bloqueios;
- atendimentos existentes;
- deslocamento;
- duração estimada;
- exceções;
- suspensão da agenda.

---

## 8. Horário comercial

Deve ser configurável no banco.

Não hardcodar permanentemente no frontend.

---

## 9. Exceções

Exemplos:

- feriado;
- compromisso;
- manutenção;
- folga;
- bloqueio manual;
- indisponibilidade temporária.

---

## 10. Suspensão de novos agendamentos

A VoltX poderá suspender novos agendamentos.

Isso não apaga os já existentes.

---

## 11. Agenda suspensa

Interface deverá informar:

```text
Agendamentos temporariamente suspensos
```

e oferecer outro canal quando aplicável.

---

## 12. Conflito

Backend deve impedir sobreposição incompatível.

Não confiar apenas no calendário visual.

---

## 13. Concorrência

Duas solicitações simultâneas não podem confirmar o mesmo horário de forma inconsistente.

Usar transação/lock/constraint apropriado.

---

## 14. Duração

Cada agendamento pode possuir:

- início;
- fim;
- duração estimada.

---

## 15. Deslocamento

Pode existir margem antes/depois do serviço.

Essa regra deverá ser configurável.

---

## 16. Solicitação do cliente

Fluxo:

```text
selecionar serviço
↓
endereço
↓
data
↓
horário
↓
observações
↓
solicitar
```

---

## 17. Confirmação

Se a plataforma exigir revisão manual:

```text
REQUESTED
↓
UNDER_REVIEW
↓
CONFIRMED
```

---

## 18. Criação administrativa

Administrador pode criar agendamento em nome do cliente.

A origem deve indicar:

```text
Criado pela VoltX
```

---

## 19. Reagendamento

Solicitação de reagendamento deve preservar histórico anterior.

Não simplesmente sobrescrever data antiga sem registro.

---

## 20. Cancelamento

Cancelamento deve registrar:

- quem cancelou;
- quando;
- motivo;
- status anterior.

---

## 21. Soft delete

Agendamento cancelado não deve ser apagado.

---

## 22. Endereço

Agendamento deve guardar vínculo com endereço do cliente.

Também pode preservar snapshot suficiente do local na época.

---

## 23. Fora da área habitual

Endereço não deve ser rejeitado automaticamente.

Pode gerar aviso de avaliação de deslocamento.

---

## 24. Relação com serviço

Agendamento pode ter serviço principal.

---

## 25. Relação com orçamento

Pode ser vinculado a orçamento aceito.

---

## 26. Relação com protocolo

Pode estar ligado ao protocolo do atendimento.

---

## 27. Relação com OS

Pode estar ligado à OS quando o serviço já estiver formalizado.

---

## 28. Notificações

Eventos possíveis:

- solicitação recebida;
- confirmação;
- reagendamento;
- cancelamento;
- lembrete;
- início de deslocamento;
- conclusão.

---

## 29. Lembretes

Podem ser enviados por:

- notificação interna;
- e-mail;
- WhatsApp.

Somente quando configurados.

---

## 30. Calendário administrativo

Deve permitir:

- visão diária;
- semanal;
- mensal;
- filtros;
- bloqueios;
- criação manual.

---

## 31. Histórico

Cada mudança relevante deve gerar evento.

Exemplo:

```text
Solicitado
↓
Confirmado
↓
Reagendado
↓
Concluído
```

---

## 32. Permissões

Cliente:

- vê próprios agendamentos;
- solicita;
- cancela/reagenda quando permitido.

Admin/atendente:

- gerencia conforme permissão.

---

## 33. API

Toda mutação deve validar novamente disponibilidade.

---

## 34. Testes obrigatórios

Cobrir:

- horários livres;
- conflito;
- criação simultânea;
- suspensão;
- reagendamento;
- cancelamento;
- permissões;
- timezone;
- histórico.

---

## 35. Regra final

> A agenda da VoltX deve ser confiável.
>
> Nenhum horário deve ser considerado confirmado apenas porque apareceu disponível no frontend.
