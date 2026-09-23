# CODING STANDARDS — VoltX

## 1. Finalidade

Este documento define os padrões oficiais de escrita, organização, documentação e manutenção do código da VoltX.

Ele deve ser seguido por:

- desenvolvedores humanos;
- Codex;
- agentes de IA;
- scripts de geração de código;
- revisões de pull request.

> Antes de escrever código, leia `AGENTS.md`, `ARQUITETURA.md`, `REGRAS_NEGOCIO.md`, `API.md` e `DATABASE.md` conforme o módulo afetado.

---

# 2. Regra geral

O código da VoltX deve ser:

```text
legível
previsível
tipado
testável
seguro
documentado
modular
fácil de manter
```

Não escrever código apenas para “funcionar agora”.

---

# 3. Idioma

## 3.1. Interface

Tudo que o usuário vê:

```text
PT-BR
```

Exemplos:

```text
Salvar
Cancelar
Carregando...
Senha inválida.
Agendamento confirmado.
```

Nunca:

```text
Save
Cancel
Loading...
Invalid password.
```

## 3.2. Comentários

Comentários no código devem ser escritos em português do Brasil.

## 3.3. Identificadores técnicos

Classes, funções, tipos, variáveis e arquivos podem usar inglês técnico quando isso melhorar consistência com:

- TypeScript;
- NestJS;
- Next.js;
- Prisma;
- API;
- bibliotecas.

Exemplo:

```ts
createAppointment()
findCustomerById()
AppointmentStatus
```

A interface continua em PT-BR.

---

# 4. Cabeçalho obrigatório dos arquivos

Todo arquivo de código **escrito manualmente** deve possuir cabeçalho no topo, desde que o formato do arquivo aceite comentários.

O cabeçalho deve informar:

```text
Nome: Edson
Curso: Engenharia Elétrica
Instituição: UNINTER
Telefone: (61) 99901-0739
Cidade/UF: Novo Gama - GO
Criado em: data e hora
Última alteração: data e hora
Finalidade: descrição curta do arquivo
Relacionamentos: arquivos, módulos ou serviços principais ligados a ele
```

Não incluir:

- senha;
- token;
- chave privada;
- segredo;
- credencial de banco;
- dado sensível desnecessário.

---

# 5. Exemplo de cabeçalho TypeScript

```ts
/**
 * VoltX
 *
 * Nome: Edson
 * Curso: Engenharia Elétrica
 * Instituição: UNINTER
 * Telefone: (61) 99901-0739
 * Cidade/UF: Novo Gama - GO
 *
 * Criado em: 22/09/2026 18:00
 * Última alteração: 22/09/2026 18:00
 *
 * Finalidade:
 * Responsável pelas regras de agendamento de atendimentos.
 *
 * Relacionamentos:
 * - appointment.controller.ts
 * - appointment.repository.ts
 * - availability.service.ts
 */
```

---

# 6. Exemplo de cabeçalho CSS

```css
/*
 * VoltX
 *
 * Nome: Edson
 * Curso: Engenharia Elétrica
 * Instituição: UNINTER
 * Telefone: (61) 99901-0739
 * Cidade/UF: Novo Gama - GO
 *
 * Criado em: 22/09/2026 18:00
 * Última alteração: 22/09/2026 18:00
 *
 * Finalidade:
 * Tokens visuais do tema institucional VoltX.
 *
 * Relacionamentos:
 * - globals.css
 * - theme-provider.tsx
 */
```

---

# 7. Exemplo de cabeçalho SQL

```sql
/*
 * VoltX
 *
 * Nome: Edson
 * Curso: Engenharia Elétrica
 * Instituição: UNINTER
 * Telefone: (61) 99901-0739
 * Cidade/UF: Novo Gama - GO
 *
 * Criado em: 22/09/2026 18:00
 * Última alteração: 22/09/2026 18:00
 *
 * Finalidade:
 * Criação dos índices de busca de protocolos.
 *
 * Relacionamentos:
 * - protocols
 * - customers
 */
```

---

# 8. Arquivos que não aceitam comentários

Alguns formatos não permitem comentários válidos.

Exemplos:

```text
package.json
tsconfig.json
JSON puro
lockfiles
arquivos binários
```

Nesses casos:

- não inserir cabeçalho inválido;
- não quebrar o formato;
- documentar a finalidade em arquivo próximo quando necessário;
- manter o histórico no Git.

---

# 9. Arquivos gerados automaticamente

Não editar manualmente nem inserir cabeçalho em arquivos gerados por ferramentas quando isso:

- quebrar geração;
- gerar diff inútil;
- for sobrescrito automaticamente.

Exemplos:

```text
node_modules
dist
.next
coverage
Prisma Client gerado
lockfiles gerados
artefatos de build
```

Migrations criadas pelo projeto podem receber comentário quando tecnicamente seguro, mas não devem ser alteradas apenas por estética depois de aplicadas.

---

# 10. Atualização do cabeçalho

Ao alterar um arquivo manualmente:

```text
Última alteração
```

deve ser atualizada.

Não alterar:

```text
Criado em
```

---

# 11. Comentários antes de funções importantes

Funções relevantes devem possuir comentário curto explicando:

- o que fazem;
- por que existem;
- regra de negócio importante;
- efeito colateral quando houver.

Exemplo:

```ts
// Confirma o agendamento somente depois de validar se o horário continua livre.
// Essa checagem também acontece no backend para evitar conflito entre dois clientes.
async function confirmAppointment() {
  // ...
}
```

---

# 12. Comentários naturais

Comentários devem parecer escritos por um desenvolvedor da equipe.

Preferir:

```ts
// Mantemos o protocolo mesmo depois do atendimento ser encerrado,
// porque ele faz parte do histórico do cliente.
```

Evitar:

```ts
// Esta função executa a funcionalidade responsável pelo gerenciamento
// sistemático do fluxo operacional do protocolo.
```

---

# 13. Não comentar o óbvio

Evitar:

```ts
// Soma 1 ao contador
count++;
```

Evitar:

```ts
// Retorna o usuário
return user;
```

Comentar intenção, regra ou motivo.

---

# 14. Blocos importantes

Trechos críticos podem receber comentários antes do bloco.

Exemplos:

```ts
// Não removemos o agendamento cancelado.
// Ele continua disponível no histórico e na auditoria.
```

```ts
// A senha é tratada como dado opaco.
// Não removemos caracteres especiais antes do hash.
```

---

# 15. Responsabilidade única

Cada arquivo, classe e função deve possuir responsabilidade clara.

Evitar arquivos gigantes que misturam:

- validação;
- banco;
- e-mail;
- WhatsApp;
- regra de negócio;
- renderização.

---

# 16. Estrutura por domínio

Preferir organização por domínio funcional.

Exemplo:

```text
appointments/
├── appointment.controller.ts
├── appointment.service.ts
├── appointment.repository.ts
├── appointment.dto.ts
├── appointment.types.ts
└── appointment.spec.ts
```

---

# 17. Controllers

Controller deve:

- receber requisição;
- validar DTO;
- chamar service;
- retornar resposta.

Controller não deve concentrar regra de negócio.

---

# 18. Services

Service concentra:

- regras de negócio;
- orquestração;
- transações;
- decisões de domínio.

---

# 19. Repositories

Repository ou camada Prisma concentra acesso a dados quando a abstração for necessária.

Evitar espalhar consultas complexas por controllers e componentes.

---

# 20. Componentes React

Componentes devem ser pequenos e previsíveis.

Separar:

```text
apresentação
estado
efeitos
acesso à API
```

quando isso melhorar clareza.

---

# 21. Componentes compartilhados

Reutilizar componentes do Design System.

Evitar recriar:

```text
Button
Input
Modal
Badge
Avatar
Card
Toast
```

em cada página.

---

# 22. Nomenclatura de arquivos

React:

```text
AcademicProfileCard.tsx
ServiceCard.tsx
ChatBubble.tsx
```

Hooks:

```text
useAppointments.ts
useCurrentUser.ts
```

Services:

```text
appointmentService.ts
businessProfileService.ts
```

Backend:

```text
appointment.controller.ts
appointment.service.ts
appointment.repository.ts
```

---

# 23. Variáveis e funções

Usar:

```text
camelCase
```

Exemplos:

```ts
customerId
appointmentNumber
findAvailableSlots()
```

---

# 24. Classes e tipos

Usar:

```text
PascalCase
```

Exemplos:

```ts
AppointmentService
CustomerProfile
QuoteStatus
```

---

# 25. Constantes

Constantes globais:

```text
UPPER_SNAKE_CASE
```

Exemplo:

```ts
const MAX_POST_TAGS = 8;
```

---

# 26. Banco

PostgreSQL:

```text
snake_case
```

Exemplos:

```text
created_at
customer_id
work_order_number
```

---

# 27. Rotas

URLs:

```text
kebab-case quando necessário
```

Exemplo:

```text
/work-orders
/pre-registrations
```

---

# 28. Booleans

Nome deve deixar claro que é booleano.

Preferir:

```ts
isActive
isPublic
hasPermission
canSchedule
shouldNotify
```

Evitar:

```ts
activeFlag
value
statusBool
```

---

# 29. Funções

Nome deve representar ação.

Preferir:

```ts
createProtocol()
cancelAppointment()
findCustomerByPhone()
```

---

# 30. TypeScript estrito

Usar configuração estrita.

Objetivo:

```text
strict: true
```

Evitar flexibilizar o compilador para esconder problemas.

---

# 31. Evitar `any`

Não usar `any` por conveniência.

Preferir:

```ts
unknown
```

e validar corretamente.

`any` só pode ser usado quando houver justificativa real e comentário explicando.

---

# 32. Tipos compartilhados

Tipos usados por mais de uma aplicação devem ficar em pacote compartilhado quando fizer sentido.

Exemplo futuro:

```text
packages/types
```

---

# 33. DTOs

API deve usar DTOs próprios.

Não devolver diretamente entidades internas ou objetos Prisma sem controle.

---

# 34. Enums

Estados importantes devem usar enum ou tipo restrito.

Exemplo:

```ts
enum AppointmentStatus {
  REQUESTED = 'REQUESTED',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
}
```

---

# 35. Tradução de estados

Enum técnico:

```text
CONFIRMED
```

Interface:

```text
Confirmado
```

A tradução deve ficar centralizada.

---

# 36. Valores mágicos

Evitar:

```ts
if (tags.length > 8)
```

espalhado pelo código.

Preferir:

```ts
const MAX_POST_TAGS = 8;
```

---

# 37. Datas

Não espalhar manipulação manual de datas.

Criar helpers quando necessário.

Sempre considerar timezone.

Timezone operacional atual:

```text
America/Sao_Paulo
```

---

# 38. Dinheiro

Nunca usar ponto flutuante de forma ingênua para cálculos monetários.

Banco:

```text
NUMERIC
```

Código deve usar estratégia compatível e testada.

---

# 39. Validação

Validar no frontend para UX.

Validar novamente no backend.

Nunca confiar apenas no navegador.

---

# 40. Sanitização

Sanitização deve ser específica ao campo.

Não remover caracteres legítimos de nomes ou endereços.

---

# 41. Senhas

Senha:

- não deve ser trimada silenciosamente se isso alterar o valor informado;
- não deve ter caracteres especiais removidos;
- não deve aparecer em log;
- não deve aparecer em erro;
- não deve ser persistida em texto puro.

---

# 42. SQL

Nunca concatenar entrada do usuário em SQL.

Usar:

```text
Prisma
queries parametrizadas
```

---

# 43. HTML

HTML de usuário deve ser sanitizado por allowlist.

Nunca renderizar HTML não confiável diretamente.

---

# 44. Uploads

Validar no backend:

- MIME;
- assinatura/magic bytes quando aplicável;
- tamanho;
- extensão;
- autorização;
- destino.

Não confiar apenas no nome do arquivo.

---

# 45. Variáveis de ambiente

Toda configuração externa deve ser lida de ambiente quando apropriado.

Exemplo:

```text
DATABASE_URL
REDIS_URL
MINIO_ENDPOINT
```

---

# 46. Segredos

Nunca commit:

```text
senha
token
chave privada
API key
secret
```

---

# 47. `.env.example`

Pode conter:

```text
DATABASE_URL=
REDIS_URL=
MINIO_ENDPOINT=
```

Nunca valores secretos reais.

---

# 48. Validação de ambiente

A aplicação deve falhar de forma clara quando variável obrigatória estiver ausente.

Evitar falha silenciosa.

---

# 49. Tratamento de erros

Não usar `try/catch` apenas para ignorar erro.

Evitar:

```ts
try {
  await doSomething();
} catch {}
```

---

# 50. Erros de domínio

Criar erros específicos quando necessário.

Exemplos:

```text
AppointmentConflictError
InvalidActivationCodeError
UnauthorizedResourceError
```

---

# 51. Mensagem técnica versus mensagem ao usuário

Log técnico pode conter contexto interno seguro.

Usuário deve receber mensagem clara em PT-BR.

Nunca expor stack trace ao cliente.

---

# 52. Logging

Usar logger estruturado.

Evitar `console.log` permanente em produção.

Durante desenvolvimento, logs temporários devem ser removidos antes do merge quando não forem mais úteis.

---

# 53. Dados sensíveis em logs

Nunca registrar:

```text
password
password_hash
token
activation_code
2FA secret
cookie de sessão
```

Mascarar telefone, CPF e e-mail quando apropriado.

---

# 54. Auditoria

Auditoria é diferente de log técnico.

Ações administrativas relevantes devem gerar evento de auditoria.

---

# 55. Funções assíncronas

Usar `async/await` de forma consistente.

Não criar Promise manual sem necessidade.

---

# 56. Paralelismo

Quando operações independentes puderem executar juntas:

```ts
await Promise.all([...]);
```

somente quando isso não quebrar ordem, transação ou limite externo.

---

# 57. Transações

Operações relacionadas que precisam ser atômicas devem usar transação.

Exemplo:

```text
aceitar orçamento
+
registrar histórico
+
criar OS
```

---

# 58. Idempotência

Ações suscetíveis a repetição devem considerar idempotência.

Não criar duplicidade por retry de rede.

---

# 59. React — estado

Não duplicar estado derivado desnecessariamente.

Preferir calcular a partir da fonte existente.

---

# 60. React — efeitos

`useEffect` deve ser usado para efeitos reais.

Não usar como substituto de fluxo normal de renderização.

---

# 61. React — chaves

Listas devem usar chave estável.

Nunca usar índice do array quando o item possui identificador real.

---

# 62. Next.js

Separar corretamente:

```text
Server Components
Client Components
```

Não transformar tudo em `"use client"` por conveniência.

---

# 63. NestJS

Usar módulos por domínio.

Exemplo:

```text
AppointmentsModule
QuotesModule
ProtocolsModule
ChatModule
```

---

# 64. Prisma

Queries devem:

- selecionar apenas o necessário;
- evitar N+1;
- usar transações quando necessário;
- respeitar índices;
- não expor modelo bruto diretamente.

---

# 65. Redis

Redis pode armazenar:

- cache;
- presença;
- filas;
- locks;
- dados temporários.

Redis não é fonte de verdade para histórico permanente.

---

# 66. MinIO

Arquivos devem receber chave interna segura.

Nunca usar nome original do usuário como caminho confiável.

---

# 67. Dependências externas

Antes de adicionar biblioteca:

- verificar necessidade;
- verificar manutenção;
- verificar licença;
- verificar peso;
- verificar segurança;
- verificar se já existe solução no projeto.

---

# 68. Evitar dependência desnecessária

Não instalar pacote para resolver algo trivial que pode ser feito claramente com APIs nativas.

---

# 69. Infraestrutura autohospedável

Não introduzir dependência obrigatória de SaaS externo para funcionalidade central sem decisão arquitetural.

Exemplos centrais:

```text
PostgreSQL
Redis
MinIO
```

devem permanecer autohospedáveis.

---

# 70. Acessibilidade

Componentes devem usar:

- HTML semântico;
- labels;
- aria quando necessário;
- foco visível;
- teclado;
- contraste adequado.

---

# 71. CSS

Preferir tokens e classes reutilizáveis.

Evitar valores arbitrários repetidos sem motivo.

---

# 72. Tailwind

Utilizar Tailwind de forma consistente.

Quando um padrão se repetir demais, criar componente ou abstração.

---

# 73. Design tokens

Cores e comportamento temático devem usar tokens definidos em `DESIGN.md`.

Evitar hardcode espalhado.

---

# 74. Responsividade

Toda nova tela visual deve ser validada em:

```text
mobile
tablet
desktop
```

---

# 75. Texto visível

Antes do merge, procurar por mensagens em inglês deixadas por bibliotecas ou código próprio.

---

# 76. Testes unitários

Regras de negócio importantes devem possuir testes.

Exemplos:

- geração de protocolo;
- conflito de agenda;
- transição de status;
- validação de código;
- limite de hashtags.

---

# 77. Testes de integração

Cobrir integração com:

- PostgreSQL;
- Redis quando necessário;
- storage;
- API.

---

# 78. Testes E2E

Fluxos principais:

```text
cadastro
login
orçamento
agendamento
chat
CMS
```

---

# 79. Validação visual

Mudanças de interface devem passar por conferência visual antes do merge.

Não considerar teste automatizado como substituto completo da validação visual.

---

# 80. Nomes de testes

Preferir descrição de comportamento.

Exemplo:

```ts
it('não confirma um agendamento quando o horário já está ocupado', async () => {
  // ...
});
```

---

# 81. Arrange / Act / Assert

Testes devem ser organizados quando isso melhorar clareza.

```text
Preparar
Executar
Verificar
```

Comentários podem permanecer em PT-BR.

---

# 82. Dados de teste

Não usar dados reais de clientes em testes automatizados.

---

# 83. Código morto

Remover:

- imports não usados;
- funções obsoletas;
- comentários de código abandonado;
- flags temporárias vencidas.

Git já guarda histórico.

---

# 84. TODO

TODO deve explicar o que falta.

Exemplo:

```ts
// TODO: adicionar bloqueio distribuído antes de habilitar múltiplas instâncias da API.
```

Evitar:

```ts
// TODO arrumar isso
```

---

# 85. FIXME

Usar para problema conhecido que exige correção.

Não deixar FIXME crítico entrar em Release sem registro.

---

# 86. Funções grandes

Se uma função exige rolagem excessiva e possui várias responsabilidades, dividir.

Não usar limite rígido de linhas como regra absoluta.

Usar responsabilidade e legibilidade como critério.

---

# 87. Arquivos grandes

Mesmo princípio.

Dividir quando:

- responsabilidades diferentes se misturam;
- testes ficam difíceis;
- navegação fica ruim;
- reutilização é prejudicada.

---

# 88. Imports

Organizar de forma consistente.

Preferir:

```text
bibliotecas externas
↓
pacotes internos
↓
arquivos locais
↓
tipos
```

A ferramenta de lint/format pode automatizar.

---

# 89. Alias de import

Usar aliases quando configurados.

Exemplo:

```ts
import { Button } from '@/components/ui/Button';
```

Evitar cadeias excessivas:

```ts
../../../../../../components
```

---

# 90. Exportações

Evitar `default export` indiscriminadamente quando named exports melhorarem refatoração e busca.

Seguir convenção específica do framework quando necessário.

---

# 91. ESLint

O projeto deverá utilizar ESLint.

Warnings relevantes não devem ser ignorados apenas para “passar o build”.

---

# 92. Formatter

Utilizar formatter automático, preferencialmente:

```text
Prettier
```

Não gastar revisão discutindo espaçamento manual.

---

# 93. Typecheck

Antes do merge:

```text
typecheck
```

deve passar.

---

# 94. Build

Antes de versão:

```text
build
```

deve passar.

---

# 95. Lint

Antes do merge:

```text
lint
```

deve passar.

---

# 96. Testes

Antes do merge, executar os testes relevantes ao módulo alterado.

Antes de Release, executar a suíte definida para a versão.

---

# 97. Segurança

Alterações em:

- autenticação;
- autorização;
- upload;
- sessão;
- permissões;
- LGPD;
- dados sensíveis;

exigem revisão adicional.

---

# 98. Commits

Commits devem ser:

- pequenos o suficiente para entendimento;
- relacionados à funcionalidade;
- escritos em PT-BR;
- técnicos e naturais.

Exemplo:

```text
feat: adiciona validação de conflito na agenda
```

---

# 99. Branches

Uma funcionalidade por branch quando possível.

Exemplo:

```text
feat/agendamento-disponibilidade
fix/chat-mensagens-nao-lidas
docs/api-hateoas
```

---

# 100. Documentação no mesmo trabalho

Se o código alterar comportamento documentado, atualizar os arquivos `.md` correspondentes no mesmo conjunto de mudanças.

---

# 101. IA e Codex — leitura obrigatória

Antes de implementar:

```text
AGENTS.md
README.md
ROADMAP.md
ARQUITETURA.md
REGRAS_NEGOCIO.md
CODING_STANDARDS.md
```

Depois, ler a documentação do módulo.

---

# 102. IA não deve reinventar arquitetura

Se existir ADR ou regra documentada, seguir a decisão.

Não trocar tecnologia silenciosamente.

Exemplo:

```text
PostgreSQL autohospedado
```

não pode virar:

```text
Supabase
```

por conveniência.

---

# 103. IA não deve inventar requisito

Se houver ambiguidade relevante:

1. procurar na documentação;
2. procurar no código existente;
3. procurar ADR;
4. perguntar ao usuário se ainda houver dúvida.

---

# 104. IA deve preservar escopo

Não aproveitar uma tarefa simples para refatorar metade do sistema sem necessidade.

---

# 105. IA deve informar arquivos alterados

Ao concluir uma tarefa, informar:

- arquivos criados;
- arquivos modificados;
- testes executados;
- resultado;
- pendências.

---

# 106. IA deve indicar caminho

Ao orientar edição manual, informar caminho completo ou relativo claro.

Exemplo:

```text
apps/api/src/modules/appointments/appointment.service.ts
```

---

# 107. IA deve indicar posição da alteração

Quando o usuário for editar manualmente, informar:

- arquivo;
- trecho anterior;
- o que substituir;
- onde inserir.

---

# 108. IA não deve esconder erro

Se teste falhar:

- mostrar;
- explicar;
- corrigir;
- repetir validação.

Não dizer “funcionou” sem validação.

---

# 109. Gitea

Envio ao Gitea faz parte do fluxo oficial.

Servidor:

```text
andrew@192.168.1.70
```

Quando houver falha de envio:

```text
até 3 tentativas
```

Após a terceira falha, interromper fechamento da versão.

---

# 110. Segurança do Git

Nunca adicionar ao Git:

```text
.env
chaves SSH
certificados privados
dumps com dados reais
tokens
segredos
```

---

# 111. Revisão antes do merge

Checklist mínimo:

```text
código legível
tipos corretos
lint
typecheck
testes relevantes
build quando aplicável
segurança
UI em PT-BR
responsividade
documentação
sem segredos
sem logs temporários
```

---

# 112. Revisão antes de Release

Além do checklist de merge:

```text
validação integrada
validação visual
migrations
backup quando aplicável
Gitea sincronizado
CHANGELOG atualizado
tag anotada
Release
```

---

# 113. Exemplo de função bem documentada

```ts
// Gera um novo protocolo usando a sequência anual.
// A operação precisa acontecer dentro de transação para impedir números duplicados.
async function createProtocolNumber(year: number): Promise<string> {
  const sequence = await getNextProtocolSequence(year);

  return `VX-${year}-${String(sequence).padStart(6, '0')}`;
}
```

---

# 114. Exemplo de comentário ruim

```ts
// Função que gera protocolo
async function createProtocolNumber() {
  // ...
}
```

O nome da função já informa isso.

O comentário deve explicar a regra importante.

---

# 115. Exemplo de regra de segurança

```ts
// Nunca usamos o telefone recebido diretamente em uma query montada à mão.
// O Prisma parametriza a consulta e evita concatenação de SQL.
const customer = await prisma.user.findFirst({
  where: {
    phone: normalizedPhone,
  },
});
```

---

# 116. Exemplo de comentário de histórico

```ts
// O cancelamento não remove o registro.
// Precisamos manter esse agendamento na linha do tempo e na auditoria do cliente.
await appointmentRepository.markAsCancelled(appointmentId);
```

---

# 117. Exemplo de erro de domínio

```ts
if (hasConflict) {
  throw new AppointmentConflictError(
    'Já existe um atendimento incompatível com esse horário.',
  );
}
```

---

# 118. Formatação de mensagens

Mensagens ao usuário devem ser naturais.

Preferir:

```text
Não foi possível concluir o agendamento porque esse horário acabou de ficar indisponível.
```

Evitar:

```text
Appointment scheduling conflict exception.
```

---

# 119. Padrão de qualidade

Código pronto significa:

```text
implementado
+
testado
+
validado
+
documentado
```

Não apenas “compila”.

---

# 120. Regra final

> O código da VoltX deve ser compreensível por quem abrir o projeto meses depois.
>
> Comentários devem explicar decisões, não repetir a sintaxe.
>
> Segurança, legibilidade, documentação e rastreabilidade fazem parte da implementação.
