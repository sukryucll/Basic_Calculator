var buttn = document.querySelectorAll(".btn")
var btnNumber = document.querySelectorAll(".num");
var btnOpt = document.querySelectorAll(".operator");
var screen = document.querySelector("#display");
var optState = false;
var opt = "";
var final = 0;
var clearButton = document.getElementById("clear");
 

btnNumber.forEach(number => {
    number.addEventListener("click",showNumber);

    function showNumber(){
        if(screen.textContent=="0" || optState){
            screen.textContent="";

        }
        screen.textContent += this.value;
        optState = false;

    }
})

btnOpt.forEach(operator => {
    operator.addEventListener("click",calculator);

    function calculator(){
        optState = true;
        var newOpt = this.value;

        switch(opt){
            case"+":
                screen.textContent = final + Number(screen.textContent);
                break;
            case"-":
                screen.textContent = final - Number(screen.textContent);
                break;
            case"*":
                screen.textContent = final * Number(screen.textContent);
                break;
            case"/":
                screen.textContent = final / Number(screen.textContent);
                break;
            case"%":
                screen.textContent = (final * Number(screen.textContent))/100;  
                break;
            case "sqrt":
                screen.textContent = Math.sqrt(Number(screen.textContent));
                break;
            case"=":
                final = Number(screen.textContent);    
                break;


        }
        final = Number(screen.textContent);
        opt=newOpt;
    }
})
clearButton.addEventListener("click", clearScreen);

function clearScreen() {
    debugger
    screen.textContent = "0";
    optState = false;
    opt = "";
    final = 0;
}
var deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteLastCharacter);

function deleteLastCharacter() {
    if (screen.textContent.length > 0) {
        screen.textContent = screen.textContent.slice(0, -1);
    }
}
