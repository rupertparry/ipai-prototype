import Fish from "./fish";

export default class Shark extends Fish {
	constructor(world) {
		super(world);
		this.emoji = '🦈';
		this.swimDistance = 2;

		this.breedTime = 12;
		this.offspring = 2;
		this.hasBred = false;
		this.lifespan = 20;

		this.starvationTime = 7;
		this.timeSinceLastMeal = 0;
	}

	tick() {
		this.timeSinceLastMeal += 1;
		this.swim();
		this.breed();
		this.feed();
		this.die();
	}

	feed() {
		// Protocol
	}

	die() {
		if (this.timeSinceLastMeal > this.starvationTime) {
			console.log(`A ${this.emoji} is dying of starvation.`)
			this.world.removeAgent(this);
		}
		if (this.age >= this.lifespan) {
			console.log(`A ${this.emoji} is dying of old age.`)
			this.world.removeAgent(this);
		}
	}
}