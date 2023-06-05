import {Module} from '@nestjs/common';
import {RabbitMQModule} from "@golevelup/nestjs-rabbitmq";
import {AppService} from "./app.controller";

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'auth',
          type: 'topic',
        },
      ],
      // uri: 'amqp://127.0.0.1',
      uri: 'amqp://rmq'
    }),
  ],
  providers: [ AppService ]

})
export class AppModule {}
