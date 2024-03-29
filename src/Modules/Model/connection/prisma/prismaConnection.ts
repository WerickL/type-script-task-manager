import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'
import { IPrismaConnection } from "src/contract/dbConnection/IPrismaConnection";

@Injectable()
export class prismaConnection extends PrismaClient{
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
          await app.close();
        });
      }
}