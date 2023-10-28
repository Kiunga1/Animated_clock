"use strict"

const updateClock = ()=> {

    //get the current date
    //get the seconds
    //get the minutes
    //get the hours
    
    const currentDate = new Date ()
    const seconds = currentDate.getSeconds() //return the seconds 30
    const minutes = currentDate.getMinutes() + seconds / 60;
    const hours = (currentDate.getHours() % 12) + minutes / 60;

    //get the angles

    const secAngle = seconds * 6;
    const minAngle = minutes * 6;
    const hourAngle = hours * 30;

    //get our elements
    const secHand = document.querySelector("#seconds");
    const minHand = document.querySelector('#minutes');
    const hourHand = document.querySelector("#hours");

    secHand.setAttribute("transform", `rotate(${secAngle}, 244, 251)`);
    minHand.setAttribute("transform", `rotate(${minAngle}, 244, 251)`);
    hourHand.setAttribute("transform", `rotate(${hourAngle}, 244, 251)`);


    const tickSound = new Audio ("./media/tick.mp3");
    tickSound.currentTime = 0;
    tickSound.play();
};

setInterval(updateClock, 1000);