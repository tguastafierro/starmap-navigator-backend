// src/star-systems/star-systems.module.ts
import { Module } from '@nestjs/common';
import { StarSystemsService } from './star-systems.service';
import { StarSystemsController } from './star-systems.controller';

@Module({
  controllers: [StarSystemsController],
  providers: [StarSystemsService],
  exports: [StarSystemsService],
})
export class StarSystemsModule {}