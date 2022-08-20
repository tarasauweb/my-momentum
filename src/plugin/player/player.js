import playlist from '../../play-list/play-list'


let trackNameDiv = document.querySelector('.track__name')
let trackFullTimeDiv = document.querySelector('.track__time-length')
let trackNowTimeDiv = document.querySelector('.track__time-now')
const progressBarDivWidth = document.querySelector('.progerss-bar').clientWidth
const progressNow = document.querySelector('.progress')
let audio = new Audio()
let timer
let stepAudionSecond = 0
let audioDuration = 0
let secondsNow = 0
let minustsNow = 0
let res = null
const startminutsTrack = 0
progressNow.style.width = 0 + 'px'


export const addPlayListHTML = function () {
    const playListItems = document.querySelector('.play-list')
    playlist.reverse()
    playlist.forEach(function (item) {
        const li = document.createElement('li')
        li.classList.add('play-item')
        li.textContent = item.title
        return playListItems.insertAdjacentElement('afterbegin', li)
    })
    playlist.reverse()
    return playListItems
}
export const playListLength = function () {
    return playlist.length
}
export const addActiveTrack = (count) => {
    const items = document.querySelectorAll('.play-item')
    items.forEach(function (item) {
        item.classList.remove('item-active')
    })
    items[count].classList.add('item-active')
}

export const playTrack = (count) => {
    audio.src = playlist[count].src
    trackNameDiv.textContent = playlist[count].title
    trackFullTimeDiv.textContent = playlist[count].duration
    return audio
}

export const setTrackTimeNow = (audio) => {
    if (audio.duration) {
        timeTrackNow()
    }
    audio.addEventListener('loadedmetadata', () => {
        timeTrackNow()
    })
}
export const pauseSetTrackTimeNow = () => {
    clearInterval(timer)
}


export const setTrackTimeStart = () => {
    trackNowTimeDiv.textContent = `00:00`
    clearInterval(timer)
    stepAudionSecond = 0
    audioDuration = 0
    secondsNow = 0
    minustsNow = 0
    res = null
    progressNow.style.width = 0 + 'px'
    return stepAudionSecond, audioDuration, secondsNow, minustsNow, res

}

function timeTrackNow() {
    clearInterval(timer)
    stepAudionSecond = Math.floor(progressBarDivWidth / audio.duration)
    console.log(stepAudionSecond)
    timer = setInterval(() => {
        secondsNow++
        if (secondsNow > 59) {
            minustsNow++
            secondsNow = 0 + '' + 0
        }
        else if (secondsNow < 10) {
            secondsNow = 0 + '' + secondsNow

        }
        res = `${secondsNow}`

        if(minustsNow<10){
            res = 0 + `${minustsNow}:${secondsNow}/`
        }
        else{
            res = `${minustsNow}:${secondsNow}/`
        }
        
        
        trackNowTimeDiv.textContent = res
        audioDuration = audioDuration + stepAudionSecond
        progressNow.style.width = audioDuration + `px`
        if (audioDuration >= progressBarDivWidth) {
            clearInterval(timer)
            audioDuration = 0
            stepAudionSecond = 0
            progressNow.style.width = audioDuration + `px`
        }
    }, 1000)
}
