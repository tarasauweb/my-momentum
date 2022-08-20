const urlNight = ' https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=3491125f73a0a55afad1acd83ec6e296&gallery_id=185118123-72157720062587146&extras=url_h&format=json&nojsoncallback=1'
const urlEvening = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=3491125f73a0a55afad1acd83ec6e296&gallery_id=185118123-72157720111880160&extras=url_h&format=json&nojsoncallback=1'
const urlAfternoon = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=3491125f73a0a55afad1acd83ec6e296&gallery_id=185118123-72157720111881805&extras=url_h&format=json&nojsoncallback=1'
const urlMorning = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=3491125f73a0a55afad1acd83ec6e296&gallery_id=185118123-72157720069530982&extras=url_h&format=json&nojsoncallback=1'
const body = document.querySelector('body')
import setGreeting from '../greeting/greeting'
async function addBackGround(){
    setGreeting()
    const btnPrev = document.querySelector('.slider .slider__btns .prev')
    const btnNext = document.querySelector('.slider .slider__btns .next')
    let count = 0
    const hourNow = new Date().getHours()
    let timeDayUrl = null
    const objTimeUrl = {
        'morning' : urlMorning,
        'afternoon' : urlAfternoon,
        'evening' : urlEvening,
        'night' : urlNight
    }
    if(hourNow>5 && hourNow<12){
        timeDayUrl = objTimeUrl.morning
    }
    else if(hourNow>11 && hourNow<18){
        timeDayUrl = objTimeUrl.afternoon
    }
    else if(hourNow>17 && hourNow<24){
        timeDayUrl = objTimeUrl.evening
    }
    else if(hourNow>0&&hourNow<6){
        timeDayUrl = objTimeUrl.night
    }
    const data = await fetch(timeDayUrl)
    const res = await data.json()
    let arrImg = res.photos.photo.filter(item=>item.url_h)
    body.style.background = `url('${arrImg[count].url_h}') no-repeat center center /cover`
    btnPrev.addEventListener('click' , ()=>{
        count--
        setGreeting()
        if(count<=0){
            count = arrImg.length-1
        }
        body.style.background = `url('${arrImg[count].url_h}') no-repeat center center /cover`
    })
    btnNext.addEventListener('click' , ()=>{
        count++
        setGreeting()
        if(count>=arrImg.length){
            count = 0
        }
        body.style.background = `url('${arrImg[count].url_h}') no-repeat center center /cover`
    })
}
export default addBackGround
