var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");


// for submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);

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
	if( e.target.classList.contains('delete') ){
		if( confirm('Are you sure')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

// filter items
function filterItem(e){
	// convert text to lower
	var text = e.target.value.toLowerCase();
	// get list items
	var items = itemList.getElementsByTagName('li');
	Array.from(items).forEach( (item) => {
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}
		else{
			item.style.display = 'none';
		}
	})
}