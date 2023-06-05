import {Controller, Get, Inject, LoggerService} from '@nestjs/common';
import {WINSTON_MODULE_NEST_PROVIDER} from "nest-winston";
import {AmqpConnection} from "@golevelup/nestjs-rabbitmq";

@Controller()
export class AppController {
  constructor(
      @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService,
      private readonly amqpConnection: AmqpConnection,
      ) { }
  @Get()
  async getHello(): Promise<string> {
    this.logger.log('Calling getHello function')
    await this.amqpConnection.publish('auth', 'auth-route', { data: { id: 1 } });
    console.log('msg published', 'auth', 'auth-route', { data: { id: 1 } });
    return 'Hello World!';
  }
}
