# UX WRITING — VoltX

## 1. Finalidade

Este documento define o padrão de escrita da interface da VoltX.

Ele deve ser seguido em:

- site público;
- área do cliente;
- painel administrativo;
- chat;
- formulários;
- modais;
- toasts;
- notificações;
- mensagens de erro;
- mensagens de sucesso;
- e-mails;
- textos de ajuda;
- estados vazios;
- telas de segurança;
- fluxos de privacidade.

> Antes de escrever textos novos, leia `AGENTS.md`, `DESIGN.md`, `REGRAS_NEGOCIO.md` e este documento.

---

## 2. Idioma obrigatório

Toda interface visível ao usuário deverá estar em:

```text
Português do Brasil
```

Nunca deixar textos como:

```text
Save
Cancel
Loading...
Delete
Confirm
Invalid password
Something went wrong
Try again
```

Usar:

```text
Salvar
Cancelar
Carregando...
Excluir
Confirmar
Senha inválida
Não foi possível concluir a operação
Tentar novamente
```

---

## 3. Tom de voz

A VoltX deve se comunicar de forma:

- clara;
- direta;
- profissional;
- humana;
- simples;
- respeitosa;
- técnica quando necessário.

Evitar:

- juridiquês;
- frases frias;
- linguagem robótica;
- exagero promocional;
- mensagens confusas;
- culpa sobre o usuário.

---

## 4. Regra principal

Sempre responder à pergunta:

```text
O que aconteceu?
O que o usuário pode fazer agora?
```

---

## 5. Botões

Botões devem começar com verbo sempre que possível.

Preferir:

```text
Salvar alterações
Criar conta
Entrar
Enviar orçamento
Confirmar agendamento
Cancelar atendimento
Falar pelo WhatsApp
Excluir conta
Continuar
Voltar
```

Evitar:

```text
OK
Enviar
Próximo
Sim
Não
```

quando o contexto puder ser mais específico.

---

## 6. Botão primário

Deve representar a ação principal da tela.

Exemplos:

```text
Salvar alterações
Solicitar orçamento
Confirmar agendamento
Publicar artigo
Enviar mensagem
```

---

## 7. Botão secundário

Usar para ação alternativa.

Exemplos:

```text
Cancelar
Voltar
Salvar como rascunho
Continuar depois
```

---

## 8. Ações destrutivas

Botões destrutivos devem ser explícitos.

Preferir:

```text
Excluir conta
Cancelar agendamento
Remover comentário
Encerrar atendimento
```

Evitar:

```text
Confirmar
Continuar
OK
```

---

## 9. Confirmação destrutiva

Título:

```text
Excluir sua conta?
```

Texto:

```text
Essa ação iniciará o processo de exclusão da sua conta. Alguns registros poderão ser mantidos quando houver necessidade de retenção.
```

Botões:

```text
Voltar
Solicitar exclusão
```

---

## 10. Campos de formulário

Todo campo deve possuir label.

Exemplo:

```text
Nome completo
E-mail
WhatsApp
CEP
Número
Complemento
```

Não usar placeholder como substituto de label.

---

## 11. Placeholders

Devem servir apenas como exemplo.

Exemplo:

```text
Nome completo
[ João da Silva ]
```

```text
WhatsApp
[ (61) 99999-9999 ]
```

---

## 12. Textos de ajuda

Devem explicar algo útil.

Exemplo:

```text
Usaremos este número para entrar em contato sobre seu atendimento.
```

Evitar:

```text
Digite seu telefone aqui.
```

quando isso já estiver evidente.

---

## 13. Campos obrigatórios

Não depender apenas de asterisco.

Quando necessário:

```text
Obrigatório
```

ou ajuda contextual.

---

## 14. Erros de campo

Erros devem explicar o problema.

Exemplo:

```text
Informe um e-mail válido.
```

```text
Este CPF não é válido.
```

```text
A senha deve ter pelo menos X caracteres.
```

Evitar:

```text
Valor inválido.
```

quando puder ser mais específico.

---

## 15. Erro geral

Preferir:

```text
Não foi possível concluir a operação.
Revise os dados e tente novamente.
```

Evitar:

```text
Erro 400
Bad Request
```

---

## 16. Erro inesperado

Mensagem:

```text
Não conseguimos concluir essa operação agora.
Tente novamente em alguns instantes.
```

Botão:

```text
Tentar novamente
```

---

## 17. Erro técnico

Stack trace nunca deve aparecer para o usuário final.

---

## 18. Carregamento

Usar:

```text
Carregando...
Salvando...
Enviando...
Processando...
Verificando...
```

Não usar:

```text
Loading...
Saving...
Processing...
```

---

## 19. Sucesso

Mensagens devem confirmar a ação.

Exemplos:

```text
Alterações salvas.
Agendamento solicitado com sucesso.
Orçamento enviado ao cliente.
Mensagem enviada.
Conta criada com sucesso.
```

---

## 20. Toasts

Toasts devem ser curtos.

Exemplos:

```text
Alterações salvas.
Mensagem enviada.
Não foi possível salvar.
```

Evitar parágrafos longos.

---

## 21. Estados vazios

Nunca deixar tela vazia sem orientação.

Exemplo:

```text
Você ainda não possui agendamentos.

[ Solicitar atendimento ]
```

---

## 22. Página 404

Título:

```text
Página não encontrada
```

Texto:

```text
O endereço acessado não existe ou foi alterado.
```

Botão:

```text
Voltar para a Home
```

---

## 23. Página 500

Título:

```text
Não conseguimos carregar esta página
```

Texto:

```text
Ocorreu um problema temporário. Tente novamente em alguns instantes.
```

Botão:

```text
Tentar novamente
```

---

## 24. Autenticação

Login:

```text
Entrar
```

Campos:

```text
E-mail
Senha
```

Links:

```text
Esqueci minha senha
Criar conta
```

---

## 25. Login inválido

Preferir:

```text
E-mail ou senha inválidos.
```

Não revelar desnecessariamente qual campo está errado.

---

## 26. Recuperação de senha

Título:

```text
Recuperar senha
```

Texto:

```text
Informe seu e-mail. Se houver uma conta cadastrada, enviaremos as instruções.
```

---

## 27. Cadastro

Etapas:

```text
Conta
Perfil
Aparência
Concluir
```

---

## 28. Foto de perfil

Botão:

```text
Enviar foto
```

Ações:

```text
Trocar foto
Remover foto
Recortar
Girar
```

---

## 29. Identidade de gênero

Label:

```text
Identidade de gênero
```

Opções:

```text
Homem
Mulher
Não binário
Outro
Prefiro não informar
```

O tema visual não deve ser sugerido com base nessa escolha.

---

## 30. Temas

Título:

```text
Aparência
```

Opções:

```text
VoltX
Azul
Rosa
Violeta
Rainbow
```

Controles:

```text
Modo
Animações
Personalizações
```

---

## 31. Animações

Opções:

```text
Desativadas
Suaves
Completas
```

---

## 32. Saudação

Horários:

```text
Bom dia
Boa tarde
Boa noite
```

Exemplo:

```text
Boa noite, João
22:57
```

---

## 33. Serviços

CTA:

```text
Ver serviço
Solicitar orçamento
Agendar atendimento
Falar pelo WhatsApp
```

---

## 34. Orçamentos

Estados visíveis:

```text
Solicitado
Em análise
Rascunho
Enviado
Visualizado
Aceito
Recusado
Expirado
Cancelado
```

---

## 35. Agendamentos

Estados visíveis:

```text
Solicitado
Em análise
Confirmado
Reagendamento solicitado
Em deslocamento
Em atendimento
Concluído
Cancelado pelo cliente
Cancelado pela VoltX
Não realizado
```

---

## 36. Protocolos

Exemplo:

```text
Protocolo VX-2026-000184
```

Ações:

```text
Ver atendimento
Ver histórico
Copiar protocolo
```

---

## 37. Ordens de Serviço

Usar:

```text
Ordem de Serviço
```

Abreviação:

```text
OS
```

Exemplo:

```text
OS-2026-000041
```

---

## 38. Chat

Campo:

```text
Digite sua mensagem...
```

Botões:

```text
Enviar
Anexar arquivo
Enviar foto
```

---

## 39. Visitante no chat

Mensagem:

```text
Entre na sua conta para usar o chat da VoltX.
```

Ações:

```text
Entrar
Falar pelo WhatsApp
```

---

## 40. Status no chat

```text
Online
Ausente
Ocupado
Offline
```

Último acesso:

```text
Visto por último hoje às 22:15
```

---

## 41. Atendimento encerrado

Separador:

```text
Atendimento encerrado
Protocolo VX-2026-000204
```

Novo atendimento:

```text
Novo atendimento
Protocolo VX-2026-000219
```

---

## 42. Prioridades

```text
Normal
Prioridade alta
Urgente
```

---

## 43. Filtros do chat

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

## 44. Etiquetas

Exemplos:

```text
Aguardando cliente
Orçamento enviado
Retornar amanhã
Pagamento pendente
Pós-serviço
```

---

## 45. Busca administrativa

Placeholder:

```text
Buscar por protocolo, OS, cliente, telefone...
```

---

## 46. Agenda suspensa

Título:

```text
Agendamentos temporariamente suspensos
```

Texto:

```text
No momento não há novos horários disponíveis, mas você ainda pode falar conosco pelo WhatsApp.
```

Botão:

```text
Falar pelo WhatsApp
```

---

## 47. CEP

Durante consulta:

```text
Consultando CEP...
```

Falha:

```text
Não foi possível consultar o CEP agora.
```

Botão:

```text
Preencher manualmente
```

---

## 48. Endereço fora da área

Mensagem:

```text
Este endereço está fora da nossa área habitual de atendimento.
```

Complemento:

```text
Você ainda pode continuar a solicitação. A disponibilidade e o deslocamento serão avaliados.
```

Botões:

```text
Continuar solicitação
Falar pelo WhatsApp
```

---

## 49. Blog

Ações:

```text
Ler artigo
Curtir
Comentar
Compartilhar
Copiar link
```

---

## 50. Editor de conteúdo

Ações:

```text
Salvar rascunho
Publicar
Agendar publicação
Suspender publicação
Arquivar
Visualizar
```

---

## 51. Autosave

Estados:

```text
Salvando...
Salvo às 22:57
```

---

## 52. Rascunho existente

Mensagem:

```text
Você possui um rascunho não finalizado.
```

Ações:

```text
Continuar de onde parei
Abrir do início
```

---

## 53. Hashtags

Título:

```text
Assuntos em alta
```

Exemplos:

```text
#eletrica
#seguranca
#dr
#chuveiro
```

---

## 54. Comentários

Ações:

```text
Curtir
Responder
Editar
Excluir
Denunciar
```

---

## 55. Exclusão de comentário

Confirmação:

```text
Excluir este comentário?
```

Botões:

```text
Cancelar
Excluir comentário
```

---

## 56. Privacidade

Seção:

```text
Privacidade e dados
```

Ações:

```text
Ver meus dados
Baixar meus dados
Gerenciar consentimentos
Solicitar exclusão da conta
```

---

## 57. Marketing

Checkbox:

```text
Quero receber novidades da VoltX por e-mail.
```

Outro:

```text
Quero receber novidades da VoltX pelo WhatsApp.
```

Essas opções devem permanecer separadas.

---

## 58. Exportação de dados

Mensagem inicial:

```text
Vamos preparar uma cópia dos seus dados.
```

Quando pronta:

```text
Sua exportação está pronta para download.
```

---

## 59. Exclusão da conta

Título:

```text
Solicitar exclusão da conta
```

Texto:

```text
Sua solicitação será analisada conforme as regras de retenção e privacidade aplicáveis.
```

---

## 60. Sessões

Título:

```text
Sessões ativas
```

Ações:

```text
Encerrar sessão
Encerrar todas as outras sessões
```

---

## 61. Segurança

Título:

```text
Segurança da conta
```

Itens:

```text
Alterar senha
Autenticação em dois fatores
Sessões ativas
```

---

## 62. 2FA

Ativar:

```text
Ativar autenticação em dois fatores
```

Desativar:

```text
Desativar autenticação em dois fatores
```

---

## 63. Confirmação de senha

Mensagem:

```text
Por segurança, informe sua senha novamente.
```

---

## 64. Upload inválido

Exemplos:

```text
Este tipo de arquivo não é permitido.
O arquivo ultrapassa o tamanho máximo permitido.
Não foi possível processar este arquivo.
```

---

## 65. Rate limit

Mensagem:

```text
Você fez muitas tentativas em pouco tempo.
Aguarde alguns instantes e tente novamente.
```

---

## 66. Erro de permissão

Mensagem:

```text
Você não tem permissão para realizar esta ação.
```

---

## 67. Sessão expirada

Mensagem:

```text
Sua sessão expirou.
Entre novamente para continuar.
```

Botão:

```text
Entrar novamente
```

---

## 68. Confirmações

Evitar:

```text
Tem certeza?
```

sozinho.

Preferir:

```text
Cancelar este agendamento?
```

ou:

```text
Encerrar este atendimento?
```

---

## 69. Modal de cancelamento

Título:

```text
Cancelar agendamento?
```

Campo:

```text
Motivo do cancelamento
```

Botões:

```text
Voltar
Cancelar agendamento
```

---

## 70. Modal de encerramento de chat

Título:

```text
Encerrar atendimento?
```

Texto:

```text
O histórico será preservado e um novo contato poderá gerar outro protocolo.
```

Botões:

```text
Voltar
Encerrar atendimento
```

---

## 71. Admin — clientes

Ações:

```text
Ver perfil
Editar cliente
Criar agendamento
Criar orçamento
Criar OS
Abrir chat
Falar pelo WhatsApp
```

---

## 72. Admin — pré-cadastro

Estados visíveis:

```text
Pré-cadastrado
Convidado
Ativo
Suspenso
Exclusão solicitada
Anonimizado
```

---

## 73. Convite

Mensagem:

```text
Código de ativação gerado.
```

Ações:

```text
Copiar código
Enviar novamente
Gerar novo código
Revogar código
```

---

## 74. Notificações

Exemplos:

```text
Seu agendamento foi confirmado.
Seu orçamento foi atualizado.
Edson respondeu sua mensagem.
Seu atendimento foi concluído.
```

---

## 75. E-mails

Assunto deve ser claro.

Exemplos:

```text
VoltX — Confirmação de agendamento
VoltX — Redefinição de senha
VoltX — Orçamento atualizado
```

---

## 76. WhatsApp

Mensagens pré-preenchidas podem começar com:

```text
Olá, gostaria de falar sobre o protocolo VX-2026-000184.
```

Devem ser editáveis quando o fluxo permitir.

---

## 77. Formato de horário

Preferir:

```text
22:57
```

Formato de data:

```text
22/09/2026
```

Quando necessário, combinar:

```text
22/09/2026 às 22:57
```

---

## 78. Números

Milhar:

```text
1.250
```

Decimal:

```text
12,50
```

Moeda:

```text
R$ 120,00
```

---

## 79. Telefone

Exibição:

```text
(61) 99901-0739
```

Armazenamento interno pode usar E.164.

---

## 80. CEP

Exibição:

```text
72.860-000
```

---

## 81. CPF

Exibição quando completa for realmente necessária:

```text
123.456.789-00
```

Preferir mascaramento quando possível.

---

## 82. Capitalização

Preferir frase normal:

```text
Salvar alterações
```

Evitar:

```text
SALVAR ALTERAÇÕES
```

salvo pequenos rótulos visuais específicos.

---

## 83. Pontuação

Botões normalmente não levam ponto final.

Mensagens completas levam pontuação.

---

## 84. Emojis

Usar com moderação.

Podem aparecer em:

- conteúdo editorial;
- elementos informais;
- comunicação leve.

Evitar em:

- erros críticos;
- segurança;
- ações administrativas sensíveis.

---

## 85. Termos padronizados

Usar sempre:

```text
Cliente
Agendamento
Orçamento
Protocolo
Ordem de Serviço
Atendimento
WhatsApp
E-mail
Perfil
```

Não alternar desnecessariamente entre sinônimos.

---

## 86. Termos internos

Enums podem usar:

```text
CONFIRMED
CANCELLED
PENDING
```

Mas a interface mostra:

```text
Confirmado
Cancelado
Pendente
```

---

## 87. Não traduzir nomes próprios de tecnologia

Manter:

```text
WhatsApp
GitHub
Docker
PostgreSQL
Redis
MinIO
```

quando aparecerem em áreas técnicas.

---

## 88. Painel administrativo

Mesmo sendo técnico, o painel deve permanecer em PT-BR.

Exemplo:

```text
Clientes
Orçamentos
Agendamentos
Configurações
Auditoria
```

---

## 89. Logs visíveis

Se logs forem exibidos no painel, nomes técnicos podem existir, mas devem possuir contexto em PT-BR.

Exemplo:

```text
LOGIN_FAILED
Falha de login
```

---

## 90. Acessibilidade

Textos devem ser compreensíveis sem depender apenas de cor ou ícone.

Exemplo:

```text
Urgente
```

não apenas badge vermelho sem texto.

---

## 91. Alt text

Imagens informativas devem possuir texto alternativo útil.

Evitar:

```text
imagem1
foto
img
```

Preferir:

```text
Quadro elétrico com disjuntores identificados
```

---

## 92. Tooltips

Usar apenas quando houver algo realmente útil.

Tooltip não deve esconder informação obrigatória.

---

## 93. Mensagem de indisponibilidade

Preferir:

```text
Este recurso está temporariamente indisponível.
```

Não usar:

```text
Feature unavailable
```

---

## 94. Aviso de manutenção

```text
Estamos realizando uma manutenção rápida.
Alguns recursos podem ficar indisponíveis por alguns minutos.
```

---

## 95. Mensagem offline

```text
Você está sem conexão.
Algumas ações ficarão disponíveis quando a internet voltar.
```

---

## 96. Falha de integração externa

Exemplo:

```text
Não foi possível enviar a mensagem pelo WhatsApp agora.
Tente novamente em alguns instantes.
```

---

## 97. CEP externo indisponível

```text
Não conseguimos consultar o CEP agora.
Você pode preencher o endereço manualmente.
```

---

## 98. Não culpar o usuário

Evitar:

```text
Você digitou errado.
```

Preferir:

```text
Revise o número informado.
```

---

## 99. Não prometer o que o sistema não garante

Evitar:

```text
Seu atendimento será realizado amanhã.
```

se ainda depende de confirmação.

Preferir:

```text
Sua solicitação de atendimento foi enviada.
```

---

## 100. Não usar linguagem vaga

Evitar:

```text
Algo deu errado.
```

quando houver informação útil disponível.

---

## 101. Textos dinâmicos

Dados como:

- nome;
- telefone;
- horário;
- protocolo;
- número de OS;

devem vir da fonte correta e nunca ser inventados no texto.

---

## 102. Traduções centralizadas

Estrutura planejada:

```text
locales/
└── pt-BR/
    ├── common.json
    ├── auth.json
    ├── appointments.json
    ├── quotes.json
    ├── chat.json
    └── errors.json
```

---

## 103. Bibliotecas externas

Se componente externo vier em inglês, sua interface deverá ser traduzida antes de ser exposta ao usuário.

---

## 104. Novos textos

Antes de adicionar texto novo:

1. verificar se já existe chave equivalente;
2. reutilizar termo padronizado;
3. manter PT-BR;
4. revisar clareza;
5. testar no contexto visual.

---

## 105. Regra final

> A VoltX deve parecer escrita por uma única equipe, com uma única voz.
>
> Todo texto deve ajudar o usuário a entender o que está acontecendo e qual é o próximo passo.
