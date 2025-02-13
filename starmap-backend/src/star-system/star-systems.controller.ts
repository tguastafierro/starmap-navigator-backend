// src/star-systems/star-systems.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { StarSystemsService, StarSystem } from './star-systems.service';

@Controller('api/star-systems')
export class StarSystemsController {
  constructor(private readonly starSystemsService: StarSystemsService) {}

  @Get()
  getAll(): StarSystem[] {
    return this.starSystemsService.getAllSystems();
  }

  @Get(':id')
  getOne(@Param('id') id: string): StarSystem {
    return this.starSystemsService.getSystemById(id);
  }
}