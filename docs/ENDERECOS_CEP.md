# ENDEREÇOS E CEP — VoltX

## 1. Finalidade

Este documento define o tratamento de endereços e CEP na VoltX.

Ele cobre:

- cadastro;
- normalização;
- consulta;
- falha externa;
- múltiplos endereços;
- área de atendimento;
- snapshots históricos;
- privacidade.

---

## 2. Princípio

O endereço do cliente é dado operacional privado.

Não deve aparecer publicamente.

---

## 3. Estrutura

Campos previstos:

```text
CEP
logradouro
número
complemento
bairro
cidade
UF
referência opcional
```

---

## 4. CEP

Persistência preferencial:

```text
somente dígitos
```

Exibição:

```text
72.860-000
```

---

## 5. Validação

CEP brasileiro:

```text
8 dígitos
```

---

## 6. Consulta automática

A plataforma poderá consultar serviço externo de CEP.

---

## 7. Dados enviados

Enviar apenas:

```text
CEP
```

quando possível.

---

## 8. Dependência externa

Consulta de CEP é conveniência.

Não pode ser dependência obrigatória para cadastrar endereço.

---

## 9. Falha do serviço

Se falhar:

```text
Não conseguimos consultar o CEP agora.
Você pode preencher o endereço manualmente.
```

---

## 10. Resultado parcial

Nem todo CEP retorna:

- bairro;
- logradouro;
- complemento.

Permitir preenchimento manual.

---

## 11. Número

Pode aceitar:

```text
S/N
```

quando necessário.

---

## 12. Complemento

Opcional.

---

## 13. Referência

Opcional e privada.

---

## 14. UF

Padronizar:

```text
GO
DF
SP
```

---

## 15. Cidade

Preservar grafia correta.

---

## 16. Múltiplos endereços

Cliente pode ter:

```text
Casa
Trabalho
Outro
```

---

## 17. Endereço principal

Pode marcar um como principal.

---

## 18. Histórico

Alterar endereço atual não deve reescrever endereço de atendimento antigo.

---

## 19. Snapshot

Orçamentos, agendamentos e OS podem guardar snapshot do endereço utilizado na época.

---

## 20. Área de atendimento

A VoltX pode definir área habitual.

---

## 21. Fora da área habitual

Não rejeitar automaticamente.

Mensagem:

```text
Este endereço está fora da nossa área habitual de atendimento.
Você ainda pode continuar a solicitação.
```

---

## 22. Avaliação manual

Atendimento externo pode depender de:

- disponibilidade;
- deslocamento;
- custo;
- segurança.

---

## 23. Distância

Cálculo de distância poderá ser implementado futuramente.

Não é requisito inicial.

---

## 24. Geocodificação

Se futura, deve ser documentada antes.

---

## 25. Coordenadas

Não coletar localização precisa sem necessidade.

---

## 26. Endereço administrativo

Dados da própria VoltX devem vir de configuração central de negócio.

---

## 27. Busca por CEP

Pode ser cacheada quando apropriado.

Não guardar dados pessoais junto de cache público.

---

## 28. Serviço externo

Provedor deve ser substituível.

---

## 29. Timeout

Consulta externa deve possuir timeout.

---

## 30. Retry

Falhas transitórias podem ter retry limitado.

---

## 31. Rate limit

Não abusar do provedor.

---

## 32. Segurança

Nunca concatenar endereço em SQL manual.

---

## 33. Privacidade

Não registrar endereço completo em log técnico sem necessidade.

---

## 34. Mascaramento

Em telas administrativas específicas, pode ser exibido completo conforme permissão.

---

## 35. API pública

Nunca expor endereço de cliente.

---

## 36. API autenticada

Cliente vê apenas próprios endereços.

---

## 37. Admin

Acesso conforme permissão operacional.

---

## 38. Exclusão

Endereços atuais podem ser removidos conforme fluxo de privacidade.

Snapshots históricos seguem retenção.

---

## 39. Testes

Cobrir:

- CEP válido;
- inválido;
- consulta;
- timeout;
- falha externa;
- preenchimento manual;
- múltiplos endereços;
- snapshot;
- autorização.

---

## 40. Regra final

> Consulta de CEP facilita o preenchimento, mas o dado oficial continua sendo o endereço confirmado pelo usuário.
>
> Falha de serviço externo nunca deve impedir um endereço válido de ser informado manualmente.
