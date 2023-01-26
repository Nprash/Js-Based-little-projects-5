const colors = ['white','black','red','green','violet','grey','#f1f5f8'];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //to generate random numbers in colors 
    let randNumber= GetRandomNumber();
    document.body.style.backgroundColor = colors[randNumber];
    color.textContent = colors[randNumber];
    console.log(randNumber);
});

function GetRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}