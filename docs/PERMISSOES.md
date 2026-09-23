# PERMISSÕES — VoltX

## 1. Finalidade

Este documento define o modelo de autorização da VoltX.

Ele estabelece:

- papéis;
- permissões;
- regras por recurso;
- limites de acesso;
- auditoria;
- isolamento entre clientes.

---

## 2. Modelo

A VoltX utilizará:

```text
RBAC
```

com possibilidade de regras adicionais baseadas em propriedade do recurso.

---

## 3. Papéis iniciais

```text
SUPER_ADMIN
ADMIN
ATENDENTE
EDITOR
CLIENTE
```

---

## 4. SUPER_ADMIN

Responsável por administração total.

Pode, conforme regra implementada:

- gerenciar administradores;
- gerenciar permissões;
- alterar configurações críticas;
- acessar auditoria;
- operar todos os módulos.

Esse papel deve ser usado com extrema restrição.

---

## 5. ADMIN

Pode administrar operação da VoltX.

Exemplos:

- clientes;
- serviços;
- orçamentos;
- agenda;
- OS;
- conteúdo;
- atendimento.

Não deverá receber automaticamente acesso a segredos de infraestrutura.

---

## 6. ATENDENTE

Voltado ao atendimento ao cliente.

Pode, conforme escopo:

- visualizar clientes necessários;
- abrir conversas;
- responder chat;
- consultar protocolos;
- criar/agendar atendimento;
- atualizar determinados status.

Não deve gerenciar segurança global.

---

## 7. EDITOR

Voltado ao CMS.

Pode:

- criar posts;
- editar posts;
- gerenciar mídia editorial;
- moderar comentários conforme permissão.

Não deve:

- gerenciar usuários administrativos;
- alterar agenda operacional;
- alterar orçamentos;
- acessar segredos.

---

## 8. CLIENTE

Pode acessar apenas recursos próprios.

Exemplos:

- próprio perfil;
- próprios endereços;
- próprios orçamentos;
- próprios agendamentos;
- próprias OS;
- próprias conversas;
- próprios consentimentos.

---

## 9. Permissão não vem da interface

Ocultar botão não é autorização.

Backend deve validar toda ação.

---

## 10. Regra de propriedade

Mesmo com papel `CLIENTE`, o backend deve conferir:

```text
resource.user_id == current_user.id
```

ou regra equivalente.

---

## 11. IDOR

Nunca permitir acesso apenas porque o usuário conhece um UUID ou protocolo.

---

## 12. Estrutura de permissões

Permissões poderão usar padrão:

```text
recurso:ação
```

Exemplos:

```text
clients:read
clients:update
appointments:create
appointments:update
quotes:create
quotes:send
posts:publish
audit:read
```

---

## 13. Permissões granulares

Papéis são agrupadores.

O banco poderá relacionar:

```text
roles
permissions
role_permissions
user_roles
```

conforme `DATABASE.md`.

---

## 14. Permissões sensíveis

Devem ser restritas.

Exemplos:

```text
admins:manage
roles:manage
audit:read
security:manage
settings:critical
```

---

## 15. Administração de papéis

Somente usuário autorizado poderá alterar papel de outro usuário.

Alteração deve gerar auditoria.

---

## 16. Escalada de privilégio

Usuário nunca deve poder:

- atribuir a si mesmo papel maior;
- editar campo `role` via DTO genérico;
- alterar permissões por mass assignment.

---

## 17. Cliente e dados de terceiros

`CLIENTE` não pode:

- buscar CPF de outros;
- ler chats de outros;
- consultar orçamento de outros;
- acessar OS de outros.

---

## 18. Atendimento

`ATENDENTE` pode precisar visualizar dados de clientes para executar atendimento.

A visualização deve ser limitada ao necessário.

---

## 19. Editor e conteúdo

`EDITOR` pode operar conteúdo editorial sem acesso irrestrito a CRM.

---

## 20. Admin e dados pessoais

Mesmo `ADMIN` deve possuir acesso baseado em necessidade operacional.

---

## 21. Configurações críticas

Exemplos:

- credenciais;
- integrações;
- papéis;
- segurança;
- chaves.

Devem ter permissão específica.

---

## 22. Auditoria

Toda mudança de permissão deve registrar:

- quem alterou;
- quem foi afetado;
- papel/permissão anterior;
- novo papel/permissão;
- data.

---

## 23. Permissões no frontend

Frontend pode usar permissões para:

- esconder ações indisponíveis;
- evitar navegação inútil;
- melhorar UX.

Mas backend continua sendo autoridade.

---

## 24. Guardas no NestJS

Preferir guard centralizado.

Conceito:

```text
AuthenticationGuard
+
PermissionGuard
```

---

## 25. WebSocket

Cada evento deve validar permissão.

Exemplo:

```text
joinConversation
sendMessage
closeConversation
```

---

## 26. Uploads

Autorização deve validar o destino.

Usuário não pode anexar arquivo em recurso de outro cliente.

---

## 27. Busca global

Busca administrativa deve respeitar papel.

Busca pública não deve expor dados privados.

---

## 28. Exportação de dados

Cliente só exporta próprios dados.

Administrador não deve gerar exportação de outro usuário sem permissão e justificativa.

---

## 29. Exclusão

Cliente pode solicitar exclusão própria.

Executar exclusão/anonimização pode exigir papel administrativo específico.

---

## 30. Soft delete

Permissão de excluir logicamente não implica permissão de apagar fisicamente.

---

## 31. Regra de negação

Na dúvida:

```text
negar acesso
```

e exigir regra explícita.

---

## 32. Defaults

Novo papel ou nova permissão não deve receber acesso amplo automaticamente.

---

## 33. Testes obrigatórios

Para cada módulo crítico testar:

- permitido;
- negado;
- recurso próprio;
- recurso de terceiro;
- papel insuficiente;
- papel administrativo adequado.

---

## 34. Matriz resumida inicial

| Recurso | SUPER_ADMIN | ADMIN | ATENDENTE | EDITOR | CLIENTE |
|---|---|---|---|---|---|
| Próprio perfil | Sim | Sim | Sim | Sim | Sim |
| Clientes | Sim | Sim | Conforme permissão | Não | Somente próprio |
| Orçamentos | Sim | Sim | Conforme permissão | Não | Somente próprios |
| Agendamentos | Sim | Sim | Sim | Não | Somente próprios |
| Chat | Sim | Sim | Sim | Não | Somente próprio |
| CMS | Sim | Sim | Não | Sim | Leitura pública |
| Auditoria | Sim | Conforme permissão | Não | Não | Não |
| Papéis/permissões | Sim | Conforme permissão | Não | Não | Não |

---

## 35. Regra final

> Nenhum usuário deve receber mais acesso do que precisa para executar sua função.
>
> A autorização real sempre acontece no backend.
