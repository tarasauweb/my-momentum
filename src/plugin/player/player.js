let audio = new Audio()
import playlist from '../../play-list/play-list'

export const addPlayListHTML = function () {
    const playListItems = document.querySelector('.play-list')
    playlist.reverse()
    playlist.forEach(function (item){
        const li = document.createElement('li')
        li.classList.add('play-item')
        li.textContent = item.title
        return playListItems.insertAdjacentElement('afterbegin' , li)
    })
    playlist.reverse()
    return playListItems
}
export const playListLength = function () {
    return playlist.length
}
export const addActiveTrack = (count)=>{
    const items = document.querySelectorAll('.play-item')
    items.forEach(function (item){
        item.classList.remove('item-active')
    })
    items[count].classList.add('item-active')
}

export const playTrack = (count,bool)=>{
    
    audio.src = playlist[count].src
    console.log(audio)
    if(bool){
        audio.play()
    }
    else{
        audio.pause()
    }
    
}


