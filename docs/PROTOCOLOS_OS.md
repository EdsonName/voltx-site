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

para gerar a sequência. Usar o contador transacional definido em [DATABASE.md](DATABASE.md), seção 28.

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

Cada atendimento de chat deve estar associado a um protocolo.

Após o encerramento, uma nova mensagem gera novo protocolo quando não houver outro atendimento aberto apropriado, conforme RN-CHAT-004 e RN-CHAT-007 em [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md).

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

Atendimento encerrado não será reaberto silenciosamente. Novo contato gera novo protocolo quando não houver outro atendimento aberto apropriado, conforme RN-CHAT-007. Eventual reabertura explícita exige regra anterior à implementação; não foi habilitada nesta consolidação.

---

## 13. Relação com conversa

Uma conversa pode possuir múltiplos protocolos ao longo do tempo.

---

## 14. Ordem de Serviço

OS deve representar atendimento já formalizado para execução.

---

## 15. Dados da OS

Cardinalidade obrigatória: múltiplos protocolos e múltiplos serviços por OS, mediante associações ou estrutura equivalente. Não presumir protocolo ou serviço principal apenas para conservar campo singular.

Pode conter:

- cliente;
- múltiplos protocolos;
- orçamento/revisão aceita;
- múltiplos serviços;
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

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: matriz de transições com estado atual → ação → próximo estado → ator permitido, conforme [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), seção 29. Usar os estados já documentados necessários ao comportamento do módulo, sem inventar novos estados para completar a matriz. Estados específicos de canal não precisam coincidir com os de outros canais.

Conjunto inicial para o comportamento já documentado, sem acrescentar estados:

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

Preservar snapshots históricos de descrição, serviços executados, endereço, orçamento/revisão aceita, valores relevantes e datas. Mudanças posteriores em catálogo ou endereço do customer não alteram a execução registrada.

---

## 19. Criação da OS

Criar OS exige ação explícita do fluxo, por ator autorizado. Aceite de orçamento pode permitir essa ação, mas não cria OS automaticamente. Condições de fluxo direto/sem orçamento continuam dependentes da regra local da seção 20.

---

## 20. OS sem orçamento

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: condições do fluxo direto/sem orçamento, antes de habilitá-lo.

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
