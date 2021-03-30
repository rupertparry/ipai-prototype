export default class Agent {
	constructor(world) {
		this.world = world;
		this.birthTime = this.world.time;

		this.breedTime = 10;
		this.offspring = 2;
		this.hasBred = false;
		this.lifespan = 20;
	}

	tick() {
		this.breed();
		this.die()
		// Overriden by descendents
	}

	get age() {
		return this.world.time - this.birthTime;
	}

	breed() {
		if (this.age >= this.breedTime && !this.hasBred) {
			for (let i = 0; i < this.offspring; i++) {
				console.log(`A new ${this.emoji} is born!`);
				this.world.addAgent(this);
				this.hasBred = true;
			}
		}
	}

	die() {
		if (this.age >= this.lifespan) {
			console.log(`A ${this.emoji} is dying of old age.`)
			this.world.removeAgent(this);
		}
	}

	applyProtocol(protocol) {
		this.protocol = protocol;
		Object.keys(protocol).forEach((func) => {
			this[func] = protocol[func].bind(this);
		});
	}
}


// const offspring = Math.max(0, Math.ceil(normalRandom(this.sdOffspring, this.meanOffspring)));
function normalRandom(sd, mean) {
	/* Generate two independent random numbers in the [0, 1] range */
	const u = Math.random();
	const v = Math.random();
	/* calculate the normally distributed random values x and y from them */
	return sd * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) + mean;
}