const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const validateInput =()=> {
    const inputStr = userInput.value ;
    if(inputStr === "")
        alert("Please provide a phone number");
    else{
        // console.log(inputStr);
        validateNumber(inputStr);
        userInput.value = "";
    }
}

const validateNumber = (inputStr) => {
    // console.log("validating");
    // const test = "(555)5(55?)-5555"
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/
    const result = regex.test(inputStr);
    //   console.log(result);
    if(result){
        resultDiv.innerHTML += `<div class ="output-div valid">
        Valid US number: ${inputStr}
        </div>`;
    }
    else {
        resultDiv.innerHTML += `<div class ="output-div invalid">
        Invalid US number: ${inputStr}
        </div>`;
    }       
};

const resetOutputDiv = ()=> {
    resultDiv.innerHTML = "";
};


checkBtn.addEventListener("click",validateInput);

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      validateInput();
    }
  });

clearBtn.addEventListener("click",resetOutputDiv);