const checkerBody = document.getElementById("checker-body");
const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");


const checkForPalindrome = () => {
     const inputStr = getInputString();
     if(inputStr.trim() === ""){
        alert("Please input a value");
        return;
     }
     else {
        
        resultText.classList.add("resultShow");
        const cleanedStr = inputStr.replace(/[^a-zA-Z0-9]/g, "");
        const lowerCleanedStr = cleanedStr.toLowerCase();
        const reversedStr = lowerCleanedStr.split('').reverse().join('');
         if(lowerCleanedStr === reversedStr){
            // console.log(`${inputStr} is a Palindrome.`);
            
            resultText.innerHTML = `<span>${inputStr}</span> is a Palindrome.`;
         }
         else{
            // console.log(`${inputStr} is not a Palindrome.` );
            resultText.innerHTML = `<span>${inputStr}</span> is not a Palindrome.`;
         }
        
        // console.log(lowerCleanedStr);
        // console.log(reversedStr);

     }
     
     

} 
const getInputString = () => inputText.value ;

checkButton.addEventListener("click",checkForPalindrome);


// console.log(inputString);











// console.log("kishan");