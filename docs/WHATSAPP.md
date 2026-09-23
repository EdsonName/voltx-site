# WHATSAPP — VoltX

## 1. Finalidade

Este documento define a integração da VoltX com WhatsApp.

Ele cobre:

- atendimento;
- mensagens operacionais;
- marketing;
- templates;
- consentimento;
- privacidade;
- retries;
- integração substituível.

---

## 2. Princípio

WhatsApp é canal complementar.

Não substitui:

- banco;
- protocolos;
- histórico interno;
- chat autenticado.

---

## 3. Usos previstos

Pode ser utilizado para:

- contato inicial;
- retorno de orçamento;
- confirmação de agendamento;
- lembretes;
- atualização operacional;
- marketing consentido.

---

## 4. Visitante

Visitante poderá usar:

```text
Falar pelo WhatsApp
```

quando não estiver autenticado.

---

## 5. Cliente autenticado

O canal principal dentro da plataforma pode continuar sendo o chat interno.

WhatsApp poderá ser alternativa ou complemento.

---

## 6. Número

Telefone deve ser normalizado em E.164 quando enviado para integração.

Exemplo:

```text
+5561999010739
```

---

## 7. Consentimento

Marketing por WhatsApp deve possuir consentimento separado.

Informar o número não significa aceitar marketing.

---

## 8. Operacional

Mensagens necessárias ao atendimento podem ser tratadas separadamente do marketing, conforme base aplicável.

---

## 9. Templates

Quando a plataforma oficial exigir template aprovado, o conteúdo deverá ser versionado internamente.

---

## 10. Variáveis

Exemplos:

```text
nome
protocolo
data do agendamento
número do orçamento
```

Nunca inserir dados excessivos.

---

## 11. Exemplo operacional

```text
Olá, João. Seu agendamento da VoltX foi confirmado para 24/09/2026 às 14:00.
```

---

## 12. Privacidade

Evitar enviar:

- CPF;
- endereço completo sem necessidade;
- conteúdo sensível;
- tokens permanentes;
- senha.

---

## 13. Link para plataforma

Quando necessário, direcionar o cliente de volta à VoltX.

---

## 14. Protocolo

Mensagens podem incluir número de protocolo quando útil.

---

## 15. Mensagem pré-preenchida

Links públicos podem abrir conversa com texto editável.

Exemplo:

```text
Olá, gostaria de falar sobre o protocolo VX-2026-000184.
```

---

## 16. Integração oficial

Se houver automação real, utilizar API oficial compatível com as regras do provedor.

---

## 17. Não depender de automação frágil

Evitar:

- automação de WhatsApp Web não suportada;
- scraping de sessão;
- bots instáveis que dependam de navegador aberto.

---

## 18. Provedor

Se existir intermediário, deve ser substituível.

---

## 19. Falha externa

Falha no WhatsApp não pode apagar:

- orçamento;
- agendamento;
- protocolo;
- mensagem interna.

---

## 20. Status

A lista abaixo é o conjunto inicial para os comportamentos já descritos, usando apenas estados necessários ao canal. Não introduzir transições automáticas apenas pela ordem da lista.

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: matriz de transições com estado atual → ação → próximo estado → ator permitido, conforme [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), seção 29. Usar os estados já documentados necessários ao comportamento do módulo, sem inventar novos estados para completar a matriz. Estados específicos de canal não precisam coincidir com os de outros canais.

Pode registrar:

```text
PENDING
SENT
DELIVERED
READ
FAILED
```

quando a API fornecer.

---

## 21. Retry

Falhas transitórias podem usar retry limitado.

---

## 22. Idempotência

Evitar envio duplicado por reprocessamento.

---

## 23. Webhooks

Webhooks devem validar:

- assinatura;
- origem;
- timestamp;
- replay.

---

## 24. Mensagens recebidas

Se futuramente forem integradas ao painel, deverão ser associadas de forma segura ao cliente.

---

## 25. Número desconhecido

Não vincular automaticamente a uma conta apenas por coincidência parcial.

---

## 26. Mudança de número

Cliente poderá atualizar WhatsApp.

Histórico antigo não deve ser reatribuído incorretamente.

---

## 27. Marketing

Campanhas devem verificar consentimento no momento do envio.

---

## 28. Opt-out

Se o usuário revogar consentimento, interromper novas campanhas.

---

## 29. Fila

Mensagens externas podem usar fila.

---

## 30. Logs

Registrar metadata necessária, não conteúdo sensível em excesso.

---

## 31. Segurança

Tokens de API em variáveis de ambiente.

---

## 32. Painel

Admin poderá visualizar status de envio quando necessário.

---

## 33. Testes

Cobrir:

- normalização de telefone;
- consentimento;
- retry;
- idempotência;
- webhook;
- falha externa;
- template.

---

## 34. Regra final

> WhatsApp facilita o contato, mas não deve se tornar a única memória do atendimento.
>
> Protocolos, histórico e dados principais permanecem na VoltX.
