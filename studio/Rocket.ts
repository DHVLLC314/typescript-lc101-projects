import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';
export class Rocket{
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[]=[];
  astronaut: Astronaut[]=[];
  massKg: number;

  constructor(name:string,totalCapacityKg:number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass( items: Payload[] ): number {
    let sum: number = 0;
    for (let i = 0; i<items.length; i++){
      sum += items[i].massKg;
    }
    return sum;
  }
  currentMassKg(): number {
    return this.sumMass(this.astronaut)+this.sumMass(this.cargoItems)
  }
  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
      return true
    }
  }
  addCargo(cargo: Cargo) {
    if ( this.canAdd(cargo) === true) {
      this.cargoItems.push(cargo)
      return true;
    } else {
      return false;
    }
  }
  addAstronaut(astronaut: Astronaut) {
    if ( this.canAdd(astronaut) === true ) {
      this.astronaut.push(astronaut)
      return true;
    } else {
      return false;
    }
  }
}