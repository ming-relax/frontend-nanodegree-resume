// work contains an array of jobs.
// Each job object in jobs should contain an employer, title, location,
// dates worked and description.
//
// projects contains an array of projects.
// Each project object in projects should contain a title, dates worked,
// description, and an images array with URL strings for project images.
//
// bio contains a name, role, welcomeMessage, contacts object and skills array.
// The contacts object should contain (but doesn't have to) a mobile number,
// email address, github username, twitter handle and location.
//
// education contains an array of schools.
// Each school object in schools contains a name, location, degree,
// majors array, dates attended and a url for the school's website.
// education also contains an onlineCourses array.
// Each onlineCourse object in onlineCourses should contain a title, school,
// dates attended and a url for the course.

var bio = {
  name: "Ming",
  role: "Web developer",
  contacts: {
    mobile: "+8613041008675",
    email: "humings@gmail.com",
    github: "github.com/ming-relax",
    twitter: "github.com/mingwb",
    location: "Shanghai, China"
  },
  welcomeMessage: "Make Something People Want",
  skills: ["ruby", "javascript", "golang", "css"],
  biopic: "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formatedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts")
      .append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedTwitter)
      .append(formattedLocation);

    $("#footerContacts")
      .append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedTwitter)
      .append(formattedLocation);


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic).append(formattedWelcome);

    $("#header").append(HTMLskillsStart);
    this.skills.forEach(function(s) {
      $("#skills").append(HTMLskills.replace("%data%", s));
    });
  }
};

var education = {
  schools: [
    {
      name: "Huazhong Universtiy of Science and Techonology",
      location: "Wuhan, China",
      degree: "Bachalor",
      major: "Electronic Enginnerring",
      dates: "2006",
      url: "www.hust.edu.cn"
    },
    {
      name: "Chinese University of Hong Kong",
      location: "Hong Kong, China",
      degree: "Master",
      major: "Computer Science",
      dates: "2012",
      url: "www.cuhk.edu.hk"
    }
  ],
  onlineCourses: [
    {
      title: "MongoDB for developers",
      school: "Mongodb University",
      date: "2012",
      url: "https://university.mongodb.com/"
    },
    {
      title: "Pattern-Oriented Software Architectures for Concurrent and Networked Software",
      school: "Coursera",
      date: "May 13, 2013",
      url: "https://www.coursera.org/course/posasoftware"
    },
    {
      title: "Functional Programming Principles in Scala",
      school: "Coursera",
      date: "June 03, 2013",
      url: "https://www.coursera.org/course/progfun"
    },
    {
      title: "Introducation to data science",
      school: "Coursera",
      date: "June 29, 2013",
      url: "https://www.coursera.org/course/datasci"
    }
  ],
  display: function() {
    this.schools.forEach(function(s) {
      var educationEntry = $(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", s.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", s.degree);
      var formattedSchoolDate = HTMLschoolDates.replace("%data%", s.dates);
      var formattedMajor = HTMLschoolMajor.replace("%data%", s.major);
      var formattedLocation = HTMLschoolLocation.replace("%data%", s.location);

      educationEntry.append(formattedSchoolName + formattedSchoolDegree)
                    .append(formattedSchoolDate)
                    .append(formattedLocation)
                    .append(formattedMajor);

      $("#education").append(educationEntry);
    });

    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(c) {
      var educationEntry = $(HTMLschoolStart);

      var title = HTMLonlineTitle.replace("%data%", c.title);
      var school = HTMLonlineSchool.replace("%data%", c.school);
      var date = HTMLonlineDates.replace("%data%", c.date);
      var url = HTMLonlineURL.replace("%data%", c.url);

      educationEntry.append(title + school)
                     .append(date)
                     .append(url);

      $("#education").append(educationEntry);
    });

  }
};

var work = {
  jobs: [
    {
      employer: "Strikingly",
      title: "Software Engineer",
      location: "Shanghai, China",
      dates: "2013.11.01 - 2015.11.01",
      description: "Backend developer and head of DevOps"
    },
    {
      employer: "Institute of Network coding",
      title: "Software Engineer",
      location: "Hong Kong",
      dates: "2012.07 - 2013.10",
      description: "Software enginner"
    }
  ],
  display: function() {
    this.jobs.forEach(function(job) {
      var workEntry = $(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      workEntry.append(formattedWorkEmployer + formattedWorkTitle)
               .append(formattedDates)
               .append(formattedLocation)
               .append(formattedDescription);

      $("#workExperience").append(workEntry);
    });
  }
};

var projects = {
  projects: [
    {
      title: "Online voting system",
      dates: "2013",
      description: "This is my first web project",
      images: ["http://loremflickr.com/320/240", "http://loremflickr.com/320/240"]
    },
    {
      title: "Online game",
      dates: "2015",
      description: "This is my second project",
      images: ["http://loremflickr.com/320/240", "http://loremflickr.com/320/240"]
    }
  ],
  display: function() {
    this.projects.forEach(function(p) {
      var projectEntry = $(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", p.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", p.description);

      var formattedImage = "";
      p.images.forEach(function(image) {
        console.log(image);
        formattedImage = formattedImage + HTMLprojectImage.replace("%data%", image);
      });

      projectEntry.append(formattedProjectTitle)
                  .append(formattedProjectDates)
                  .append(formattedDescription)
                  .append(formattedImage);

      $("#projects").append(projectEntry);
    });

  }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
