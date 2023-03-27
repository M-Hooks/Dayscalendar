var inputvalue = $('.inputValue');
var inputField = $(".inputField");
var lastinfo = localStorage.getItem("info");
var previousLocation = localStorage.getItem("location");
// document.getElementById("myBtn").addEventListener("click", save)
// // document.querySelector("#myBtn").addEventListener("click", save)
// $("#myBtn").click(save)
var now = dayjs()
console.log(now["$H"])


  //for(VARIABLE; CONDITION; AFTER){}
  for(var hour = 0; hour <= 23; hour++){
    if(hour > now["$H"]){

      $("#hour-" + hour).addClass("future")
      
      }
      else if(hour == now["$H"]){

        $("#hour-" + hour).addClass("present")
      }
      else if (hour < now["$H"]){

        $("#hour-" + hour).addClass("past")
      }
  }



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  if (previousLocation) {
    inputField.value = previousLocation;
  }

  $(".saveBtn").click(function(){
    var inputValue = inputField.value
    localStorage.setItem("location", inputValue);
  });



  // if (lastinfo){
  //   inputField.value = lastinfo
  // }

  // $(".saveBtn").click(function(){
  //   var here = ($(this).siblings("textarea").val())
  //   var inputValue = inputField.value
  //   localStorage.setItem(here,inputValue)
  //   console.log($(this).siblings("textarea").val())
    })

// });
 
;

$(".inputField").keypress(function (event) {
  if (event.key === "Enter"){
  event.preventDefault();
  button.click();
}
}) 