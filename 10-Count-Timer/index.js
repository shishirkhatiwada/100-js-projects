const endDate = "6 March 2023 09:00 AM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    console.log(diff);

    if(diff<0){
        return;
    }

    //convert into days
    const days = Math.floor(diff/3600/24);
    inputs[0].value = days

    //convert into Hours
    const hours = Math.floor(diff/3600)%24;
    inputs[1].value = hours;

    //convert into mintues
    const min = Math.floor(diff/60)%60;
    inputs[2].value = min;

    //convert into seconds
    const sec = Math.floor(diff)%60;
    inputs[3].value = sec;

}

clock()

//  1day = 24 hours
//  1hr = 60 min
//  60min = 3600sec
// 
// 

setInterval(
    ()=>{
        clock()
    },1000
)
