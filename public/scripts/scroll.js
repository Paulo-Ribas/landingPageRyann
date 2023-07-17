let carrossel = document.getElementById('carrossel')
function scroll(e) {
    e.preventDefault()
    let speedForce = 5
    carrossel.scrollBy(e.deltaY * speedForce, 0)
}
carrossel.addEventListener('mousemove', event => {
    console.log('veio aqui')
    document.addEventListener('wheel', scroll, {passive: false})
})
carrossel.addEventListener('mouseleave', event => {
    document.removeEventListener('wheel', scroll)
})