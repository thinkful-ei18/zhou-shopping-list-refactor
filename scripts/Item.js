const Item = function () {

	function validateName(name) {
		if(!name){
			throw new TypeError('Name does not exist')
		}
	}

	function create (name) {
		return {
			id: cuid(),
			checked:false,
			name:name
		}
	}
	return {  
		validateName,
		create
	}

}()