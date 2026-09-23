# AUTENTICAÇÃO — VoltX

## 1. Finalidade

Este documento define a autenticação da VoltX para:

- clientes;
- administradores;
- atendentes;
- editores;
- superadministradores.

Ele complementa `SEGURANCA.md`, `PERMISSOES.md`, `API.md` e `DATABASE.md`.

---

## 2. Princípio

Autenticação responde:

```text
Quem é você?
```

Autorização responde:

```text
O que você pode fazer?
```

Os dois conceitos devem permanecer separados.

---

## 3. Modelo preferencial

A aplicação utilizará sessão segura controlada pelo backend.

Preferência:

```text
cookie HttpOnly
+
Secure em produção
+
SameSite apropriado
```

Evitar guardar token de sessão permanente em `localStorage`.

---

## 4. Cadastro de cliente

Fluxo planejado:

```text
dados da conta
↓
perfil
↓
aparência
↓
consentimentos
↓
conta criada
```

---

## 5. Identificadores de login

Inicialmente:

```text
e-mail
```

Outros identificadores poderão ser adicionados somente com regra documentada.

---

## 6. Senhas

Hash:

```text
Argon2id
```

Nunca armazenar senha em texto puro.

---

## 7. Política de senha

**DEFINIR ANTES DA IMPLEMENTAÇÃO DE AUTENTICAÇÃO**: tamanho mínimo final de senha, duração de sessão, duração de tokens, quantidade exata de tentativas e duração de bloqueios. Não fixar valores nesta etapa. Argon2id, senha opaca, tokens temporários, hash de tokens sensíveis quando aplicável, rate limiting, proteção contra brute force e sessões revogáveis permanecem obrigatórios.

Priorizar:

- comprimento;
- resistência;
- possibilidade de frases-senha.

Não impor regras artificiais excessivas.

---

## 8. Login

Endpoint conceitual:

```text
POST /api/v1/auth/login
```

Resposta deverá iniciar sessão e retornar apenas dados necessários.

---

## 9. Erro de login

Mensagem pública:

```text
E-mail ou senha inválidos.
```

Evitar enumeração de contas.

---

## 10. Sessões

Cada sessão deverá registrar quando aplicável:

- usuário;
- identificador seguro;
- criação;
- expiração;
- último uso;
- IP;
- user-agent;
- revogação.

---

## 11. Sessão no banco

Tokens sensíveis devem ser armazenados por hash quando aplicável.

---

## 12. Logout

Endpoint:

```text
POST /api/v1/auth/logout
```

Logout deve revogar sessão no backend.

---

## 13. Logout global

Recurso futuro:

```text
Encerrar todas as outras sessões
```

---

## 14. Expiração

Sessões devem possuir expiração.

Políticas específicas poderão variar entre:

```text
CLIENTE
ADMIN
```

Sessões administrativas podem ter tempo menor.

---

## 15. Reautenticação

Ações sensíveis podem exigir login recente.

Exemplos:

- alterar senha;
- alterar e-mail;
- desativar 2FA;
- excluir conta.

---

## 16. Recuperação de senha

Fluxo:

```text
solicitação
↓
token temporário
↓
validação
↓
nova senha
↓
token invalidado
```

---

## 17. Token de recuperação

Deve ser:

- aleatório;
- temporário;
- de uso único;
- armazenado por hash;
- limitado por tentativas.

---

## 18. Recuperação sem enumeração

Mensagem:

```text
Se houver uma conta cadastrada, enviaremos as instruções.
```

---

## 19. Troca de senha autenticada

Deve exigir:

- senha atual ou reautenticação;
- nova senha;
- confirmação da nova senha.

---

## 20. Após troca de senha

Pode ser apropriado:

- revogar outras sessões;
- registrar evento de segurança;
- enviar notificação.

---

## 21. E-mail não verificado

Se a plataforma passar a exigir verificação de e-mail, o fluxo deverá ser documentado antes da implementação.

Não inventar essa obrigatoriedade silenciosamente.

---

## 22. Pré-cadastro administrativo

Administrador poderá criar cliente pré-cadastrado.

Status planejado:

```text
PRE_REGISTERED
```

---

## 23. Ativação de pré-cadastro

A ativação cria/vincula user ao customer existente, conforme [CLIENTES.md](CLIENTES.md), seção 6. Não criar novo cliente nem alterar os `customer_id` históricos.

Fluxo:

```text
pré-cadastro
↓
código de ativação
↓
cliente confirma identidade
↓
define credenciais
↓
conta ativa
```

---

## 24. Código de ativação

Deve ser:

- aleatório;
- expirável;
- uso único;
- armazenado por hash;
- limitado por tentativas.

---

## 25. Conta duplicada

Antes de ativar, verificar duplicidade por:

- e-mail;
- telefone;
- CPF quando existente.

---

## 26. 2FA administrativo

Obrigatório para contas administrativas antes da produção.

Preferência:

```text
TOTP
```

---

## 27. Ativação de 2FA

Fluxo:

```text
gerar segredo
↓
mostrar QR
↓
confirmar código
↓
ativar
```

---

## 28. Códigos de recuperação

Se implementados:

- gerar conjunto único;
- mostrar uma vez;
- armazenar hash;
- invalidar após uso.

---

## 29. 2FA de cliente

Pode ser oferecido futuramente como opção.

Não é requisito inicial obrigatório para clientes.

---

## 30. Proteção contra brute force

Aplicar:

- rate limiting;
- atraso progressivo quando apropriado;
- registro de falha;
- bloqueio temporário quando necessário.

---

## 31. CAPTCHA

Pode ser adicionado como camada complementar se houver abuso real.

Não deve ser dependência externa obrigatória desde o início.

---

## 32. Eventos de segurança

Exemplos:

```text
LOGIN_SUCCESS
LOGIN_FAILED
PASSWORD_CHANGED
SESSION_REVOKED
TWO_FACTOR_ENABLED
TWO_FACTOR_DISABLED
TWO_FACTOR_FAILED
```

---

## 33. Cookies

Em produção:

```text
HttpOnly
Secure
SameSite
```

Nome de cookie não deve revelar segredo.

---

## 34. CSRF

Autenticação baseada em cookie deverá possuir estratégia de CSRF compatível com a arquitetura.

---

## 35. CORS

Somente origens autorizadas.

Produção prevista:

```text
https://voltx.narrativas.site
https://painel-voltx.narrativas.site
```

---

## 36. Autenticação WebSocket

Socket.IO deverá validar a sessão durante conexão e eventos.

---

## 37. Revogação

Sessão comprometida deve poder ser revogada imediatamente.

---

## 38. Conta suspensa

Conta suspensa:

- não deve autenticar normalmente;
- mantém histórico;
- não equivale a exclusão.

---

## 39. Conta anonimizada

Não deve permitir login.

---

## 40. Auditoria

Alterações administrativas de autenticação e segurança devem ser auditadas.

---

## 41. API

Endpoints autenticados devem usar guard/middleware apropriado no NestJS.

Não replicar lógica manual de sessão em cada controller.

---

## 42. Testes obrigatórios

Cobrir:

- login válido;
- login inválido;
- logout;
- sessão expirada;
- sessão revogada;
- recuperação de senha;
- pré-cadastro;
- ativação;
- 2FA administrativo;
- rate limiting.

---

## 43. Regra final

> Autenticação na VoltX deve ser centralizada, revogável, auditável e segura.
>
> Nunca confiar em estado do frontend para decidir se alguém está autenticado.
