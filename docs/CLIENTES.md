# CLIENTES — VoltX

## 1. Finalidade

Este documento define o domínio de clientes da VoltX.

Ele cobre:

- cadastro;
- perfil;
- endereços;
- pré-cadastro;
- histórico;
- CRM;
- privacidade;
- status;
- atendimento.

---

## 2. Conceito

Cliente é o usuário que utiliza a VoltX para:

- solicitar orçamento;
- agendar atendimento;
- acompanhar protocolos;
- conversar no chat;
- acompanhar OS;
- avaliar serviços.

---

## 3. Conta e cliente

Nem todo registro administrativo precisa nascer como conta ativa.

Estados podem incluir:

```text
PRE_REGISTERED
ACTIVE
SUSPENDED
DELETION_REQUESTED
ANONYMIZED
```

---

## 4. Cadastro normal

Fluxo:

```text
conta
↓
perfil
↓
aparência
↓
consentimentos
↓
cliente ativo
```

---

## 5. Pré-cadastro

Administrador poderá criar cliente com dados mínimos.

Exemplo:

- nome;
- telefone;
- WhatsApp;
- e-mail quando disponível;
- observação interna.

---

## 6. Ativação

Pré-cadastro poderá ser ativado pelo próprio cliente através de código seguro.

---

## 7. Duplicidade

Antes de criar cliente, verificar possíveis duplicidades por:

- e-mail;
- telefone;
- CPF quando houver.

Não mesclar automaticamente sem confirmação.

---

## 8. Perfil

Dados possíveis:

- nome;
- foto;
- e-mail;
- telefone;
- WhatsApp;
- identidade de gênero;
- preferências;
- endereço principal.

---

## 9. Avatar

Upload local.

Ações:

```text
enviar
recortar
girar
substituir
remover
```

---

## 10. Endereços

Um cliente poderá possuir múltiplos endereços.

Exemplos:

```text
Casa
Trabalho
Outro
```

---

## 11. Endereço principal

Um endereço pode ser marcado como principal.

A alteração não deve apagar histórico de serviços passados.

---

## 12. Histórico 360

Painel administrativo deverá reunir visão do cliente:

- dados principais;
- protocolos;
- orçamentos;
- OS;
- agendamentos;
- chats;
- avaliações;
- notas internas;
- eventos relevantes.

---

## 13. Busca administrativa

Permitir busca por:

```text
nome
telefone
WhatsApp
e-mail
CPF
protocolo
OS
```

conforme permissão.

---

## 14. Notas internas

Administradores e atendentes autorizados poderão registrar observações internas.

Essas notas:

- não são públicas;
- devem ter autor/data;
- podem exigir auditoria.

---

## 15. Tags de CRM

Cliente poderá receber etiquetas internas.

Exemplos:

```text
Cliente recorrente
Orçamento pendente
Retornar amanhã
Pós-serviço
```

---

## 16. Status

Estados do cliente devem ser explícitos.

Não reutilizar um simples booleano `active` para representar tudo.

---

## 17. Suspensão

Conta suspensa:

- não entra normalmente;
- mantém histórico;
- pode ser reativada conforme permissão.

---

## 18. Exclusão

Cliente poderá solicitar exclusão.

O processo seguirá:

- `LGPD.md`;
- `RETENCAO_DADOS.md`;
- `POLITICA_PRIVACIDADE.md`.

---

## 19. Anonimização

Quando aplicável:

- remover dados identificáveis;
- preservar histórico permitido;
- bloquear login.

---

## 20. Consentimentos

Cliente deverá poder gerenciar:

- marketing por e-mail;
- marketing por WhatsApp;
- cookies opcionais quando existirem.

Aceites legais ficam versionados.

---

## 21. Preferências visuais

Cliente poderá escolher tema e animações.

Essas preferências não devem depender de gênero.

---

## 22. Comunicação

Canais possíveis:

- chat interno;
- WhatsApp;
- e-mail;
- notificações da plataforma.

---

## 23. Chat

Cliente autenticado poderá conversar com a VoltX.

Cada atendimento relevante poderá possuir protocolo.

---

## 24. Orçamentos

Cliente deve visualizar apenas seus próprios orçamentos.

Estados devem ser apresentados em PT-BR.

---

## 25. Agendamentos

Cliente poderá:

- solicitar;
- visualizar;
- pedir reagendamento;
- cancelar quando permitido.

---

## 26. OS

Cliente poderá acompanhar Ordens de Serviço relacionadas ao próprio atendimento.

---

## 27. Avaliações

Após serviço concluído, o cliente poderá avaliar conforme regra.

Publicação como depoimento exige opt-in.

---

## 28. Segurança

Dados de cliente não devem aparecer em:

- logs desnecessários;
- páginas públicas;
- buscas públicas;
- URLs inseguras.

---

## 29. Admin criando atendimento

Administrador poderá iniciar:

- orçamento;
- agendamento;
- OS;
- chat;
- protocolo.

A origem deverá ficar registrada.

---

## 30. Importação futura

Se houver importação em massa:

- validar duplicidades;
- registrar origem;
- não presumir consentimento de marketing;
- testar antes em ambiente seguro.

---

## 31. Interface

Página administrativa deve evitar excesso de dados em uma única tela.

Usar seções como:

```text
Resumo
Contato
Endereços
Atendimentos
Orçamentos
Agenda
OS
Chat
Privacidade
Auditoria
```

---

## 32. API

Endpoints devem retornar apenas campos necessários.

Nunca expor:

- password_hash;
- tokens;
- segredos;
- códigos de ativação.

---

## 33. Testes obrigatórios

Cobrir:

- cadastro;
- pré-cadastro;
- ativação;
- duplicidade;
- edição;
- endereços;
- suspensão;
- autorização;
- exclusão/anonimização.

---

## 34. Regra final

> O cliente deve possuir uma visão consistente em toda a VoltX.
>
> Cadastro, orçamento, agenda, chat e OS não são cadastros separados: todos pertencem à mesma identidade de cliente.
