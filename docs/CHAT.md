# CHAT — VoltX

## 1. Finalidade

Este documento define o sistema de chat da VoltX.

Ele cobre:

- cliente autenticado;
- atendimento administrativo;
- mensagens em tempo real;
- protocolos;
- histórico;
- anexos;
- presença;
- fila;
- etiquetas;
- notificações;
- auditoria.

---

## 2. Princípio

O chat da VoltX será um sistema real de atendimento.

Não usar:

```text
setTimeout
mensagens simuladas
respostas falsas
mock em produção
```

---

## 3. Tecnologia planejada

```text
Socket.IO / WebSocket
+
Redis
+
PostgreSQL
```

---

## 4. Fonte de verdade

PostgreSQL será a fonte de verdade para histórico permanente.

Redis poderá ser usado para:

- presença;
- pub/sub;
- locks;
- filas;
- estado temporário.

---

## 5. Quem usa o chat

Cliente autenticado:

```text
cliente ↔ VoltX
```

Visitante:

```text
Entrar
ou
Falar pelo WhatsApp
```

---

## 6. Conversa

Uma conversa representa o relacionamento persistente entre cliente e VoltX.

---

## 7. Protocolos

Uma mesma conversa pode possuir múltiplos protocolos ao longo do tempo.

Exemplo:

```text
Conversa do cliente
├── VX-2026-000101 encerrado
├── VX-2026-000155 encerrado
└── VX-2026-000212 aberto
```

---

## 8. Novo atendimento

Quando atendimento anterior estiver encerrado e o cliente retornar:

```text
novo protocolo
```

O histórico antigo permanece visível conforme permissão.

---

## 9. Mensagem

Campos conceituais:

- id;
- conversation_id;
- protocol_id;
- sender_id;
- tipo;
- conteúdo;
- data;
- editada;
- removida;
- resposta_a.

---

## 10. Tipos de mensagem

Exemplos:

```text
TEXT
IMAGE
FILE
SYSTEM
```

---

## 11. Persistência

Mensagem deve ser persistida antes ou durante confirmação de envio.

Não considerar enviada apenas porque apareceu na tela.

---

## 12. Confirmação de entrega

Pode existir estado:

```text
Enviando
Enviado
Entregue
Lido
Falhou
```

---

## 13. Ordem

Mensagens precisam de ordenação estável.

Não depender apenas do relógio do navegador.

---

## 14. Resposta a mensagem

Pode existir referência:

```text
reply_to_message_id
```

---

## 15. Edição

Se permitida, registrar:

- `edited_at`;
- histórico quando necessário.

---

## 16. Remoção

Não apagar silenciosamente registros relevantes.

Pode existir estado de remoção lógica.

---

## 17. Anexos

Uploads seguem `MIDIA_UPLOADS.md`.

---

## 18. Limite

Mensagens e anexos devem possuir limites de tamanho.

---

## 19. Presença

Estados visíveis:

```text
Online
Ausente
Ocupado
Offline
```

---

## 20. Redis e presença

Presença pode ser armazenada temporariamente no Redis.

Não usar presença como dado histórico principal.

---

## 21. Último acesso

Pode ser exibido conforme regra de privacidade.

---

## 22. Digitação

Evento temporário:

```text
typing
```

Não precisa ser persistido.

---

## 23. Lidas/não lidas

Cada lado precisa saber quais mensagens ainda não foram lidas.

---

## 24. Contadores

Contadores devem ser derivados de estado consistente.

Evitar comportamento que reinicie ou pisque continuamente.

---

## 25. Inbox administrativa

Painel deve possuir caixa de entrada com filtros.

---

## 26. Filtros

Exemplos:

```text
Todos
Hoje
Iniciadas hoje
Recentes
Não lidas
Precisa de resposta
Aguardando cliente
Abertos
Encerrados
Prioridade alta
Urgentes
```

---

## 27. Prioridade

Exemplos:

```text
Normal
Prioridade alta
Urgente
```

---

## 28. Etiquetas

Exemplos:

```text
Aguardando cliente
Orçamento enviado
Retornar amanhã
Pagamento pendente
Pós-serviço
```

---

## 29. Responsável

Conversa/protocolo pode ser atribuído a:

- admin;
- atendente.

---

## 30. Fila

Pode existir fila de atendimento para conversas sem responsável.

---

## 31. Perfil 360

Ao abrir chat administrativo, mostrar contexto do cliente:

- contato;
- protocolo;
- orçamento;
- agenda;
- OS;
- etiquetas;
- histórico.

---

## 32. Segurança

Cada conexão deve autenticar usuário.

Cada evento deve autorizar recurso.

---

## 33. IDOR

Conhecer `conversation_id` não permite entrar em conversa de outro cliente.

---

## 34. Rate limiting

Aplicar limite para:

- mensagens;
- conexões;
- anexos;
- eventos repetitivos.

---

## 35. Spam

Pode haver proteção contra flooding.

---

## 36. Encerramento

Ação:

```text
Encerrar atendimento
```

O protocolo recebe data/status de encerramento.

---

## 37. Histórico

Encerramento não apaga mensagens.

---

## 38. Sistema

Mensagens de sistema podem registrar eventos.

Exemplo:

```text
Atendimento iniciado.
Protocolo VX-2026-000212.
```

---

## 39. Notificações

Nova mensagem pode gerar:

- notificação interna;
- e-mail;
- WhatsApp quando configurado.

---

## 40. Reconexão

WebSocket deve lidar com reconexão.

Ao reconectar:

- ressincronizar mensagens;
- evitar duplicidade;
- recuperar estado correto.

---

## 41. Idempotência

Reenvio por falha de rede não deve duplicar mensagem.

---

## 42. Paginação

Histórico deve ser carregado em páginas/cursor.

Não carregar milhares de mensagens de uma vez.

---

## 43. Busca

Admin pode buscar por:

```text
protocolo
cliente
telefone
conteúdo quando autorizado
```

---

## 44. Auditoria

Ações administrativas relevantes:

- atribuição;
- prioridade;
- etiqueta;
- encerramento;
- moderação.

---

## 45. Privacidade

Mensagens são privadas entre cliente e VoltX.

Não aparecem em busca pública.

---

## 46. Testes obrigatórios

Cobrir:

- conexão;
- autenticação;
- envio;
- persistência;
- reconexão;
- não lidas;
- novo protocolo;
- encerramento;
- permissões;
- anexos;
- concorrência.

---

## 47. Regra final

> O chat da VoltX deve ser persistente, autenticado e confiável.
>
> Tempo real melhora a experiência, mas PostgreSQL preserva a história real.
