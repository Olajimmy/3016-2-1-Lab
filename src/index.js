//import "./style.css";

console.log("this is new connected")

console.log("hi")

let change = document.querySelector("#change")

function clickResponse(){
    // console.log(prompt("enter a number between 1 to 10"))
    let number = prompt("Please enter any number between 1-10 to win a prize");

    if (number != null) {
      if(number >0 && number <=10){
        if (number == 8 ){
        console.log("YAAAYYY!!! you won. take yourself for a treat")

      }else {
        console.log("better luck next time")
        document.getElementById("change").style = "background-color:#db0000"

      }
    }

}
}

    //console.log("someone clicked the button")
    //console.log(alert("you clicked the button"))
    //console.log(confirm("yes or no"))
