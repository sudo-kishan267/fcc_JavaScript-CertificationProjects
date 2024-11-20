const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const romanData = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
];
   

// Iterative approach 

// const solve = (val) => {
//   let result = "";
  
//   for (let i = 0; i < romanData.length; i++) {
//     while (val >= romanData[i].value) {
//       result += romanData[i].symbol;
//       val -= romanData[i].value;
//     }
//   }
//   return result;
// } 


// First i thought of the recursive approach 

let result = "";
let i = 0;
const solve = (val)=> {

        if (val === 0)
            return;
        else if (val >= romanData[i].value ){
            result +=romanData[i].symbol;           
            solve(val-romanData[i].value);           
        } 
        else{
            solve(val,i++);
        }   
}
   




const convertToRoman = (val) => {   
    
    // const result = solve(val);// Uncomment this line & comment below 3 lines
   // of code for iterative approach.
    
    solve(val); //-->this one
       
    outputDiv.innerHTML =`
    <div class= "output-number">${result}</div>
    `;
   
    result = "";//-->this one
    i=0;//-->this one
   
   
}

const validateInput = () => {
    console.log(numberInput.value) ;
    const intInput = parseInt(numberInput.value);
    console.log(intInput) ;
    
    if(!numberInput.value || isNaN(intInput)){
       
        outputDiv.innerHTML =`
        <div class= "output-alert">Please enter a valid number</div>
        `;
    }    
    else if(intInput < 1){
        outputDiv.innerHTML =`
        <div class= "output-alert">Please enter a number greater than or equal to 1</div>
        `;
        
     }
     else if (intInput>3999){
        outputDiv.innerHTML =`
        <div class= "output-alert">Please enter a number less than or equal to 3999</div>
        `;
     }
     else {
        convertToRoman(intInput);
     }

     numberInput.value = "";
}




convertBtn.addEventListener("click", validateInput);