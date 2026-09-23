# E-MAIL — VoltX

## 1. Finalidade

Este documento define o uso de e-mail na VoltX.

Ele cobre:

- e-mails operacionais;
- e-mails de segurança;
- marketing;
- templates;
- filas;
- retries;
- privacidade;
- auditoria;
- provedores externos.

---

## 2. Princípio

E-mail é um canal de comunicação.

Não deve ser fonte de verdade para dados da aplicação.

O estado real continua no backend e no banco.

---

## 3. Tipos de e-mail

Categorias:

```text
OPERATIONAL
SECURITY
MARKETING
SYSTEM
```

---

## 4. Operacional

Exemplos:

- confirmação de agendamento;
- atualização de orçamento;
- conclusão de atendimento;
- nova OS;
- recuperação de senha.

---

## 5. Segurança

Exemplos:

- senha alterada;
- nova sessão;
- 2FA ativado;
- 2FA desativado;
- tentativa suspeita.

---

## 6. Marketing

Exemplos:

- novidades;
- campanhas;
- conteúdo promocional.

Somente com consentimento válido quando aplicável.

---

## 7. Assuntos

Devem ser claros.

Exemplos:

```text
VoltX — Confirmação de agendamento
VoltX — Redefinição de senha
VoltX — Orçamento atualizado
VoltX — Aviso de segurança
```

---

## 8. Remetente

O remetente deve ser consistente.

Exemplo conceitual:

```text
VoltX <no-reply@dominio>
```

O endereço final será definido na configuração de produção.

---

## 9. Responder a

Se o fluxo permitir resposta humana, configurar `Reply-To`.

Não usar caixa automática quando o usuário esperar atendimento.

---

## 10. Templates

Templates devem ser versionáveis e reutilizáveis.

Separar:

```text
layout
conteúdo
variáveis
```

---

## 11. Variáveis

Exemplos:

```text
{{customerName}}
{{appointmentDate}}
{{protocolNumber}}
{{quoteNumber}}
```

Nunca inserir variável não validada em HTML sem escape adequado.

---

## 12. HTML

HTML do e-mail deve ser compatível com clientes comuns.

Não depender de JavaScript.

---

## 13. Texto simples

Sempre que possível, fornecer versão `text/plain`.

---

## 14. Links

Links devem usar HTTPS em produção.

Links sensíveis devem possuir:

- token temporário;
- expiração;
- uso único quando aplicável.

---

## 15. Recuperação de senha

Nunca enviar senha.

Enviar apenas link/token temporário.

---

## 16. Dados sensíveis

Evitar incluir:

- CPF completo;
- endereço completo sem necessidade;
- conteúdo privado excessivo;
- tokens permanentes.

---

## 17. Marketing e consentimento

Antes de enviar marketing, verificar consentimento atual.

Não confiar apenas no estado existente quando a campanha foi criada.

---

## 18. Descadastro

Marketing deve permitir saída clara quando aplicável.

---

## 19. Operacional não é marketing

Desativar marketing não deve bloquear:

- recuperação de senha;
- alertas de segurança;
- confirmação de atendimento;
- comunicação operacional essencial.

---

## 20. Provedor externo

A VoltX poderá usar um provedor de e-mail.

Esse provedor deve ser tratado como integração substituível.

---

## 21. Dependência externa

Falha no provedor não pode:

- corromper dados;
- apagar eventos;
- impedir registro interno da operação.

---

## 22. Fila

Envio poderá ocorrer via fila.

Estado de negócio deve ser persistido antes do envio quando necessário.

---

## 23. Status

Exemplo:

```text
PENDING
SENT
DELIVERED
FAILED
CANCELLED
```

---

## 24. Retry

Falhas transitórias podem usar retry com:

- limite;
- backoff;
- idempotência.

---

## 25. Idempotência

O mesmo evento não deve disparar múltiplos e-mails idênticos por reprocessamento acidental.

---

## 26. Bounce

Bounces devem ser registrados quando o provedor disponibilizar essa informação.

---

## 27. E-mail inválido

Endereço inválido deve impedir envio e gerar estado coerente.

---

## 28. Logs

Não registrar corpo completo quando contiver dados sensíveis desnecessários.

---

## 29. Auditoria

Eventos relevantes:

- e-mail solicitado;
- enviado;
- falhou;
- reprocessado.

---

## 30. Segurança

Credenciais SMTP/API nunca entram no Git.

Usar:

```text
variáveis de ambiente
```

---

## 31. Desenvolvimento

Em ambiente local, preferir solução segura de captura/local mail quando necessário.

Não disparar e-mail real por padrão durante testes.

---

## 32. Produção

Produção deverá possuir configuração explícita de provedor.

---

## 33. Domínio

Quando houver domínio próprio, configurar corretamente:

- SPF;
- DKIM;
- DMARC;

conforme o provedor escolhido.

---

## 34. Privacidade

Enviar apenas dados necessários.

---

## 35. Testes obrigatórios

Cobrir:

- template;
- variável ausente;
- retry;
- idempotência;
- consentimento;
- link expirado;
- falha do provedor.

---

## 36. Regra final

> E-mail na VoltX é um canal auxiliar.
>
> A aplicação nunca deve depender de uma mensagem externa para preservar seu estado principal.
