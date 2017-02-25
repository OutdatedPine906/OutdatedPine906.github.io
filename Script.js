var teamNumber = 1124
function numberChange(){
var teamNumber = prompt("New Team Number")
};
function loadWebsite() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).website;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadName() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).name;01
	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadLocality() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).locality;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadRookie() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).rookie_year;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadRegion() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).region;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadNumber() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).team_number;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadLocation() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).location;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadKey() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).key;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadCountry() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).country_name;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadMotto() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).motto;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}
function loadNick() {
var apicalls = new XMLHttpRequest();
apicalls.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("data").innerHTML = JSON.parse(this.responseText).nickname;

	}
};
apicalls.open("GET",
 "https://www.thebluealliance.com/api/v2/team/frc1124", true);
apicalls.setRequestHeader('X-TBA-App-Id', 'Chris_Barnes:Team_Info:v01');
apicalls.send();
}