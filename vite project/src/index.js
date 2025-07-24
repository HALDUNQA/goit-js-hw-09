
import makeMessage from "./entries.js";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"



const startTime = Date.now("1968-04-25");

// Belirli bir süre boyunca yürütülen kodunuz
for(let i = 0; i <= 100; i += 1) {
	console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);








