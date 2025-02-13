import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarSystemsModule } from './star-system/star-systems.module';

@Module({
  imports: [StarSystemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
