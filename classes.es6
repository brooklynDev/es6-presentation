class Base {
	constructor(val) {
		console.log(`${val} - from base`);
		this.val = val;
	}
}

class Derived extends Base {
	constructor(val){
		super(val);
		console.log(`${val} - from derived`);
	}

	myFunction() {
		let array = [1,2,3,4,5];
		array.filter(i => i % 2 === 0)
			.map(i => i + this.val) //this is the instance of Derived
			.forEach(i => console.log(i));
	}

	static dance(){
		console.log('Ha, yea right');
	}
}

let d = new Derived(100);
d.myFunction();
Derived.dance();
