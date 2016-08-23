const { extendObservable, observable, transaction,  computed} = mobx;

class Store {
	@observable name;

	constructor(){
		this.name = 'Ivan';
	}

	@computed get nombres(){
		return this.name + " " + this.name;
	}
}
var store = new Store();
module.exports = store;
