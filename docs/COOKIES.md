# COOKIES — VoltX

## 1. Finalidade

Este documento define a política técnica de cookies da VoltX.

Ele orienta:

- cookies essenciais;
- preferências;
- analytics futuro;
- consentimento;
- segurança;
- duração;
- banner.

---

## 2. Princípio

A VoltX utilizará apenas cookies necessários e justificados.

Não adicionar rastreamento por padrão.

---

## 3. Categorias

```text
ESSENTIAL
PREFERENCES
ANALYTICS
MARKETING
```

---

## 4. Cookies essenciais

Podem ser usados para:

- autenticação;
- sessão;
- CSRF;
- segurança;
- balanceamento quando necessário.

---

## 5. Consentimento de essenciais

Cookies estritamente necessários não devem depender de opt-in que torne a plataforma impossível de usar.

A classificação final deve ser validada juridicamente.

---

## 6. Preferências

Podem guardar:

- tema;
- idioma futuro;
- preferências técnicas.

Se puderem ser armazenadas no perfil autenticado, priorizar consistência com a conta.

---

## 7. Analytics

Não será adicionado inicialmente por padrão.

Se futuramente existir, revisar:

- fornecedor;
- cookies;
- IP;
- retenção;
- consentimento.

---

## 8. Marketing

Nenhum cookie de publicidade deve ser introduzido sem decisão explícita.

---

## 9. Cookie de sessão

Deve usar:

```text
HttpOnly
Secure
SameSite apropriado
```

em produção.

---

## 10. JavaScript

Cookies sensíveis não devem ser acessíveis por JavaScript quando isso puder ser evitado.

---

## 11. Duração

Cada cookie deve possuir duração documentada.

Não inventar valores sem implementação concreta.

---

## 12. Tabela futura

Antes da produção, preencher:

| Cookie | Categoria | Finalidade | Duração | HttpOnly |
|---|---|---|---|---|
| sessão | Essencial | Autenticação | A definir | Sim |
| csrf | Essencial | Segurança | A definir | Conforme implementação |
| tema | Preferência | Aparência | A definir | Não |

---

## 13. Banner

Só mostrar banner de consentimento quando houver cookies/opções que realmente exijam escolha.

---

## 14. Dark patterns

Banner não deve:

- esconder recusa;
- destacar aceitar de forma abusiva;
- marcar opcionais por padrão.

---

## 15. Botões

Exemplo:

```text
Aceitar opcionais
Recusar opcionais
Configurar
```

---

## 16. Configuração

Permitir escolher categorias quando necessário.

---

## 17. Alteração posterior

Usuário deve poder reabrir preferências.

---

## 18. Registro

Consentimento de cookie opcional deve ser registrado.

---

## 19. Visitante

Pode usar identificador técnico para lembrar escolha.

Não transformar isso em rastreamento oculto.

---

## 20. Usuário autenticado

Preferência pode ser vinculada à conta quando apropriado.

---

## 21. CSRF

Cookie de sessão não substitui estratégia CSRF.

---

## 22. Subdomínios

Definir cuidadosamente escopo:

```text
voltx.narrativas.site
painel-voltx.narrativas.site
api-voltx.narrativas.site
```

Não compartilhar cookie entre subdomínios sem necessidade.

---

## 23. Domínio

Preferir menor escopo necessário.

---

## 24. SameSite

Escolher conforme fluxo real.

Não usar `None` sem necessidade e sem `Secure`.

---

## 25. Logout

Logout deve invalidar sessão no backend e remover cookie correspondente.

---

## 26. Analytics autohospedado

Pode ser avaliado futuramente para reduzir terceiros, mas ainda exige análise de privacidade.

---

## 27. Política pública

A versão final deste documento pode alimentar página pública de cookies.

---

## 28. Testes

Cobrir:

- flags;
- expiração;
- logout;
- consentimento;
- recusa;
- subdomínio;
- CSRF.

---

## 29. Regra final

> Cookie na VoltX deve existir porque há uma finalidade técnica clara.
>
> Não adicionar rastreamento apenas porque uma ferramenta o oferece por padrão.
