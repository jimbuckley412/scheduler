// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();
let totalDays = new Date(year, month, 0).getDate();
let output = {
(month<10 ? '0' : '') + month + '/' +
(day<10 ? '0' : '') + day + '/' + year
}
$('date').text('${output}' {
$('.modal-container').toggle();
$('.modal-container--close').click(function(event) {
  $('.modal-container').css('display','none');
  })
})
let row = 0, length = 0, column =0;
let timeObj = {
  "6 AM" : 1,
  "7 AM" : 2,
  "8 AM" : 3,
  "9 AM" : 4,
  "10 AM" : 5,
  "11 AM" : 6,
  "12 PM" : 7,
  "1 PM" : 8,
  "2 PM" : 9,
  "3 PM" : 10,
  "4 PM" : 11,
  "5 PM" : 12,
  "6 PM" : 13,
  "7 PM" : 14,
  "8 PM" : 15,
  "9 PM" : 16,
  "10 PM" : 17,
  "11 PM" : 18,
  "12 AM" : 19,
  "1 AM" : 20,
  "2 AM" : 21,
  "3 AM" : 22,
  "4 AM" : 23,
  "5 AM" : 24
}
$(modal-container--form).submit(function(e){
  e.preventDefault();
  row = timeObj [$("start-select").val()];
  length = (timeObj[$("end-select").val()]) - (timeObj[$("start-select").value()]);
})
$('.content').append('<div class='event' style='grid-row: ${row}/span ${length};{
  grid-column:${column};background-color: yellow; '>Reserve</div>')
  $('.modal-container--form')[0].reset();
  $('.modal-container--form').off();
  $('.modal-container').toggle()

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYY [at] hh:mm;ss a');
    showTimeEl.text(rightNow);
  };  
  if function (timeObj === rightNow) {
    grid-column:${column};background-color: red;
  } if function (timeObj <= rightNow) {
    grid-column:${column};background-color: grey;
  } else function (timeObj !== rightNow)
  grid-column:${column};background-color: green;
}
grid-column:${column};background-color: white




var pastTimeEl = $('#row time-block past');
var currentTimeEl = $('#row time-blick present');
var futureTimeEl = $('#row time-block future');
var showTimeEl = $('#clock');


var rowEl = $('<i>');
var nameEl = $('<i>').text()
if (rowEl.isBefore(rightNow)){
  rowEl.addClass('row time-block past');
} if (rowEl.isSame(rightNow)){
  rowEl.addClass('row time-block present');
} else if (rowEl.isAfter(rightNow)) {
  rowEl.addClass('row time-block future');
}

})
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  $(function showTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var date = time.getDate();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var MV = "AM";
    if (hour >= 12) {
      if(hour > 12) hour -= 12;
      MV = "PM";
    } else if(hour == 0) {
      hr = 12;
      MV= "AM";
    }
    hour = 
      hour < 10 ? "0" + hour : hour;
      min = mon < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
    let currentTime = 
    hour + ":" + min + ":" + sec + MV;
  document.getElementById("clock").innerHTML = currentTime;
  });

  showTime();

  document.addEventListener("click", function(event){
    if (currentTime === )
  })