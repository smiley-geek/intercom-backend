import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { initAdapters } from 'ws/ws/adapter.init';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/chat');
  app.use(cookieParser());

  initAdapters(app);

  await app.listen(3010, () => {
    console.log('Chat server started successfully');
  });
}
bootstrap();
