import {renderWorld, renderStats} from "./display";
import Fish from "./fish";
import Shark from './shark';
import World from "./world";
import {swimRandomly, eatNearbyFish} from './protocols';

const world = new World();

const fishes = []
for (let i = 0; i < 4; i++) {
	const fish = new Fish(world);
	fish.applyProtocol(swimRandomly);
	fishes.push(fish);
}

const sharks = []
for (let i = 0; i < 4; i++) {
	const shark = new Shark(world);
	shark.applyProtocol(swimRandomly);
	shark.applyProtocol(eatNearbyFish);
	sharks.push(shark);
}

world.agents = [...fishes, ...sharks];


const fps = 1;
const fpsInterval = 1000 / fps;
let startTime = Date.now();

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
loop();