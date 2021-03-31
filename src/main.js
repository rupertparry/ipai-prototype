import {renderWorld, renderStats} from "./display";
import Fish from "./fish";
import Shark from './shark';
import World from "./world";
import {
	eatAllNearbyFish,
	eatFishIfHungry,
	eatNoFish,
	eatSharksIfTooMany
} from './protocols';

/* CONFIG */

const fps = 1;

/* SET UP WORLD */

const world = new World();

world.createAgents({
	type: Fish,
	amount: 10,
	protocols: []
});

world.createAgents({
	type: Shark,
	amount: 2,
	protocols: [eatSharksIfTooMany] // eatNoFish, eatAllNearbyFish, eatFishIfHungry
});

/* START */

function loop() {
	requestAnimationFrame(loop)
	const currentTime = Date.now();
	const elapsed = currentTime - startTime;

	if (elapsed > fpsInterval) {
		startTime = currentTime - (elapsed % fpsInterval);
		world.tick();
		renderWorld(world, '#display');
		renderStats(world, '#stats');
	}
}
const fpsInterval = 1000 / fps;
let startTime = Date.now();
loop();