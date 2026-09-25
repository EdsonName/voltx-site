/**
 * Projeto: VoltX
 * Arquivo: main.ts
 * Documentos relacionados: docs/ARQUITETURA.md, docs/API.md, docs/CODING_STANDARDS.md
 *
 * Nome: Edson
 * Curso: Engenharia Elétrica
 * Instituição: UNINTER
 * Telefone: (61) 99901-0739
 * Cidade/UF: Novo Gama - GO
 *
 * Criado em: 24/09/2026 22:50
 * Última alteração: 24/09/2026 22:50
 *
 * Finalidade: Inicializar a aplicação NestJS mínima em ESM.
 * Relacionamentos: app.module.ts, ../package.json e ../tsconfig.build.json.
 */
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

/** Inicializa a fundação da API; contratos de ambiente serão definidos em etapa própria. */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  // Porta provisória do bootstrap, sem representar a configuração final de ambiente.
  await app.listen(3000);
}

await bootstrap();
