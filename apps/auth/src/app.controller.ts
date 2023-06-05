import {Controller, Get, Injectable, OnModuleInit} from "@nestjs/common";
import {RabbitSubscribe} from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class AppService {

    @RabbitSubscribe({
        exchange: 'auth',
        routingKey: 'auth-route',
        queue: 'auth-queue',
    })
    public async pubSubHandler(msg: {}) {
        console.log(`Received message: ${JSON.stringify(msg)}`);
    }

}