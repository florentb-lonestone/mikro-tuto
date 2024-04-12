import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const mikroOrmConfig: MikroOrmModuleSyncOptions = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  driver: PostgreSqlDriver,
  clientUrl: 'postgresql://user:P@ssw0rd@127.0.0.1:5432/db',
  metadataProvider: TsMorphMetadataProvider,
  debug: process.env.NODE_ENV !== 'production',
  migrations: {
    path: './migrations',
    allOrNothing: true,
    disableForeignKeys: true,
  },
  seeder: {
    pathTs: './src/seeders',
    defaultSeeder: 'DatabaseSeeder',
    glob: '*.seeder.ts', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
};

export default mikroOrmConfig;
