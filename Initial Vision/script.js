let remaining = document.querySelector(".remaining");
let time = 0;

async function getTime() {
    let res = await fetch(`http://worldtimeapi.org/api/timezone/America/Denver`);
    let data = await res.json()
    let { datetime } = data
    date = datetime
    console.log(date)
    seconds = date.slice(17, 19)
    minutes = date.slice(14, 16)
    hours = date.slice(11, 13)
    day = date.slice(8, 10)
    month = date.slice(5, 7)
    seconds = parseInt(seconds)
    minutes = parseInt(minutes)
    hours = parseInt(hours)
    day = parseInt(day)
    month = parseInt(month)
    //If statements
    if (month < 12) {
        if (month == 11){
            var plural = ""
        }
        else {
            var plural = "s"
        }
        monthsLeft = 12 - month
        time = `${monthsLeft} Month${plural}`
        remaining.textContent = time
    }
    else {
        daysLeft = 25 - day
        hoursLeft = 24 - hours
        minutesLeft = 60 - minutes
        secondsLeft = 60 - seconds
        time = `${daysLeft} Days, ${hoursLeft} Hours, ${minutesLeft} Minutes, and ${secondsLeft} Seconds`
        remaining.textContent = time
        if (hoursLeft == 0 && minutesLeft == 0 && secondsLeft == 0) {
            alert("Merry Christmas!")
        }
    }
  }

getTime()
setInterval(getTime, 500)