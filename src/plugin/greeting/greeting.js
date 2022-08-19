function setGreeting () {
    const getHours = new Date().getHours()
    const greetingText = document.querySelector('.greeting__text')
    let res = ``
    if(getHours>5 && getHours<12){
        res = `Good morning`
    }
    else if(getHours>11 && getHours<18){
        res = `Good afternoon`
    }
    else if(getHours>17 && getHours<24){
        res = `Good evening`
    }
    else if(getHours>0&&getHours<6){
        res = `Good night`
    }

    greetingText.textContent = res
}

export default setGreeting 