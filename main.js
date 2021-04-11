var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// for submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);

function addItem(e){
	e.preventDefault();

	// get input value
	var newItem = document.getElementById('item').value;

	// create new list element
	var li = document.createElement('li');
	// add class
	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(newItem));

	// create new list element
	var delButton = document.createElement('button');
	// add class
	delButton.className = 'btn btn-danger btn-sm float-right delete';
	delButton.appendChild(document.createTextNode('X'));
	li.appendChild(delButton);

	itemList.appendChild(li);
	console.log(li);
}

// remove item
function removeItem(e){
	
}