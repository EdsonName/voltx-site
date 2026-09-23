# AVALIAÇÕES — VoltX

## 1. Finalidade

Este documento define o sistema de avaliações de serviços da VoltX.

Ele cobre:

- elegibilidade;
- nota;
- comentário;
- publicação;
- consentimento para depoimento;
- moderação;
- vínculo com serviço e OS.

---

## 2. Princípio

Avaliação representa opinião do cliente sobre um atendimento realmente realizado.

Não deve ser criada livremente por qualquer visitante.

---

## 3. Elegibilidade

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: elegibilidade de atendimento equivalente sem OS. O exemplo não habilita automaticamente qualquer avaliação sem vínculo comprovado.

Preferencialmente, avaliação só pode ser criada quando houver:

```text
OS concluída
ou
atendimento equivalente concluído
```

---

## 4. Um atendimento, uma avaliação principal

Por padrão, uma OS concluída deve permitir uma avaliação principal por cliente.

Edição pode ser permitida conforme regra.

---

## 5. Nota

Escala sugerida:

```text
1 a 5
```

A implementação final deve manter consistência em toda a interface.

---

## 6. Comentário

Comentário pode ser opcional.

Deve possuir limite de tamanho.

---

## 7. Status

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: matriz de transições com estado atual → ação → próximo estado → ator permitido, conforme [REGRAS_NEGOCIO.md](REGRAS_NEGOCIO.md), seção 29. Usar os estados já documentados necessários ao comportamento do módulo, sem inventar novos estados para completar a matriz. Estados específicos de canal não precisam coincidir com os de outros canais.

Conjunto inicial para publicação e moderação documentadas:

```text
PUBLISHED
HIDDEN
REPORTED
REMOVED
```

Não acrescentar estados sem regra de negócio.

---

## 8. Depoimento público

Avaliação não vira depoimento automaticamente.

Deve existir consentimento explícito.

Exemplo:

```text
Permitir publicação como depoimento
```

---

## 9. Consentimento

A autorização `TESTIMONIAL_PUBLICATION` segue [CONSENTIMENTOS.md](CONSENTIMENTOS.md). Booleanos de exibição são projeções do consentimento vigente, nunca autorização independente.

Registrar:

- decisão;
- data;
- versão do texto apresentado.

---

## 10. Identidade pública

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: forma pública do nome e condições de exibição do avatar. Nenhum dos exemplos abaixo foi escolhido nesta etapa.

Se avaliação for exibida publicamente, definir regra clara de nome.

Exemplos possíveis:

```text
João S.
João
Cliente verificado
```

Não expor nome completo sem necessidade.

---

## 11. Avatar

Avatar só deve aparecer publicamente se isso fizer parte da regra de privacidade definida.

---

## 12. Avaliação verificada

Pode existir selo:

```text
Cliente verificado
```

quando vinculada a atendimento real.

---

## 13. Relação com OS

Avaliação deve apontar para OS ou atendimento concluído.

---

## 14. Relação com serviço

Pode apontar também para serviço executado.

---

## 15. Média pública

Média só deve considerar avaliações elegíveis e publicadas conforme regra.

---

## 16. Arredondamento

Definir regra única.

Exemplo:

```text
4,7
```

---

## 17. Poucas avaliações

Não inventar avaliação média quando não houver dados.

---

## 18. Moderação

Conteúdo pode ser ocultado por:

- spam;
- ofensa;
- dados pessoais;
- conteúdo ilegal;
- fraude.

---

## 19. Crítica legítima

Avaliação negativa não deve ser removida apenas por ser negativa.

Moderação deve considerar regra de conteúdo, não conveniência.

---

## 20. Resposta da VoltX

Pode existir resposta pública do responsável.

Deve ser:

- respeitosa;
- profissional;
- sem expor dados privados.

---

## 21. Edição

**DEFINIR ANTES DA IMPLEMENTAÇÃO DO MÓDULO**: janela e condições de edição; não presumir prazo.

Cliente poderá editar avaliação dentro da regra definida.

Histórico pode ser preservado internamente.

---

## 22. Exclusão

Cliente pode solicitar remoção de própria avaliação conforme política.

---

## 23. Denúncia

Avaliações públicas podem ter mecanismo de denúncia.

---

## 24. Incentivo

Se futuramente houver incentivo por avaliação, isso deverá ser claramente informado.

Não manipular nota em troca de benefício oculto.

---

## 25. Ordenação

Pode permitir:

- recentes;
- melhor avaliadas;
- pior avaliadas.

Sem alterar conteúdo.

---

## 26. Painel administrativo

Ações:

```text
Ver avaliação
Responder
Ocultar
Restaurar
Marcar denúncia como resolvida
```

conforme permissão.

---

## 27. Auditoria

Moderação deve registrar:

- ator;
- ação;
- motivo;
- data.

---

## 28. Privacidade

Não publicar:

- telefone;
- e-mail;
- endereço;
- CPF;
- protocolo completo se desnecessário.

---

## 29. SEO

Avaliações públicas poderão gerar dados estruturados somente se forem reais e compatíveis com as diretrizes aplicáveis.

---

## 30. Testes obrigatórios

Cobrir:

- elegibilidade;
- uma avaliação por atendimento;
- edição;
- moderação;
- consentimento de depoimento;
- privacidade;
- cálculo de média.

---

## 31. Regra final

> Avaliações devem representar experiências reais.
>
> Depoimento público exige autorização explícita e nunca deve ser fabricado.
