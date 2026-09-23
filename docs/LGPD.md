# LGPD — VoltX

## 1. Finalidade

Este documento define como a plataforma VoltX deverá tratar dados pessoais de forma técnica, organizada e auditável.

Ele orienta:

- coleta;
- armazenamento;
- uso;
- compartilhamento;
- consentimento;
- acesso;
- correção;
- exportação;
- retenção;
- anonimização;
- exclusão;
- segurança;
- auditoria;
- marketing;
- integrações externas.

> Este documento é uma especificação técnica e operacional do projeto. Ele não substitui revisão jurídica antes da entrada em produção.

---

## 2. Princípio geral

A VoltX deverá coletar e tratar apenas os dados necessários para:

- criar e manter a conta;
- atender clientes;
- gerar orçamentos;
- criar protocolos;
- criar Ordens de Serviço;
- realizar agendamentos;
- manter histórico de atendimento;
- operar o chat;
- enviar notificações;
- cumprir obrigações legais aplicáveis;
- manter segurança e auditoria;
- enviar comunicações de marketing quando houver permissão válida.

---

## 3. Minimização de dados

Não coletar dados apenas porque “podem ser úteis no futuro”.

Antes de criar novo campo, responder:

```text
Por que precisamos desse dado?
Onde ele será usado?
Por quanto tempo?
Quem poderá acessá-lo?
Ele é obrigatório?
```

---

## 4. Dados previstos na VoltX

A plataforma poderá tratar, conforme o fluxo:

- nome;
- e-mail;
- telefone;
- WhatsApp;
- CPF quando necessário;
- endereço;
- CEP;
- foto de perfil;
- identidade de gênero;
- preferências visuais;
- consentimentos;
- protocolos;
- orçamentos;
- Ordens de Serviço;
- agendamentos;
- mensagens de chat;
- anexos;
- fotos de atendimento;
- avaliações;
- dados de sessão;
- IP;
- user-agent;
- eventos de segurança;
- histórico administrativo.

---

## 5. Dados que não devem ser coletados sem necessidade

Evitar coleta desnecessária de:

- documentos extras;
- localização precisa contínua;
- informações bancárias fora de fluxo específico;
- dados médicos;
- informações íntimas;
- dados biométricos;
- dados de terceiros sem justificativa.

---

## 6. Dados sensíveis

Se algum dado sensível vier a ser tratado futuramente, isso exigirá análise específica de:

- necessidade;
- base legal;
- segurança;
- acesso;
- retenção;
- documentação.

---

## 7. Identidade de gênero

A VoltX poderá possuir campo de identidade de gênero conforme requisito do cadastro.

Deve existir a opção:

```text
Prefiro não informar
```

Esse dado:

- não deve definir tema automaticamente;
- não deve ser usado para discriminação;
- não deve ser exposto publicamente sem escolha explícita;
- deve possuir acesso restrito.

---

## 8. Foto de perfil

A foto será enviada pelo próprio usuário a partir do dispositivo.

Não usar URL externa como origem principal.

A foto poderá ser:

- removida;
- substituída;
- processada em diferentes tamanhos;
- armazenada em Object Storage.

---

## 9. Consentimentos

Consentimentos deverão ser persistidos no banco.

Tabela planejada:

```text
consents
```

Campos previstos:

```text
user_id
consent_type
version
granted
granted_at
revoked_at
source
```

Tipos previstos:

```text
TERMS
PRIVACY
MARKETING_EMAIL
MARKETING_WHATSAPP
COOKIES
```

---

## 10. Termos e Política de Privacidade

Aceites devem registrar:

- usuário;
- documento;
- versão;
- data;
- origem;
- IP quando aplicável;
- user-agent quando aplicável.

Documentos legais deverão possuir versão própria.

Exemplo:

```text
Política de Privacidade 1.0
Termos de Uso 1.0
```

---

## 11. Atualização de documento legal

Quando Política ou Termos mudarem significativamente:

- criar nova versão;
- manter versão anterior no histórico;
- registrar qual versão cada usuário aceitou;
- solicitar novo aceite quando necessário.

---

## 12. Marketing

Marketing deve ser separado da prestação do serviço.

O usuário não deve ser obrigado a aceitar marketing para utilizar a plataforma.

Preferências distintas:

```text
Receber novidades por e-mail
Receber novidades pelo WhatsApp
```

Essas opções devem iniciar desmarcadas.

---

## 13. Comunicações operacionais

Mensagens necessárias ao funcionamento do serviço são diferentes de marketing.

Exemplos:

- confirmação de agendamento;
- alteração de orçamento;
- aviso de mensagem;
- recuperação de senha;
- atualização de atendimento.

---

## 14. Área de Privacidade

A conta do cliente deverá possuir uma área:

```text
Privacidade e dados
```

Recursos previstos:

- visualizar dados;
- corrigir dados;
- gerenciar consentimentos;
- preferências de marketing;
- solicitar exportação;
- solicitar exclusão da conta.

---

## 15. Acesso aos próprios dados

O cliente deve conseguir visualizar os dados principais associados à conta.

Isso inclui, quando aplicável:

- perfil;
- endereços;
- protocolos;
- orçamentos;
- OS;
- agendamentos;
- consentimentos;
- histórico de atendimento.

---

## 16. Correção de dados

Dados editáveis devem poder ser corrigidos pelo cliente ou pelo administrador autorizado.

Alterações sensíveis poderão exigir:

- confirmação;
- senha;
- reautenticação;
- auditoria.

---

## 17. Exportação de dados

O usuário poderá solicitar exportação.

Endpoint planejado:

```text
POST /api/v1/me/privacy/export
```

Formatos possíveis:

```text
JSON
CSV
ZIP
```

Exportações grandes poderão ser processadas em background.

Fluxo:

```text
solicitação
↓
processamento
↓
arquivo temporário
↓
download autenticado
↓
expiração
```

O arquivo não deve ser público.

---

## 18. Exclusão de conta

A conta deverá possuir opção para solicitar exclusão.

Endpoint planejado:

```text
POST /api/v1/me/privacy/deletion-request
```

A exclusão deverá considerar:

- obrigações legais;
- retenção necessária;
- prevenção de fraude;
- auditoria;
- defesa de direitos;
- histórico operacional.

Não definir prazo de retenção arbitrário sem validação jurídica.

---

## 19. Status da exclusão

Estados possíveis:

```text
REQUESTED
CONFIRMED
IN_REVIEW
SCHEDULED
COMPLETED
REJECTED_WITH_REASON
```

A interface deve traduzir para PT-BR.

---

## 20. Reautenticação

Antes de confirmar ações sensíveis, como exclusão, poderá ser exigido:

- login recente;
- senha atual;
- 2FA quando existir.

---

## 21. Período de recuperação

Um período de recuperação poderá existir no futuro.

Essa decisão só deve ser implementada com:

- regra documentada;
- prazo definido;
- transparência ao usuário;
- validação jurídica.

---

## 22. Anonimização

Quando um registro histórico precisar permanecer, dados identificáveis poderão ser anonimizados quando aplicável.

Exemplo:

```text
Nome: Cliente anonimizado
E-mail: removido
Telefone: removido
Avatar: removido
```

---

## 23. Retenção

Não criar prazo universal para todos os dados.

Cada categoria deverá possuir política própria.

Exemplos:

```text
conta
sessões
logs
auditoria
chat
orçamentos
OS
agendamentos
backups
consentimentos
```

Documento futuro:

```text
docs/RETENCAO_DADOS.md
```

Esse documento deverá definir:

- categoria;
- finalidade;
- prazo;
- justificativa;
- destino após o prazo;
- anonimização;
- exclusão.

---

## 24. Backups

Excluir ou anonimizar um dado na base principal não significa que ele desaparece instantaneamente de backups históricos.

A política deverá definir:

- retenção de backups;
- ciclo de expiração;
- restauração;
- tratamento posterior quando necessário.

---

## 25. Acesso administrativo

Administradores devem acessar apenas os dados necessários à função.

Papéis e permissões devem limitar acesso.

Ações sensíveis devem gerar auditoria.

---

## 26. Audit log

A auditoria deve registrar quando aplicável:

- ator;
- ação;
- recurso;
- identificador;
- data;
- IP;
- valores alterados.

Nunca registrar:

- senha;
- hash de senha;
- token;
- código de 2FA;
- chave privada.

---

## 27. Segurança

Medidas técnicas incluem:

- HTTPS;
- Argon2id;
- 2FA administrativo;
- RBAC;
- rate limiting;
- validação;
- uploads seguros;
- SQL parametrizado;
- proteção XSS;
- CSRF;
- CORS;
- logs;
- auditoria;
- backups;
- controle de sessão.

---

## 28. Infraestrutura autohospedável

Dados principais serão mantidos em infraestrutura controlada pela VoltX.

Componentes centrais:

```text
PostgreSQL
Redis
MinIO
```

deverão ser autohospedáveis.

---

## 29. Serviços externos

Algumas integrações podem envolver terceiros.

Exemplos:

- WhatsApp Business;
- e-mail;
- consulta de CEP.

Essas integrações devem receber apenas os dados necessários.

A indisponibilidade desses serviços não deve comprometer os dados centrais da plataforma.

---

## 30. WhatsApp

Evitar enviar dados excessivos.

Mensagens podem incluir:

- nome;
- protocolo;
- orçamento;
- OS;
- agendamento;
- descrição necessária.

Não incluir dados sensíveis sem necessidade.

---

## 31. E-mail

Nunca enviar:

- senha;
- token permanente;
- dados desnecessários.

Links de recuperação devem ser temporários.

---

## 32. CEP

Consulta externa de CEP deve preferir enviar apenas:

```text
CEP
```

Não enviar nome, telefone ou outros dados junto.

---

## 33. Object Storage

Arquivos pessoais devem possuir controle de acesso.

Não deixar buckets privados expostos publicamente.

Arquivos privados poderão usar:

```text
signed URLs
```

com expiração.

---

## 34. Chat

Mensagens fazem parte do histórico de atendimento.

Encerrar protocolo não apaga a conversa.

Anexos devem seguir:

- validação;
- controle de acesso;
- retenção;
- exclusão/anonimização quando aplicável.

---

## 35. Comentários públicos

Comentários publicados podem ser visíveis publicamente.

O usuário deverá ser informado desse contexto.

---

## 36. Avaliações e depoimentos

Avaliação de serviço não deve virar depoimento público automaticamente.

Deve existir consentimento explícito:

```text
Permitir publicação como depoimento
```

---

## 37. Dados acadêmicos

Dados acadêmicos apresentados no site serão controlados pelo administrador.

A exibição do Registro Universitário deverá poder ser ativada ou desativada.

---

## 38. Cookies

A VoltX deverá documentar cookies utilizados.

Documento futuro:

```text
docs/COOKIES.md
```

Cookies essenciais devem ser separados de cookies opcionais.

---

## 39. Analytics

Não adicionar ferramenta de analytics invasiva por padrão.

Qualquer solução futura deve ser avaliada quanto a:

- dados coletados;
- terceiros;
- cookies;
- consentimento;
- retenção.

---

## 40. Logs técnicos

Logs podem conter:

- IP;
- user-agent;
- rota;
- resultado;
- horário.

Devem ser protegidos e possuir retenção definida.

---

## 41. Pré-cadastro administrativo

O administrador poderá criar pré-cadastro para cliente sem conta.

Somente dados necessários devem ser coletados.

O código de ativação deve ser:

- temporário;
- de uso único;
- armazenado por hash;
- limitado por tentativas.

---

## 42. Duplicidade

Antes de criar novo cliente, verificar se já existe conta compatível.

Evitar duplicação de dados pessoais.

---

## 43. CPF

CPF só deverá ser coletado quando necessário ao fluxo.

Não tornar obrigatório por conveniência sem justificativa.

---

## 44. Mascaramento

Onde possível, exibir:

```text
***.***.***-12
******0739
e***@dominio.com
```

em contextos que não precisem do valor completo.

---

## 45. API

DTOs devem limitar campos retornados.

Nunca retornar:

- password_hash;
- session_token_hash;
- activation_code_hash;
- segredo de 2FA.

---

## 46. Consentimento revogado

Revogação deve registrar:

```text
revoked_at
```

e interromper usos futuros baseados naquele consentimento.

Antes de processar campanha, verificar o consentimento atual.

---

## 47. Histórico de consentimento

Não sobrescrever o histórico.

É importante saber:

```text
quando aceitou
qual versão
quando revogou
```

---

## 48. Solicitações de privacidade

Solicitações relevantes devem possuir identificador rastreável.

O cliente deve conseguir acompanhar solicitações que dependam de processamento.

---

## 49. Exclusão concluída

Após concluir o processo:

- revogar sessões;
- remover acesso;
- anonimizar/excluir conforme política;
- registrar auditoria;
- comunicar conclusão quando apropriado.

---

## 50. Conta suspensa e conta anonimizada

Suspensão não equivale a exclusão.

Conta anonimizada não deve permitir login normal.

---

## 51. Incidentes de dados

Incidentes relacionados a dados pessoais devem seguir `SEGURANCA.md`.

Fluxo:

```text
detectar
↓
conter
↓
avaliar
↓
preservar evidências
↓
corrigir
↓
documentar
```

---

## 52. Documentos relacionados

Devem existir:

```text
docs/POLITICA_PRIVACIDADE.md
docs/TERMOS_DE_USO.md
docs/RETENCAO_DADOS.md
docs/CONSENTIMENTOS.md
docs/COOKIES.md
```

---

## 53. Não inventar prazos

Agentes e desenvolvedores não devem inventar períodos de retenção.

Se um prazo não estiver documentado:

```text
consultar RETENCAO_DADOS.md
ou
solicitar definição
```

---

## 54. Não inventar consentimentos

Não adicionar checkbox genérico de “aceito tudo”.

Consentimentos diferentes devem permanecer separados quando possuírem finalidades diferentes.

---

## 55. Texto claro

Preferir:

```text
Quero receber novidades da VoltX por WhatsApp.
```

Evitar linguagem desnecessariamente confusa.

---

## 56. Dark patterns

Não usar interface para pressionar o usuário a aceitar consentimentos opcionais.

Evitar:

- botão de recusa escondido;
- texto confuso;
- checkbox previamente marcado;
- cores que dificultem negar.

---

## 57. Dados de produção em desenvolvimento

Dados reais de produção não devem ser copiados para desenvolvimento sem anonimização adequada.

Testes devem usar dados fictícios.

---

## 58. Dumps

Dumps de produção:

- não entram no Git;
- devem ser protegidos;
- devem seguir retenção;
- devem ser criptografados quando necessário.

---

## 59. Terceiros

Antes de adicionar novo fornecedor, revisar:

- quais dados serão enviados;
- finalidade;
- segurança;
- retenção;
- possibilidade de substituição;
- documentação pública necessária.

---

## 60. Documentação viva

Se a implementação mudar o tratamento de dados:

```text
código
+
LGPD.md
+
Política de Privacidade
+
documentação relacionada
```

devem ser revisados juntos.

---

## 61. Checklist antes da produção

```text
Política de Privacidade publicada
Termos de Uso publicados
consentimentos versionados
marketing separado
exportação funcionando
exclusão funcionando
retenção definida
auditoria funcionando
segurança validada
backups protegidos
terceiros documentados
```

---

## 62. Avaliação jurídica

Antes da produção, validar juridicamente:

- textos da Política de Privacidade;
- Termos de Uso;
- bases legais;
- prazos de retenção;
- tratamento de CPF;
- identidade de gênero;
- cookies;
- marketing;
- incidentes;
- compartilhamentos.

---

## 63. Estado atual

Status:

```text
POLÍTICA TÉCNICA EM DOCUMENTAÇÃO
```

Prazos legais específicos e textos jurídicos finais ainda deverão ser validados antes da produção.

---

## 64. Regra final

> Privacidade na VoltX deve ser parte da arquitetura, e não apenas uma página no rodapé.
>
> Todo dado pessoal deve possuir finalidade, proteção, acesso controlado e ciclo de vida definido.
