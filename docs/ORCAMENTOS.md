# ORÇAMENTOS — VoltX

## 1. Finalidade

Este documento define o fluxo de orçamentos da VoltX.

Ele cobre:

- solicitação;
- análise;
- montagem;
- envio;
- aceite;
- recusa;
- expiração;
- cancelamento;
- histórico;
- integração com protocolos, clientes, serviços, agendamentos e Ordens de Serviço.

---

## 2. Princípio

Um orçamento representa uma proposta comercial vinculada a um cliente e a uma necessidade específica.

Solicitar orçamento não significa automaticamente:

- aprovação;
- reserva de horário;
- criação de OS;
- início de execução.

---

## 3. Tipos de origem

Um orçamento pode nascer de:

```text
cliente autenticado
visitante
administrador
chat
serviço específico
```

A origem deverá ficar registrada.

---

## 4. Visitante

Visitante poderá iniciar orçamento sem conta quando esse fluxo estiver habilitado.

Dados mínimos podem incluir:

- nome;
- WhatsApp obrigatório;
- e-mail opcional;
- descrição;
- CEP;
- endereço;
- serviço relacionado;
- anexos.

---

## 5. Verificação de WhatsApp

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: critérios que tornam obrigatória a verificação do contato do visitante, mantendo desde já antispam e rate limiting.

Para orçamento público, o WhatsApp deverá ser considerado canal principal de retorno.

O fluxo deve possuir proteção contra abuso e, sempre que aplicável, verificar que o contato é acessível ao usuário, conforme RN-ORC-003 e RN-ORC-004 em [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md). Os critérios de verificação ainda precisam ser definidos antes da implementação.

---

## 6. Identificador público

Orçamentos deverão possuir número próprio.

Formato planejado:

```text
ORC-2026-000001
```

Esse número não substitui o UUID interno.

---

## 7. Status internos

Estados planejados:

```text
REQUESTED
UNDER_REVIEW
DRAFT
SENT
VIEWED
ACCEPTED
REJECTED
EXPIRED
CANCELLED
```

---

## 8. Tradução para interface

```text
REQUESTED      → Solicitado
UNDER_REVIEW   → Em análise
DRAFT          → Rascunho
SENT           → Enviado
VIEWED         → Visualizado
ACCEPTED       → Aceito
REJECTED       → Recusado
EXPIRED        → Expirado
CANCELLED      → Cancelado
```

---

## 9. Histórico de status

Toda transição relevante deve ser registrada.

Exemplo:

```text
Solicitado
↓
Em análise
↓
Enviado
↓
Visualizado
↓
Aceito
```

---

## 10. Itens do orçamento

Um orçamento pode possuir um ou mais itens.

Cada item pode conter:

- serviço;
- descrição;
- quantidade;
- valor unitário;
- subtotal;
- observação.

---

## 11. Snapshot histórico

Itens devem preservar informação suficiente para histórico.

Se o serviço mudar depois, um orçamento já enviado não pode mudar retroativamente.

---

## 12. Valores

Usar tipo monetário seguro.

Banco:

```text
NUMERIC
```

Evitar `float` para cálculo financeiro.

---

## 13. Total

Total deve ser calculado de forma consistente no backend.

Frontend pode exibir cálculo, mas backend é autoridade.

---

## 14. Desconto

Desconto só deve existir se formalmente suportado.

Pode ser:

```text
valor fixo
percentual
```

Não permitir resultado negativo.

---

## 15. Validade

Prazo de validade deve ser configurável por orçamento.

Não assumir prazo fixo universal.

---

## 16. Expiração

Ao passar da validade:

```text
EXPIRED
```

se a regra de negócio exigir.

---

## 17. Visualização

Quando tecnicamente possível, registrar que o cliente visualizou o orçamento.

Status:

```text
VIEWED
```

---

## 18. Aceite

Aceite deve registrar:

- usuário;
- data;
- revisão específica do orçamento, validada como pertencente ao mesmo número ORC;
- total;
- itens;
- origem do aceite.

---

## 19. Aceite por visitante

O mecanismo de eventual aceite sem login permanece **DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**, antes de habilitar esse fluxo. Token aleatório, temporário e de uso limitado é apenas possibilidade a definir, não mecanismo já adotado.

Se houver aceite fora de conta autenticada, o mecanismo deverá possuir validação segura e rastreável.

Não implementar aceite anônimo irrestrito.

---

## 20. Recusa

Cliente poderá recusar orçamento.

Motivo pode ser opcional.

---

## 21. Cancelamento

Administrador autorizado poderá cancelar quando necessário.

Cancelamento deve preservar histórico.

---

## 22. Edição após envio

Enquanto `DRAFT`, o rascunho pode ser editado. Após envio, a revisão enviada torna-se imutável como registro comercial. Mudanças comerciais posteriores geram nova revisão do mesmo número comercial; não exigem outro número ORC.

---

## 23. Revisão

Exemplo:

```text
ORC-2026-000184 — revisão 1
ORC-2026-000184 — revisão 2
```

Cada revisão preserva itens, quantidades, valores, descontos quando existirem, total, observações relevantes, validade e conteúdo apresentado. Não reescrever revisão antiga. O aceite aponta para uma revisão específica; o histórico de status não substitui esse registro comercial. Modelo em [DATABASE.md](DATABASE.md), seções 29–31.

---

## 24. Anexos

Orçamento pode possuir:

- fotos;
- documentos;
- observações técnicas.

Uploads devem seguir `MIDIA_UPLOADS.md`.

---

## 25. Relação com cliente

Orçamento autenticado deve estar vinculado ao cliente.

Visitante pode ser convertido em cliente ou pré-cadastro posteriormente.

---

## 26. Relação com protocolo

Todo orçamento deve possuir protocolo relacionado, conforme RN-ORC-005 em [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md).

---

## 27. Relação com serviço

Pode possuir um serviço principal e múltiplos itens.

---

## 28. Relação com OS

Aceite pode permitir criação de OS, mas criar a OS é uma ação explícita do fluxo. Não criar automaticamente apenas pelo aceite enquanto não houver regra específica autorizando.

---

## 29. Relação com agendamento

Orçamento aceito pode liberar ou sugerir agendamento.

---

## 30. Notificações

Eventos que podem gerar notificação:

- orçamento enviado;
- orçamento atualizado;
- orçamento visualizado;
- orçamento aceito;
- orçamento recusado;
- orçamento expirado.

---

## 31. Painel administrativo

Ações:

```text
Criar orçamento
Editar rascunho
Adicionar item
Remover item
Enviar
Gerar revisão
Cancelar
Criar OS
Criar agendamento
```

---

## 32. Busca

Filtros:

- número;
- cliente;
- telefone;
- status;
- período;
- serviço.

---

## 33. Permissões

Somente papéis autorizados podem criar, alterar ou enviar orçamento.

Cliente só acessa os próprios.

---

## 34. Auditoria

Registrar ações relevantes:

- criação;
- envio;
- alteração;
- aceite;
- cancelamento;
- criação de revisão.

---

## 35. API

Endpoints devem seguir `API.md`.

Não devolver dados privados de outros clientes.

---

## 36. Testes obrigatórios

Cobrir:

- criação;
- cálculo;
- status;
- envio;
- aceite;
- recusa;
- expiração;
- revisão;
- permissões;
- preservação histórica.

---

## 37. Regra final

> Orçamento enviado é um registro comercial histórico.
>
> Alterações posteriores não podem reescrever silenciosamente aquilo que o cliente recebeu.
