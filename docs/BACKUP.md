# BACKUP — VoltX

## 1. Finalidade

Este documento define a estratégia de backup da VoltX.

Ele cobre:

- PostgreSQL;
- MinIO;
- configurações;
- retenção;
- criptografia;
- restore;
- testes;
- automação.

---

## 2. Princípio

Backup só é confiável quando pode ser restaurado.

---

## 3. Dados a proteger

No mínimo:

```text
PostgreSQL
MinIO
configurações críticas
arquivos de infraestrutura
```

Código fonte já é protegido pelo Git, Gitea e GitHub.

---

## 4. Banco

PostgreSQL deverá possuir backups consistentes.

Métodos possíveis:

- `pg_dump`;
- backup físico;
- estratégia incremental futura.

---

## 5. MinIO

Arquivos persistentes devem fazer parte do backup.

---

## 6. Consistência

Banco e mídia precisam ser restauráveis de forma coerente.

---

## 7. Redis

Redis não é fonte principal de verdade.

Backup pode ser opcional conforme uso.

Não depender dele para recuperar histórico permanente.

---

## 8. Frequência

A frequência definitiva deverá ser definida conforme criticidade e volume.

Não inventar janela sem observar produção real.

---

## 9. Política futura

Definir formalmente:

```text
RPO
RTO
```

antes da produção estável.

---

## 10. Regra 3-2-1

Sempre que viável:

```text
3 cópias
2 meios/localizações
1 cópia fora do host principal
```

---

## 11. Autohospedagem

Backup externo não significa necessariamente SaaS.

Pode ser:

- outro servidor próprio;
- disco externo;
- NAS;
- armazenamento remoto controlado.

---

## 12. Criptografia

Backups contendo dados pessoais devem considerar criptografia.

---

## 13. Chave de criptografia

Não armazenar junto do backup de forma insegura.

---

## 14. Dumps

Nunca commitar dump real no Git.

---

## 15. Nome de arquivo

Padrão sugerido:

```text
voltx-postgres-2026-09-22T230000.sql.gz
```

---

## 16. Integridade

Gerar checksum quando apropriado.

---

## 17. Logs

Registrar:

- início;
- fim;
- tamanho;
- checksum;
- sucesso/falha;
- destino.

---

## 18. Falha de backup

Deve gerar alerta administrativo.

---

## 19. Retenção

Prazos devem ser definidos em alinhamento com:

```text
RETENCAO_DADOS.md
```

---

## 20. Rotação

Backups antigos devem ser removidos conforme política.

---

## 21. Restore

Procedimento de restore deve ser documentado e testado.

---

## 22. Restore de banco

Deve validar:

- versão do PostgreSQL;
- schema;
- migrations;
- integridade.

---

## 23. Restore de mídia

MinIO deve ser restaurado com permissões e chaves corretas.

---

## 24. Restore conjunto

Após restaurar:

- banco;
- mídia;
- configurações;

executar validação funcional.

---

## 25. Teste periódico

Backup deve ser restaurado em ambiente isolado periodicamente.

---

## 26. Produção

Nunca testar restore destrutivo diretamente na produção sem planejamento.

---

## 27. Configurações

Arquivos públicos de infraestrutura já estarão no Git.

Segredos precisam de backup seguro separado quando necessário.

---

## 28. Secrets

Não incluir secrets em pacote de backup sem proteção apropriada.

---

## 29. Docker volumes

Mapear claramente quais volumes são persistentes.

---

## 30. Containers

Container descartável não é backup.

---

## 31. Snapshot de VM/disco

Pode complementar, mas não substituir necessariamente backup lógico do banco.

---

## 32. Versionamento

Antes de migration crítica, fazer backup quando apropriado.

---

## 33. Deploy

Deploy de produção deve verificar existência de backup recente quando houver mudança arriscada.

---

## 34. Incidente

Em incidente:

- preservar cópia;
- não sobrescrever evidência;
- restaurar apenas após avaliação.

---

## 35. Privacidade

Backups também estão sujeitos à LGPD.

---

## 36. Exclusão de usuário

Dados apagados da base principal podem permanecer em backup até expiração da cópia.

Isso deve ser refletido na política pública.

---

## 37. Acesso

Somente pessoas autorizadas podem acessar backups.

---

## 38. Destino

Nunca expor diretório de backup via Nginx público.

---

## 39. Automação

Scripts futuros podem automatizar:

- dump;
- compressão;
- checksum;
- cópia;
- rotação;
- teste.

---

## 40. Testes

Validar:

- criação;
- integridade;
- restauração;
- permissões;
- criptografia;
- rotação.

---

## 41. Regra final

> Backup da VoltX deve ser automático, verificável e restaurável.
>
> Uma cópia esquecida em um disco não é estratégia de recuperação.
