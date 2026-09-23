# MÍDIA E UPLOADS — VoltX

## 1. Finalidade

Este documento define o sistema de uploads e armazenamento de mídia da VoltX.

Ele cobre:

- imagens;
- vídeos;
- documentos;
- anexos;
- avatars;
- mídia de serviços;
- blog;
- chat;
- segurança;
- Object Storage.

---

## 2. Infraestrutura

Armazenamento principal planejado:

```text
MinIO autohospedado
```

compatível com API S3.

---

## 3. Regra de independência

AWS S3, R2 ou equivalentes podem ser opções futuras.

Não serão dependência obrigatória do sistema central.

---

## 4. Upload local

Usuário seleciona arquivo do dispositivo.

Não depender de:

```text
cole uma URL
```

como método principal.

---

## 5. Fluxo

```text
seleção
↓
validação inicial
↓
upload
↓
validação backend
↓
armazenamento
↓
registro no banco
↓
variantes/processamento
```

---

## 6. Fonte de verdade

Banco guarda metadata e vínculo.

Object Storage guarda o binário.

---

## 7. Entidade de mídia

Campos conceituais:

- id;
- owner_id;
- storage_key;
- original_name;
- mime_type;
- size;
- width;
- height;
- checksum;
- status;
- created_at.

---

## 8. Nome original

Pode ser preservado como metadata.

Nunca usar diretamente como caminho confiável.

---

## 9. Storage key

Gerar internamente.

Exemplo:

```text
media/2026/09/<uuid>.webp
```

---

## 10. Buckets

Separar quando útil:

```text
public
private
temporary
```

A estrutura final deverá ser documentada na implementação.

---

## 11. Acesso privado

Arquivos privados não devem ser públicos por padrão.

---

## 12. Signed URL

Pode ser usada para acesso temporário.

---

## 13. Validação

Backend deve validar:

- tamanho;
- MIME;
- magic bytes;
- extensão;
- autorização;
- finalidade.

---

## 14. Extensão

Extensão do nome não é prova de tipo.

---

## 15. Imagens

Formatos iniciais podem incluir:

```text
JPEG
PNG
WEBP
```

Outros formatos somente quando houver necessidade.

---

## 16. Vídeos

Vídeo deve ter:

- limite de tamanho;
- formatos permitidos;
- validação;
- processamento futuro quando necessário.

---

## 17. Documentos

PDF pode ser permitido em fluxos específicos.

Executáveis não.

---

## 18. Avatar

Avatar deverá ser:

- imagem;
- recortável;
- redimensionado;
- substituível;
- removível.

---

## 19. Variantes

Pode gerar:

```text
thumbnail
small
medium
large
```

quando necessário.

---

## 20. Formato otimizado

Imagens podem ser convertidas para formato otimizado mantendo original quando fizer sentido.

---

## 21. Orientação EXIF

Corrigir orientação visual quando necessário.

---

## 22. Metadata sensível

EXIF pode conter localização.

Remover metadata desnecessária antes de publicar imagem.

---

## 23. Checksum

Pode ser usado para:

- integridade;
- deduplicação controlada.

---

## 24. Duplicidade

Não deduplicar arquivos privados entre usuários de forma que gere vazamento.

---

## 25. Status

Exemplo:

```text
UPLOADING
PROCESSING
READY
REJECTED
QUARANTINED
DELETED
```

---

## 26. Quarentena

Arquivo suspeito não deve ser servido ao usuário final.

---

## 27. Antivírus

Pode ser adicionado futuramente como camada adicional.

Não depender de SaaS externo obrigatório.

---

## 28. Upload incompleto

Uploads interrompidos devem poder ser limpos.

---

## 29. Arquivos órfãos

Rotina deve identificar mídia sem referência quando apropriado.

Não apagar automaticamente sem regra segura.

---

## 30. Exclusão

Remoção deve considerar:

- referência;
- histórico;
- retenção;
- soft delete;
- Object Storage.

---

## 31. Blog

Mídia editorial pode ser pública.

---

## 32. Chat

Anexos de chat são privados.

---

## 33. Serviços

Galerias de serviço podem ser públicas.

---

## 34. Orçamentos/OS

Anexos podem ser privados.

---

## 35. Permissões

Antes de entregar arquivo privado, verificar:

```text
usuário
recurso
permissão
```

---

## 36. Path traversal

Nunca aceitar caminho de arquivo fornecido diretamente pelo usuário.

---

## 37. Download

Responder com headers corretos.

Evitar interpretação executável indevida.

---

## 38. Limites

Limites devem ser definidos por tipo de mídia e módulo.

Não usar um único limite arbitrário para tudo.

---

## 39. Nginx

Pode aplicar limite de upload complementar.

Backend continua validando.

---

## 40. Backups

Object Storage deve participar da estratégia de backup.

---

## 41. Restore

Restaurar banco sem mídia correspondente pode quebrar referências.

Backups devem considerar consistência entre ambos.

---

## 42. CDN

Pode existir futuramente para conteúdo público.

Não é requisito inicial.

---

## 43. SEO

Imagens públicas devem possuir:

- alt text;
- dimensões;
- compressão adequada.

---

## 44. Testes obrigatórios

Cobrir:

- arquivo válido;
- MIME falso;
- extensão falsa;
- tamanho;
- permissão;
- signed URL;
- exclusão;
- variantes;
- arquivos privados.

---

## 45. Regra final

> Arquivo enviado pelo usuário é sempre entrada não confiável.
>
> O MinIO guarda os binários; o banco controla quem pode usá-los e para quê.
