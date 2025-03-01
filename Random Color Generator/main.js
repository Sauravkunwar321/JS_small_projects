

const hexBtn = document.querySelector('.hex-btn');

const hexColorValue = document.querySelector('.hex-color-value');

const hexColorContainer = document.querySelector(".hex-color-container");

const rgbColorContainer = document.querySelector('.rgb-color-container');

const rgbColorValue = document.querySelector('.rgb-color-value');

//create a random hex-color
 
hexBtn.addEventListener("click", () => {
     let characterSet = '0123456789ABCDEF';
     let hexColorOutput = "";

     for(let i=0, charSetLength = characterSet.length; i<6; i++){

        hexColorOutput += characterSet.charAt(Math.floor(Math.random()*charSetLength));
     };

     hexColorValue.textContent = `#${hexColorOutput}`;

     hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;

     hexBtn.style.color = `#${hexColorOutput}`;


    
});



//RGB coilor generator

const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const hexCopyButton = document.querySelector(".hex-copy-color");
const rgbCopyButton = document.querySelector(".rgb-copy-color");

rgbBtn.addEventListener("click", () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

   rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

   rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
    
    

});

function copyHexColorToClipBoard(){
    console.log(hexColorValue.textContent);

    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("Color is copied!!");

}

hexCopyButton.addEventListener("click", copyHexColorToClipBoard);

rgbCopyButton.addEventListener("click", copyRgbColorToClipBoard);

function copyRgbColorToClipBoard(){
    
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert("Color is copied!!");

}