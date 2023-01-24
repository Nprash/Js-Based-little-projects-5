// form to
// selector duration {property of object}

let t1 = gsap.timeline()
// t1.from("nav", 2, {
//     opacity: 0,
//     y: 10,
// })

// homepage objects
t1.from("#herotext", {
    opacity:0,
    x:-320,
})

t1.from("#heropic", {
    opacity: 0,
    x: 150,
})

t1.from("#descanimate",{
    opacity:0,
    y:150,
})
// bottom social icons
t1.from("#facebookanimate",{
    opacity:0,
    y:-50,
})
t1.from("#githubanimate",{
    opacity:0,
    y:50,
})
// skill course

t1.from("#skillnimate",0.5,{
    opacity:0,
    x:320,
})
t1.from("#skilimage",{
    opacity:0,
    x:-320,
})
t1.from("#courseanimate",0.5,{
    opacity:0,
    x:-320,
})
