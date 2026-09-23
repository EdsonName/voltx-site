# CONSENTIMENTOS — VoltX

## 1. Finalidade

Este documento define como a VoltX deverá registrar e administrar consentimentos.

Ele complementa:

- `LGPD.md`;
- `POLITICA_PRIVACIDADE.md`;
- `TERMOS_DE_USO.md`;
- `COOKIES.md`.

---

## 2. Princípio

Consentimento deve ser:

```text
claro
específico
rastreável
revogável quando aplicável
```

---

## 3. Não usar “aceito tudo”

Finalidades diferentes devem permanecer separadas.

---

## 4. Tipos previstos

```text
TERMS
PRIVACY
MARKETING_EMAIL
MARKETING_WHATSAPP
COOKIES_ANALYTICS
COOKIES_MARKETING
TESTIMONIAL_PUBLICATION
```

A lista poderá evoluir.

---

## 5. Termos

Aceite dos Termos deve registrar versão.

---

## 6. Política de Privacidade

Registrar ciência/aceite conforme desenho jurídico definido.

Não confundir base legal com checkbox genérico.

---

## 7. Marketing por e-mail

Opcional.

Deve iniciar desmarcado.

---

## 8. Marketing por WhatsApp

Opcional e separado do e-mail.

---

## 9. Depoimento

Publicar avaliação como depoimento exige autorização específica.

---

## 10. Cookies

Consentimentos opcionais devem ser separados por categoria quando necessário.

---

## 11. Estrutura de banco

Campos conceituais:

```text
user_id
consent_type
document_version
granted
granted_at
revoked_at
source
ip
user_agent
```

---

## 12. Histórico

Nunca sobrescrever simplesmente o aceite anterior.

Preservar:

```text
quando aceitou
qual versão
quando revogou
```

---

## 13. Origem

Exemplos:

```text
SIGNUP
PROFILE
CHECKOUT
PRIVACY_CENTER
ADMIN_ASSISTED
COOKIE_BANNER
```

---

## 14. Admin assisted

Administrador não deve marcar marketing em nome do cliente sem fundamento/documentação.

---

## 15. Revogação

Quando revogável:

```text
revoked_at
```

deve ser registrado.

---

## 16. Efeito

Revogação deve parar usos futuros baseados naquele consentimento.

---

## 17. Campanhas

Antes do envio, consultar estado atual.

---

## 18. Consentimento antigo

Não confiar em snapshot criado quando campanha foi preparada.

---

## 19. Nova versão

Mudança relevante no documento pode exigir novo aceite.

---

## 20. Versionamento

Exemplo:

```text
Política 1.0
↓
Política 1.1
```

Histórico deve mostrar qual usuário aceitou qual versão.

---

## 21. UI

Texto deve ser claro.

Preferir:

```text
Quero receber novidades da VoltX por WhatsApp.
```

---

## 22. Não usar linguagem coercitiva

Evitar:

- checkbox pré-marcado;
- recusa escondida;
- texto confuso;
- cores manipulativas.

---

## 23. Consentimento obrigatório

Somente exigir aceite quando realmente necessário para o fluxo/documento aplicável.

---

## 24. Marketing não obrigatório

Cadastro não pode depender de marketing.

---

## 25. Retirada fácil

Usuário deve conseguir revisar preferências em:

```text
Privacidade e dados
```

---

## 26. Auditoria

Mudanças de consentimento devem ser auditáveis.

---

## 27. API

Endpoints devem impedir alteração de consentimento de outro usuário.

---

## 28. Segurança

Nunca expor histórico completo de outro cliente sem permissão.

---

## 29. Visitantes

Cookies opcionais podem exigir consentimento mesmo sem conta.

Nesse caso, usar identificador técnico adequado.

---

## 30. Vinculação posterior

Se visitante criar conta, consentimentos de cookie não devem ser mesclados de forma incorreta sem regra explícita.

---

## 31. Testemunho

Consentimento para depoimento deve poder ser revogado conforme política definida.

---

## 32. E-mail operacional

Não depende de marketing quando for comunicação necessária ao serviço.

---

## 33. WhatsApp operacional

Também deve ser distinguido de campanha promocional.

---

## 34. Testes

Cobrir:

- aceite;
- revogação;
- versão;
- origem;
- marketing;
- acesso;
- UI desmarcada por padrão.

---

## 35. Regra final

> Consentimento na VoltX deve ser comprovável e compreensível.
>
> Checkbox existe para representar uma escolha real, não para esconder uma decisão já tomada pelo sistema.
