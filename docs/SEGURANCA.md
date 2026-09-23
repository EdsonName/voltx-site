# SEGURANÇA — VoltX

## 1. Finalidade

Este documento define as regras de segurança da plataforma VoltX.

Ele deve ser consultado antes de qualquer alteração envolvendo:

- autenticação;
- autorização;
- sessões;
- senhas;
- 2FA;
- cookies;
- CORS;
- CSRF;
- uploads;
- API;
- banco de dados;
- Redis;
- MinIO;
- logs;
- auditoria;
- LGPD;
- infraestrutura;
- deploy;
- integrações externas;
- tratamento de incidentes.

> Antes de alterar este documento, leia `AGENTS.md`, `ARQUITETURA.md`, `REGRAS_NEGOCIO.md`, `API.md`, `DATABASE.md` e `CODING_STANDARDS.md`.

---

# 2. Princípios de segurança

A segurança da VoltX seguirá estes princípios:

```text
defesa em profundidade
menor privilégio
validação no backend
segredos fora do código
auditoria
rastreabilidade
infraestrutura autohospedável
falha segura
```

Nenhuma camada isolada será considerada suficiente.

---

# 3. Superfícies de ataque principais

A VoltX deverá considerar pelo menos:

- autenticação;
- recuperação de senha;
- sessões;
- painel administrativo;
- API;
- uploads;
- chat;
- CMS;
- comentários;
- banco;
- Redis;
- MinIO;
- Nginx;
- integrações externas;
- webhooks;
- e-mail;
- WhatsApp;
- endpoints públicos;
- formulários sem autenticação.

---

# 4. Autenticação

A autenticação deverá existir separadamente para:

```text
cliente
administrador
```

Mesmo quando compartilharem parte da infraestrutura, permissões e exigências serão diferentes.

---

# 5. Senhas

Senhas:

- nunca serão armazenadas em texto puro;
- nunca serão registradas em log;
- nunca serão enviadas por e-mail;
- nunca serão exibidas em tela;
- nunca serão concatenadas em SQL;
- nunca terão caracteres removidos por “sanitização”.

---

# 6. Hash de senha

Algoritmo preferencial:

```text
Argon2id
```

Os parâmetros devem ser configurados conforme capacidade do ambiente e revisados periodicamente.

A aplicação deverá armazenar apenas:

```text
password_hash
```

---

# 7. Política de senha

A política deverá priorizar:

- comprimento suficiente;
- bloqueio de senhas triviais;
- não obrigar regras artificiais excessivas;
- permitir caracteres especiais;
- permitir frases-senha.

Não remover:

```text
'
"
;
#
<
>
```

da senha apenas por segurança.

---

# 8. Recuperação de senha

Tokens de recuperação devem:

- ser aleatórios;
- possuir expiração;
- ser de uso único;
- ser armazenados por hash;
- ser invalidados após uso;
- ser rate limited.

---

# 9. Sessões

Sessões deverão possuir:

- identificador seguro;
- expiração;
- revogação;
- registro de criação;
- registro de último uso;
- vínculo com usuário.

---

# 10. Cookies

Quando cookies forem usados para sessão:

```text
HttpOnly
Secure
SameSite apropriado
```

Nunca armazenar segredos sensíveis em cookies acessíveis por JavaScript quando isso puder ser evitado.

---

# 11. Logout

Logout deve invalidar a sessão no backend.

Não basta apagar estado visual do frontend.

---

# 12. Logout remoto

O usuário poderá futuramente encerrar outras sessões ativas.

O administrador poderá revogar sessões administrativas quando necessário.

---

# 13. 2FA administrativo

Contas administrativas deverão possuir 2FA.

Preferência:

```text
TOTP
```

Outros métodos poderão ser adicionados futuramente.

---

# 14. Segredo de 2FA

Segredo TOTP deverá:

- ser protegido;
- não aparecer em logs;
- não ser enviado novamente sem necessidade;
- ser armazenado de forma segura.

---

# 15. Códigos de recuperação

Se existirem:

- devem ser aleatórios;
- exibidos uma única vez;
- armazenados por hash;
- invalidados individualmente após uso.

---

# 16. Autorização

Autenticação não significa autorização.

Toda ação deve validar:

```text
quem é o usuário
+
qual recurso
+
qual permissão
+
qual estado do recurso
```

---

# 17. RBAC

Papéis previstos:

```text
SUPER_ADMIN
ADMIN
ATENDENTE
EDITOR
CLIENTE
```

Permissões devem ser granulares quando necessário.

---

# 18. Menor privilégio

Cada papel deve acessar apenas o necessário.

Exemplo:

```text
EDITOR
```

não precisa possuir permissão para:

- alterar usuários administrativos;
- alterar infraestrutura;
- visualizar segredos.

---

# 19. Isolamento de clientes

Um cliente só pode acessar:

```text
seus próprios dados
```

Qualquer tentativa de alterar ID na URL ou payload deve ser bloqueada no backend.

---

# 20. IDOR

A API deve prevenir Insecure Direct Object Reference.

Nunca confiar apenas em:

```text
resourceId
```

recebido do cliente.

Sempre verificar propriedade ou permissão.

---

# 21. Validação

Toda entrada deve ser validada no backend.

Frontend serve para UX.

Backend é obrigatório.

---

# 22. Sanitização

Sanitização deve ser contextual.

Não remover caracteres legítimos de:

- nomes;
- endereços;
- senhas;
- descrições.

---

# 23. SQL Injection

Proteção:

```text
Prisma
queries parametrizadas
```

Nunca:

```text
"SELECT ... " + valorUsuario
```

---

# 24. XSS

Dados exibidos em HTML devem ser escapados por padrão.

Conteúdo HTML permitido deve passar por sanitização.

---

# 25. HTML no CMS

O editor poderá aceitar HTML controlado.

Regras:

- allowlist;
- bloquear scripts;
- bloquear eventos inline;
- bloquear iframes não autorizados;
- bloquear `javascript:`;
- bloquear elementos perigosos.

---

# 26. CSRF

Quando autenticação usar cookies:

- usar proteção CSRF quando aplicável;
- validar origem;
- usar SameSite adequado;
- não depender apenas do frontend.

---

# 27. CORS

Produção deve permitir apenas origens necessárias.

Exemplos:

```text
https://voltx.narrativas.site
https://painel-voltx.narrativas.site
```

Evitar:

```text
Access-Control-Allow-Origin: *
```

em endpoints autenticados.

---

# 28. HTTPS

Produção deve operar com:

```text
HTTPS obrigatório
```

HTTP poderá apenas redirecionar para HTTPS.

---

# 29. TLS

Certificados devem ser válidos e renovados automaticamente quando possível.

---

# 30. Nginx

Nginx poderá aplicar:

- TLS;
- redirects;
- headers de segurança;
- limites de upload;
- rate limiting complementar;
- roteamento por subdomínio.

---

# 31. Headers de segurança

Avaliar:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
```

A política deve ser compatível com a aplicação real.

---

# 32. CSP

Content Security Policy deve ser configurada progressivamente.

Evitar liberar:

```text
unsafe-inline
unsafe-eval
```

sem necessidade documentada.

---

# 33. Rate limiting

Aplicar em fluxos sensíveis.

Exemplos:

- login;
- cadastro;
- recuperação de senha;
- verificação de código;
- orçamento público;
- upload;
- envio de mensagem;
- busca pesada.

---

# 34. Brute force

Login deverá possuir proteção contra tentativas excessivas.

Pode combinar:

- rate limiting;
- atraso progressivo;
- bloqueio temporário;
- auditoria.

---

# 35. Enumeração de usuários

Fluxos de login/recuperação não devem revelar desnecessariamente se um e-mail existe.

Exemplo:

```text
Se os dados informados estiverem cadastrados, enviaremos as instruções.
```

---

# 36. Uploads

Uploads são considerados entrada não confiável.

Validar:

- autenticação;
- autorização;
- tamanho;
- MIME;
- assinatura real;
- extensão;
- nome interno;
- destino;
- status de processamento.

---

# 37. Magic bytes

Quando aplicável, validar conteúdo real do arquivo e não apenas:

```text
Content-Type
extensão
```

---

# 38. Nome de arquivo

Nunca usar o nome original como caminho final confiável.

Usar:

```text
UUID
+
extensão validada
```

---

# 39. Arquivos executáveis

Não permitir upload arbitrário de arquivos executáveis para áreas públicas.

---

# 40. PDFs e documentos

Documentos aceitos devem:

- possuir limite de tamanho;
- ser armazenados fora de diretório executável;
- não serem interpretados como código.

---

# 41. Imagens

Imagens podem ser reprocessadas para reduzir risco e tamanho.

---

# 42. Quarentena

Arquivos suspeitos podem usar status:

```text
QUARANTINED
```

e não devem ficar disponíveis publicamente.

---

# 43. MinIO

MinIO será autohospedado.

Regras:

- não expor console administrativo publicamente sem proteção;
- usar credenciais próprias;
- separar buckets;
- negar listagem pública por padrão;
- usar URLs temporárias quando necessário;
- manter backups.

---

# 44. PostgreSQL

PostgreSQL será autohospedado.

Regras:

- não expor porta à internet pública;
- usuário da aplicação com privilégio mínimo;
- senhas fortes;
- backups;
- acesso administrativo restrito;
- TLS quando necessário.

---

# 45. Prisma

Prisma não elimina necessidade de segurança.

Ainda é obrigatório:

- autorização;
- validação;
- transação;
- índices;
- constraints;
- controle de acesso.

---

# 46. Redis

Redis será autohospedado.

Regras:

- não expor à internet;
- usar rede interna;
- autenticação quando aplicável;
- persistência conforme necessidade;
- não guardar segredos permanentes como fonte de verdade.

---

# 47. Redis não é banco principal

Dados críticos não podem existir apenas no Redis.

---

# 48. Infraestrutura autohospedável

Componentes centrais:

```text
PostgreSQL
Redis
MinIO
```

devem funcionar na infraestrutura da própria VoltX.

Nenhuma funcionalidade essencial deverá exigir SaaS externo.

---

# 49. Segredos

Segredos devem ficar em:

```text
variáveis de ambiente
secret files protegidos
secret manager futuro
```

Nunca no Git.

---

# 50. `.env`

Arquivos reais:

```text
.env
.env.production
```

não devem ser versionados.

Pode existir:

```text
.env.example
```

sem valores reais.

---

# 51. Chaves SSH

Nunca versionar:

```text
id_rsa
id_ed25519
*.pem
```

---

# 52. Rotação de segredos

Credenciais importantes devem poder ser trocadas sem alteração de código.

---

# 53. Logs

Logs técnicos devem evitar dados sensíveis.

Nunca registrar:

```text
senha
hash de senha
token
cookie
secret de 2FA
código de ativação
chave privada
```

---

# 54. Mascaramento

Quando necessário:

```text
telefone: ******0739
e-mail: e***@dominio.com
CPF: ***.***.***-12
```

---

# 55. Auditoria

Ações administrativas relevantes devem ser auditadas.

Exemplos:

- alteração de cliente;
- alteração de papel;
- criação de agendamento;
- cancelamento;
- alteração de orçamento;
- publicação de post;
- mudança de configuração;
- encerramento de chat.

---

# 56. Audit log

Deve registrar quando aplicável:

- ator;
- ação;
- recurso;
- identificador;
- data;
- IP;
- user-agent;
- valores anteriores;
- valores novos.

---

# 57. Audit log não é log técnico

Logs técnicos servem para diagnóstico.

Auditoria serve para rastrear ações.

---

# 58. Proteção da auditoria

Usuário comum não pode editar audit logs.

Administradores também não devem poder apagar auditoria livremente.

---

# 59. Chat

Mensagens de chat devem respeitar:

- autenticação;
- autorização;
- persistência;
- limite de tamanho;
- validação de anexos;
- auditoria de ações administrativas.

---

# 60. WebSocket

Conexão WebSocket deve validar autenticação.

Não confiar apenas em `conversationId`.

---

# 61. Autorização em eventos

Cada evento recebido via Socket.IO deve validar:

- usuário;
- conversa;
- permissão;
- payload.

---

# 62. Presença online

Dados de presença podem ficar no Redis.

Não expor informações além da configuração de privacidade.

---

# 63. CMS

CMS é superfície sensível.

Somente usuários autorizados podem:

- criar;
- editar;
- publicar;
- suspender;
- arquivar.

---

# 64. Comentários

Comentários de usuário devem ser tratados como texto não confiável.

Escapar saída.

---

# 65. Links

Links inseridos por usuários devem ser validados.

Bloquear esquemas perigosos como:

```text
javascript:
data:
```

quando não forem explicitamente necessários.

---

# 66. Webhooks

Webhooks deverão validar:

- assinatura;
- origem;
- timestamp;
- replay;
- idempotência.

---

# 67. Integrações externas

Integrações externas devem ser isoladas por camada.

Exemplos:

```text
WhatsApp
e-mail
CEP
```

Falha externa não deve corromper estado principal.

---

# 68. E-mail

Nunca enviar:

- senha;
- token permanente;
- segredo.

Links de recuperação devem usar token temporário.

---

# 69. WhatsApp

Mensagens com dados sensíveis devem ser minimizadas.

Não enviar mais informação do que o necessário.

---

# 70. CEP externo

Consulta de CEP não deve enviar dados pessoais desnecessários.

Enviar apenas o CEP quando possível.

---

# 71. LGPD

Segurança deverá apoiar:

- minimização;
- controle de acesso;
- retenção;
- exclusão;
- anonimização;
- auditoria;
- consentimento.

---

# 72. Dados sensíveis

Acesso a CPF, telefone, e-mail e endereço deve ser restrito por necessidade.

---

# 73. Exclusão de conta

Solicitação de exclusão deve exigir autenticação recente ou confirmação adicional.

---

# 74. Reautenticação

Ações sensíveis poderão exigir:

- senha atual;
- 2FA;
- sessão recente.

Exemplos:

- alterar senha;
- alterar e-mail;
- excluir conta;
- alterar 2FA.

---

# 75. Soft delete

Soft delete não substitui segurança.

Registro apagado logicamente não deve continuar visível em consultas comuns.

---

# 76. Backups

Backups devem ser protegidos.

Nunca:

```text
backup público
dump no Git
dump sem controle de acesso
```

---

# 77. Backup externo

Cópia externa pode ser usada, mas deverá permanecer sob controle da VoltX sempre que possível.

---

# 78. Criptografia de backup

Backups contendo dados sensíveis devem considerar criptografia.

---

# 79. Restore

Testar restauração periodicamente.

Backup que nunca foi testado não deve ser considerado confiável.

---

# 80. Docker

Containers devem:

- executar com menor privilégio possível;
- evitar root quando viável;
- usar imagens oficiais/confiáveis;
- manter dependências atualizadas;
- não conter segredos na imagem.

---

# 81. Docker secrets

Nunca gravar segredos diretamente no Dockerfile.

---

# 82. Portas

Expor publicamente apenas o necessário.

Ideal:

```text
80
443
```

Serviços internos:

```text
PostgreSQL
Redis
MinIO interno
```

devem permanecer em rede privada.

---

# 83. Nginx e serviços internos

Nginx será a borda principal.

A API não precisa expor portas internas diretamente à internet quando estiver atrás do proxy.

---

# 84. Painel administrativo

O painel administrativo deve exigir:

- autenticação;
- autorização;
- 2FA;
- sessão segura;
- proteção contra brute force.

---

# 85. Painel não é seguro por ser oculto

Subdomínio não listado publicamente não é mecanismo de segurança.

---

# 86. Robots

`robots.txt` não protege painel.

Segurança real:

```text
auth
RBAC
2FA
HTTPS
```

---

# 87. Segurança de dependências

Dependências devem ser avaliadas quanto a:

- manutenção;
- vulnerabilidades;
- licença;
- origem.

---

# 88. Auditoria de dependências

O projeto deverá usar ferramentas compatíveis com o gerenciador escolhido.

Exemplo futuro:

```text
npm audit
pnpm audit
```

Não aceitar correção automática destrutiva sem revisar impacto.

---

# 89. Atualizações

Atualizações de segurança devem ser priorizadas.

---

# 90. SAST

Análise estática pode ser adicionada ao CI.

---

# 91. Secret scanning

O repositório deverá usar proteção contra commit acidental de segredos quando disponível.

---

# 92. CI

CI deve falhar em problemas críticos de:

- lint;
- typecheck;
- testes;
- build;
- segurança quando configurado.

---

# 93. Produção

Antes de deploy:

```text
testes
build
migrations
backup
validação de configuração
```

---

# 94. Migration

Migration de produção deve:

- ser revisada;
- ter backup;
- ser testada;
- evitar perda de dados.

---

# 95. Rollback

Toda mudança crítica deve possuir estratégia de retorno.

---

# 96. Health checks

Health checks não devem expor:

- senha;
- configuração sensível;
- stack trace;
- estrutura interna excessiva.

---

# 97. Erros

Usuário não deve receber stack trace.

Exemplo público:

```text
Não foi possível concluir a operação.
```

Detalhe técnico vai para log seguro.

---

# 98. Erros 5xx

Não retornar detalhes de banco ou filesystem ao cliente.

---

# 99. Ambiente de desenvolvimento

Desenvolvimento pode ter logs mais detalhados.

Mesmo assim:

- não logar senha;
- não logar token;
- não commitar segredos.

---

# 100. Ambiente de produção

Produção deve ter:

```text
NODE_ENV=production
```

e configurações próprias.

---

# 101. Separação de ambientes

Manter separados:

```text
development
test
production
```

Banco de teste nunca deve ser o mesmo da produção.

---

# 102. Dados reais em testes

Não usar dados reais de clientes em testes automatizados.

---

# 103. Rate limiting administrativo

Login administrativo deve possuir limites mais rígidos que áreas comuns quando necessário.

---

# 104. Sessão administrativa

Sessão administrativa pode possuir timeout menor que sessão de cliente.

---

# 105. IP

Bloqueio por IP pode ser usado como sinal adicional.

Não depender exclusivamente disso.

---

# 106. Device/session history

Área de segurança poderá mostrar:

- sessões ativas;
- dispositivo;
- navegador;
- data;
- último uso.

---

# 107. Notificação de segurança

Eventos relevantes podem gerar aviso:

- nova sessão;
- senha alterada;
- 2FA ativado/desativado.

---

# 108. Ataques de timing

Comparação de segredos deve usar função segura quando aplicável.

---

# 109. Códigos de ativação

Devem ser:

- aleatórios;
- não previsíveis;
- limitados por tentativa;
- expirados;
- armazenados por hash.

---

# 110. Protocolo e identificadores públicos

Identificadores como:

```text
VX-2026-000001
```

podem ser previsíveis por natureza comercial.

Isso não deve conceder acesso.

A autorização continua obrigatória.

---

# 111. UUID interno

IDs internos podem usar UUID para reduzir exposição de sequência interna.

---

# 112. Security by obscurity

Nunca depender apenas de:

- URL secreta;
- nome difícil;
- ID não previsível.

---

# 113. Configuração do negócio

Alterações em telefone, e-mail, endereço, logo e dados acadêmicos devem ser auditadas.

---

# 114. Conteúdo público

Antes de publicar:

- sanitizar;
- validar mídia;
- validar slug;
- validar links;
- validar permissões.

---

# 115. SEO e segurança

Metadata não deve receber HTML executável.

---

# 116. Open Graph

Campos OG devem ser escapados corretamente.

---

# 117. Redirecionamentos

Evitar open redirect.

URLs de retorno devem ser validadas.

---

# 118. SSRF

Backend não deve buscar URL fornecida pelo usuário arbitrariamente.

Isso reforça a decisão de uploads locais em vez de “cole uma URL”.

---

# 119. Path traversal

Nunca usar caminho fornecido diretamente pelo usuário para ler/gravar arquivo.

---

# 120. Command injection

Nunca concatenar entrada do usuário em shell.

---

# 121. Template injection

Templates devem receber dados escapados e controlados.

---

# 122. Deserialização

Não confiar em payload serializado sem validação.

---

# 123. Mass assignment

DTOs devem limitar campos alteráveis.

Nunca aceitar objeto inteiro do frontend e repassar direto ao banco.

---

# 124. Campos administrativos

Cliente não deve poder alterar:

- role;
- status administrativo;
- prioridade;
- audit fields;
- ownership.

---

# 125. Paginação

Endpoints de lista devem possuir limite máximo para evitar abuso.

---

# 126. Busca

Busca administrativa pode ser pesada.

Aplicar:

- paginação;
- índices;
- limite;
- autorização.

---

# 127. Chat flooding

Mensagens devem ter:

- limite de tamanho;
- rate limiting;
- restrição de anexos.

---

# 128. Comentário flooding

Comentários também devem ter rate limiting.

---

# 129. Proteção contra spam

Fluxos públicos poderão usar:

- rate limiting;
- verificação de WhatsApp;
- CAPTCHA/Turnstile quando necessário.

Não adicionar serviço externo obrigatório antes de necessidade real.

---

# 130. CAPTCHA

Se usado, deve ser tratado como camada adicional, não única proteção.

---

# 131. Dependência externa de segurança

Segurança principal não deve depender de serviço SaaS externo.

A plataforma deve continuar segura com seus controles próprios.

---

# 132. Incidentes

Todo incidente relevante deve ser registrado.

Exemplos:

- acesso indevido;
- vazamento;
- brute force;
- chave comprometida;
- malware;
- perda de dados;
- alteração não autorizada.

---

# 133. Resposta a incidente

Fluxo mínimo:

```text
detectar
↓
conter
↓
preservar evidências
↓
corrigir
↓
restaurar
↓
revisar
```

---

# 134. Preservação de evidências

Não apagar logs imediatamente durante investigação.

---

# 135. Rotação após incidente

Se houver suspeita de comprometimento:

- trocar senhas;
- revogar sessões;
- rotacionar tokens;
- rotacionar chaves;
- revisar acessos.

---

# 136. Comunicação

Incidentes envolvendo dados pessoais devem ser tratados conforme regras legais aplicáveis e documentação de LGPD.

---

# 137. Logs de segurança

Eventos previstos:

```text
LOGIN_SUCCESS
LOGIN_FAILED
PASSWORD_CHANGED
SESSION_REVOKED
TWO_FACTOR_ENABLED
TWO_FACTOR_FAILED
RATE_LIMIT_TRIGGERED
UPLOAD_REJECTED
PERMISSION_DENIED
```

---

# 138. Severidade

Eventos podem ser classificados:

```text
INFO
WARNING
HIGH
CRITICAL
```

---

# 139. Alertas

Eventos críticos podem gerar alerta administrativo.

---

# 140. Tempo de retenção

A retenção de logs será definida em:

```text
RETENCAO_DADOS.md
```

---

# 141. Gitea

Segurança do fluxo Git:

- usar SSH seguro;
- proteger chave privada;
- não versionar credenciais;
- validar remoto.

Servidor de referência:

```text
andrew@192.168.1.70
```

---

# 142. Três tentativas do Gitea

A regra de até três tentativas vale para falha transitória de conexão/envio.

Não vale para insistir em erro estrutural.

---

# 143. GitHub

Releases e Packages não devem conter:

- `.env`;
- dumps reais;
- segredos;
- chaves.

---

# 144. Imagens Docker

Imagens publicadas não devem conter segredo embutido em camada.

---

# 145. Supply chain

Imagens base devem ser:

- oficiais;
- confiáveis;
- versionadas;
- atualizadas.

---

# 146. Pin de versões

Dependências críticas devem evitar versões totalmente flutuantes em produção.

---

# 147. Lockfile

Lockfile deve ser versionado.

---

# 148. Segredos no histórico Git

Se segredo for commitado por acidente:

- remover do código;
- rotacionar imediatamente;
- tratar histórico conforme necessidade.

Apenas apagar o arquivo no commit seguinte não torna o segredo seguro.

---

# 149. Revisão de segurança

Antes de cada Release relevante, revisar:

```text
auth
permissões
uploads
segredos
migrations
logs
configuração
dependências
```

---

# 150. Checklist mínimo antes de produção

```text
HTTPS ativo
2FA admin ativo
segredos fora do Git
PostgreSQL não público
Redis não público
MinIO protegido
CORS restrito
CSRF tratado
rate limiting ativo
uploads validados
logs ativos
auditoria ativa
backup validado
restore testado
```

---

# 151. Estado atual

Status:

```text
POLÍTICA PLANEJADA
```

As regras deste documento deverão ser implementadas conforme o `ROADMAP.md`.

---

# 152. Regra final

> Segurança na VoltX não será um recurso opcional nem uma etapa final.
>
> Ela deve existir na arquitetura, no código, no banco, na infraestrutura, nos processos e no versionamento desde o início.
