var bio = {
	"name": "Amit Mishra",
	"role": "Software Developer",
	"contacts": {
		"email": "anjna.mishra14@gmail.com",
		"github": "anjnamishra",
		"twitter": "@anjnamishra",
		"location": "Los Angeles, CA, USA"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "I'm currently working as a Software Developer in Los Angeles, CA, USA.  Thanks for stopping by!",
	"skills": ["Java script", "html", "CSS" , "Object Oriented programming", ".net", ,"bootstrape" ,"Software Development", "Test Driven Development", "Requirement Analysis"]
};

var work = {
	"jobs": [
		{
			"employer": "Dax Systems",
			"title": "Front End Software Engineer",
			"location": "Los Angeles, CA, USA",
			"datesWorked": "March 2016 - present",
			"description": "I am working as a Front End Engineer for dax systems. I am part of internal site development team."+
				"My responsibilities inlcude to work on day to day requiremet for the specific pages on site as a Front end Engineer "+
				"Technical skills required for this roles are knowladge on Html, css, javascript."
		},
		{
			"employer": "CS Technology",
			"title": "Software Developer",
			"location": "Los Angeles, CA, USA",
			"datesWorked": "April 2011 - Feb 2016",
			"description": "I was working here as Jr. Software developer . My role was to develop and support front end aspect of the site for CS Tech." +
				"It required skill sets of .net, Html, css and javaScript"
		},
		{
			"employer": "RDVV University",
			"title": "Computer Science Teacher",
			"location": "Jabalpur, MP, india",
			"datesWorked": "December 2010 - March 2011",
			"description": "I was computer sceince teacher for this University " +
			"My role was to teach and train 3rd year students on comuter skills like OOP and basic .net programming"
		}
	]
};

var education = {
	"schools": [
    { "name": "University of RDVV",
      "datesAttended": "2008-2009",
      "location": "Jabalpur, MP, india",
      "degree": "Post graduate deploma in Computer application",
      "major": "Computer Science",
      "url": "http://www.rdunijbpin.org/"
    },
		{ "name": "University of RDVV",
			"datesAttended": "2006-2008",
			"location": "Jabalpur, MP, india",
			"degree": "Master of sceince",
			"major": "Computer Science, electronics",
			"url": "http://www.rdunijbpin.org/"
		},
    { "name": "University of RDVV",
      "datesAttended": "2003-2006",
      "location": "Jabalpur, MP, india",
      "degree": "Bachelor of sceince",
      "major": "Computer Science, electronics",
      "url": "http://www.rdunijbpin.org/"
    }

	],

	"onlineCourses": [
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "Jan 2016",
			"url": "https://www.udacity.com/course/ud292"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "March 2016",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "April 2016",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2016",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"datesWorked": "March 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "http://www.anjnamishra.ca/"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
//var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
//$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();

$("#mapDiv").append(googleMap);
