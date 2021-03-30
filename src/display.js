export function renderWorld(world, elemSelector) {
	const root = document.querySelector(elemSelector);
	root.innerHTML = '';

	for (let y = 0; y < world.size[0]; y++) {
		const row = document.createElement('div');
		row.classList.add('row');
		root.appendChild(row);

		for (let x = 0; x < world.size[1]; x++) {
			const col = document.createElement('div');
			col.classList.add('col');
			row.appendChild(col);
			col.innerText = '✕';

			for (const agent of world.agents) {
				if (agent.location[0] === x && agent.location[1] === y) {
					col.innerText = agent.emoji;
				}
			}
		}
	}
}

export function renderStats(world, elemSelector) {
	const root = document.querySelector(elemSelector);
	root.innerHTML = '';
	const count = {};

	for (const agent of world.agents) {
		if (!count[agent.emoji]) count[agent.emoji] = 0;
		count[agent.emoji] = count[agent.emoji] + 1;
	}

	const elem = document.createElement('div');
	elem.class = 'stat';
	elem.innerText = `⏱ ${world.time}`;
	root.appendChild(elem);

	for (const emoji of Object.keys(count)) {
		const elem = document.createElement('div');
		elem.class = 'stat';
		elem.innerText = `${emoji} ${count[emoji]}`;
		root.appendChild(elem);
	}
}