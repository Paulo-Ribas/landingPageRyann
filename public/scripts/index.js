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
    verifyPlural(Tday, Thour, Tminutes, Tseconds)
}

function verifyPlural(Tday, Thour, Tminutes, Tseconds) {
    let day = document.getElementById('dayText')
    let hour = document.getElementById('hourText')
    let minutes = document.getElementById('minutesText')
    let seconds = document.getElementById('secondsText')
    
    Tday != 1 ? day.innerHTML ='dias' : day.innerHTML ='dia'
    Thour != 1 ? hour.innerHTML = 'horas' : hour.innerHTML = 'hora'
    Tminutes != 1 ? minutes.innerHTML = 'minutos' : minutes.innerHTML = 'minuto'
    Tseconds != 1 ? seconds.innerHTML = 'segundos' : seconds.innerHTML = 'segundo'
   
}