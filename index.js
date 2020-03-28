export default class Person{
	ps = {
		name:'',
		age:0,
		gender:0
	}
	constructor(name) {
	    this.ps.name = name
	}
	hello(){
		console.log("my name is %s",this.ps.name)
	}
}