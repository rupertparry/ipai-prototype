export default class World {
	constructor() {
		this.time = 0;
		this.size = [20, 20];
		this.agents = [];
	}

	createAgents(opts) {
		for (let i = 0; i < opts.amount; i++) {
			const agent = new opts.type(this);
			for (const protocol of opts.protocols) {
				agent.applyProtocol(protocol)
			}
			this.agents.push(agent);
		}
	}

	addAgent(agent) {
		const AgentClass = agent.constructor;
		const location = agent.location;
		const protocol = agent.protocol;
		const newAgent = new AgentClass(this);

		// if (location) newAgent.location = location;
		if (protocol) newAgent.applyProtocol(protocol);

		this.agents.push(newAgent);
	}

	removeAgent(agent) {
		const i = this.agents.indexOf(agent);
		this.agents.splice(i, 1);
	}

	removeAgents(agents) {
		agents.forEach(agent => this.removeAgent(agent));
	}

	tick() {
		this.time++;

		for (const agent of this.agents) {
			agent.tick();

			// If agent goes out of bounds, wrap it around
			agent.location.forEach((coord, i) => {
				if (coord >= this.size[i]) {
					agent.location[i] = coord - this.size[i];
				} else if (coord < 0) {
					agent.location[i] = coord + this.size[i];
				}
			});
		}
	}
}