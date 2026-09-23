# REGRAS DE NEGÓCIO — VoltX

## 1. Finalidade

Este documento define as regras de negócio oficiais da plataforma VoltX.

Ele deve ser consultado antes de qualquer implementação que altere:

- cadastro;
- clientes;
- autenticação;
- perfil;
- temas;
- serviços;
- orçamentos;
- protocolos;
- Ordens de Serviço;
- agendamentos;
- chat;
- blog;
- comentários;
- hashtags;
- LGPD;
- notificações;
- WhatsApp;
- e-mail;
- dados profissionais;
- histórico;
- auditoria.

> Antes de alterar qualquer regra descrita aqui, consulte `AGENTS.md`, `ARQUITETURA.md` e os ADRs relacionados.

---

# 2. Convenção de identificação

As regras usam prefixos por domínio.

Exemplos:

```text
RN-AUTH
RN-CLI
RN-PERFIL
RN-TEMA
RN-SERV
RN-ORC
RN-PROT
RN-OS
RN-AG
RN-CHAT
RN-BLOG
RN-TAG
RN-MIDIA
RN-LGPD
RN-NEGOCIO
RN-UX
RN-SEG
```

---

# 3. Regras gerais

## RN-GERAL-001 — Idioma

Toda interface visível ao usuário final deve utilizar português do Brasil.

Isso inclui:

- botões;
- menus;
- títulos;
- mensagens;
- erros;
- validações;
- placeholders;
- notificações;
- toasts;
- modais;
- status;
- e-mails;
- textos de carregamento.

## RN-GERAL-002 — Dados históricos

Dados históricos relevantes não devem ser apagados fisicamente por padrão.

## RN-GERAL-003 — Fonte de verdade

Regras de negócio sensíveis devem ser validadas no backend.

## RN-GERAL-004 — Alteração documentada

Mudanças de comportamento devem atualizar este documento quando aplicável.

---

# 4. Clientes e contas

### Identidade de negócio e conta autenticável

`customer` é a identidade de relacionamento com a VoltX; `user` é a identidade autenticável. Um customer pode existir antes do user, com `user_id` inicialmente nulo. Orçamentos, agendamentos, OS, conversas, protocolos e endereços pertencem ao mesmo `customer_id`, inclusive após ativação. Pré-cadastros referenciam esse cliente. A separação não autoriza acesso sem autenticação nem altera RN-CLI-005. Modelagem em [DATABASE.md](DATABASE.md), seção 9.1.

## RN-CLI-001 — Conta individual

Cada cliente deve possuir uma conta individual quando concluir o cadastro.

## RN-CLI-002 — Isolamento de dados

Um cliente nunca pode visualizar dados privados de outro cliente.

## RN-CLI-003 — Foto de perfil

Todo cliente, inclusive administradores, pode enviar foto de perfil diretamente do dispositivo.

Não deve existir cadastro de foto de perfil por URL externa.

## RN-CLI-004 — Pré-cadastro administrativo

O administrador pode criar um cliente em estado de pré-cadastro antes de o cliente possuir conta ativa.

## RN-CLI-005 — Estados do cliente

Estados previstos:

```text
PRE_REGISTERED
INVITED
ACTIVE
SUSPENDED
DELETION_PENDING
ANONYMIZED
```

A interface deve exibir traduções em PT-BR.

## RN-CLI-006 — Código de ativação

Um cliente pré-cadastrado pode receber um código de ativação para concluir o cadastro.

## RN-CLI-007 — Código de uso único

O código de ativação deve:

- ser de uso único;
- possuir expiração;
- possuir tentativas limitadas;
- ser revogável;
- ser regenerável;
- não ser sequencial previsível.

## RN-CLI-008 — Vinculação de histórico

Ao concluir o cadastro, o acesso autenticado deve alcançar os registros já vinculados ao mesmo cliente. A ativação cria/vincula o user ao customer existente; não cria outro cliente nem migra os vínculos históricos para uma nova identidade.

Exemplos:

- agendamentos;
- protocolos;
- orçamentos;
- OS;
- conversas.

## RN-CLI-009 — Prevenção de duplicidade

Se já existir conta ativa compatível com os dados do cliente, o sistema não deve criar uma segunda conta automaticamente.

---

# 5. Perfil

## RN-PERFIL-001 — Dados editáveis

O cliente pode editar os próprios dados permitidos.

## RN-PERFIL-002 — Endereços múltiplos

O cliente pode possuir múltiplos endereços.

## RN-PERFIL-003 — Endereço principal

O cliente pode marcar um endereço como principal.

## RN-PERFIL-004 — CEP

Todo formulário que aceitar CEP deve tentar preencher automaticamente os campos de endereço.

## RN-PERFIL-005 — Fallback de CEP

Se a consulta automática falhar, o usuário deve poder preencher o endereço manualmente.

## RN-PERFIL-006 — CEP fora da área

CEP fora da área padrão de atendimento não é considerado inválido apenas por estar fora da região.

## RN-PERFIL-007 — Aviso de área

Quando o endereço estiver fora da área padrão, o sistema deve exibir aviso e oferecer contato via WhatsApp.

## RN-PERFIL-008 — Continuidade opcional

Mesmo fora da área padrão, o usuário poderá continuar uma solicitação quando a regra do fluxo permitir.

---

# 6. Identidade de gênero e aparência

## RN-TEMA-001 — Campo de identidade

O cadastro deve possuir campo obrigatório de identidade de gênero.

## RN-TEMA-002 — Opção de privacidade

A opção:

```text
Prefiro não informar
```

deve estar disponível.

## RN-TEMA-003 — Independência entre identidade e tema

O sistema nunca deve determinar automaticamente o tema visual com base na identidade de gênero.

## RN-TEMA-004 — Tema escolhido pelo usuário

O tema é uma preferência visual independente.

## RN-TEMA-005 — Temas disponíveis

Temas planejados:

- VoltX;
- Azul;
- Rosa;
- Violeta;
- Rainbow/Pride;
- outros temas opcionais.

## RN-TEMA-006 — Componentes tematizáveis

Podem variar conforme o tema:

- borda do avatar;
- cor do nome;
- links;
- hover;
- ícones;
- chat;
- comentários;
- barra de leitura;
- detalhes visuais.

## RN-TEMA-007 — Desativação

O usuário deve poder desativar personalizações temáticas.

## RN-TEMA-008 — Animações

O usuário deve poder escolher:

```text
Desativadas
Suaves
Completas
```

## RN-TEMA-009 — Acessibilidade

O sistema deve respeitar `prefers-reduced-motion`.

---

# 7. Dados profissionais da VoltX

## RN-NEGOCIO-001 — Fonte central

Dados profissionais devem vir de fonte central no banco.

## RN-NEGOCIO-002 — Dados mutáveis

Exemplos:

- nome;
- nome comercial;
- telefone;
- WhatsApp;
- e-mail;
- endereço;
- descrição;
- área de atendimento;
- foto;
- logo;
- dados acadêmicos;
- texto “Sobre mim”.

## RN-NEGOCIO-003 — Reflexo global

Ao alterar um dado profissional no painel, a mudança deve refletir em todas as áreas que utilizam aquela informação.

## RN-NEGOCIO-004 — WhatsApp dinâmico

Botões de WhatsApp nunca devem depender de número hardcoded quando o dado puder ser administrado pelo painel.

## RN-NEGOCIO-005 — Cartão acadêmico

A Home poderá exibir cartão acadêmico com dados cadastrados no painel.

## RN-NEGOCIO-006 — RU pública configurável

A exibição do Registro Universitário deve poder ser ligada ou desligada no painel.

---

# 8. Serviços

Estados canônicos do serviço: `DRAFT`, `ACTIVE`, `INACTIVE`, `ARCHIVED`. O ciclo completo não pode ser representado apenas por um booleano de atividade.

## RN-SERV-001 — Cadastro administrativo

Serviços podem ser cadastrados, editados, desativados, arquivados e excluídos logicamente pelo administrador.

## RN-SERV-002 — Origem dos dados

Serviços públicos devem vir do banco, não de conteúdo fixo no frontend.

## RN-SERV-003 — Página individual

Cada serviço pode possuir página própria por slug.

## RN-SERV-004 — Recursos do serviço

Um serviço pode possuir:

- nome;
- categoria;
- resumo;
- descrição;
- imagem;
- galeria;
- hashtags;
- SEO;
- área de atendimento;
- CTA de orçamento;
- CTA de agendamento.

---

# 9. Protocolos

## RN-PROT-001 — Protocolo automático

Solicitações relevantes devem gerar protocolo automaticamente.

## RN-PROT-002 — Formato

Formato planejado:

```text
VX-AAAA-NNNNNN
```

## RN-PROT-003 — Imutabilidade

Um protocolo nunca deve ser reutilizado.

## RN-PROT-004 — Persistência

Protocolos encerrados permanecem no histórico.

## RN-PROT-005 — Relações

Um protocolo pode se relacionar com:

- chat;
- orçamento;
- OS;
- agendamento;
- atendimento pós-serviço.

## RN-PROT-006 — Busca

O painel deve permitir pesquisa por número de protocolo.

---

# 10. Orçamentos

### Revisões comerciais

O rascunho (`DRAFT`) pode ser editado. Depois do envio, o conteúdo comercial da revisão enviada é imutável. Alterações comerciais posteriores geram nova revisão do mesmo número ORC; o aceite identifica uma revisão específica. Preservar itens, quantidades, valores, descontos quando existirem, total, observações, validade e conteúdo apresentado. Detalhes em [ORCAMENTOS.md](ORCAMENTOS.md), seções 18 e 22–23.

Aceite não cria OS automaticamente: a criação exige ação explícita no fluxo. Aceite anônimo irrestrito é proibido; eventual fluxo sem login exige definição segura e rastreável antes de ser habilitado.

## RN-ORC-001 — Solicitação autenticada

Cliente autenticado pode solicitar orçamento.

## RN-ORC-002 — Solicitação sem conta

Visitante pode solicitar orçamento sem conta quando informar WhatsApp obrigatório.

## RN-ORC-003 — Verificação de contato

Sempre que aplicável, o fluxo sem conta deve validar que o contato informado é realmente acessível ao usuário.

## RN-ORC-004 — Antispam

Solicitações sem conta devem possuir mecanismos contra abuso.

## RN-ORC-005 — Protocolo

Todo orçamento deve possuir protocolo relacionado.

## RN-ORC-006 — Número próprio

Formato:

```text
ORC-AAAA-NNNNNN
```

## RN-ORC-007 — Estados

Estados previstos:

```text
REQUESTED
UNDER_REVIEW
DRAFT
SENT
VIEWED
ACCEPTED
REJECTED
EXPIRED
CANCELLED
```

## RN-ORC-008 — Histórico

Mudanças de estado devem permanecer no histórico.

## RN-ORC-009 — Rascunho

O administrador pode salvar orçamento como rascunho.

## RN-ORC-010 — WhatsApp contextual

Ao contatar o cliente via WhatsApp a partir do orçamento, a mensagem pode incluir:

- protocolo;
- número do orçamento;
- serviço;
- identificação do atendimento.

---

# 11. Ordens de Serviço

Uma OS pode possuir múltiplos protocolos e múltiplos serviços, com relações associativas ou equivalentes. Não presumir protocolo/serviço principal. Preservar snapshots da descrição, serviços executados, endereço, orçamento/revisão aceita, valores relevantes e datas, conforme [PROTOCOLOS_OS.md](PROTOCOLOS_OS.md).

## RN-OS-001 — Criação

Uma OS representa um serviço que evoluiu para execução.

## RN-OS-002 — Formato

```text
OS-AAAA-NNNNNN
```

## RN-OS-003 — Relações

A OS pode se relacionar com:

- protocolo;
- orçamento;
- agendamento;
- mensagens;
- arquivos;
- histórico.

## RN-OS-004 — Busca

O painel deve permitir pesquisa por número da OS.

---

# 12. Agendamentos

O fluxo inicial é `REQUESTED → revisão administrativa quando aplicável → CONFIRMED`, sem confirmação automática presumida.

Autoria e condição histórica do cliente são informações distintas: registrar quem criou e, separadamente, o estado do cliente naquele momento. Ativação posterior não altera esses registros. Uma suspensão ativa de novos agendamentos prevalece sobre horários normais, sem apagá-los. Detalhes em [AGENDAMENTOS.md](AGENDAMENTOS.md) e [CONFIGURACOES_NEGOCIO.md](CONFIGURACOES_NEGOCIO.md).

## RN-AG-001 — Criação pelo cliente

Cliente autenticado pode solicitar agendamento.

## RN-AG-002 — Criação pelo administrador

O administrador pode criar agendamento diretamente para um cliente.

## RN-AG-003 — Autoria visível

Agendamentos criados pelo administrador devem registrar claramente essa origem.

## RN-AG-004 — Pré-cadastro permitido

O administrador pode criar agendamento para cliente pré-cadastrado.

## RN-AG-005 — Visibilidade após ativação

Quando o cliente ativar a conta, o agendamento criado anteriormente deve aparecer automaticamente.

## RN-AG-006 — Número próprio

Formato:

```text
AG-AAAA-NNNNNN
```

## RN-AG-007 — Estados

Estados previstos:

```text
REQUESTED
UNDER_REVIEW
CONFIRMED
RESCHEDULE_REQUESTED
IN_TRANSIT
IN_SERVICE
COMPLETED
CANCELLED_BY_CUSTOMER
CANCELLED_BY_VOLTX
NOT_COMPLETED
```

## RN-AG-008 — Cancelamento lógico

Cancelar agendamento não remove o registro.

## RN-AG-009 — Dados de cancelamento

Registrar:

- data;
- responsável;
- motivo.

## RN-AG-010 — Conflito de horário

O sistema não pode permitir dois atendimentos incompatíveis no mesmo período.

## RN-AG-011 — Duração

A agenda deve considerar duração prevista do atendimento.

## RN-AG-012 — Deslocamento

A agenda deve poder considerar intervalo de deslocamento.

## RN-AG-013 — Bloqueio manual

O administrador pode bloquear horários.

## RN-AG-014 — Suspensão

O administrador pode suspender novos atendimentos.

## RN-AG-015 — WhatsApp durante suspensão

Mesmo com agendamentos suspensos, o contato via WhatsApp pode continuar disponível.

## RN-AG-016 — Histórico

Agendamentos concluídos, cancelados ou não realizados permanecem no histórico.

---

# 13. Chat

## RN-CHAT-001 — Acesso autenticado

Somente clientes autenticados podem usar o chat interno.

## RN-CHAT-002 — Visitante

Visitante deve receber CTA para WhatsApp.

## RN-CHAT-003 — Persistência

Mensagens não devem desaparecer ao fechar navegador ou encerrar atendimento.

## RN-CHAT-004 — Protocolo de atendimento

Cada atendimento de chat deve estar associado a um protocolo.

## RN-CHAT-005 — Encerramento

O administrador pode encerrar um atendimento.

## RN-CHAT-006 — Encerrar não apaga

Encerrar atendimento não remove:

- mensagens;
- anexos;
- citações;
- histórico.

## RN-CHAT-007 — Novo contato

Se não houver protocolo apropriado aberto, nova mensagem após encerramento gera novo protocolo.

## RN-CHAT-008 — Separação visual

O chat deve mostrar separação visual entre atendimento encerrado e novo atendimento.

## RN-CHAT-009 — Citações

Mensagens podem citar mensagens anteriores.

## RN-CHAT-010 — Citação histórica

É permitido citar mensagem de protocolo anterior quando pertencente ao mesmo contexto autorizado.

## RN-CHAT-011 — Pesquisa global

O painel deve permitir pesquisa por:

- protocolo;
- OS;
- orçamento;
- agendamento;
- nome;
- telefone;
- e-mail;
- palavras nas mensagens.

## RN-CHAT-012 — Pesquisa local

Deve existir busca dentro de uma conversa.

## RN-CHAT-013 — Navegação para ocorrência

Resultado de busca por palavra deve abrir o chat na mensagem correspondente.

## RN-CHAT-014 — Prioridade

Conversas podem possuir prioridade:

```text
NORMAL
HIGH
URGENT
```

## RN-CHAT-015 — Ordenação

Urgentes aparecem antes de prioridade alta.

Prioridade alta aparece antes de normal.

Dentro do mesmo nível, atividade mais recente primeiro.

## RN-CHAT-016 — Fixar conversa

Fixar conversa é diferente de prioridade.

## RN-CHAT-017 — Não lidas

Filtro “Não lidas” considera mensagens recebidas e ainda não abertas pelo administrador.

## RN-CHAT-018 — Precisa de resposta

Filtro “Precisa de resposta” indica conversa em que a última mensagem relevante é do cliente e ainda não houve resposta administrativa.

## RN-CHAT-019 — Aguardando cliente

Filtro “Aguardando cliente” indica conversa em que a última resposta relevante foi da VoltX.

## RN-CHAT-020 — Filtro Hoje

“Hoje” considera conversas com atividade no dia atual.

## RN-CHAT-021 — Iniciadas hoje

“Iniciadas hoje” considera protocolos criados no dia atual.

## RN-CHAT-022 — Recentes

O sistema deve permitir filtros de recentes por janela de tempo.

## RN-CHAT-023 — Etiquetas

O administrador pode aplicar etiquetas às conversas.

## RN-CHAT-024 — Perfil via avatar

Foto e nome do cliente no chat administrativo devem ser clicáveis.

## RN-CHAT-025 — Perfil 360°

A partir do chat, o administrador deve poder acessar perfil, agendamentos, orçamentos, OS, protocolos, conversas e histórico do cliente.

## RN-CHAT-026 — Preservação de contexto

Ao retornar do perfil para o chat, a interface deve preservar o contexto sempre que possível.

---

# 14. Blog e CMS

## RN-BLOG-001 — Editor avançado

O editor deve suportar:

- visual;
- Markdown;
- HTML sanitizado.

## RN-BLOG-002 — Upload local

Imagens de postagem devem ser enviadas do dispositivo.

## RN-BLOG-003 — Formatação

O editor pode permitir:

- títulos;
- parágrafos;
- imagens;
- listas;
- destaques;
- cores controladas;
- tamanhos controlados;
- âncoras;
- links internos;
- blocos especiais.

## RN-BLOG-004 — HTML seguro

HTML arbitrário não deve ser executado sem sanitização.

## RN-BLOG-005 — Rascunho

Postagem pode ser salva como rascunho.

## RN-BLOG-006 — Retomar edição

Ao reabrir rascunho, o sistema deve permitir continuar do ponto onde parou.

## RN-BLOG-007 — Estado completo

O rascunho deve preservar:

- texto;
- imagens;
- cursor;
- bloco;
- rolagem;
- hashtags;
- capa;
- SEO;
- modo do editor.

## RN-BLOG-008 — Autosave

O sistema deve possuir autosave.

## RN-BLOG-009 — Histórico de versões

Rascunhos e publicações podem possuir histórico de versões.

## RN-BLOG-010 — Status

Estados planejados:

```text
DRAFT
SCHEDULED
PUBLISHED
SUSPENDED
ARCHIVED
```

## RN-BLOG-011 — Barra de leitura

Artigos devem possuir barra fina de progresso de leitura.

## RN-BLOG-012 — Progresso real

A barra deve considerar o conteúdo do artigo, não footer ou comentários.

---

# 15. Hashtags

A chave canônica da hashtag usa lowercase, sem acentos e sem `#`. `#Elétrica`, `#ELETRICA` e `eletrica` representam a mesma entidade. A forma visual opcional `display_name` não cria outra entidade.

## RN-TAG-001 — Hashtags estruturadas

Hashtags não devem ser apenas texto solto.

## RN-TAG-002 — Limite

Uma postagem pode possuir no máximo 8 hashtags, salvo alteração futura documentada.

## RN-TAG-003 — Slug

Hashtags devem possuir slug único.

## RN-TAG-004 — Duplicidade

A mesma hashtag não pode ser vinculada duas vezes à mesma postagem.

## RN-TAG-005 — Página própria

Clicar na hashtag leva à página agregadora.

Exemplo:

```text
/tag/dr
```

## RN-TAG-006 — Conteúdo público

Página de hashtag deve listar apenas conteúdo público elegível.

## RN-TAG-007 — Conteúdo oculto

Rascunhos, suspensos ou arquivados não aparecem publicamente.

---

# 16. Comentários e interações

## RN-COM-001 — Comentário autenticado

Somente usuário autenticado pode comentar.

## RN-COM-002 — Visitante

Visitante deve ser convidado a entrar ou criar conta.

## RN-COM-003 — Ações do autor

O usuário pode editar ou excluir o próprio comentário conforme regras futuras específicas.

## RN-COM-004 — Moderação

Administrador pode:

- responder;
- ocultar;
- excluir;
- moderar;
- bloquear quando aplicável.

## RN-COM-005 — Histórico administrativo

Ações de moderação relevantes devem gerar auditoria.

---

# 17. Mídias

## RN-MIDIA-001 — Upload local

Fotos de perfil e imagens editoriais devem ser enviadas do dispositivo.

## RN-MIDIA-002 — Sem URL externa

Não aceitar URL externa como origem principal para foto de perfil.

## RN-MIDIA-003 — Validação

Toda mídia deve passar por:

- tipo;
- tamanho;
- conteúdo;
- autorização;
- processamento.

## RN-MIDIA-004 — Persistência

Mídia importante deve ser armazenada de forma persistente.

## RN-MIDIA-005 — Rascunho

Mídias de rascunho devem permanecer disponíveis quando o usuário retomar a edição.

---

# 18. Validação e segurança

## RN-SEG-001 — Frontend não basta

Validação no frontend não substitui validação no backend.

## RN-SEG-002 — SQL Injection

Dados do usuário nunca devem ser concatenados diretamente em SQL.

## RN-SEG-003 — ORM/queries parametrizadas

Usar ORM ou query parametrizada.

## RN-SEG-004 — Senhas

Senhas não devem ser sanitizadas removendo caracteres especiais.

## RN-SEG-005 — Senha como dado opaco

Senha deve ser tratada como sequência de caracteres e nunca interpretada como código.

## RN-SEG-006 — Hash

Senha nunca deve ser armazenada em texto puro.

## RN-SEG-007 — HTML

HTML vindo de usuário deve ser sanitizado quando permitido.

## RN-SEG-008 — Upload

Uploads devem ser validados no backend.

## RN-SEG-009 — Rate limiting

Fluxos suscetíveis a abuso devem possuir limitação de taxa.

---

# 19. CPF, telefone, nome e endereço

## RN-DADOS-001 — CPF

CPF deve ser normalizado e validado.

## RN-DADOS-002 — Telefone

Telefone deve ser normalizado internamente.

## RN-DADOS-003 — Nome

Nome deve aceitar caracteres legítimos de nomes reais.

Exemplos:

```text
João
D'Ávila
Ana-Maria
```

## RN-DADOS-004 — Endereço

Endereço pode conter pontuação legítima.

## RN-DADOS-005 — Sanitização contextual

Sanitização deve ser específica para o tipo de dado, não uma remoção genérica de caracteres.

---

# 20. LGPD e privacidade

Aceites de documentos legais versionados ficam em `legal_acceptances`; escolhas opcionais/revogáveis ficam em `consents`, conforme [CONSENTIMENTOS.md](CONSENTIMENTOS.md). Aceite legal não habilita marketing. E-mail, WhatsApp, categorias opcionais de cookies e autorização de depoimento permanecem separados; booleans são apenas projeções do histórico auditável. Consentimentos de visitante podem existir sem user e não são associados automaticamente a uma conta futura.

## RN-LGPD-001 — Área de privacidade

Perfil deve possuir área de privacidade e dados.

## RN-LGPD-002 — Direitos

O usuário deve poder solicitar, conforme regras aplicáveis:

- acesso;
- correção;
- exportação;
- revogação de consentimentos;
- exclusão.

## RN-LGPD-003 — Exclusão de conta

Deve existir opção de apagar/excluir conta.

## RN-LGPD-004 — Exclusão não cega

Nem todo dado será necessariamente apagado imediatamente se houver obrigação de retenção ou justificativa legal.

## RN-LGPD-005 — Auditoria

Solicitação de exclusão deve gerar registro de auditoria.

## RN-LGPD-006 — Consentimento de marketing

Marketing não deve ser habilitado obrigatoriamente.

## RN-LGPD-007 — Aceite obrigatório

Termos de Uso e Política de Privacidade devem ser aceitos no cadastro.

---

# 21. Notificações

Ao abrir/clicar uma notificação individual, marcá-la como lida. Manter também as ações explícitas de leitura individual e de todas, quando adequadas à interface. `read_at` é a fonte do estado de leitura.

## RN-NOTIF-001 — Eventos

Eventos relevantes podem gerar notificações.

## RN-NOTIF-002 — Exemplos

- orçamento enviado;
- agendamento confirmado;
- mensagem recebida;
- reagendamento;
- atendimento concluído.

## RN-NOTIF-003 — Histórico

Notificações podem permanecer no histórico conforme a estratégia definida.

---

# 22. WhatsApp

## RN-WPP-001 — CTA público

Visitantes devem poder contatar a VoltX pelo botão de WhatsApp.

## RN-WPP-002 — Número dinâmico

O número deve vir da configuração do negócio.

## RN-WPP-003 — Contexto

Contato iniciado a partir de orçamento, OS ou agendamento pode pré-preencher mensagem com contexto.

## RN-WPP-004 — Edição

Mensagem deve poder ser editada antes do envio quando aplicável.

---

# 23. E-mail

## RN-EMAIL-001 — Consentimento

Campanhas promocionais devem respeitar consentimento.

## RN-EMAIL-002 — Preferência

Usuário deve poder revogar preferência de marketing.

## RN-EMAIL-003 — Histórico

Envios relevantes podem ser registrados no histórico de comunicação.

---

# 24. Busca administrativa

## RN-BUSCA-001 — Busca global

O painel deve permitir busca por:

- protocolo;
- OS;
- orçamento;
- agendamento;
- nome;
- telefone;
- CPF;
- e-mail.

## RN-BUSCA-002 — Privacidade

Busca administrativa não é pública.

---

# 25. Auditoria

## RN-AUD-001 — Ações sensíveis

Ações administrativas relevantes devem gerar auditoria.

## RN-AUD-002 — Exemplos

- cliente criado;
- agendamento criado;
- orçamento alterado;
- serviço editado;
- post suspenso;
- código de ativação gerado.

## RN-AUD-003 — Dados mínimos

Quando aplicável:

- ator;
- ação;
- recurso;
- identificador;
- data;
- origem;
- valor anterior;
- valor novo.

---

# 26. Soft delete

## RN-DEL-001 — Exclusão lógica

Recursos históricos devem preferir exclusão lógica.

## RN-DEL-002 — Histórico

Cancelamento e encerramento não equivalem a DELETE físico.

---

# 27. Sitemap e robots

## RN-SEO-001 — Sitemap público

Sitemap deve conter somente conteúdo público elegível.

## RN-SEO-002 — Áreas privadas

Não incluir:

- painel;
- perfil privado;
- chat;
- agendamentos privados;
- orçamentos privados.

## RN-SEO-003 — Sitemap dinâmico

Postagens e serviços publicados devem entrar no sitemap automaticamente.

## RN-SEO-004 — robots não é segurança

`robots.txt` não substitui autenticação nem autorização.

---

# 28. Git, tags e versões

O CHANGELOG deve ser preparado na branch da entrega antes da validação final e dos commits de fechamento. Depois de merge e sincronização final, apenas conferir seu conteúdo. Nova edição exige novo commit, validação e sincronização antes da tag. Fluxo canônico em [GIT_WORKFLOW.md](GIT_WORKFLOW.md), seção 38.

## RN-GIT-001 — Branch por funcionalidade

Nova funcionalidade deve ser desenvolvida em branch própria.

## RN-GIT-002 — Validação antes do merge

Antes de merge:

- testes;
- documentação;
- validação visual quando aplicável.

## RN-GIT-003 — Gitea

Sincronização com Gitea faz parte do fluxo oficial.

## RN-GIT-004 — Três tentativas

Se o envio ao Gitea falhar por motivo transitório, realizar no máximo três tentativas totais. Não repetir cegamente erros estruturais de autenticação, permissão, remote incorreto, non-fast-forward ou histórico divergente. Consultar [GIT_WORKFLOW.md](GIT_WORKFLOW.md), seções 24, 25 e 89.

## RN-GIT-005 — Falha definitiva

Após a terceira falha transitória, interromper o fechamento da versão e não declarar sincronização ou Release concluída.

## RN-GIT-006 — Tag

Tag representa versão validada, não qualquer commit.

## RN-GIT-007 — Release

Versão oficial deve possuir GitHub Release.

---

# 29. Regra de conflito

Antes da implementação de cada módulo com estados, documentar uma **MATRIZ DE TRANSIÇÕES**: estado atual → ação → próximo estado → ator permitido. Não inventar transições ou novos estados para completar a matriz. Quando faltar regra suficiente, registrar **DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO** no documento local. Os conjuntos já definidos por regras centrais e ADRs permanecem canônicos.

Se uma implementação existente entrar em conflito com este documento:

1. não corrigir silenciosamente;
2. identificar a divergência;
3. consultar arquitetura e ADRs;
4. decidir qual fonte deve prevalecer;
5. atualizar documentação e código de forma coerente.

---

# 30. Regra final

> Não inventar comportamento quando já existir regra documentada.
>
> Se uma regra nova for necessária, ela deve ser registrada antes ou junto da implementação.
