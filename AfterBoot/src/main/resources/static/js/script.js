window.addEventListener('load', function(e){
	console.log('script.js loaded')
	init();
});

function init(){
	console.log('In init()');
	document.studyForm.lookup.addEventListener('click', function(event){
		event.preventDefault();
		let studyId = document.studyForm.studyId.value;
		if (!isNaN(studyId) && studyId > 0) {
			getStudy(studyId);
		} else {
		
		}
	});
	document.allStudies.viewAllStudies.addEventListener('click', function(event){
event.preventDefault();
getAllStudies();
	});
	document.addStudyForm.addStudy.addEventListener('click', function(event){
		event.preventDefault();
		let studyForm = document.addStudyForm;
		let newStudy = {
			imageUrl: studyForm.imageUrl.value,
			studyDate: studyForm.studyDate.value,
			start: studyForm.start.value,
			end: studyForm.start.value,
			language: studyForm.language.value,
			focus: studyForm.focus.value,
			comment: studyForm.comment.value,
			source: studyForm.source.value,
			pages: studyForm.pages.value
		};
		console.log(newStudy);
		addStudy(newStudy);
	});
	document.deleteStudyForm.deleteStudy.addEventListener('click', function(event){
		event.preventDefault();
		let studyId = document.deleteStudyForm.studyId.value;
		if(!isNaN(studyId) && studyId > 0){
			deleteStudy(studyId);
		} else {
			console.log("An error occurred.");
			alert("Invalid Entry/Number. Try Again.");
		}
	});
	
};

var updateStudyForm = document.getElementById('updateStudyForm');
console.log(updateStudyForm);

var displayStudySessions = document.getElementById('displayStudySessions');
function getAllStudies(){
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState =' + xhr.readyState);
	xhr.open('GET', `api/studies`);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if (xhr.status === 200){
				let studies = JSON.parse(xhr.responseText);
				displayAllStudies(studies);
			}
			else {

		}
	}
}
xhr.send();
}

function getStudy(studyId){
	
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('GET', 'api/studies/' + studyId);
	console.log('xhr.readyState =' + xhr.readyState);
	xhr.onreadystatechange = function(){
		console.log('xhr.readyState = ' + xhr.readyState);

		if (xhr.readyState === 4) {
			if (xhr.status === 200){
				let study = JSON.parse(xhr.responseText);
				console.log(study);
				displayStudy(study);
			}
			else {
				console.log('Study not in current list.');
			}
		}
	}
	console.log('Before send: xhr.readyState = ' + xhr.readyState);
	xhr.send();
	console.log('After send: xhr.readyState =' + xhr.readyState);
}
// Get a study
function displayStudy(study){

	let studySessions = document.getElementById('studySessions');
	let table = document.createElement('table');
	studySessions.appendChild(table);
let head = document.createElement('thead');
table.appendChild(head);
let t = document.createElement('th');

t.textContent = 'Id';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Image';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Study Date';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Start';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'End';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Focus';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Comment';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Pages';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Source';
head.appendChild(t);

let tbod = document.createElement('tbody');
table.appendChild(tbod);

let img = document.createElement('img');
img.style.height = '150px';
img.style.width = '125px';
img.src = study.imageUrl;

	let tr = document.createElement('tr');
	let td = document.createElement('td');

	td.textContent = study.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.appendChild(img);
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.studyDate;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.start;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.end;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = study.language;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.focus;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = study.comment
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.pages;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.source;
		tr.appendChild(td);

		tbod.appendChild(tr);

		let br = document.createElement('br');
	studySessions.appendChild(br);
}
var itemClick = function(e){
console.log('in itemClick');
e.preventDefault();
updateStudyForm.imageUrl.value = this.firstElementChild.textContent;
};
// GET list of Studies
function displayAllStudies(studies){

	let studySessions = document.getElementById('studySessions');
	let table = document.createElement('table');
	studySessions.appendChild(table);
let head = document.createElement('thead');
table.appendChild(head);
let t = document.createElement('th');

t.textContent = 'Id';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Image';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Study Date';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Start';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'End';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Focus';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Comment';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Pages';
head.appendChild(t);

t = document.createElement('th');
t.textContent = 'Source';
head.appendChild(t);

let tbod = document.createElement('tbody');
table.appendChild(tbod);

for (let study of studies) {
	

let img = document.createElement('img');
img.style.height = '150px';
img.style.width = '125px';
img.src = study.imageUrl;

	let tr = document.createElement('tr');
	let td = document.createElement('td');

	td.textContent = study.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.appendChild(img);
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.studyDate;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.start;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.end;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = study.language;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.focus;
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.textContent = study.comment
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.pages;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = study.source;
		tr.appendChild(td);
		// let hr = document.createElement('hr');
		// studySessions.appendChild(hr);
		tr.addEventListener('click', itemClick);
		tbod.appendChild(tr);
	
	
	
	}
}

// Add a Study
function addStudy(newStudy) {
	console.log("Start of addStudy");
let xhr = new XMLHttpRequest();
xhr.open('POST', 'api/studies');
xhr.onreadystatechange = function(){
	if(xhr.status === 4){
		if(xhr.status === 201){
			let study = JSON.parse(xhr.responseText);
			displayStudy(study);
			console.log("in addStudy");
		}
	 else if(xhr.status >= 400 && xhr.status < 500){
		console.error('Something went wrong.');
		console.log(xhr.status);
		alert('Something went wrong.');
	 }
	}
}
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(newStudy));
}
// Delete a Study
function deleteStudy(studyId){
	console.log("Start of deleteStudy");
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/studies/' + studyId);
	console.log('xhr.readyState =' + xhr.readyState);
	xhr.onreadystatechange = function(){
		console.log('xhr.readyState =' + xhr.readyState);
		if (xhr.readyState === 4){
			if (xhr.status === 204){
				if(alert("The study session has been deleted.")){}
			else window.location.reload();

			}
			else if(xhr.status === 404){
				console.error("No study session found");
				alert("The study session you are looking for was not found.  Try again.");
			}
		}
	}
	xhr.send();
}

// Update a Study
function updateStudy(studyId){
	console.log("In updateStudy");
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/studies/' + studyId, true);

	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if (xhr.status === 201){
				getstudy();
				console.log('Study updated');
				alert('Study updated');
			} else {
				console.log("Study not updated");
				console.log(xhr.status);
				alert('Study not updated.  Try again')
			}

		}
		let updateStudy = {
			imageUrl: updateStudyForm.imageUrl.value,
			studyDate: updateStudyForm.studyDate.value,
			start: updateStudyForm.start.value,
			end: updateStudyForm.start.value,
			language: updateStudyForm.language.value,
			focus: updateStudyForm.focus.value,
			comment: updateStudyForm.comment.value,
			source: updateStudyForm.source.value,
			pages: updateStudyForm.pages.value
		}
		xhr.send(JSON.stringify(updateStudy));
	}
}


