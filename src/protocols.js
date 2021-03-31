export const eatNoFish = {
  feed: function () {}
};

export const eatAllNearbyFish = {
  feed: function () {
    const nearbyFish = this.world.getNearbyAgents(this, 2, "Fish");

    if (nearbyFish.length > 0) {
      console.log(
        `A ${this.emoji} has eaten ${nearbyFish.length} ${nearbyFish[0].emoji}!`
      );
      this.world.removeAgents(nearbyFish);
      this.timeSinceLastMeal = 0;
    }
  }
};

export const eatFishIfHungry = {
  feed: function () {
    const nearbyFish = this.world.getNearbyAgents(this, 2, "Fish");
    const isHungry = this.starvationTime - this.timeSinceLastMeal < 2;

    if (nearbyFish.length > 0 && isHungry) {
      console.log(
        `A ${this.emoji} has eaten ${nearbyFish.length} ${nearbyFish[0].emoji}!`
      );
      this.world.removeAgents(nearbyFish);
      this.timeSinceLastMeal = 0;
    }
  }
};

export const eatSharksIfTooMany = {
  feed: function () {
    const numFish = this.world.getAgentsOfType("Fish").length;
    const numSharks = this.world.getAgentsOfType("Shark").length;

    const target = numSharks > 0.5 * numFish ? "Shark" : "Fish";
    const nearbyAgents = this.world.getNearbyAgents(this, 2, target);
    if (nearbyAgents.length > 0) {
      console.log(
        `A ${this.emoji} has eaten ${nearbyAgents.length} ${nearbyAgents[0].emoji}!`
      );
      this.world.removeAgents(nearbyAgents);
      this.timeSinceLastMeal = 0;
    }
  }
};

// function getNearbyEntities() {
// 	return this.world.agents.filter((agent) => {
// 		return (
// 			agent.constructor === Fish &&
// 			Math.abs(agent.location[0] - this.location[0]) <= 2 &&
// 			Math.abs(agent.location[1] - this.location[1]) <= 2
// 		)
// 	})
// }
