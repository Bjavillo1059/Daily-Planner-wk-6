// date selected needs to be saved to calender link
// create element for modal --done
// creat time input for modal --done
// create title input for modal --done
// create desciption input for modal --done
// create priority dropdown for modal --done
// create dropdown window for when time has past (need to add class color change to column when selected) --working
// make modal disappear once info is input
// make a color change to the task status block when a certain text is written
// adding elements dynamically -- done
// turn into array -- done
// for loop cycle through list items -- done

// src of base code // JodyBrzo/jodie.brzovski@gmail.com(30July2021)day-planner(javascript)[structure and layout] //


//array of objects for each time slot
var workHours =
[
  {
    Time: "0900", // string is visible to the user
    milClock: 9,  // a number to represent a slot representing hours on a 24hr clock
    tasks: ""  // open string for a user to input information for the current hour listed
  },
  
  {
    Time: "1000",
    milClock: 10,
    tasks: ""
  },
  
  {
    Time: "1100",
    milClock: 11,
    tasks: ""
  },
  
  {
    Time: "1200",
    milClock: 12,
    tasks: ""
  },
  
  {
    Time: "1300",
    milClock: 13,
    tasks: ""
  },
  
  {
    Time: "1400",
    milClock: 14,
    tasks: ""
  },
  
  {
    Time: "1500",
    milClock: 15,
    tasks: ""
  },
  
  {
    Time: "1600",
    milClock: 16,
    tasks: ""
  },
  
  {
    Time: "1700 pm",
    milClock: 17,
    tasks: ""
  }
];

var currentHour = moment().hour() //set currentHour to 24hr clock numbered 0-23

var timeDisplayEl = $('#time-display');
var hourlyContainerEl = $('#hourly-container'); // make a container and slot into the hourly-container id

$(document).ready(function () {
  
  // displaying the time
  function displayDate() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#time-display').text(currentTime);
  };
  
  setInterval(displayDate, 1000);
  

  // look through every item within the workHours index array
  $.each(workHours, function (i, time) {

    var timeRowEl = $('<div>');
    var timeRowId = $('id', 'time');
    var timeRowClass = $('class', 'row');
    var currentTimeEl = $('<div>');
    var currentTimeId = $('id', 'current-time');
    var currentTimeClass = $('class', 'col-2 hour')

    hourlyContainerEl.append(timeRowEl + timeRowEl.attr(timeRowClass) + i + timeRowEl.attr(timeRowId));
    $('#time' + i).append(currentTimeEl + currentTimeEl.attr(currentTimeClass) + i + currentTimeEl.attr(currentTimeId) + time.Time);

    var hourlyTimeSlot = time.milClock;

    var setPPFColor = "";
    if (currentHour > hourlyTimeSlot) {
      setPPFColor = 'past';
    } else if (currentHour == hourlyTimeSlot) {
      setPPFColor = 'present';
    } else if (currentHour < hourlyTimeSlot) {
      setPPFColor = 'future'
    };

    var createTextEl = $('<textarea>');
    var createdTextId = $('id', 'text-area');
    var creatTextClass = $('class', 'col-8');
    var saveBtnEl = $('<div>');
    var saveBtnId = $('id', 'saveBtn');
    



  }); 

});