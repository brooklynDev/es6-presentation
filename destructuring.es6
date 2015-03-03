let [x,y] = [1,2];

function getSome(){
	return ["hello", "world"];
}

let [greeting, location] = getSome();
console.log(`${greeting} ${location}`);

function getSomeMore(){
	return{
		firstName: 'Avrumi',
		lastName: 'Friedman',
		age: 33
	}
}

let {firstName, lastName, age} = getSomeMore();
console.log(`${firstName} ${lastName} is not ${age - 10} years old :(`);