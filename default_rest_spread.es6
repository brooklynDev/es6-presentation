//default parameters
let defaultParams = (bestSpeaker = 'coder rabbi') => {
	console.log(bestSpeaker);
}

defaultParams('Bumi Friedman');

//rest parameters
function vagrantTalkWasNotBad(person1, ...otherPeople) { 
	console.log(`${person1} kinda liked it`);
	//otherPeople is an array with the "rest" of the parameters, get it?
	otherPeople.forEach(p => console.log(`${p} loved it`));
}

vagrantTalkWasNotBad('Bumi Friedman', 'Jay', 'The LTC dude whose name I always forget (sorry)');

//spread parameteres
function spreadDemo(a, b, c){
	console.log(a * b * c);
}

let array = [1,2,3];
spreadDemo(...array);

//default with destructuring
function nextTalkTopic({topic = 'Not Ember', personMostUpset = 'Eli'} = {}){
	console.log(topic);
}

nextTalkTopic({topic: 'Angular'});