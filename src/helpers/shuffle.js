export const shuffle = (items) => {
	let ctr = items.length;
	let temp;
	let index;
	while (ctr > 0) {
		index = Math.floor(Math.random() * ctr);
		ctr--;
		temp = items[ctr];
		items[ctr] = items[index];
		items[index] = temp;
	}
	return items;
};
