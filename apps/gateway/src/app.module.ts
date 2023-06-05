import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from "@nestjs/config";
import {WinstonModule} from "nest-winston";
import {winstonConfig} from "@app/common";
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/gateway/.env',
    }),
    WinstonModule.forRoot(winstonConfig),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'auth',
          type: 'topic',
        },
      ],
      // uri: 'amqp://127.0.0.1',
      uri: 'amqp://rmq',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
