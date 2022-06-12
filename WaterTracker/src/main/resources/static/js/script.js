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
	//for(let water of waterLog){
	waterLog.forEach((water) => {

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
			// dynamically display text content for a detail view of row clicked on
			let existingEntryId = document.getElementById('existingEntryId');
			existingEntryId.textContent = water.id;
			let existingEntryAmount = document.getElementById('existingEntryounces');
			existingEntryAmount.textContent = water.amountInOunces + 'oz';
			let existingEntryCreated = document.getElementById('existingEntrycreated');
			existingEntryCreated.textContent = water.createdAt;
			let existingEntryUpdated = document.getElementById('existingEntryupdated');
			existingEntryUpdated.textContent = water.updatedAt;
			let existingEntryisSparkling = document.getElementById('existingEntryisSparkling');
			existingEntryisSparkling.textContent = water.isSparklingWater;
			let existingEntryComment = document.getElementById('existingEntrylogComment');
			existingEntryComment.textContent = water.waterLogComment;
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
	});
}