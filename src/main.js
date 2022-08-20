import "./style.css";
// import playlist from "./play-list/play-list";
import addBackGround from './plugin/slider/slider'
import getWather from './plugin/wather/wather'
import setTime from './plugin/time/time'
import setDate from './plugin/date/date'
import setName from './plugin/setName/setName'
import setQuotes from './plugin/quotes/quotes'
import {addActiveTrack,addPlayListHTML,playListLength,playTrack,setTrackTimeNow,pauseSetTrackTimeNow,setTrackTimeStart} from './plugin/player/player'



const btnPlay = document.querySelector('.play')
const btnNextSongPlay = document.querySelector('.play-next')
const btnPrevSongPlay = document.querySelector('.play-prev')
const inputforCity = document.querySelector('.weather .city')
const changeQuoteBtn = document.querySelector('.change-quote')

const defaultCity = 'Minsk'
let city = null
let myStorege = window.localStorage
if (!myStorege.getItem('city')) {
    myStorege.setItem('city', defaultCity)
}
city = myStorege.getItem('city')
inputforCity.value = myStorege.getItem('city')
inputforCity.addEventListener('change', () => {
    city = inputforCity.value
    myStorege.setItem('city', city)
    getWather(city)
})
changeQuoteBtn.addEventListener('click' , ()=>{
    setQuotes()
})


let count = 0
let playSong = false
let audio = playTrack(count)
btnPlay.addEventListener('click', ()=>{
    addActiveTrack(count)
    
    if(!playSong){
        playSong = true
        audio.play()
        setTrackTimeNow(audio)
        
    }
    else{
        playSong = false
        audio.pause()
        pauseSetTrackTimeNow()
    }
    // playTrack(count)
    // console.log(playTrack(count))
})
btnNextSongPlay.addEventListener('click' , ()=>{
    
    setTrackTimeStart()
    audio.pause()
    audio.currentTime = 0.0
    
    count++
    playSong = true
    if(count>=playListLength()){
        count = 0
    }
   
    audio = playTrack(count)
    audio.play()
    addActiveTrack(count)
    setTrackTimeNow(audio)
})
btnPrevSongPlay.addEventListener('click' , ()=>{
    audio.pause()
    audio.currentTime = 0.0
    playSong = true
    count--
    if(count<0){
        count = playListLength() - 1
    }
    audio = playTrack(count)
    audio.play()
    addActiveTrack(count)
    setTrackTimeNow(audio)
})


addPlayListHTML()
setQuotes()
setName()
setDate ()
setTime()
getWather(city)
addBackGround()