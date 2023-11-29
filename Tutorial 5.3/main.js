//function to generate and display the multiplication table
function multiplication() {
	
	//get user inputs for number or rows and columns
	const rowsInput = document.getElementById("rows");
	const columnsInput = document.getElementById("columns");
	
	//convert values in to integars 
	const numRows = parseInt(rowsInput.value);
	const numColumns = parseInt(columnsInput.value);
	
	//get the table container
	
	const tableContainer = document.getElementById("tableContainer");
	
	//clear any existing tables by equal value to null
	tableContainer.innerHTML = " ";
	
	//create table Element
	const table = document.createElement("table");
	
	
	//create rows and columns for the multiplication table
	for(var i = 1; i <= numRows; i++ ){
		
		const row = document.createElement("tr");
		for(var j = 1; j <= numColumns; j++ ) {
			
			const cell = document.createElement("td");
			cell.textContent = i * j; //calculate the product and set it as cell content
			row.appendChild(cell)
		}
		table.appendChild(row);
		
	}
	
	//append the table to the container
	tableContainer.appendChild(table);
}

//add click event listner to the generate table Button

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click",multiplication);