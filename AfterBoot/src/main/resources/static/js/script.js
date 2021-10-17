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
}

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
		let hr = document.createElement('hr');
		studySessions.appendChild(hr);
		tbod.appendChild(tr);
	
	
	
}
}
