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

Separar quem criou da condição do cliente no momento da criação.

- Autoria por `created_by_user_id` quando houver usuário; ator/canal quando necessário.
- `created_by_type` pode distinguir conceitualmente `CUSTOMER`, `ADMIN`, `ATTENDANT`, `SYSTEM`. Não exigir enum de integração futura.
- `customer_status_at_creation` preserva o estado do cliente naquele momento, como `PRE_REGISTERED`, `INVITED` ou `ACTIVE`, conforme RN-CLI-005.

A ativação posterior não muda autoria nem condição histórica. Modelo em [DATABASE.md](DATABASE.md), seções 36–37.

---

## 5. Estados

Estados definidos em [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), RN-AG-007:

```text
REQUESTED
UNDER_REVIEW
CONFIRMED
RESCHEDULE_REQUESTED
IN_TRANSIT
IN_SERVICE
COMPLETED
CANCELLED_BY_CUSTOMER
CANCELLED_BY_VOLTX
NOT_COMPLETED
```

---

## 6. Tradução

```text
REQUESTED              → Solicitado
UNDER_REVIEW           → Em análise
CONFIRMED              → Confirmado
RESCHEDULE_REQUESTED   → Reagendamento solicitado
IN_TRANSIT             → Em deslocamento
IN_SERVICE             → Em atendimento
COMPLETED              → Concluído
CANCELLED_BY_CUSTOMER  → Cancelado pelo cliente
CANCELLED_BY_VOLTX     → Cancelado pela VoltX
NOT_COMPLETED          → Não realizado
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

Suspensão ativa prevalece sobre o horário habitual, sem apagá-lo. Combinação de configuração, exceções e suspensão em [CONFIGURACOES_NEGOCIO.md](CONFIGURACOES_NEGOCIO.md), seção 16.

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

Fluxo inicial:

```text
REQUESTED
↓
revisão administrativa quando aplicável (UNDER_REVIEW)
↓
CONFIRMED
```

Não presumir confirmação automática. A disponibilidade exibida não confirma o atendimento. A matriz de transições e atores deve ser definida antes da implementação conforme [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), seção 29.

---

## 18. Criação administrativa

O agendamento referencia customer, mesmo com `user_id` nulo. A fase posterior de convite/ativação habilita a conta, mantendo o mesmo cliente e vínculos; ver fases 7–8 do [ROADMAP.md](../ROADMAP.md).

Administrador pode criar agendamento em nome do cliente.

A origem deve indicar:

```text
Criado pela VoltX
```

---

## 19. Reagendamento

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: condições e atores das transições de reagendamento; não presumir prazos ou aprovação automática.

Solicitação de reagendamento deve preservar histórico anterior.

Não simplesmente sobrescrever data antiga sem registro.

---

## 20. Cancelamento

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: condições e atores das transições de cancelamento, sem inventar antecedência, cobrança ou multa.

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
