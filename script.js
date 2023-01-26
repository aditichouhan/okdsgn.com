gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();


tl.from(".left-img img", {
    x: -200,
    scale: 0.7,
    duration: 4,
    ease: 'Expo.easeInOut',

}, '-+=1.5')

tl.from(".image-div", {
    y: -50,

    duration: 4,
    ease: 'Expo.easeInOut',

}, '-+=1.5')

tl.from(".image-div5 .page-left-img", {
    y: -100,
    duration: 4,
    ease: 'Expo.easeInOut',

}, '-+=2.5')

tl.from(".image-div6", {
    x: 90,

    duration: 4,
    ease: 'Expo.easeInOut',

}, '-+=2.5')

tl.from(".image-div7", {
    y: 120,
    duration: 2,
    ease: 'Expo.easeInOut',

}, '-+=0.1')

tl.from(".pic1", {
    y: 120,
    duration: 3,
    ease: 'Expo.easeInOut',

}, '-+=0.1')
tl.from(".pic2", {
    y: 100,
    duration: 3,
    ease: 'Expo.easeInOut',

}, '-+=0.1')

tl.from(".pic3", {
    y: 80,
    duration: 3,
    ease: 'Expo.easeInOut',

}, '-+=0.1')

tl.from(".pic4", {
    y: 70,
    duration: 3,
    ease: 'Expo.easeInOut',

}, '-+=0.1')

tl.from(".pic5", {
    y: 120,
    duration: 5,
    ease: 'Expo.easeInOut',

}, '-+=0.1')

tl.from(".pic6", {
    y: 120,
    duration: 5,
    ease: 'Expo.easeInOut',

}, '-+=2.1')

tl.from(".image10-div", {
    y: 120,
    duration: 2,
    ease: 'Expo.easeInOut',

}, '-+=0.1')


// ---------------------------------------------

// gsap.to(".main",{
//     opcity: 0,
//     scrollTrigger:{           
//         trigger: ".body",
//         markers: true,
//         scrub:true,
//         start :"10% 10% ",
//           end: "50% 50%",
//           pin: ".main"
    
//     }
// })