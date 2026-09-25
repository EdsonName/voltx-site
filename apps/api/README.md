# API VoltX — VoltX

Reservado à API NestJS + TypeScript, responsável pela autoridade das regras de negócio, validação, autorização e acesso aos dados. A arquitetura prevê REST em /api/v1, HATEOAS pragmático e Socket.IO/WebSocket. Não deve conter interfaces Next.js nem credenciais versionadas.

Referências: [Arquitetura](../../docs/ARQUITETURA.md).

A fundação NestJS foi iniciada manualmente em ESM, com module e moduleResolution NodeNext. O Nest CLI foi usado somente como referência documental/estrutural, sem instalação ou execução. src contém apenas main.ts (bootstrap) e app.module.ts (AppModule vazio), sem rotas de negócio.

O manifest registra @nestjs/common, @nestjs/core e @nestjs/platform-express 12.1.0, reflect-metadata 0.2.2 e rxjs 7.8.1 como dependências exatas, além de TypeScript 6.0.3 como devDependency exata. RxJS 7.8.1 foi deliberadamente fixado como baseline conservadora da API; versões posteriores poderão ser reavaliadas após homologação executável.

As dependências foram registradas somente em manifest/lockfile, com frozen-lockfile validado sem alteração do hash. Instalação física, compilação e execução continuam pendentes para a Etapa 2F.2. O único script é build (tsc -p tsconfig.build.json); os tsconfig mantêm strict e target ES2023, compatível com Node 24. A porta 3000 no bootstrap é provisória e não define o contrato final de ambiente.
