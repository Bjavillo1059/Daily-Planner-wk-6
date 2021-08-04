// src of code // Modsia16(30July2021)day-planner(javascript)[structure and layout] // this code used for reference

$(document).ready(function () {

    var timeDisplayEl = $('#time-display');
    var currentHour = moment().hour() //set currentHour to 24hr clock numbered 0-23

    // displaying the time
    function displayDate() {
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss');
        timeDisplayEl.text(currentTime);
    };

    setInterval(displayDate, 1000);



    // function set to change colors with adding class of past, present, or future
    function setPPFColor() {
        $(".hour-block .input").each(function () {

            var blockOfTime = parseInt($(this).attr("id"));

            if (blockOfTime < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");

            } else if (blockOfTime === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future")
            }
        });
    };

    $(".save-btn").on("click", function () {
        var input = $(this).siblings(".input").val();
        var timeSlot = $(this).parent().attr("id");
        localStorage.setItem(timeSlot, input);
    });

    setPPFColor();


    $('#8 .input').val(localStorage.getItem('8'));
    $('#9 .input').val(localStorage.getItem('9'));
    $('#10 .input').val(localStorage.getItem('10'));
    $('#11 .input').val(localStorage.getItem('11'));
    $('#12 .input').val(localStorage.getItem('12'));
    $('#13 .input').val(localStorage.getItem('13'));
    $('#14 .input').val(localStorage.getItem('14'));
    $('#15 .input').val(localStorage.getItem('15'));
    $('#16 .input').val(localStorage.getItem('16'));
    $('#17 .input').val(localStorage.getItem('17'));
});