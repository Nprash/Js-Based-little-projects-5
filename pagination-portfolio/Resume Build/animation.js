let p1 = gsap.timeline();
p1.from("#p-img",1,{
    opacity:0,
    x:-100
})
p1.from(".profileText",{
    opacity:0,
    x:100,
})
p1.from(".leftside",1,{
    opacity:0,
    x:300
})
p1.from(".rightside",2,{
    opacity:0,
    x:-300
})
// for date

let date = new Date();
        const dt = document.getElementById('date');
        dt.innerHTML = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
