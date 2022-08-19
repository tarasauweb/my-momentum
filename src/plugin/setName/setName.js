function setName () {
    const name = document.querySelector('.name')
    const myStorage = window.localStorage
    if(myStorage.getItem('name')){
        name.value = myStorage.getItem('name')
    }
    name.addEventListener('change', ()=>{
        myStorage.setItem('name' , name.value)
    })
}

export default setName