window.addEventListener('load', function(evt) {
	console.log('script.js loaded');

	init();
});

function init() {
	console.log('in init()');
	loadWaterLog();

	// TODO: 
	// Create new log entry function callback
	document.createWaterLogForm.addNewWaterLogButton.addEventListener('click', createWaterLogEntry);
}
// create water log entry function
function createWaterLogEntry(evt) {
	evt.preventDefault();
	// TODO: get form field values, create object, send to xhr
	let form = document.createWaterLogForm;
	let newEntry = { // new water log entry object
		amountInOunces: form.amountInOunces.value,
		isSparklingWater: form.isSparklingWater.value,
		waterLogComment: form.waterLogComment.value
	};
	// function call to the sendNewEntry function passing in the object
	sendNewEntry(newEntry);
}
// send new water log entry function 
function sendNewEntry(newEntry) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/water/');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				// * On success, if a response was received parse the water log entry data
				//   and pass the object to displayWaterLog().
				let waterLog = JSON.parse(xhr.responseText);
				displayWaterLog(waterLog);
			}
			else {
				displayError('Error adding water log entry: ' + xhr.status + ' ' + xhr.statusText);
			}
		}

	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newEntry)); // must come after the onreadystatechange body 
	loadWaterLog();
	location.reload(); // force page reload after creating a new log entry to force table refresh and table display
}

// delete function
function deleteLogEntry(e) {
	let deleteButtonParagraph = e.target.parentElement;
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/water/' + e.target.previousElementSibling.value);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log('entry deleted');
				removeElement(deleteButtonParagraph);
				clearExistingInDynamicTableRow();
				loadWaterLog();
			} else {
				console.log('error occurred trying to delete')
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send();
}

function updateLogEntry(e){
	e.preventDefault();
	let amountInOunces = e.target.parentElement.parentElement.firstElementChild.nextElementSibling;
	let isSparklingWater = amountInOunces.nextElementSibling.nextElementSibling.nextElementSibling;
	let waterLogComment = isSparklingWater.nextElementSibling.nextElementSibling.nextElementSibling;
	let id = e.target.value;
	
	console.log(amountInOunces.value + ' ' + isSparklingWater.value + ' ' + waterLogComment.value);
	let updatedLogEntry = { 
		amountInOunces: amountInOunces.value,
		isSparklingWater: isSparklingWater.value,
		waterLogComment: waterLogComment.value
	};
	
	// send via xhr
	let xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'api/water/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				
				let water = JSON.parse(xhr.responseText);
				displayWaterLogDetails(water);
				loadWaterLog();
			}
			else {
				displayError('Error updating water log entry: ' + xhr.status + ' ' + xhr.statusText);
			}
		}

	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(updatedLogEntry)); // must come after the onreadystatechange body 
	
	
}



function removeElement(parent) {
	while (parent.firstElementChild) {
		parent.removeChild(parent.firstElementChild);
	}
	console.log('removeElement');
}

function displayError(message) {
	let tfootError = document.getElementById('waterLogErrors');
	tfootError.textContent = '';
	tfootError.textContent = message;
}

function loadWaterLog() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/water');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 && xhr.responseText) {
				let waterLog = JSON.parse(xhr.responseText);
				//console.log(waterLog);
				displayWaterLog(waterLog);
			}
		}
	};
	xhr.send();
}

function displayWaterLog(waterLog) {
	let tbody = document.getElementById('waterLogRows');
	tbody.textContent = '';
	if(tbody.firstElementChild){
		removeElement(tbody);
	}
	waterLog.forEach((water) => {

		
		// append the each entry row to the tbody
		// then create and append each td per row
		appendShowAllRows(water);
	});
	//let refreshPage = function(evt){
	//	evt.preventDefault();
	//location.reload();
	//}
}

function appendShowAllRows(water){
	let tbody = document.getElementById('waterLogRows');
	let tr = document.createElement('tr');
		// add eventListener before appending to row
		tr.addEventListener('click', function() {
			// create an h1 when row is clicked
			// dynamically display header element for table of data: existing log entry of row clicked
			let displayExistingEntryH3 = document.getElementById('displayExistingEntriesH3');
			displayExistingEntryH3.textContent = 'Water Log Entry Detail';
			// dynamically display table header tags of existin log entry of row clicked
			let existingEntryHeaderId = document.getElementById('existingEntryHeaderId');
			existingEntryHeaderId.textContent = 'Id';
			document.getElementById('existingEntryHeaderCreatedAt').textContent = 'Entry Created At';
			document.getElementById('existingEntryHeaderUpdatedAt').textContent = 'Entry Updated At';
			document.getElementById('existingEntryHeaderOunces').textContent = 'Amt In Ounces';
			document.getElementById('existingEntryHeaderisSparkling').textContent = 'isSparkling';
			document.getElementById('existingEntryHeaderLogComment').textContent = 'Log Entry Comment';
			//document.getElementById('existingEntryHeaderActionButtons').textContent = 'Update or Delete Entry';
			// dynamically display text content for a detail view of row clicked on
			document.getElementById('existingEntryId').textContent = water.id;
			document.getElementById('existingEntryounces').textContent = water.amountInOunces + 'oz';
			document.getElementById('existingEntrycreated').textContent = water.createdAt;
			document.getElementById('existingEntryupdated').textContent = water.updatedAt;
			document.getElementById('existingEntryisSparkling').textContent = water.isSparklingWater;
			document.getElementById('existingEntrylogComment').textContent = water.waterLogComment;
		
			dynamicUpdateEntryForm(water);
			dynamicDeleteDivDisplay(water.id);
		});
	tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = water.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = water.createdAt;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = water.amountInOunces + 'oz';
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = water.isSparklingWater;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = water.waterLogComment;
		tr.appendChild(td);
}

function displayWaterLogDetails(water){
	// create an h1 when row is clicked
			// dynamically display header element for table of data: existing log entry of row clicked
			let displayExistingEntryH3 = document.getElementById('displayExistingEntriesH3');
			displayExistingEntryH3.textContent = 'Water Log Entry Detail';
			// dynamically display table header tags of existin log entry of row clicked
			let existingEntryHeaderId = document.getElementById('existingEntryHeaderId');
			existingEntryHeaderId.textContent = 'Id';
			document.getElementById('existingEntryHeaderCreatedAt').textContent = 'Entry Created At';
			document.getElementById('existingEntryHeaderUpdatedAt').textContent = 'Entry Updated At';
			document.getElementById('existingEntryHeaderOunces').textContent = 'Amt In Ounces';
			document.getElementById('existingEntryHeaderisSparkling').textContent = 'isSparkling';
			document.getElementById('existingEntryHeaderLogComment').textContent = 'Log Entry Comment';
			//document.getElementById('existingEntryHeaderActionButtons').textContent = 'Update or Delete Entry';
			// dynamically display text content for a detail view of row clicked on
			document.getElementById('existingEntryId').textContent = water.id;
			document.getElementById('existingEntryounces').textContent = water.amountInOunces + 'oz';
			document.getElementById('existingEntrycreated').textContent = water.createdAt;
			document.getElementById('existingEntryupdated').textContent = water.updatedAt;
			document.getElementById('existingEntryisSparkling').textContent = water.isSparklingWater;
			document.getElementById('existingEntrylogComment').textContent = water.waterLogComment;
		
			dynamicUpdateEntryForm(water);
			dynamicDeleteDivDisplay(water.id);
}

let updateForm;
let updateButton;
function dynamicUpdateEntryForm(water) {
	updateForm = document.createWaterLogForm;
	updateForm.amountInOunces.value = water.amountInOunces;
	updateForm.isSparklingWater.value = water.isSparklingWater;
	updateForm.waterLogComment.value = water.waterLogComment;
	// addEventListener before appending anything to the update form 
	let updateButtonDiv = document.getElementById('updateButtonDiv');
	let hiddenId = document.createElement('input');
	hiddenId.hidden = 'true';
	hiddenId.value = water.id;
	updateButtonDiv.appendChild(hiddenId);
	if (updateButtonDiv.contains(updateButton)) {
		updateButtonDiv.removeChild(updateButton);
	}
	updateButton = document.createElement('button');
	updateButton.textContent = 'Update Selected Entry';
	updateButton.value = water.id;
	updateButtonDiv.appendChild(updateButton);
	updateButton.addEventListener('click', updateLogEntry);

	//updateForm.appendChild();
}

let deleteButton;
function dynamicDeleteDivDisplay(waterId) {
	document.getElementById('deleteEntryH5').textContent = 'Delete This Entry';
	let deleteButtonParagraph = document.getElementById('deleteEntryButton');
	if (deleteButtonParagraph.contains(deleteButton)) {
		deleteButtonParagraph.removeChild(deleteButton);
	}
	let hiddenId = document.createElement('input');
	hiddenId.hidden = 'true';
	hiddenId.value = waterId;
	deleteButtonParagraph.appendChild(hiddenId);
	deleteButton = document.createElement('input');
	deleteButton.setAttribute('type', 'button');
	deleteButton.setAttribute('name', 'deleteEntryButton');
	deleteButton.setAttribute('value', 'Delete This Entry');
	deleteButtonParagraph.appendChild(deleteButton);


	deleteButton.addEventListener('click', deleteLogEntry);

}

function clearExistingInDynamicTableRow() {
	let displayExistingEntryH3 = document.getElementById('displayExistingEntriesH3');
	displayExistingEntryH3.textContent = null;
	// dynamically display table header tags of existin log entry of row clicked
	let existingEntryHeaderId = document.getElementById('existingEntryHeaderId');
	existingEntryHeaderId.textContent = null;
	document.getElementById('existingEntryHeaderCreatedAt').textContent = null;
	document.getElementById('existingEntryHeaderUpdatedAt').textContent = null;
	document.getElementById('existingEntryHeaderOunces').textContent = null;
	document.getElementById('existingEntryHeaderisSparkling').textContent = null;
	document.getElementById('existingEntryHeaderLogComment').textContent = null;
	//document.getElementById('existingEntryHeaderActionButtons').textContent = 'Update or Delete Entry';
	// dynamically display text content for a detail view of row clicked on
	document.getElementById('existingEntryId').textContent = null;
	document.getElementById('existingEntryounces').textContent = null;
	document.getElementById('existingEntrycreated').textContent = null;
	document.getElementById('existingEntryupdated').textContent = null;
	document.getElementById('existingEntryisSparkling').textContent = null;
	document.getElementById('existingEntrylogComment').textContent = null;
	document.getElementById('deleteEntryH5').textContent = null;
	document.getElementById('updateH5').textContent = null;
	document.createWaterLogForm.amountInOunces.value = null;
	document.createWaterLogForm.isSparklingWater.value = null;
	document.createWaterLogForm.waterLogComment.value = null;
	removeElement(document.getElementById('updateButtonDiv'));
}
