
const timeDiv = document.querySelector('.time')


function setTime () {
    let timer = setInterval(() =>{
        const timeNow = new Date().toLocaleTimeString()
        timeDiv.textContent = timeNow
    })
    
}


export default setTime