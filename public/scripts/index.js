function bringDate() {
    return new Promise((resolve, reject) => {
        fetch('https://esteticaexcepcional.com.br/timePromotion').then(res => {
           return res.json()
        }).then(time => {
            resolve(time.data)
        }).catch(err => {
            reject(err)
        })
        
    })
}


window.addEventListener('DOMContentLoaded', async e => {
    let data = await bringDate()
    startCountdown(data)
})

function startCountdown(data) {
    setInterval(() => {
        let dateFront = Date.now()
        let dateBackEnd = data
        let countdown = (dateBackEnd - dateFront)
        let newDate = new Date(countdown)
        innerTime(newDate.getDay(), newDate.getHours(), newDate.getMinutes(), newDate.getSeconds())
    }, 1000);
    
}
function innerTime(Tday, Thour, Tminutes, Tseconds) {
    let day = document.getElementById('day')
    let hour = document.getElementById('hour')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')

    day.innerHTML = Tday
    hour.innerHTML = Thour
    minutes.innerHTML = Tminutes
    seconds.innerHTML = Tseconds
    
}