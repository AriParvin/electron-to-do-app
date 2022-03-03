const Store = require('electron-store')

class DataStore extends Store {
	constructor (settings) {
		//same as New Store(settings)
		super(settings)

		//initialize with todos or empty array
		//this.todos = this.get 