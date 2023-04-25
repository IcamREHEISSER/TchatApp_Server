import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection {
  afterInit() {
    console.log('Websocket initialisé');
  }

  // Connexion au WS
  async handleConnection(@MessageBody() data: unknown) {
    console.log('Client connecté');
    const event = 'open';
    return { event, data };
  }

  @SubscribeMessage('message')
  handleTest(@MessageBody() data: unknown) {
    console.log(data);
    return data;
  }
}
