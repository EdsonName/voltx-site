# VALIDAÇÃO DE DADOS — VoltX

## 1. Finalidade

Este documento define como a VoltX deverá validar, normalizar e proteger dados recebidos de usuários, administradores, integrações e APIs.

Ele complementa:

- `SEGURANCA.md`;
- `API.md`;
- `DATABASE.md`;
- `CODING_STANDARDS.md`;
- `UX_WRITING.md`.

---

## 2. Regra principal

A validação deverá ocorrer em duas camadas:

```text
Frontend → melhora a experiência
Backend  → garante a regra
```

Nunca confiar apenas na validação do navegador.

---

## 3. Validação, normalização e sanitização

São conceitos diferentes.

### Validação

Responde:

```text
O valor é aceitável?
```

### Normalização

Responde:

```text
Qual é a forma padronizada de armazenar este valor?
```

### Sanitização

Responde:

```text
Este conteúdo precisa ser transformado para não representar risco no contexto em que será usado?
```

Não usar sanitização para destruir dados legítimos.

---

## 4. Ordem recomendada

Fluxo:

```text
entrada
↓
normalização segura
↓
validação
↓
regra de negócio
↓
persistência
↓
escape/sanitização contextual na saída quando necessário
```

---

## 5. Nome de pessoa

Deve aceitar corretamente:

- acentos;
- espaços;
- hífens;
- apóstrofos;
- nomes compostos.

Exemplos válidos:

```text
João da Silva
Ana Júlia
Maria d'Ávila
João-Pedro
```

Não limitar nomes a `[A-Z]`.

---

## 6. Normalização de nomes

Pode:

- remover espaços duplicados;
- remover espaços no início/fim.

Não deve:

- retirar acentos;
- converter tudo para maiúsculas;
- remover apóstrofos;
- remover hífens.

---

## 7. E-mail

Validação deve verificar formato razoável.

Normalização recomendada:

```text
trim
lowercase na parte adequada para uso interno quando tecnicamente seguro
```

Não executar validações exageradas que rejeitem endereços válidos.

---

## 8. E-mail duplicado

Se e-mail for identificador único:

- normalizar antes de consultar;
- aplicar constraint única no banco;
- tratar conflito no backend.

---

## 9. Telefone

Armazenamento preferencial:

```text
E.164
```

Exemplo:

```text
+5561999010739
```

Exibição:

```text
(61) 99901-0739
```

---

## 10. Telefone brasileiro

Validar:

- DDI quando aplicável;
- DDD;
- quantidade de dígitos;
- formato esperado.

Não assumir que máscara visual é o valor persistido.

---

## 11. WhatsApp

O número de WhatsApp poderá ser o mesmo telefone principal ou um campo separado.

Se houver integração externa, utilizar formato normalizado.

---

## 12. CPF

CPF deverá:

- possuir 11 dígitos;
- rejeitar sequências repetidas;
- validar dígitos verificadores.

Exemplos inválidos:

```text
000.000.000-00
111.111.111-11
```

Persistência preferencial:

```text
apenas dígitos
```

Exibição:

```text
***.***.***-12
```

quando não houver necessidade do valor completo.

---

## 13. CPF opcional

CPF só será obrigatório quando a regra de negócio exigir.

Não tornar obrigatório apenas por conveniência.

---

## 14. CEP

Persistência:

```text
somente dígitos
```

Exibição:

```text
72.860-000
```

Validação básica:

```text
8 dígitos
```

Consulta externa não substitui validação local.

---

## 15. Falha na consulta de CEP

Se o serviço externo falhar:

- permitir preenchimento manual;
- não invalidar endereço automaticamente;
- não bloquear fluxo sem necessidade.

---

## 16. Endereço

Campos previstos:

```text
logradouro
número
complemento
bairro
cidade
UF
CEP
referência opcional
```

Número pode aceitar:

```text
S/N
```

quando permitido pela regra.

---

## 17. UF

Armazenar em formato padronizado:

```text
GO
DF
SP
```

---

## 18. Senha

Senha é dado opaco.

Não:

- remover espaços silenciosamente;
- remover caracteres especiais;
- converter caixa;
- aplicar sanitização HTML;
- alterar o valor informado.

Validar apenas regras declaradas.

---

## 19. Confirmação de senha

Campo de confirmação existe apenas para evitar erro de digitação.

Não deve ser persistido.

---

## 20. Slug

Slugs públicos devem ser normalizados.

Exemplo:

```text
Instalação de DR
↓
instalacao-de-dr
```

Slug deve ser único no contexto adequado.

---

## 21. Texto simples

Comentários, títulos e descrições simples devem:

- possuir limite de tamanho;
- aceitar Unicode;
- preservar pontuação legítima;
- ser escapados na saída.

---

## 22. HTML rico

HTML só será aceito onde a funcionalidade permitir explicitamente.

Exemplo:

```text
CMS
```

Aplicar allowlist.

Bloquear:

- `<script>`;
- eventos `on*`;
- `javascript:`;
- conteúdo executável;
- iframes não autorizados.

---

## 23. Hashtags

Regra atual:

```text
máximo de 8 hashtags por publicação
```

Normalizar:

- remover `#`;
- lowercase e remoção de acentos para chave canônica;
- preservar forma visual quando necessário.

---

## 24. Valores monetários

No banco:

```text
NUMERIC
```

Nunca confiar em ponto flutuante binário para cálculo financeiro.

Entrada brasileira:

```text
R$ 1.250,50
```

deve ser convertida corretamente.

---

## 25. Datas e horários

Timezone operacional:

```text
America/Sao_Paulo
```

Banco:

```text
TIMESTAMPTZ
```

Evitar datas ambíguas.

Interface:

```text
22/09/2026 às 14:30
```

---

## 26. Booleanos

Não aceitar ambiguamente:

```text
"yes"
"1"
"on"
```

sem parser definido.

API deve utilizar contrato claro.

---

## 27. Enums

Estados devem ser validados contra conjunto permitido.

Exemplo:

```text
REQUESTED
CONFIRMED
COMPLETED
CANCELLED
```

Nunca aceitar status arbitrário enviado pelo cliente.

---

## 28. IDs

IDs internos esperados como UUID devem ser validados antes do acesso ao banco quando necessário.

---

## 29. Identificadores públicos

Protocolos e OS devem seguir formato documentado.

Exemplos:

```text
VX-2026-000001
ORC-2026-000001
OS-2026-000001
AG-2026-000001
```

O formato não substitui autorização.

---

## 30. Paginação

Seguir [API.md](API.md), seção 14: `page/pageSize` para coleções convencionais; cursor permitido para fluxos sequenciais/temporais.

Parâmetros de paginação devem possuir limites.

Exemplo conceitual:

```text
page >= 1
pageSize >= 1
pageSize <= limite máximo definido
```

---

## 31. Ordenação

Campos de ordenação deverão vir de allowlist.

Nunca transformar valor do usuário diretamente em trecho SQL.

---

## 32. Busca

Limitar tamanho da consulta.

Normalizar espaços.

Não permitir padrões abusivos que sobrecarreguem banco sem controle.

---

## 33. Uploads

Validar:

- tamanho;
- MIME;
- magic bytes;
- extensão;
- autorização;
- finalidade.

Nome do arquivo não é prova de tipo.

---

## 34. Imagens

Formatos permitidos deverão ser definidos por módulo.

Imagens poderão ser reprocessadas.

---

## 35. Documentos

PDF e outros formatos aceitos devem ter regras específicas.

Não aceitar executáveis.

---

## 36. URLs

Validar protocolo.

Para links públicos, permitir preferencialmente:

```text
https://
http://
```

Bloquear esquemas perigosos.

---

## 37. Redirecionamentos

URLs de retorno devem ser verificadas contra destinos permitidos para evitar open redirect.

---

## 38. Códigos de ativação

Devem possuir:

- formato definido;
- expiração;
- limite de tentativas;
- hash no banco.

---

## 39. DTOs

Backend deverá aceitar apenas campos declarados.

Campos extras devem ser descartados ou rejeitados conforme configuração.

Evitar mass assignment.

---

## 40. Erros de validação

Erros de validação usam exclusivamente o envelope `error.code`, `error.message` e lista opcional `error.details` definido em [API.md](API.md), seção 19. Detalhes podem conter `field`, `code` e `message`; omitir `field` quando não houver campo específico.

---

## 41. Mensagens em PT-BR

Toda mensagem visível ao usuário deve seguir `UX_WRITING.md`.

---

## 42. Banco de dados

Constraints importantes devem existir também no banco.

Exemplos:

- unique;
- foreign key;
- not null;
- check quando apropriado.

Validação de aplicação não substitui integridade relacional.

---

## 43. Testes obrigatórios

Cobrir pelo menos:

- CPF válido/inválido;
- telefone;
- CEP;
- e-mail;
- enums;
- limites;
- uploads;
- datas;
- valores monetários.

---

## 44. Regra final

> A VoltX deve validar de forma rigorosa sem destruir dados legítimos.
>
> Segurança vem de validação contextual, autorização e consultas seguras — não de remover caracteres indiscriminadamente.
