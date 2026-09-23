# RETENÇÃO DE DADOS — VoltX

## 1. Finalidade

Este documento define a estrutura da política de retenção de dados da VoltX.

Ele complementa:

- `LGPD.md`;
- `POLITICA_PRIVACIDADE.md`;
- `SEGURANCA.md`;
- `BACKUP.md`.

> Prazos definitivos devem ser validados antes da produção. Este documento não inventa períodos legais.

---

## 2. Princípio

Cada categoria de dado deverá possuir:

```text
finalidade
base aplicável
prazo
destino
responsável
```

---

## 3. Não usar prazo único

Não aplicar:

```text
"guardar tudo por X anos"
```

sem análise.

---

## 4. Categorias

Devem possuir regra própria:

- conta;
- perfil;
- endereços;
- sessões;
- logs;
- auditoria;
- protocolos;
- orçamentos;
- OS;
- agendamentos;
- chat;
- mídia;
- consentimentos;
- solicitações de privacidade;
- backups;
- marketing.

---

## 5. Conta ativa

Dados permanecem enquanto necessários para operação da conta e finalidades documentadas.

---

## 6. Conta suspensa

Suspensão não significa exclusão.

Dados permanecem sujeitos às regras normais.

---

## 7. Conta com exclusão solicitada

A solicitação inicia fluxo próprio.

Estados previstos:

```text
REQUESTED
CONFIRMED
IN_REVIEW
SCHEDULED
COMPLETED
REJECTED_WITH_REASON
```

---

## 8. Anonimização

Quando histórico precisar permanecer, preferir anonimização quando adequada.

---

## 9. Perfil

Dados não necessários após exclusão devem ser removidos ou anonimizados conforme política final.

---

## 10. Avatar

Deve ser removido quando não houver motivo para retenção.

---

## 11. Endereços

Endereço atual e snapshots históricos podem ter tratamentos diferentes.

---

## 12. Sessões

Sessões expiradas/revogadas não precisam ser mantidas indefinidamente.

Prazo deverá ser definido.

---

## 13. Logs técnicos

Retenção curta ou moderada conforme necessidade operacional.

Prazo ainda precisa ser definido.

---

## 14. Logs de segurança

Podem exigir retenção diferente de logs comuns.

---

## 15. Auditoria

Histórico de ações administrativas pode exigir retenção prolongada.

Definição depende de necessidade legal e operacional.

---

## 16. Protocolos

Podem permanecer para histórico de atendimento e defesa de direitos.

---

## 17. Orçamentos

Podem possuir retenção própria por natureza comercial.

---

## 18. Ordens de Serviço

Podem exigir retenção diferente por relevância operacional e jurídica.

---

## 19. Agendamentos

Eventos históricos podem permanecer mesmo após cancelamento.

---

## 20. Chat

Mensagens fazem parte do atendimento.

O encerramento do protocolo não apaga automaticamente o histórico.

---

## 21. Anexos de chat

Devem seguir retenção compatível com a conversa e necessidade do arquivo.

---

## 22. Conteúdo público

Posts e comentários possuem ciclo próprio.

Remoção pública não significa necessariamente remoção imediata de auditoria.

---

## 23. Avaliações

Podem ser removidas da exibição mantendo registro mínimo de moderação quando necessário.

---

## 24. Consentimentos

Histórico de aceite e revogação deve ser preservado de forma auditável.

---

## 25. Documentos legais

Versões antigas de Política e Termos devem ser mantidas para saber o que foi aceito.

---

## 26. Solicitações de exportação

Arquivos gerados devem ter retenção curta e expiração automática.

Prazo final precisa ser definido.

---

## 27. Solicitações de exclusão

Registro da solicitação pode permanecer para auditoria mesmo após conclusão.

---

## 28. Marketing

Dados de opt-out devem ser preservados o suficiente para não voltar a enviar marketing indevido.

---

## 29. Backups

Backups possuem ciclo próprio.

Dados excluídos da base principal podem existir até expiração do backup.

---

## 30. Restauração

Se um backup antigo for restaurado, processos de exclusão/anonymização posteriores podem precisar ser reaplicados.

---

## 31. Mídia

Arquivos órfãos devem ser identificados e eliminados conforme regra segura.

---

## 32. Soft delete

Soft delete não é retenção infinita.

É apenas estado intermediário/histórico.

---

## 33. Exclusão física

Só deve ocorrer quando:

- não houver necessidade de retenção;
- política permitir;
- vínculos forem tratados;
- backups seguirem seu ciclo.

---

## 34. Anonimização

Pode ser preferível quando estrutura histórica precisa permanecer.

---

## 35. Dados mínimos

Após anonimização, manter apenas o necessário.

---

## 36. Tabela de política

Antes da produção, preencher:

| Categoria | Finalidade | Prazo | Destino | Observações |
|---|---|---|---|---|
| Conta | Operação | A definir | Excluir/anonimizar | Revisão jurídica |
| Sessões | Segurança | A definir | Excluir | |
| Logs | Diagnóstico | A definir | Excluir | |
| Auditoria | Rastreabilidade | A definir | Arquivar/excluir | |
| Orçamentos | Histórico comercial | A definir | Arquivar/anonimizar | |
| OS | Histórico operacional | A definir | Arquivar/anonimizar | |
| Chat | Atendimento | A definir | Arquivar/anonimizar | |
| Backups | Recuperação | A definir | Rotacionar | |

---

## 37. Responsável

Cada política deve possuir responsável operacional.

---

## 38. Automação

Rotinas devem automatizar:

- expiração;
- anonimização;
- limpeza;
- rotação;
- relatório.

---

## 39. Jobs

Jobs de retenção devem ser idempotentes.

---

## 40. Auditoria

Exclusões automáticas importantes devem registrar evento quando necessário.

---

## 41. Testes

Cobrir:

- expiração;
- anonimização;
- exclusão;
- referências;
- restore;
- opt-out.

---

## 42. Mudança de prazo

Toda alteração deve atualizar:

- este documento;
- Política de Privacidade;
- jobs;
- configuração;
- testes.

---

## 43. Regra final

> Nenhum agente ou desenvolvedor deve inventar prazo de retenção.
>
> Antes da produção, cada categoria deverá possuir prazo e justificativa formalmente definidos.
