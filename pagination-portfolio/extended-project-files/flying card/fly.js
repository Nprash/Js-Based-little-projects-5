const Element = document.querySelector(".fly");
Element.addEventListener("mouseover", (f)=>{
    const xposition = f.offsetX;
    const yposition = f.offsetY;
    const spanEl = document.querySelector(".flyingpic1");
    
    //to style the span
    spanEl.style.left = xposition + "px";
    spanEl.style.top = yposition + "px";
    const size = Math.random() *100;
    spanEl.style.width = size+ "px";
    spanEl.style.height = size+ "px";
    
    // Element.appendChild(spanEl);
    setTimeout(()=>{
        Element.remove();
    },100)
})