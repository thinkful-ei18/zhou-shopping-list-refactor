const store = function() {
	const items = [{
		id: cuid(),
		name: 'apples',
		checked: false
	},
	{
		id: cuid(),
		name: 'oranges',
		checked: false
	},
	{
		id: cuid(),
		name: 'milk',
		checked: true
	},
	{
		id: cuid(),
		name: 'bread',
		checked: false
	}
	]

	function findById(id) {
		return this.items.find( item => {
			return item.id === id
		})
	}

	function addItem(name) {
		try{
			Item.validateName(name)
			this.items.push(Item.create(name))
		}catch(e){
			console.log(`Can not add item ${e.message}`)
		}
	}

	function findAndToggle(id) {
		const foundItem = this.findById(id)
		foundItem.checked = !foundItem.checked
	}

	function findAndUpdateName(id, newName) {
		try{
			Item.validateName(newName)
			const foundItem = this.findById(id)
			foundItem.name = newName
		}catch(e){
			console.log(`Can not rename : ${e.message}`)
		}
	}

	function findAndDelete(id) {
		this.items = this.items.filter( item => {
			return item.id !== id
		})
	}
	return {
		hideCheckedItems: false,
		searchTerm: '',
		items,
		findById,
		addItem,
		findAndToggle,
		findAndUpdateName,
		findAndDelete



	}
}()