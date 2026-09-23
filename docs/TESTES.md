# TESTES — VoltX

## 1. Finalidade

Este documento define a estratégia de testes da VoltX.

Ele cobre:

- testes unitários;
- integração;
- contratos;
- E2E;
- segurança;
- banco;
- uploads;
- WebSocket;
- interface;
- validação visual;
- regressão;
- critérios de merge e Release.

---

## 2. Princípio

Código pronto significa:

```text
implementado
+
testado
+
validado
+
documentado
```

Teste não é etapa opcional ao final.

---

## 3. Pirâmide de testes

A estratégia deverá priorizar:

```text
muitos testes unitários
↓
testes de integração
↓
testes E2E críticos
```

Evitar depender apenas de E2E lento para validar tudo.

---

## 4. Testes unitários

Cobrir regras isoladas.

Exemplos:

- validação de CPF;
- cálculo de total;
- geração de protocolo;
- transição de status;
- limites de hashtags;
- normalização de telefone.

---

## 5. Testes de integração

Cobrir interação entre:

- service;
- Prisma;
- PostgreSQL;
- Redis;
- MinIO;
- filas;
- módulos NestJS.

---

## 6. Testes de contrato da API

Validar:

- status HTTP;
- schema;
- campos obrigatórios;
- HATEOAS;
- erros;
- autenticação;
- autorização.

---

## 7. Testes E2E

Fluxos principais:

```text
cadastro
login
recuperação de senha
orçamento
agendamento
chat
CMS
privacidade
```

---

## 8. Testes visuais

Mudanças de interface devem ser conferidas visualmente.

Validar:

```text
mobile
tablet
desktop
```

---

## 9. Responsividade

Não considerar “abre no navegador” como validação suficiente.

Testar diferentes larguras reais.

---

## 10. PT-BR

Revisar strings visíveis.

Teste deve detectar inglês acidental quando possível.

---

## 11. Acessibilidade

Testar:

- labels;
- teclado;
- foco;
- contraste;
- semântica;
- texto alternativo.

---

## 12. Autenticação

Cobrir:

- login válido;
- login inválido;
- logout;
- sessão expirada;
- sessão revogada;
- recuperação;
- 2FA administrativo;
- brute force.

---

## 13. Permissões

Para cada ação crítica, testar:

```text
permitido
negado
recurso próprio
recurso de terceiro
```

---

## 14. Clientes

Cobrir:

- cadastro;
- pré-cadastro;
- ativação;
- duplicidade;
- edição;
- suspensão;
- exclusão;
- anonimização.

---

## 15. Serviços

Cobrir:

- criação;
- edição;
- slug;
- ativação;
- arquivamento;
- CTA;
- permissões.

---

## 16. Orçamentos

Cobrir:

- criação;
- cálculo;
- envio;
- aceite;
- recusa;
- expiração;
- revisão;
- histórico.

---

## 17. Agenda

Cobrir:

- disponibilidade;
- conflito;
- concorrência;
- suspensão;
- reagendamento;
- cancelamento;
- timezone.

---

## 18. Protocolos

Cobrir unicidade e concorrência.

Nunca aceitar duplicidade por race condition.

---

## 19. OS

Cobrir:

- criação;
- transição de status;
- vínculos;
- conclusão;
- cancelamento;
- permissões.

---

## 20. Avaliações

Cobrir:

- elegibilidade;
- duplicidade;
- moderação;
- opt-in de depoimento;
- média.

---

## 21. Blog

Cobrir:

- rascunho;
- autosave;
- revisão;
- publicação;
- agendamento;
- sanitização;
- comentários.

---

## 22. Hashtags

Cobrir:

- normalização;
- limite 8;
- duplicidade;
- busca;
- moderação.

---

## 23. Chat

Cobrir:

- autenticação do socket;
- envio;
- persistência;
- reconexão;
- mensagens não lidas;
- protocolos;
- encerramento;
- idempotência.

---

## 24. Uploads

Cobrir:

- arquivo válido;
- MIME falso;
- extensão falsa;
- tamanho;
- permissão;
- private/public;
- exclusão;
- signed URL.

---

## 25. Notificações

Cobrir:

- criação;
- leitura;
- contagem;
- idempotência;
- preferências;
- retry.

---

## 26. E-mail

Usar provider fake/local em testes.

Não enviar e-mail real por padrão.

---

## 27. WhatsApp

Mockar integração externa.

Não depender de API real no CI.

---

## 28. Banco

Testes de integração devem usar banco separado.

Nunca usar produção.

---

## 29. Migrations

Validar:

- aplicação em banco vazio;
- evolução a partir de estado anterior;
- constraints;
- dados obrigatórios.

---

## 30. Dados de teste

Usar dados fictícios.

Nunca utilizar dados reais de clientes.

---

## 31. Seeds

Seeds de teste podem existir somente para ambiente apropriado.

Não misturar seed de teste com produção.

---

## 32. Fixtures

Devem ser pequenas e legíveis.

---

## 33. Determinismo

Evitar testes dependentes de:

- hora real;
- rede externa;
- ordem imprevisível;
- dados compartilhados.

---

## 34. Relógio

Quando necessário, congelar/mocar tempo.

---

## 35. Timezone

Testar explicitamente:

```text
America/Sao_Paulo
```

---

## 36. Concorrência

Testar pontos críticos:

- geração de número;
- confirmação de horário;
- idempotência;
- estoque futuro se existir.

---

## 37. Segurança

Testar:

- IDOR;
- SQL injection;
- XSS;
- CSRF;
- CORS;
- uploads;
- mass assignment;
- rate limiting.

---

## 38. Regression tests

Todo bug importante corrigido deve ganhar teste quando viável.

---

## 39. Nomes dos testes

Preferir comportamento.

Exemplo:

```ts
it('não confirma um agendamento quando o horário já está ocupado', async () => {
  // ...
});
```

---

## 40. Arrange / Act / Assert

Usar quando melhorar clareza.

---

## 41. Frameworks

A escolha final deverá ser compatível com a stack.

Possibilidades:

```text
Vitest
Jest
Playwright
```

Não instalar ferramentas redundantes sem necessidade.

---

## 42. Testes do frontend

Cobrir:

- componentes;
- hooks;
- formulários;
- validação;
- estados;
- navegação crítica.

---

## 43. Testes E2E de navegador

Playwright é opção adequada para fluxos reais.

---

## 44. CI

Pipeline deverá executar, conforme estágio:

```text
lint
typecheck
unit
integration
build
E2E crítico
```

---

## 45. Falha

Qualquer falha relevante deve bloquear merge/Release até diagnóstico.

---

## 46. Cobertura

Cobertura é indicador, não objetivo isolado.

Não escrever teste inútil apenas para aumentar porcentagem.

---

## 47. Áreas críticas

Exigir cobertura forte em:

- autenticação;
- autorização;
- dinheiro;
- agenda;
- privacidade;
- protocolos;
- migrations.

---

## 48. Performance

Testes de performance podem ser adicionados para:

- busca;
- chat;
- listagens;
- uploads;
- endpoints pesados.

---

## 49. Carga

Antes de crescimento significativo, simular carga em fluxos críticos.

---

## 50. Teste de restore

Estratégia de backup também precisa ser testada.

---

## 51. Validação manual

Ainda será necessária para:

- aparência;
- usabilidade;
- fluxo;
- texto;
- comportamento em dispositivos.

---

## 52. Checklist antes de merge

```text
lint
typecheck
testes do módulo
build quando aplicável
validação visual
documentação
```

---

## 53. Checklist antes de Release

Além do anterior:

```text
integração
E2E crítico
migrations
segurança
backup
deploy testado
```

---

## 54. Evidência

Ao concluir uma tarefa, registrar quais testes foram executados.

---

## 55. Regra final

> Teste bom protege comportamento real.
>
> A VoltX não deve confiar em “parece funcionar”.
