# PROTOCOLOS E ORDENS DE SERVIÇO — VoltX

## 1. Finalidade

Este documento define:

- protocolos de atendimento;
- Ordens de Serviço;
- numeração;
- histórico;
- relação com clientes, chat, orçamento e agenda.

---

## 2. Conceitos diferentes

Protocolo e OS não são a mesma coisa.

### Protocolo

Representa um atendimento, solicitação ou conversa rastreável.

### Ordem de Serviço

Representa execução formal de um serviço.

---

## 3. Prefixos

Planejamento:

```text
VX  → Protocolo geral
ORC → Orçamento
OS  → Ordem de Serviço
AG  → Agendamento
```

---

## 4. Formato

Exemplos:

```text
VX-2026-000001
ORC-2026-000001
OS-2026-000001
AG-2026-000001
```

---

## 5. Sequência

Numeração deve usar mecanismo seguro no banco.

Nunca:

```text
MAX(numero) + 1
```

em concorrência.

---

## 6. Tabela de sequência

Pode existir:

```text
document_sequences
```

com controle por:

- tipo;
- ano;
- próximo número.

---

## 7. Transação

Geração do número deve acontecer dentro de transação segura.

---

## 8. Protocolo geral

Pode ser criado para:

- chat;
- atendimento;
- orçamento;
- solicitação administrativa;
- suporte.

---

## 9. Protocolo do chat

Cada atendimento aberto pode receber protocolo.

Quando encerrado e o cliente retornar depois, novo protocolo poderá ser criado.

---

## 10. Histórico do protocolo

Deve preservar:

- abertura;
- origem;
- responsável;
- eventos;
- encerramento;
- vínculos.

---

## 11. Encerramento

Encerrar protocolo não apaga:

- mensagens;
- anexos;
- histórico;
- referências.

---

## 12. Reabertura

Se a regra permitir reabrir, isso deve ser explicitamente registrado.

Caso contrário, criar novo protocolo.

---

## 13. Relação com conversa

Uma conversa pode possuir múltiplos protocolos ao longo do tempo.

---

## 14. Ordem de Serviço

OS deve representar atendimento já formalizado para execução.

---

## 15. Dados da OS

Pode conter:

- cliente;
- protocolo;
- orçamento;
- serviço;
- endereço;
- agendamento;
- descrição;
- observações;
- responsável;
- status;
- datas;
- anexos.

---

## 16. Status de OS

Exemplo inicial:

```text
OPEN
SCHEDULED
IN_PROGRESS
PAUSED
COMPLETED
CANCELLED
```

Interface:

```text
Aberta
Agendada
Em execução
Pausada
Concluída
Cancelada
```

---

## 17. Histórico de OS

Mudanças de status devem ser registradas.

---

## 18. Snapshot

Informações críticas devem permanecer históricas.

Exemplo:

- descrição do serviço;
- endereço;
- orçamento aceito;
- valores relevantes.

---

## 19. Criação da OS

Pode ocorrer após:

- aceite de orçamento;
- decisão administrativa;
- fluxo direto de serviço.

A regra exata depende do módulo.

---

## 20. OS sem orçamento

Pode existir quando o serviço não exigir orçamento prévio.

Isso deve ser permitido explicitamente.

---

## 21. OS e agenda

Uma OS pode ter:

- um agendamento principal;
- múltiplos eventos futuros, se necessário.

---

## 22. OS e chat

Chat pode referenciar a OS.

---

## 23. Conclusão

Ao concluir, registrar:

- data;
- responsável;
- observações;
- anexos finais;
- status.

---

## 24. Cancelamento

Cancelar OS não apaga histórico.

---

## 25. Avaliação

OS concluída pode habilitar avaliação do cliente.

---

## 26. Permissões

Cliente:

- visualiza próprias OS;
- não altera campos internos.

Admin/atendente:

- conforme permissão.

---

## 27. Busca

Painel poderá buscar por:

```text
OS
protocolo
cliente
telefone
status
data
```

---

## 28. Auditoria

Ações relevantes:

- criação;
- atribuição;
- status;
- conclusão;
- cancelamento;
- edição crítica.

---

## 29. Numeração pública não é autorização

Conhecer:

```text
OS-2026-000041
```

não concede acesso ao recurso.

---

## 30. API

Endpoints devem usar UUID interno ou identificador público conforme contrato, sempre com autorização.

---

## 31. Testes obrigatórios

Cobrir:

- geração concorrente;
- unicidade;
- criação;
- transições de status;
- vínculos;
- permissões;
- preservação histórica.

---

## 32. Regra final

> Protocolos servem para rastrear atendimentos.
>
> Ordens de Serviço servem para rastrear execução.
>
> Ambos devem permanecer históricos, únicos e auditáveis.
