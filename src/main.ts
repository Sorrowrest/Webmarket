import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('сраный Webmarket')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .addTag('Sorrowrest')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.log(`server start :) PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
