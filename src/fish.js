import Agent from './agent';

export default class Fish extends Agent {
	constructor(world) {
		super(world);
		this.emoji = '🐠';
		
		// Random start location for now...
		this.location = [
			Math.floor(Math.random() * world.size[0]),
			Math.floor(Math.random() * world.size[1])
		];
	}

	tick() {
		this.swim();
		this.breed();
		this.die();
	}

	swim() {
		// Protocol to govern this action
	}
}