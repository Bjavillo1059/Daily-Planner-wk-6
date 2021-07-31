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
      Time: "1700",
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

    // var timeRowEl = $('<div>');
    // var timeRowId = $('id', 'time');
    // var timeRowClass = $('class', 'row');
    // var currentTimeEl = $('<div>');
    // var currentTimeId = $('id', 'current-time');
    // var currentTimeClass = $('class', 'col-2 hour')

    // hourlyContainerEl.append(timeRowEl + timeRowEl.attr(timeRowClass) + i + timeRowEl.attr(timeRowId)); [(cannot use this code!)]
    // created a time element with the body for normal workHours
    hourlyContainerEl.append("<div id=\"time" + i + "\"" + "class=\"row\"></div>")

    // $('#time' + i).append(currentTimeEl + currentTimeEl.attr(currentTimeClass) + i + currentTimeEl.attr(currentTimeId) + time.Time); [(cannot use the code!)]
    // created an element within the time element of the body
    $('#time' + i).append("<div id=\"currentTime" + i + "\"" + "class=\"col-2 hour\">" + time.Time + "</div>"); 

    var hourlyTimeSlot = time.milClock;

    var setPPFColor = "";
    if (currentHour > hourlyTimeSlot) {
      setPPFColor = 'past';
    } else if (currentHour == hourlyTimeSlot) {
      setPPFColor = 'present';
    } else if (currentHour < hourlyTimeSlot) {
      setPPFColor = 'future'
    };

    // var createTextEl = $('<textarea>');
    // var createTextId = $('id', 'text-area');
    // var createTextClass = $('class', 'col-8');
    // var saveBtnEl = $('<div>');
    // var saveBtnId = $('id', 'saveBtn');
    // var saveBtnDtIn = $('data-index', [i]);
    // var saveBtnClass = $('class', 'col-2 saveBtn');

    // $('#time' + i).append(createTextEl + createTextEl.attr(createTextClass) + createTextEl.attr(createTextId) + setPPFColor + createTextEl + workHours[i].tasks); [(cannot use this code!)]
    $('#time' + i).append("<textarea id=\"textArea" + i + "\"" + "class=\"col-8 " + setPPFColor + "\"textarea\">" + workHours[i].tasks + "</textarea>"); // create a text area within the time element -- created previous

    // $('#time' + i).append(saveBtnEl + saveBtnEl.attr(saveBtnId) + i + saveBtnEl.attr(saveBtnDtIn) + saveBtnEl.attr(saveBtnClass) + "save"); [(cannot use this code!)]   
    $('#time' + i).append("<div id=\"saveBtn" + i + "\"" + "data-index=\"" + i + "\"" + "class=\"col-2 saveBtn\">" + "save" + "</div>"); //  create a save button within the end of the time element -- created previous    
  });

  //click event created for save button function 
  $(".saveBtn").click(function (event) {
    var element = event.target; //element variable for when click event is the target
    var index = parseInt($(element).attr("data-index"), 10); //"data-index" attribute set to give the div a number
    storeLocalTasks(index);  //call saveTast function and pass in this index so we know what row needs to be saved
  });

});

//the purpose of this function is to check if there is a schedule object in local storage and load each task item into the task property of the schedule object
function loadLocalTasks() {
  var data = localStorage.getItem("workHours"); //set data = to the local storage item "schedule"
  if (data) //if not undefined
  {
    var workHoursArr = JSON.parse(data);  //set schedule array equal to data
    $.each(workHoursArr, function (i, item) //itterate through each item in schedule array
    {
      workHours[i].tasks = item.tasks; //set the task property of the schedule array to the current task item in scheduleAeray
    });
  }
  else {
    localStorage.setItem("schedule", JSON.stringify(schedule));  //if data is undefined then store a new schedule object in local storage
  }
};

// function to save in localStorage; information that was input into the textarea
function storeLocalTasks(index) {
  var textArea = $("#textArea" + index);  // is set to the same as id created in textarea
  if (textArea.val() !== "") // text area cannot be left blank
  {
    workHours[index].tasks = textArea.val();  // textArea will change color within the index listing stated with past, present, future
    localStorage.setItem("workHours", JSON.stringify(workHours));  // create string to send to local storage
  } else {
    alert("there is no information to store")  // alert that "there is no information to store"
  }
};