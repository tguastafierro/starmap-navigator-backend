import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

export interface StarSystem {
  id: string;
  name: string;
  starType: string;
  distance: number;
  habitability: boolean;
  resources: string[];
  coordinates: { x: number; y: number; z: number };
  age: number;              // in billion years
  rotationSpeed: number;    // in km/s
  magneticField: number;    // in Gauss
  luminosity: number;       // in solar luminosities
  temperature: number;      // in Kelvin
  mass: number;             // in solar masses
}

@Injectable()
export class StarSystemsService {
  private readonly starSystems: StarSystem[];

  constructor() {
    // Load the JSON file from the assets directory
    const dataPath = join(__dirname, '..', 'assets', 'starSystems.json');
    const data = readFileSync(dataPath, 'utf8');
    const parsedData = JSON.parse(data);
    this.starSystems = parsedData.starSystems;
  }

  getAllSystems(): StarSystem[] {
    return this.starSystems;
  }

  getSystemById(id: string): StarSystem {
    const system = this.starSystems.find((s) => s.id === id);
    if (!system) {
      throw new NotFoundException(`Star system with id ${id} not found`);
    }
    return system;
  }
}