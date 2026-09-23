# ADR 0006 — MinIO como Object Storage principal

**Status:** Aceito
**Data:** 23/09/2026

---

## 1. Contexto

A VoltX precisa armazenar arquivos binários relacionados a diversos módulos:

- avatar de usuário;
- imagens de serviços;
- imagens de capa do blog;
- mídia editorial;
- anexos de chat;
- anexos de orçamento;
- anexos de Ordens de Serviço;
- documentos;
- imagens públicas e privadas.

Esses arquivos não devem ser armazenados diretamente no banco relacional como estratégia principal.

O projeto também definiu que funções essenciais não devem depender obrigatoriamente de serviços SaaS externos.

---

## 2. Decisão

O armazenamento principal de objetos da VoltX será:

```text
MinIO autohospedado
```

O MinIO será executado na infraestrutura controlada pela VoltX, preferencialmente via Docker.

---

## 3. Arquitetura

Fluxo principal:

```text
Aplicação
↓
API NestJS
↓
serviço de mídia
↓
MinIO
```

O banco PostgreSQL armazenará:

- metadata;
- referências;
- vínculos;
- permissões;
- estado;
- identificação do objeto.

O MinIO armazenará:

```text
binários
```

---

## 4. Compatibilidade S3

MinIO utiliza API compatível com S3.

Isso permite manter uma camada de abstração capaz de suportar, no futuro, outras implementações compatíveis.

---

## 5. Independência

A arquitetura não deverá depender diretamente de:

```text
AWS S3
Cloudflare R2
Backblaze B2
outro Object Storage SaaS
```

para funcionar.

Esses serviços poderão ser avaliados futuramente para:

- replicação;
- backup;
- CDN;
- migração;
- contingência.

Mas não serão obrigatórios para o funcionamento central.

---

## 6. Motivos

MinIO foi escolhido por oferecer:

- autohospedagem;
- compatibilidade com S3;
- API madura;
- suporte a buckets;
- signed URLs;
- versionamento quando configurado;
- integração com Docker;
- boa portabilidade;
- separação clara entre metadata e binário.

---

## 7. Estrutura de armazenamento

A estrutura deverá distinguir conteúdo:

```text
público
privado
temporário
```

A definição exata de buckets será feita durante a implementação.

Exemplo conceitual:

```text
voltx-public
voltx-private
voltx-temp
```

---

## 8. Arquivos públicos

Exemplos:

- logo;
- favicon;
- imagens de serviços;
- imagens de posts publicados;
- mídias públicas aprovadas.

Podem ser servidos de forma pública ou por mecanismo controlado adequado.

---

## 9. Arquivos privados

Exemplos:

- anexos de chat;
- documentos de cliente;
- fotos de atendimento;
- anexos de orçamento;
- anexos de OS;
- arquivos administrativos.

Devem exigir autorização.

---

## 10. Signed URLs

Quando apropriado, arquivos privados poderão ser acessados por URL temporária assinada.

A URL deve possuir expiração.

---

## 11. Segurança

O bucket privado não deve ser público.

Conhecer o nome ou caminho do objeto não concede autorização.

---

## 12. Nomes de arquivo

O nome original poderá ser preservado como metadata.

O caminho interno deverá ser gerado pelo sistema.

Exemplo:

```text
media/2026/09/<uuid>.webp
```

---

## 13. Path traversal

Caminhos fornecidos pelo usuário nunca deverão ser usados diretamente.

---

## 14. MIME

O backend deverá validar:

- extensão;
- MIME;
- magic bytes;
- tamanho;
- finalidade.

---

## 15. Status de mídia

Estados conceituais:

```text
UPLOADING
PROCESSING
READY
REJECTED
QUARANTINED
DELETED
```

---

## 16. Processamento

Arquivos podem passar por:

- redimensionamento;
- conversão;
- compressão;
- remoção de metadata;
- geração de thumbnails.

---

## 17. EXIF

Imagens públicas devem ter metadata sensível removida quando não houver necessidade de preservação.

---

## 18. Variantes

A plataforma poderá criar variantes:

```text
thumbnail
small
medium
large
```

sem sobrescrever o original quando o original precisar ser preservado.

---

## 19. Banco e MinIO

Banco guarda referência.

Exemplo conceitual:

```text
media.id
media.storage_key
media.bucket
media.mime_type
media.size
media.status
```

---

## 20. Consistência

Remover registro do banco e deixar binário órfão deve ser evitado.

Remover binário ainda referenciado também deve ser evitado.

---

## 21. Arquivos órfãos

A plataforma poderá possuir rotina de manutenção para detectar objetos sem referência.

Essa rotina não deve apagar automaticamente sem regras seguras.

---

## 22. Exclusão

A exclusão deverá respeitar:

- retenção;
- LGPD;
- histórico;
- vínculos;
- backups.

---

## 23. Backup

MinIO faz parte da estratégia oficial de backup.

Consultar:

```text
docs/BACKUP.md
```

---

## 24. Restore

Banco e Object Storage devem poder ser restaurados de forma coerente.

---

## 25. Rede

O MinIO deverá ficar preferencialmente em rede interna.

Seu console administrativo não deve ser exposto publicamente sem proteção adequada.

---

## 26. Credenciais

Access keys e secret keys não entram no Git.

Usar:

```text
variáveis de ambiente
```

ou mecanismo equivalente seguro.

---

## 27. Alternativas consideradas

### Arquivos no disco local da aplicação

Simples inicialmente, mas cria acoplamento ao host e dificulta crescimento, backup e múltiplas instâncias.

### PostgreSQL para binários

Tecnicamente possível, mas não será a estratégia principal para mídia da VoltX.

### AWS S3

Robusto e maduro, porém criaria dependência externa obrigatória se usado como única base.

### Cloudflare R2

Também é opção válida futura, mas externa.

### Backblaze B2

Pode ser útil futuramente para backup ou armazenamento secundário.

---

## 28. Consequências positivas

- autohospedagem;
- controle dos arquivos;
- independência de SaaS;
- compatibilidade S3;
- signed URLs;
- separação clara entre banco e binário;
- facilidade de migração futura.

---

## 29. Consequências negativas

A VoltX assume responsabilidade por:

- capacidade;
- backup;
- atualização;
- segurança;
- disponibilidade;
- monitoramento;
- restore.

Essa responsabilidade é aceita.

---

## 30. Abstração

O código não deverá espalhar chamadas específicas do MinIO por toda a aplicação.

Preferir uma abstração como:

```text
StorageService
```

ou equivalente.

---

## 31. Interface conceitual

Exemplo:

```text
upload()
delete()
getSignedUrl()
getMetadata()
copy()
```

A assinatura final será definida na implementação.

---

## 32. Migração futura

Se houver migração para outro backend compatível com S3, o domínio da aplicação não deverá precisar ser reescrito por completo.

---

## 33. CDN

Pode ser adicionada futuramente para arquivos públicos.

Não é requisito inicial.

---

## 34. Testes

Cobrir:

- upload válido;
- MIME falso;
- tamanho;
- arquivo privado;
- signed URL;
- autorização;
- exclusão;
- falha do storage;
- objeto inexistente;
- restore quando aplicável.

---

## 35. Relações

Consultar:

```text
docs/MIDIA_UPLOADS.md
docs/ARQUITETURA.md
docs/SEGURANCA.md
docs/BACKUP.md
docs/DEPLOY.md
docs/DATABASE.md
```

---

## 36. Decisão final

> A VoltX utilizará MinIO autohospedado como Object Storage principal, mantendo PostgreSQL como fonte de metadata e autorização.
