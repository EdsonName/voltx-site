# Tipos compartilhados — VoltX

Reservado aos tipos TypeScript usados por mais de uma aplicação, quando o compartilhamento fizer sentido. Não deve expor modelos internos ou dados sensíveis como contratos públicos sem controle, nem concentrar implementação de funcionalidades.

Referências: [Arquitetura](../../docs/ARQUITETURA.md) e [documentação específica](../../docs/CODING_STANDARDS.md).

@voltx/types é reconhecido como membro do workspace pnpm e possui TypeScript 6.0.3 registrado como devDependency exata. Na Etapa 2E, o registro foi feito somente para validar a integração manifest × lockfile, com teste frozen aprovado e sem instalação física de dependências. Nenhum código TypeScript ou tsconfig foi criado e nenhuma compilação foi executada; a implementação do pacote continua pendente.
