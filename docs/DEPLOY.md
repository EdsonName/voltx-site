# DEPLOY — VoltX

## 1. Finalidade

Este documento define o processo de implantação da VoltX.

Ele cobre:

- ambientes;
- Docker;
- Nginx;
- migrations;
- backups;
- validação;
- rollback;
- Gitea;
- Releases.

---

## 2. Princípio

Deploy deve ser:

```text
repetível
auditável
reversível
validado
```

---

## 3. Ambientes

Separar:

```text
development
test
production
```

---

## 4. Produção

Produção não deve compartilhar banco com desenvolvimento.

---

## 5. Infraestrutura

Planejamento:

```text
Docker Compose
Nginx
PostgreSQL
Redis
MinIO
Next.js
NestJS
```

---

## 6. Domínios previstos

```text
https://voltx.narrativas.site
https://painel-voltx.narrativas.site
https://api-voltx.narrativas.site
```

---

## 7. Nginx

Responsável por:

- HTTPS;
- roteamento;
- headers;
- redirect;
- proxy.

---

## 8. HTTPS

Produção deve usar HTTPS.

---

## 9. Docker

Serviços deverão ser definidos de forma reproduzível.

---

## 10. Volumes

Dados persistentes:

```text
PostgreSQL
MinIO
```

não podem depender da camada descartável do container.

---

## 11. Redis

Persistência depende do papel definido, mas Redis não é fonte de verdade principal.

---

## 12. Build

Antes do deploy:

```text
lint
typecheck
testes
build
```

devem passar conforme checklist da versão.

---

## 13. Tag

Deploy de produção deve preferir commit/tag conhecida.

Exemplo:

```text
v0.6.0
```

---

## 14. Não deployar estado sujo

Nunca implantar diretamente de working tree com mudanças não commitadas.

---

## 15. Gitea

Versão deve estar sincronizada com Gitea antes do fechamento oficial.

---

## 16. GitHub Release

Release correspondente deve existir conforme `VERSIONAMENTO.md`.

---

## 17. Backup antes de migration crítica

Fazer backup quando a mudança de banco puder causar perda ou incompatibilidade.

---

## 18. Migrations

Executar migrations de forma controlada.

Nunca editar schema de produção manualmente sem registro.

---

## 19. Ordem do deploy

Pode variar, mas deve ser documentada.

Fluxo conceitual:

```text
backup
↓
baixar versão
↓
build/pull imagens
↓
migrations
↓
subir serviços
↓
health checks
↓
validação
```

---

## 20. Compatibilidade

Código e migration devem ser planejados para evitar downtime desnecessário.

---

## 21. Expand/contract

Para mudanças sensíveis:

```text
expand
↓
deploy compatível
↓
migrar dados
↓
contract
```

---

## 22. Health check

Cada serviço crítico deve possuir health check quando aplicável.

---

## 23. API health

Exemplo:

```text
GET /health
```

Resposta não deve expor segredos.

---

## 24. Pós-deploy

Validar:

- Home;
- painel;
- API;
- login;
- banco;
- mídia;
- chat quando aplicável.

---

## 25. HTTP

Verificar respostas esperadas.

Exemplo:

```text
200
```

para páginas públicas válidas.

---

## 26. Logs

Após deploy, observar logs por período adequado.

---

## 27. Rollback

Toda implantação relevante deve possuir plano de retorno.

---

## 28. Rollback de aplicação

Pode voltar para tag anterior compatível.

---

## 29. Rollback de banco

Mais delicado.

Nunca assumir que migration pode ser simplesmente revertida.

---

## 30. Falha no deploy

Se falhar:

- interromper;
- preservar logs;
- avaliar banco;
- restaurar versão anterior quando seguro.

---

## 31. Segredos

Produção deve receber segredos por ambiente.

Nunca dentro da imagem Docker.

---

## 32. `.env`

Arquivo de produção não entra no Git.

---

## 33. Portas públicas

Idealmente:

```text
80
443
```

via Nginx.

---

## 34. Serviços internos

Não expor publicamente:

```text
PostgreSQL
Redis
MinIO admin
```

---

## 35. MinIO

Console administrativo deve ser protegido e não ficar publicamente aberto.

---

## 36. Banco

PostgreSQL deve ficar em rede interna.

---

## 37. Monitoramento

Produção deverá possuir ao menos:

- logs;
- health checks;
- alertas críticos.

---

## 38. Releases graduais

Pode ser adicionada estratégia de staging no futuro.

---

## 39. Ambiente de staging

Se criado, deve usar dados fictícios ou anonimizados.

---

## 40. CI/CD

Automação futura poderá:

- testar;
- buildar;
- gerar imagem;
- publicar;
- implantar.

---

## 41. Aprovação

Deploy de produção não deve acontecer automaticamente após qualquer commit sem controle.

---

## 42. Imagens Docker

Podem ser versionadas em GitHub Packages futuramente.

---

## 43. Tags de imagem

Exemplos:

```text
v1.0.0
latest
```

Mas `latest` não substitui tag imutável.

---

## 44. Migração de servidor

A infraestrutura deverá ser autohospedável em outro host sem dependência de SaaS essencial.

---

## 45. DNS

Mudanças de DNS devem ser planejadas e documentadas.

---

## 46. Certificados

Renovação automática deve ser configurada quando possível.

---

## 47. Backup pós-deploy

Dependendo da mudança, um novo ponto de backup pode ser útil após validação.

---

## 48. Checklist de produção

```text
tag correta
Gitea sincronizado
GitHub Release criada
backup recente
migrations revisadas
segredos presentes
HTTPS ativo
containers saudáveis
health checks OK
Home OK
Painel OK
API OK
login OK
uploads OK
logs sem erro crítico
```

---

## 49. Registro de deploy

Registrar:

- versão;
- commit;
- data;
- responsável;
- migrations;
- resultado;
- rollback se ocorrido.

---

## 50. Regra final

> Deploy da VoltX deve transformar uma versão validada em uma instalação reproduzível.
>
> Produção nunca deve depender de ajustes manuais esquecidos fora da documentação.
