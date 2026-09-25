# API VoltX — VoltX

Reservado à API NestJS + TypeScript, responsável pela autoridade das regras de negócio, validação, autorização e acesso aos dados. A arquitetura prevê REST em /api/v1, HATEOAS pragmático e Socket.IO/WebSocket. Não deve conter interfaces Next.js nem credenciais versionadas.

Referências: [Arquitetura](../../docs/ARQUITETURA.md).

A fundação NestJS foi iniciada manualmente em ESM, com module e moduleResolution NodeNext. O Nest CLI foi usado somente como referência documental/estrutural, sem instalação ou execução. src contém apenas main.ts (bootstrap) e app.module.ts (AppModule vazio), sem rotas de negócio.

O manifest registra @nestjs/common, @nestjs/core e @nestjs/platform-express 12.1.0, reflect-metadata 0.2.2 e rxjs 7.8.1 como dependências exatas, além de TypeScript 6.0.3 como devDependency exata. RxJS 7.8.1 foi deliberadamente fixado como baseline conservadora da API; versões posteriores poderão ser reavaliadas após homologação executável.

Em 25/09/2026, a base NestJS 12.1.0 foi homologada executavelmente na Etapa 2F.2, com Node 24.21.0 e pnpm 12.6.0: instalação física por frozen lockfile com exit 0 e hash preservado, TypeScript 6.0.3 executado e build ESM/NodeNext concluído com exit 0. A inicialização e o encerramento foram testados manualmente pelo responsável: a aplicação iniciou, a porta HTTP 3000 respondeu 404 (resultado correto, pois não existe GET /), e o processo foi encerrado com liberação da porta. Nenhuma rota artificial foi criada para retornar 200. A homologação cobre somente a fundação; nenhuma funcionalidade de negócio existe e a API completa não está concluída. O único script é build (tsc -p tsconfig.build.json); os tsconfig mantêm strict e target ES2023, compatível com Node 24. A porta 3000 no bootstrap é provisória e não define o contrato final de ambiente.
