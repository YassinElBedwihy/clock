function showtime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours > 12){
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes
    };
    if(seconds < 10){
        seconds = "0" + seconds
    };
    if(hours < 10){
        hours = "0" + hours
    };

    let time = hours + " : " + minutes + " : " + seconds;


     document.getElementById("clock").textContent = time;
};

showtime()
let interval = setInterval(showtime, 1000)
let timerid = null


function stopTimer(){
    clearInterval(interval);
    timerid = 1
}


let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')

startButton.addEventListener('click', () => startTimer());
stopButton.addEventListener('click', () => {
    stopTimer()
    console.log('stopped')
})


function startTimer(){
    if(timerid){
        interval = setInterval(showtime,1000)
    }
    showtime()
    timerid = null
}