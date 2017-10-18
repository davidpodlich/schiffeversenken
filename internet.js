function timerHandler() {
    alert("Warum starren Sie so lange auf einen leeren Bildschirm?");
}

setTimeout(timerHandler, 4000);

var tick = true;
function ticker() {
    if(tick) {
        console.log("Tick");
        tick = false;
    }else {
        console.log("Tack");
        tick = true
    }
}
setInterval(ticker,1000);

