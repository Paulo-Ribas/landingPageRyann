let video = document.querySelector('video')
let playIcon = document.getElementById('play')
let pauseIcon = document.getElementById('pause')

function play() {
    video.play()
    playIcon.style.display = 'block'
    pauseIcon.style.display = 'none'

}
function pause() {
    video.pause()
    pauseIcon.style.display = 'block'
    playIcon.style.display = 'none'
}

video.addEventListener('click', event => {
    video.paused ? play() : pause()
})