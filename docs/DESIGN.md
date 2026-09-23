# DESIGN SYSTEM — VoltX

## 1. Finalidade

Este documento define a identidade visual oficial, os componentes, os padrões de interação e as regras de experiência da plataforma VoltX.

Ele deve ser consultado antes de qualquer alteração que envolva:

- layout;
- cores;
- tipografia;
- componentes;
- cards;
- formulários;
- botões;
- navegação;
- chat;
- comentários;
- temas;
- responsividade;
- acessibilidade;
- animações;
- estados visuais;
- área do cliente;
- painel administrativo;
- blog;
- serviços;
- páginas institucionais.

> Antes de alterar este documento, consulte `AGENTS.md`, `ARQUITETURA.md` e `REGRAS_NEGOCIO.md`.

---

# 2. Conceito visual

A VoltX deve transmitir:

- profissionalismo;
- tecnologia;
- elétrica;
- confiança;
- organização;
- energia;
- clareza;
- modernidade.

A linguagem visual principal combina:

```text
grafite
azul
amarelo elétrico
tons neutros
```

O visual deve ser técnico sem parecer frio, industrial demais ou genérico.

---

# 3. Identidade principal

Marca:

```text
VOLTX
```

Conceito visual:

```text
⚡ energia
+
tecnologia
+
serviços elétricos
+
atendimento
```

A identidade institucional deverá funcionar tanto em modo escuro quanto claro.

---

# 4. Paleta base

## 4.1. Tema escuro padrão

```text
Fundo base:          #020617
Surface:             #0f172a
Card:                #1e293b
Card secundário:     #334155
Texto principal:     #f1f5f9
Texto secundário:    #94a3b8
Borda:               #334155
Amarelo VoltX:       #f59e0b
Azul VoltX:          #3b82f6
Azul escuro:         #1d4ed8
```

## 4.2. Tema claro

```text
Fundo base:          #f1f5f9
Surface:             #ffffff
Card:                #ffffff
Texto principal:     #1e293b
Texto secundário:    #64748b
Borda:               #e2e8f0
Amarelo VoltX:       #f59e0b
Azul VoltX:          #3b82f6
```

---

# 5. Cores semânticas

Cores de estado não devem depender do tema do usuário.

```text
Sucesso:      verde
Aviso:        âmbar
Erro:         vermelho
Informação:   azul
Neutro:       cinza/slate
```

Essas cores representam significado funcional.

Exemplos:

```text
Confirmado → verde
Pendente → âmbar
Cancelado → vermelho
Informativo → azul
```

Temas personalizados não devem alterar o significado dessas cores.

---

# 6. Tipografia

Fonte principal:

```text
Inter
```

Fontes alternativas permitidas para componentes pessoais:

```text
Manrope
Outfit
Poppins
```

Uso:

```text
H1:  text-3xl / extrabold
H2:  text-2xl / bold
H3:  text-xl / bold
H4:  text-base / semibold
Body: text-sm / normal
Meta: text-xs / normal
```

Textos longos devem priorizar legibilidade.

---

# 7. Cabeçalho principal

O header deverá ser fixo no topo e responsivo.

Desktop:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ ⚡ VOLTX   [foto] Boa tarde, João • 15:54   🔍 Buscar   Serviços Blog Sobre │
│                                                     Contato 🔔 Perfil        │
└──────────────────────────────────────────────────────────────────────────────┘
```

Elementos:

- logo VoltX;
- foto do usuário autenticado;
- nome do usuário;
- saudação dinâmica;
- hora atual;
- busca;
- menu;
- notificações;
- acesso ao perfil.

Visitante:

```text
⚡ VOLTX   Buscar   Serviços Blog Sobre Contato   Entrar / Criar conta
```

Mobile:

```text
☰   ⚡ VOLTX                🔔  [foto]
```

---

# 8. Saudação dinâmica

A saudação deverá variar conforme horário local.

```text
05:00–11:59 → Bom dia
12:00–17:59 → Boa tarde
18:00–04:59 → Boa noite
```

Exemplo:

```text
Boa tarde, João
15:54
```

No mobile, a versão completa pode aparecer no menu ou perfil.

---

# 9. Home — grid principal

Desktop:

```text
12 colunas
```

Distribuição:

```text
esquerda: 3
centro:   6
direita:  3
```

Estrutura:

```text
┌──────────────────────┬──────────────────────────────┬──────────────────────┐
│ Perfil / Agenda      │ Conteúdo principal           │ Serviços             │
│                      │                              │                      │
│ Histórico            │ Post em destaque             │ Orçamento            │
│                      │                              │                      │
│ Atalhos              │ Feed                         │ Hashtags             │
│                      │                              │                      │
│ Status atendimento   │ Conteúdo promovido           │ Mais lidas           │
└──────────────────────┴──────────────────────────────┴──────────────────────┘
```

Mobile:

```text
1 coluna
```

Ordem sugerida:

```text
Header
Postagem em destaque
Serviços rápidos
Agendamento
Últimas publicações
Assuntos em alta
Mais lidas
Sobre mim
Footer
```

---

# 10. Cards

Padrão:

```text
border-radius: 16px a 20px
borda fina
sombra suave
surface consistente
```

Estados:

```text
normal
hover
focus
active
disabled
loading
error
success
```

Hover:

```text
leve elevação
borda de destaque
transição curta
```

Evitar exagero.

---

# 11. Card de perfil

Cliente autenticado:

```text
┌─────────────────────────────┐
│ [foto] João Silva      ●    │
│ Cliente VoltX               │
│                             │
│ Serviços realizados   4     │
│ Em andamento          1     │
│                             │
│ [ Meu perfil ]              │
└─────────────────────────────┘
```

Avatar:

- circular;
- upload local;
- borda tematizável;
- indicador de status;
- clickável quando aplicável.

---

# 12. Card acadêmico

Na seção “Sobre mim”, a Home poderá exibir cartão inspirado em identificação universitária.

Estrutura:

```text
┌─────────────────────────────────────┐
│          FORMAÇÃO ACADÊMICA         │
│ ─────────────────────────────────── │
│                                     │
│              [ FOTO ]               │
│                                     │
│ Nome                                │
│ Edson                               │
│                                     │
│ Curso                               │
│ Engenharia Elétrica                 │
│                                     │
│ Instituição                         │
│ UNINTER                             │
│                                     │
│ Registro Universitário              │
│ RU 4696655                          │
│                                     │
│ Situação                            │
│ Cursando                            │
│                                     │
│ Previsão de conclusão               │
│ 2029                                │
│                                     │
│ ⚡ VOLTX • PERFIL ACADÊMICO         │
└─────────────────────────────────────┘
```

Regras:

- interface em PT-BR;
- dados vêm do banco;
- não hardcoded;
- RU com controle de exibição pública;
- foto enviada do dispositivo;
- componente reutilizável.

Nome sugerido:

```text
AcademicProfileCard
```

---

# 13. Seção “Sobre mim”

Desktop:

```text
┌────────────────────────┐   Texto profissional
│ cartão acadêmico       │   trajetória
│                        │   experiência
│                        │   elétrica
│                        │   eletrônica
└────────────────────────┘   [ Conheça minha trajetória ]
```

Mobile:

```text
cartão
↓
texto
↓
CTA
```

---

# 14. Serviços

Cards de serviço:

```text
┌──────────────────────────┐
│ imagem                   │
│                          │
│ Instalações elétricas    │
│ descrição curta          │
│                          │
│ #residencial #eletrica   │
│                          │
│ [ Ver serviço ]          │
└──────────────────────────┘
```

Estados:

- ativo;
- destacado;
- indisponível;
- arquivado não aparece publicamente.

---

# 15. Página individual de serviço

Estrutura:

```text
categoria
título
resumo
imagem
CTA orçamento
CTA agendamento
CTA WhatsApp
descrição
itens verificados
como funciona
galeria
hashtags
conteúdos relacionados
```

---

# 16. Postagem em destaque

Estrutura:

```text
imagem
categoria
data
tempo de leitura
comentários
curtidas
título
resumo
autor
hashtags
CTA
```

O conteúdo deve manter hierarquia visual clara.

---

# 17. Feed de postagens

Card horizontal no desktop:

```text
[imagem]  título
          categoria
          resumo
          hashtags
          curtidas / comentários
```

Mobile:

```text
imagem
título
resumo
meta
```

---

# 18. Barra de progresso de leitura

Componente:

```text
ReadingProgressBar
```

Comportamento:

- fixa logo abaixo do header;
- fina;
- animada suavemente;
- acompanha somente o conteúdo do artigo;
- ignora footer;
- ignora comentários;
- ignora blocos relacionados.

A cor pode seguir o tema do usuário.

---

# 19. Editor de conteúdo — visual

Modos:

```text
Visual
Markdown
HTML
```

Toolbar:

```text
B
I
U
H1
H2
H3
Cor
Tamanho
Lista
Citação
Código
Link
Âncora
Imagem
Galeria
Bloco VoltX
```

---

# 20. Blocos especiais do editor

Componentes permitidos:

```text
⚠ Atenção
💡 Dica VoltX
✅ Recomendação
📋 Checklist
🔧 Ferramentas
📞 CTA de atendimento
```

Devem ter estilos consistentes.

---

# 21. Imagens no editor

Opções:

```text
Pequena
Média
Grande
Largura total
```

Alinhamento:

```text
Esquerda
Centro
Direita
```

Desktop pode permitir texto ao lado.

Mobile empilha imagem e texto.

Campos:

- legenda;
- texto alternativo;
- alinhamento;
- tamanho.

---

# 22. Rascunho

O editor deve mostrar:

```text
Salvando...
Salvo às 15:54
```

Ao retornar:

```text
Você possui um rascunho não finalizado.

[ Continuar de onde parei ]
[ Abrir do início ]
```

A interface deve restaurar:

- conteúdo;
- imagens;
- cursor;
- bloco;
- rolagem;
- modo;
- hashtags;
- capa;
- SEO.

---

# 23. Hashtags

Visual:

```text
#eletrica
#seguranca
#dr
#chuveiro
```

Estados:

```text
normal
hover
selecionada
```

Ao clicar:

```text
/tag/{slug}
```

Seção lateral:

```text
ASSUNTOS EM ALTA
```

---

# 24. Comentários

Estrutura:

```text
[avatar] Nome
comentário

Curtir • Responder
```

Resposta:

```text
    [avatar] VoltX
    resposta
```

Temas podem alterar:

- barra lateral;
- borda;
- avatar;
- detalhes.

Nunca prejudicar legibilidade.

---

# 25. Chat — cliente

Janela:

```text
┌────────────────────────────┐
│ [foto] Edson • VoltX    × │
│ ● Online                   │
├────────────────────────────┤
│ mensagens                  │
│                            │
├────────────────────────────┤
│ 📎 📷 Mensagem...       ➤ │
└────────────────────────────┘
```

Cliente não autenticado:

```text
Entre para usar o chat VoltX.

[ Entrar ]
[ WhatsApp ]
```

---

# 26. Chat — painel administrativo

Desktop:

```text
┌───────────────────────┬───────────────────────────────┬───────────────────┐
│ Busca / Lista         │ Conversa                      │ Contexto          │
│                       │                               │                   │
│ filtros               │ mensagens                    │ cliente           │
│ chats                 │                               │ protocolo         │
│ prioridades           │                               │ OS                │
│ não lidas             │                               │ orçamento         │
└───────────────────────┴───────────────────────────────┴───────────────────┘
```

---

# 27. Lista de chats

Cada item pode mostrar:

```text
foto
nome
hora
protocolo
prioridade
última mensagem
OS
contador não lido
```

Exemplo:

```text
[foto] João Silva        15:54
VX-2026-000219
PRIORIDADE ALTA
"O quadro voltou a desarmar..."
OS-2026-000041          3
```

---

# 28. Prioridades no chat

Visual:

```text
Normal
Prioridade alta
Urgente
```

Sugestão:

```text
Normal → sem destaque forte
Alta → âmbar
Urgente → vermelho
```

A prioridade não deve depender do tema visual pessoal.

---

# 29. Etiquetas

Exemplos:

```text
Aguardando cliente
Orçamento enviado
Retornar amanhã
Pagamento pendente
Pós-serviço
```

Etiquetas devem ser visualmente discretas e legíveis.

---

# 30. Separação de atendimentos no chat

Quando um protocolo for encerrado:

```text
══════════════════════════════

ATENDIMENTO ENCERRADO
VX-2026-000204

══════════════════════════════
```

Novo protocolo:

```text
NOVO ATENDIMENTO
VX-2026-000219
23/09 • 09:14
```

Histórico permanece visível.

---

# 31. Citação de mensagem

Visual:

```text
Mensagem citada
VoltX • 22/09 às 15:21
"Consegue mandar uma foto do quadro?"

Resposta do usuário...
```

Mensagem de protocolo anterior pode mostrar:

```text
Protocolo VX-2026-000184
```

---

# 32. Perfil administrativo do cliente

Acesso por foto/nome no chat.

Estrutura:

```text
foto
nome
status
telefone
e-mail
endereços

abas:
Visão geral
Agendamentos
Orçamentos
OS
Protocolos
Conversas
Histórico
Arquivos
Auditoria
```

---

# 33. Linha do tempo

Visual:

```text
25/09 16:32
Atendimento concluído

25/09 14:02
OS em atendimento

24/09 18:43
Orçamento aceito
```

Usar ícones e cores semânticas.

---

# 34. Agendamentos

Card:

```text
AG-2026-000091
25/09/2026 • 14:00
Diagnóstico elétrico
Confirmado

Criado pelo cliente
ou
Criado pela VoltX
```

Origem deve ficar visível.

---

# 35. Agenda suspensa

Mensagem pública:

```text
Agendamentos temporariamente suspensos.

No momento não há novos horários disponíveis,
mas você ainda pode entrar em contato diretamente.

[ WhatsApp ]
```

Usar bloco de aviso, não erro.

---

# 36. Formulários

Campos devem possuir:

- label;
- placeholder;
- ajuda quando necessário;
- erro;
- sucesso;
- loading;
- disabled;
- foco claro.

Não usar apenas placeholder como label.

---

# 37. CEP

Exemplo:

```text
CEP
[72.860-000]

Consultando CEP...
```

Depois:

```text
Logradouro
Bairro
Cidade
UF
```

Falha:

```text
Não foi possível consultar o CEP agora.

[ Preencher manualmente ]
```

---

# 38. Formato de mensagens de erro

Evitar:

```text
Erro 400
Invalid input
Bad request
```

Preferir:

```text
Não foi possível concluir a solicitação.

Revise os campos destacados e tente novamente.
```

Em caso técnico:

```text
Não conseguimos concluir essa operação agora.
Tente novamente em alguns instantes.
```

---

# 39. Botões

Tipos:

```text
Primário
Secundário
Perigoso
Fantasma
Link
```

Primário VoltX:

```text
amarelo elétrico
texto escuro
```

Secundário:

```text
azul
ou
surface + borda
```

Perigoso:

```text
vermelho
```

---

# 40. CTA WhatsApp

Botão:

```text
Falar pelo WhatsApp
```

Visual pode usar verde sem abandonar a identidade VoltX.

Número vem da configuração do negócio.

---

# 41. Temas personalizados

Temas não devem alterar toda a interface indiscriminadamente.

Eles atuam principalmente em:

- accent;
- avatar;
- nome;
- links;
- ícones;
- chat;
- comentários;
- barra de leitura;
- hover;
- detalhes.

---

# 42. Tokens de tema

Base:

```text
--accent-primary
--accent-secondary
--accent-gradient
--avatar-ring
--link-hover
--icon-accent
--username-color
--chat-background
--chat-user-bubble
--chat-voltx-bubble
--comment-accent
--reading-progress
--focus-ring
--glow-color
```

---

# 43. Tema VoltX

```text
accent-primary: amarelo
accent-secondary: azul
avatar-ring: amarelo/azul
link-hover: âmbar
reading-progress: amarelo
```

---

# 44. Tema Azul

```text
accent-primary: azul
accent-secondary: ciano
avatar-ring: azul/ciano
link-hover: ciano
reading-progress: azul → ciano
```

---

# 45. Tema Rosa

```text
accent-primary: rosa
accent-secondary: violeta
avatar-ring: rosa/violeta
link-hover: rosa
reading-progress: rosa → violeta
```

---

# 46. Tema Violeta

```text
accent-primary: violeta
accent-secondary: azul
avatar-ring: violeta/azul
link-hover: violeta claro
```

---

# 47. Tema Rainbow/Pride

Usos permitidos:

- gradientes;
- bordas;
- progress bar;
- hover;
- nome;
- detalhes de chat.

Evitar:

- texto longo multicolorido;
- fundo excessivamente saturado;
- animação intensa;
- piscadas.

Exemplo:

```text
avatar-ring → rainbow
username → gradient
link-hover → gradient
reading-progress → rainbow
```

---

# 48. Temas Pride opcionais

Arquitetura preparada para:

```text
Rainbow
Trans
Bi
Pan
Não binário
Ace
```

Esses temas serão sempre escolhidos explicitamente pelo usuário.

Nunca inferidos.

---

# 49. Animações

Níveis:

```text
Desativadas
Suaves
Completas
```

Suaves:

- fade;
- transição;
- elevação leve;
- glow discreto.

Completas:

- gradientes animados;
- ring animado;
- underline animado;
- efeitos de tema.

---

# 50. Acessibilidade de movimento

Respeitar:

```text
prefers-reduced-motion
```

Se ativo:

- reduzir;
- simplificar;
- remover efeitos contínuos.

---

# 51. Hover

Hover deve comunicar interatividade.

Exemplos:

```text
card sobe 2–4px
borda muda
ícone reage
link ganha underline
```

Evitar animações bruscas.

---

# 52. Focus

Todo elemento interativo deve possuir foco visível.

Não remover `outline` sem substituto equivalente.

---

# 53. Ícones

Ícones devem:

- ser consistentes;
- possuir significado;
- não substituir texto crítico;
- herdar tokens quando tematizáveis.

---

# 54. Light mode

O modo claro deve preservar:

- contraste;
- hierarquia;
- accent;
- estados.

Nunca simplesmente inverter cores.

---

# 55. Dark mode

Padrão inicial.

Deve usar surfaces distintas para:

- fundo;
- card;
- painel;
- modal;
- input.

Evitar preto puro em toda interface.

---

# 56. Modo sistema

Opção:

```text
Sistema
```

segue preferência do dispositivo.

---

# 57. Aparência do usuário

Tela:

```text
Tema atual
Modo
Animações

Borda do avatar
Nome
Links
Ícones
Chat
Comentários
Barra de leitura
Hover
```

Cada item pode ser ativado/desativado quando suportado.

---

# 58. Cadastro em etapas

Fluxo:

```text
Conta
↓
Perfil
↓
Aparência
↓
Concluir
```

Indicador visual:

```text
●────────○────────○────────○
Conta   Perfil   Aparência  Concluir
```

---

# 59. Upload de avatar

Interface:

```text
[ foto ]

[ Enviar foto ]
```

Depois:

```text
Recortar
Girar
Zoom
Reposicionar
```

Formatos aceitos serão definidos em `MIDIA_UPLOADS.md`.

---

# 60. Status online

Visual:

```text
● Online
○ Offline
○ Ausente
○ Ocupado
```

Quando permitido:

```text
Visto por último hoje às 15:54
```

---

# 61. Notificações

Sino no header:

```text
🔔 3
```

Painel:

```text
Seu agendamento foi confirmado
Edson respondeu sua mensagem
Seu orçamento foi atualizado
```

---

# 62. Modais

Modais devem:

- bloquear foco atrás;
- possuir botão fechar;
- fechar por ação explícita;
- ter título;
- ser responsivos;
- possuir ações claras.

Ações perigosas exigem confirmação.

---

# 63. Toasts

Usar para feedback breve.

Exemplos:

```text
Agendamento solicitado com sucesso.
Alterações salvas.
Não foi possível concluir a operação.
```

Não usar toast para informação longa.

---

# 64. Empty states

Exemplo:

```text
Você ainda não possui agendamentos.

[ Solicitar atendimento ]
```

Evitar telas vazias sem orientação.

---

# 65. Loading

Usar:

- skeleton;
- spinner;
- texto “Carregando...”;
- progress quando apropriado.

Nunca mostrar “Loading...”.

---

# 66. Painel administrativo

O painel deve priorizar densidade de informação sem perder legibilidade.

Dashboard:

```text
Atendimentos hoje
Novos orçamentos
Mensagens não lidas
Clientes
OS em andamento
```

---

# 67. Busca administrativa

Barra de busca:

```text
Buscar por protocolo, OS, cliente, telefone...
```

Resultado deve destacar o tipo do registro.

---

# 68. Tags de status

Usar badges.

Exemplo:

```text
Confirmado
Pendente
Concluído
Cancelado
Prioridade alta
Urgente
```

Não depender apenas da cor.

Adicionar texto/ícone.

---

# 69. Responsividade

Breakpoints devem ser definidos de forma consistente.

Princípios:

- mobile first;
- evitar overflow horizontal;
- cards empilham;
- tabelas podem virar cards;
- chat administrativo adapta layout;
- menus colapsam;
- imagens redimensionam.

---

# 70. Conteúdo editorial

Artigos devem possuir largura confortável de leitura.

Evitar texto atravessando toda a tela em desktop.

Preferir coluna com largura de leitura controlada.

---

# 71. Links internos

Links para:

- postagens;
- serviços;
- atendimento;
- formulário;
- hashtags.

Devem ter estilo consistente e hover.

---

# 72. Âncoras

Títulos H2/H3 podem gerar âncoras automáticas.

Sumário:

```text
Neste artigo

1. Introdução
2. Sintomas
3. Diagnóstico
4. Segurança
```

---

# 73. SEO preview no CMS

Visual:

```text
Prévia do Google

Título da página | VoltX
voltx.narrativas.site/...
Descrição...
```

---

# 74. Footer

Estrutura:

```text
VoltX
Serviços
Conteúdo
Institucional
Novidades
```

Links:

- Sobre;
- Contato;
- Privacidade;
- Termos;
- Blog;
- Serviços.

---

# 75. Página de Privacidade

Deve ser legível, estruturada e sem juridiquês desnecessário.

Seções:

- dados coletados;
- finalidade;
- direitos;
- retenção;
- contato;
- consentimentos.

---

# 76. Página de Termos

Deve seguir mesma identidade visual.

Navegação por âncoras pode ser usada.

---

# 77. Erros 404/500

404:

```text
Página não encontrada.

[ Voltar para a Home ]
```

500:

```text
Não conseguimos carregar esta página agora.

[ Tentar novamente ]
```

Sem mensagens técnicas cruas ao usuário.

---

# 78. Regras de consistência

Nunca criar uma tela com estilo completamente diferente sem justificativa.

Reutilizar:

- tokens;
- componentes;
- espaçamento;
- tipografia;
- padrões de estado.

---

# 79. Componentes compartilhados planejados

Exemplos:

```text
Header
Footer
Button
Input
Select
Textarea
Modal
Toast
Badge
Avatar
UserCard
AcademicProfileCard
ServiceCard
PostCard
TagChip
ChatBubble
ChatListItem
ReadingProgressBar
AddressForm
CepField
StatusBadge
Timeline
NotificationItem
EmptyState
```

---

# 80. Regra final

> A VoltX deve parecer uma única plataforma, mesmo quando o usuário navega entre Home, serviços, blog, área do cliente, chat e painel administrativo.
>
> Personalização deve acrescentar identidade sem destruir consistência, contraste ou legibilidade.
