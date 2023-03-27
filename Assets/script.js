var Currinfo = localStorage.getItem("info");
var Lastinfo = localStorage.getItem("Linfo");
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


$(function () {

  $(".saveBtn").click(function(){
      console.log($(this).siblings("textarea").val())
    // var Currinfo = Lastinfo.value
      localStorage.setItem(this,Lastinfo)
    // console.log($(this).siblings("textarea").val())
    })})

;

$(".inputField").keypress(function (event) {
  if (event.key === "Enter"){
  event.preventDefault();
  button.click();
}
}) 

// .addEventListener("click", Lastinfo);