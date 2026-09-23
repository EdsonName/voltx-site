# CONFIGURAÇÕES DE NEGÓCIO — VoltX

## 1. Finalidade

Este documento define as configurações centrais de negócio da VoltX.

Ele estabelece quais dados devem ser administráveis pelo painel e reutilizados dinamicamente em:

- site público;
- área do cliente;
- painel administrativo;
- orçamentos;
- agendamentos;
- e-mails;
- WhatsApp;
- SEO;
- documentos;
- integrações.

---

## 2. Princípio

Informações institucionais e operacionais da VoltX não devem ficar espalhadas e hardcoded em vários arquivos.

A plataforma deverá possuir uma fonte central de configuração.

---

## 3. Fonte de verdade

As configurações de negócio devem ser persistidas no banco.

Exemplo conceitual:

```text
business_settings
business_profile
business_hours
business_exceptions
```

A modelagem final deverá seguir `DATABASE.md`.

---

## 4. Dados institucionais

Campos possíveis:

```text
nome da marca
nome do responsável
descrição curta
descrição completa
telefone
WhatsApp
e-mail
endereço
cidade
UF
CEP
logo
favicon
```

---

## 5. Dados profissionais

Podem incluir:

```text
nome profissional
área de atuação
formação
instituição
previsão de conclusão
registro universitário
```

A exibição pública de dados acadêmicos deve ser configurável.

---

## 6. Registro universitário

A plataforma deverá permitir:

```text
Exibir registro universitário
Sim / Não
```

Não hardcodar visibilidade.

---

## 7. Telefone

Telefone público deve vir da configuração central.

Exibição:

```text
(61) 99901-0739
```

Armazenamento interno:

```text
E.164
```

quando apropriado.

---

## 8. WhatsApp

Pode ser configurado separadamente do telefone principal.

Campos:

```text
número
ativo
mensagem padrão
```

---

## 9. E-mail público

Deve ser configurável pelo painel.

Não duplicar o endereço em vários componentes.

---

## 10. Endereço da VoltX

Pode incluir:

- logradouro;
- número;
- complemento;
- bairro;
- cidade;
- UF;
- CEP.

A exibição pública depende da decisão de negócio.

---

## 11. Área de atendimento

A VoltX poderá configurar uma área habitual de atendimento.

Exemplos:

```text
Novo Gama
Gama
Santa Maria
Entorno do DF
Brasília
```

A lista real deve ser administrável.

---

## 12. Fora da área habitual

Endereço fora da área configurada não deve ser rejeitado automaticamente.

Mensagem:

```text
Este endereço está fora da nossa área habitual de atendimento.
A disponibilidade será avaliada.
```

---

## 13. Horários de atendimento

Horários devem vir do banco.

Exemplo:

```text
Segunda a sexta
08:00–18:00
```

Não hardcodar como regra permanente.

---

## 14. Horários por dia

Cada dia pode possuir configuração própria.

Exemplo:

```text
segunda  08:00–18:00
terça   08:00–18:00
quarta  08:00–18:00
quinta  08:00–18:00
sexta   08:00–18:00
sábado  08:00–12:00
domingo fechado
```

---

## 15. Exceções

Podem existir:

- feriados;
- folgas;
- compromissos;
- férias;
- indisponibilidade temporária.

---

## 16. Suspensão de agenda

Configuração:

```text
accept_new_appointments
```

Quando desativada, novos agendamentos ficam suspensos.

---

## 17. Mensagem de suspensão

Texto deve ser configurável.

Exemplo:

```text
No momento não há novos horários disponíveis.
Você ainda pode falar conosco pelo WhatsApp.
```

---

## 18. Orçamentos

Pode haver configuração:

```text
accept_public_quotes
```

para permitir ou suspender novas solicitações públicas.

---

## 19. Chat

Configurações possíveis:

```text
chat_enabled
chat_status
default_chat_message
```

---

## 20. Status de atendimento

Exemplos:

```text
ONLINE
AWAY
BUSY
OFFLINE
```

Interface em PT-BR.

---

## 21. Mensagem do chat para visitante

Configuração possível:

```text
Entre na sua conta para usar o chat da VoltX.
```

---

## 22. Tema institucional

A identidade visual principal deverá ser configurada conforme `DESIGN.md`.

Não permitir alterações arbitrárias que quebrem Design System.

---

## 23. Logo

Logo principal deve ser armazenada no sistema de mídia.

---

## 24. Favicon

Também deve ser configurável.

---

## 25. Imagem social

Pode existir imagem padrão para:

```text
Open Graph
compartilhamento
```

---

## 26. Redes sociais

Campos opcionais:

```text
Instagram
LinkedIn
GitHub
YouTube
```

Só exibir quando configurados.

---

## 27. SEO institucional

Campos:

```text
site_title
site_description
default_og_image
canonical_base_url
```

---

## 28. Domínio público

Produção planejada:

```text
https://voltx.narrativas.site
```

A URL base deve vir de ambiente/configuração apropriada.

---

## 29. Painel

Produção planejada:

```text
https://painel-voltx.narrativas.site
```

---

## 30. API

Produção planejada:

```text
https://api-voltx.narrativas.site
```

---

## 31. URLs técnicas

Domínios e endpoints técnicos sensíveis podem vir de variáveis de ambiente, não necessariamente do banco.

---

## 32. Configuração versus segredo

Configuração de negócio:

```text
telefone
horário
logo
mensagem
```

Segredo:

```text
API key
senha
token
chave privada
```

Segredos nunca devem ser armazenados como simples configuração administrativa pública.

---

## 33. Integrações

O painel poderá indicar:

```text
WhatsApp configurado
E-mail configurado
CEP configurado
```

sem exibir segredo.

---

## 34. E-mail

Configurações públicas:

```text
nome do remetente
e-mail público
```

Credenciais ficam em ambiente seguro.

---

## 35. WhatsApp

Número público pode ficar no banco.

Token de API deve permanecer protegido.

---

## 36. CEP

Pode existir configuração de provedor.

A chave, se houver, deve ficar protegida.

---

## 37. Notificações

Configurações gerais podem controlar:

```text
e-mail operacional
WhatsApp operacional
notificações internas
```

---

## 38. Marketing

Marketing não deve ser habilitado globalmente ignorando consentimento individual.

---

## 39. Serviços

Serviços são entidades próprias e não devem ser configurados como simples JSON genérico dentro de `business_settings`.

---

## 40. Categorias

O mesmo vale para categorias e conteúdo editorial.

---

## 41. Valores monetários

Não armazenar preço de serviço fixo dentro de configuração genérica quando houver entidade própria.

---

## 42. Preferências de negócio

Configuração central pode armazenar comportamentos simples.

Exemplo:

```text
allow_guest_quotes
show_academic_id
accept_new_appointments
chat_enabled
```

---

## 43. Tipagem

Não criar tabela de chave/valor totalmente sem tipo para tudo.

Preferir schema explícito quando a configuração tiver importância estrutural.

---

## 44. JSONB

Pode ser usado para configurações flexíveis específicas, mas com parcimônia.

---

## 45. Cache

Configuração pode ser cacheada.

Alterações precisam invalidar cache.

---

## 46. Redis

Redis pode guardar cache temporário das configurações.

PostgreSQL continua sendo fonte de verdade.

---

## 47. Atualização

Mudança administrativa deve:

```text
validar
↓
persistir
↓
invalidar cache
↓
auditar
```

---

## 48. Auditoria

Alterações devem registrar:

- usuário;
- data;
- campo;
- valor anterior;
- novo valor.

Segredos nunca entram em auditoria em texto puro.

---

## 49. Permissões

Somente papéis autorizados podem alterar configurações.

Exemplo:

```text
settings:read
settings:update
settings:critical
```

---

## 50. Configurações críticas

Exemplos:

- domínio;
- autenticação;
- integrações;
- segurança;
- retenção.

Podem exigir permissão superior.

---

## 51. Configurações operacionais

Exemplos:

- horário;
- agenda;
- telefone;
- WhatsApp;
- mensagem pública.

Podem ser gerenciadas por ADMIN conforme regra.

---

## 52. Preview

Alterações visuais podem ter preview antes de salvar.

---

## 53. Validação

Não aceitar:

- telefone inválido;
- URL inválida;
- horário inconsistente;
- mensagem acima do limite;
- mídia inexistente.

---

## 54. Horários inválidos

Impedir:

```text
fim antes do início
```

salvo regra especial documentada.

---

## 55. Timezone

Timezone padrão:

```text
America/Sao_Paulo
```

Pode ser configuração explícita, mas mudança exige cautela.

---

## 56. Formato de data

Interface:

```text
DD/MM/AAAA
```

---

## 57. Moeda

Padrão atual:

```text
BRL
```

Interface:

```text
R$ 120,00
```

---

## 58. Idioma

Padrão:

```text
pt-BR
```

---

## 59. Configuração inicial

O sistema deverá possuir processo explícito de configuração inicial.

Não depender de valores ocultos no código.

---

## 60. Defaults seguros

Defaults devem manter o sistema utilizável sem habilitar comportamento arriscado.

Exemplo:

```text
marketing: desativado
agenda: configuração explícita
chat: configuração explícita
```

---

## 61. Seed de produção

Dados institucionais podem ser inicializados com mecanismo controlado, mas depois devem ser administráveis.

---

## 62. Migrações

Mudanças estruturais em configuração devem acompanhar migration quando necessário.

---

## 63. Histórico

Não apagar histórico importante ao renomear campo.

---

## 64. API pública

Só expor configurações realmente públicas.

Exemplo:

```text
nome
telefone público
WhatsApp
horários
redes sociais
```

---

## 65. API privada

Configurações administrativas ficam em endpoints autenticados.

---

## 66. Nunca expor

Não retornar em endpoint público:

- token;
- senha;
- segredo;
- credencial;
- chave privada;
- configuração interna sensível.

---

## 67. Relação com footer

Footer deve buscar:

- contatos;
- redes;
- dados institucionais;

da configuração central.

---

## 68. Relação com header

Header pode usar:

- nome;
- logo;
- chat status;

conforme necessidade.

---

## 69. Relação com Sobre

Página Sobre poderá usar:

- perfil profissional;
- dados acadêmicos;
- foto;
- descrição;
- visibilidade do RU.

---

## 70. Relação com orçamento

Orçamento pode usar:

- nome da empresa;
- contato;
- identidade visual;
- dados institucionais.

---

## 71. Relação com e-mail

Templates devem obter dados institucionais da configuração.

---

## 72. Relação com WhatsApp

Links e mensagens podem usar número configurado.

---

## 73. Relação com SEO

Metadata institucional deve usar configuração central.

---

## 74. Falha de configuração

Se configuração obrigatória estiver ausente, o painel deve mostrar erro claro.

Não usar valor inventado silenciosamente.

---

## 75. Health check

Configuração crítica ausente pode tornar health check degradado.

---

## 76. Backup

Configurações de negócio fazem parte do PostgreSQL e entram no backup.

---

## 77. Exportação

Pode existir função administrativa de exportar configurações não sensíveis.

---

## 78. Importação

Não permitir importação destrutiva sem validação.

---

## 79. Ambientes

Configuração de negócio pode variar entre ambientes.

Dados de produção não devem ser copiados cegamente para desenvolvimento.

---

## 80. Testes

Cobrir:

- leitura;
- alteração;
- validação;
- cache;
- permissões;
- auditoria;
- API pública;
- segredos não expostos.

---

## 81. Regra final

> A VoltX deve possuir uma fonte central e confiável para seus dados institucionais e operacionais.
>
> Telefone, horários, identidade visual e regras simples de negócio não devem ficar duplicados e hardcoded pelo projeto.
