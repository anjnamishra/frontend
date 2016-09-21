var bio = {
    "name": "Anjna Mishra",
    "role": "Software Developer",
    "contacts": {
        "mobile": "1234567890",
        "email": "anjna.mishra14@gmail.com",
        "github": "anjnamishra",
        "twitter": "@anjnamishra",
        "location": "Los Angeles, CA, USA"
    },
    "welcomeMessage": "I'm currently working as a Software Developer in Los Angeles, CA, USA.  Thanks for stopping by!",
    "skills": ["Java script", "html", "CSS", "Object Oriented programming", ".net", "bootstrape", "Software Development",
        "Test Driven Development", "Requirement Analysis"
    ],
    "biopic": "images/me.jpg",
    "display": function() {}
};

var work = {
    "jobs": [{
        "employer": "Dax Systems",
        "title": "Front End Software Engineer",
        "location": "Los Angeles, CA, USA",
        "dates": "March 2016 - present",
        "description": "I am working as a Front End Engineer for dax systems. I am part of internal site development team." +
            "My responsibilities inlcude to work on day to day requiremet for the specific pages on site as a Front end Engineer " +
            "Technical skills required for this roles are knowladge on Html, css, javascript."
    }, {
        "employer": "CS Technology",
        "title": "Software Developer",
        "location": "Los Angeles, CA, USA",
        "dates": "April 2011 - Feb 2016",
        "description": "I was working here as Jr. Software developer . My role was to develop and support front end aspect of the site for CS Tech." +
            "It required skill sets of .net, Html, css and javaScript"
    }, {
        "employer": "RDVV University",
        "title": "Computer Science Teacher",
        "location": "Jabalpur, MP, india",
        "dates": "December 2010 - March 2011",
        "description": "I was computer sceince teacher for this University " +
            "My role was to teach and train 3rd year students on comuter skills like OOP and basic .net programming"
    }],
    "display": function() {}
};

var education = {
    "schools": [{
            "name": "University of RDVV",
            "location": "Jabalpur, MP, india",
            "degree": "Post graduate deploma in Computer application",
            "majors": "Computer Science",
            "dates": "2008-2009",
            "url": "http://www.rdunijbpin.org/"
        }, {
            "name": "University of RDVV",
            "location": "Jabalpur, MP, india",
            "degree": "Master of sceince",
            "major": "Computer Science, electronics",
            "dates": "2006-2008",
            "url": "http://www.rdunijbpin.org/"
        }, {
            "name": "University of RDVV",
            "location": "Jabalpur, MP, india",
            "degree": "Bachelor of sceince",
            "major": "Computer Science, electronics",
            "dates": "2003-2006",
            "url": "http://www.rdunijbpin.org/"
        }

    ],

    "onlineCourses": [{
        "title": "HTML5 Canvas",
        "school": "Udacity",
        "dates": "Jan 2016",
        "url": "https://www.udacity.com/course/ud292"
    }, {
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "March 2016",
        "url": "https://www.udacity.com/course/ud804"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "April 2016",
        "url": "https://www.udacity.com/course/ud304"
    }, {
        "title": "Web Development",
        "school": "Udacity",
        "dates": "August 2016",
        "url": "https://www.udacity.com/course/cs253"
    }],
    "display": function() {}
};

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "March 2016",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
        "images": ["images/portfolio.jpg"],
        "display": function() {}
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[indexCount]));
        }
    }

    for (var indexCount = 0; indexCount < formattedContactInfo.length; indexCount++) {
        $("#topContacts").append(formattedContactInfo[indexCount]);
        $("#footerContacts").append(formattedContactInfo[indexCount]);
    }
}

bio.display();


education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[indexCount].name).replace("#", education.schools[indexCount].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var indexCount = 0; indexCount < education.onlineCourses.length; indexCount++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCount].title).replace("#", education.onlineCourses[indexCount].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCount].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCount].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCount].url).replace("#", education.onlineCourses[indexCount].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);
        for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            for (var img = 0; img < projects.projects[indexCount].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

projects.display();


$("#mapDiv").append(googleMap);
