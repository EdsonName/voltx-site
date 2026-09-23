# ADR 0004 — Painel administrativo separado do site público

**Status:** Aceito  
**Data:** 22/09/2026

---

## 1. Contexto

A VoltX terá duas experiências web distintas:

```text
site público / área do cliente
painel administrativo
```

O painel possui necessidades próprias:

- CRM;
- clientes;
- chat;
- orçamentos;
- agenda;
- OS;
- CMS;
- auditoria;
- configurações;
- segurança.

Misturar toda a administração dentro da mesma aplicação pública aumentaria acoplamento de navegação e complexidade de autorização.

---

## 2. Decisão

A VoltX terá duas aplicações Next.js separadas dentro do mesmo monorepo.

Estrutura planejada:

```text
apps/
├── site/
└── painel/
```

---

## 3. Domínios previstos

Site:

```text
https://voltx.narrativas.site
```

Painel:

```text
https://painel-voltx.narrativas.site
```

API:

```text
https://api-voltx.narrativas.site
```

---

## 4. Backend compartilhado

Site e painel utilizarão a mesma API NestJS, respeitando autenticação e permissões.

---

## 5. Pacotes compartilhados

Elementos comuns poderão ficar em:

```text
packages/ui
packages/types
packages/config
packages/validation
```

---

## 6. Motivos

Separar o painel oferece:

- navegação própria;
- bundles independentes;
- segurança de interface mais clara;
- ciclo de evolução separado;
- menor risco de misturar páginas privadas e públicas;
- manutenção mais organizada.

---

## 7. Segurança

Separação de aplicação não substitui autorização.

Mesmo no painel, o backend continua validando:

```text
sessão
papel
permissão
recurso
```

---

## 8. SEO

Painel não deve ser indexável.

Mas `robots.txt` não é proteção de acesso.

---

## 9. Design System

Site e painel poderão compartilhar Design System sem serem a mesma aplicação.

---

## 10. Autenticação

A estratégia de sessão deve considerar subdomínios cuidadosamente.

Cookies não deverão ter escopo mais amplo que o necessário.

---

## 11. Alternativas consideradas

### Uma única aplicação Next.js

Seria mais simples inicialmente, mas aumentaria mistura entre rotas públicas, cliente e administração.

### Projetos completamente separados

Reduz compartilhamento e aumenta manutenção de tipos/componentes.

### Microfrontends

Complexidade desnecessária para o estágio atual.

---

## 12. Consequências positivas

- separação clara de responsabilidades;
- deploy independente no futuro;
- UX administrativa própria;
- SEO público mais limpo;
- melhor isolamento conceitual.

---

## 13. Consequências negativas

- dois builds Next.js;
- mais configuração;
- necessidade de compartilhamento bem organizado;
- autenticação entre subdomínios exige cuidado.

---

## 14. Monorepo

A separação será lógica, não necessariamente em repositórios distintos.

---

## 15. Relações

Consultar:

```text
docs/ARQUITETURA.md
docs/PERMISSOES.md
docs/SEGURANCA.md
docs/DEPLOY.md
docs/DESIGN.md
```

---

## 16. Decisão final

> Site público/cliente e painel administrativo serão aplicações Next.js separadas dentro do mesmo monorepo.
