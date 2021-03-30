import Fish from "./fish";

export default class Shark extends Fish {
	constructor(world) {
		super(world);
		this.emoji = '🦈';
	}

	tick() {
		this.swim();
		this.feed();
	}

	feed() {
		// Protocol
	}
}