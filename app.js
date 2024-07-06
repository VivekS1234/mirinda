// locomotive

const scroll = new LocomotiveScroll({
    el: document.querySelector('.parent'),
    smooth: true
});

// page 1 animation

var tl = gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to(".page1",{
    y:"0vh",
    duration: 1,
    delay:1
})
tl.to(".page1",{
    rotate:360,
    scale:1,
})

// section9 animation

var box1 = document.querySelector('.section9 .box-1')
var box2 = document.querySelector('.section9 .box-2')
var box3 = document.querySelector('.section9 .box-3')
var box4 = document.querySelector('.section9 .box-4')

box1.addEventListener('mouseover', () => {
    box2.style.marginLeft = '20%'
    box2.style.transitionDuration = '0.3s'
})
box1.addEventListener('mouseout', () => {
    box2.style.marginLeft = '-1%'
    box2.style.transitionDuration = '0.3s'
})

box2.addEventListener('mouseover', () => {
    box3.style.marginLeft = '20%'
    box3.style.transitionDuration = '0.3s'
})
box2.addEventListener('mouseout', () => {
    box3.style.marginLeft = '-1%'
    box3.style.transitionDuration = '0.3s'
})

box3.addEventListener('mouseover', () => {
    box4.style.marginLeft = '20%'
    box4.style.transitionDuration = '0.3s'
})
box3.addEventListener('mouseout', () => {
    box4.style.marginLeft = '-1%'
    box4.style.transitionDuration = '0.3s'
})

