function setDate () {
    const dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const dateNom = new Date().getDay()
    const dateDiv = document.querySelector('.date')
    const month = new Date().toLocaleString('eng', { month: 'long' });
    const dateNUm = new Date().getUTCDate();
    let res = `${dayArr[dateNom-1]}, ${month} ${dateNUm}`
    dateDiv.textContent = res
}



export default setDate