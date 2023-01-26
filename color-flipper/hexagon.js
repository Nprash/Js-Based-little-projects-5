const rest = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let RandColorFormat = '#';
    for (let i=0;i<6;i++){
        RandColorFormat+=rest[RandNumber()];
    } 
    
    document.body.style.backgroundColor = RandColorFormat;
    color.textContent = RandColorFormat;
    console.log(RandNumber() + "--->"+ RandColorFormat);
});
function RandNumber(){
    return Math.floor(Math.random()*rest.length);
}