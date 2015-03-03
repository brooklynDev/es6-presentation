//given these variables
let firstName = 'Avrumi';
let lastName = 'Friedman';
let currentStatus = 'Bombing';

//old syntax

let awesomeDude = {
	firstName: firstName,
	lastName: lastName,
	currentStatus: currentStatus
}

//new syntax

let awesomerDude = {
	firstName,
	lastName,
	currentStatus,
	[41 + 1]: 'Meaning of Life'
};

console.log(awesomerDude);