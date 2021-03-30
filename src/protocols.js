import Fish from "./fish";

export const swimRandomly = {
	swim: function() {
		const deltaX = Math.round(2 * (Math.random() - 0.5));
		const deltaY = Math.round(2 * (Math.random() - 0.5));
		this.location[0] += deltaX;
		this.location[1] += deltaY;
	}
}

export const eatNearbyFish = {
	feed: function() {
		const nearbyFish = this.world.agents.filter((agent) => {
			return (
				agent.constructor === Fish &&
				Math.abs(agent.location[0] - this.location[0]) <= 2 &&
				Math.abs(agent.location[1] - this.location[1]) <= 2
			)
		})
		if (nearbyFish.length > 0) console.log(`A ${this.emoji} has eaten ${nearbyFish.length} ${nearbyFish[0].emoji}!`);
		this.world.removeAgents(nearbyFish);
	}
}