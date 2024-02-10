let myResume={
    "basics": {
      "name": "KRISHNARAJ N",
      "email": "krishnarajan1995@gamil.com",
      "phone": 9629764172,
      "degree": "B.E",
      "location": {
        "address": "101 A EVR STREET,",
        "postalCode": 639116,
        "city": "Karur",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit,
          "github":"https://github.com/Krish-Anto"
        }
      ]
    },
    "work": [
      {
        "company": "Wipro DOP",
        "position": "Senior Officer",
        "startDate": "2021-08-04",
        "endDate": "Current",
        "summary": "i am the Senior Officer and performing SNOW ticket handling task and gaining lots of experience",
      },
    ],
    "education": [
      {
        "institution": "Institute of Road and Transport Technology",
        "department": "Automobile Engineering",
        "studyType": "fulltime",
        "batch start year": 2012,
        "batch end year": 2016,
        "gpa": 6.23,
      }
    ],
    "skills": [
      {
        "name": "HTML,CSS,javascript,REACT,EXPRESS,MONGODB",
        "level": "beginer",
        "project": [
          "automatic attendance maintaing system using JavaScript language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "Music Production, Playing Basketball",
      }
    ]
  }
  console.log(myResume);


2. For above JSON iterate all for Loops (for, for in , for of, for Each) 


var json = [{
    "id" : "krish1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "krishnarajan1995@gmail.com"
},
{
    "id" : "krishn2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "krishnarajan1995r@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

3
