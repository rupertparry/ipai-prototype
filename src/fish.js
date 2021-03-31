import Agent from './agent';

export default class Fish extends Agent {
	constructor(world) {
		super(world);
		this.emoji = '🐠';
		this.swimDistance = 1;

		this.breedTime = 8;
		this.offspring = 2;
		this.lifespan = 20;
	}

	tick() {
		this.swim();
		this.breed();
		this.die();
	}

	swim() {
		const deltaY = Math.round(2 * (Math.random() - 0.5));
		const deltaX = -this.swimDistance;
		this.location[0] += deltaX;
		this.location[1] += deltaY;
	}
}