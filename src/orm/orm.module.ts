import { Module, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from '../mikro-orm.config';
import { MikroORM } from '@mikro-orm/core';

@Module({
  imports: [MikroOrmModule.forRoot({ ...mikroOrmConfig })], //Injket the MikroOrmModule with the configuration
  exports: [MikroOrmModule],
})
export class OrmModule implements OnApplicationBootstrap {
  logger = new Logger('OrmModule');

  constructor(private readonly orm: MikroORM) {}

  // Verify the connection to the database
  async checkDatabase() {
    const isConnect = await this.orm.isConnected();

    const connectionFail = () => {
      this.logger.error(
        `Unable to connect to the database ${this.orm.config.getClientUrl(
          true,
        )}`,
      );

      process.exit(1);
    };

    const connectionSuccess = () => {
      this.logger.log(
        `Connected to the database ${this.orm.config.getClientUrl(true)}`,
      );
    };

    !isConnect ? connectionFail() : connectionSuccess();
  }

  // Ensure the database exists and update the schema without that, no tables will be created
  async onApplicationBootstrap() {
    await this.orm.getSchemaGenerator().ensureDatabase();
    await this.orm.getSchemaGenerator().updateSchema();
  }
}
