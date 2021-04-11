// Your code goes here
let header = document.querySelector('.logo-heading')
console.log(header)
let navLinks =  document.querySelectorAll('.nav-link')
//console.log(navLinks)

let busImg = document.querySelector('.home img')
//console.log(busImg)

let imgTwo = document.querySelector('.img-content')
//console.log(imgTwo)

let imgThree = document.querySelector('.inverse-content .img-content')
//console.log(imgThree)

let imgFour = document.querySelector('.content-destination img')
//console.log(imgFour)

function on(){
    event.target.style.background = 'yellow'
    event.target.style.borderRadius = '5px'
    event.target.style.padding = '2px'
     
    
}

function color(){
    event.target.src = 'https://th.bing.com/th/id/OIP.T0VW6g5rzKM7LfXhzaVQOQHaEo?w=282&h=180&c=7&o=5&pid=1.7'
}

function off(){
    event.target.style.background = 'white'
}

function changeImg(){
    event.target.src = 'https://wallup.net/wp-content/uploads/2014/10/nature/Beach_Golden_Sunset.jpg'
}

function changeImg2(){
    event.target.src = 'https://th.bing.com/th/id/R42866807ed6df1ed3a18ff7c1f3357e4?rik=SS0JMKO7Xf1tvg&riu=http%3a%2f%2fwww.smarttravel.ee%2fwp-content%2fuploads%2f2013%2f07%2fOld-Town-Tallinn-Estonia-2.jpg&ehk=skHe4Q8fGHxC3JfHebwn4BJPPkfny%2bbRT7ifNvubboc%3d&risl=&pid=ImgRaw'
}

function change3(){
    event.target.src = 'https://i.ytimg.com/vi/ydvWC63SEqY/maxresdefault.jpg'
}

Array.from(navLinks)
//console.log(navLinks)

navLinks.forEach(link => {
    link.addEventListener('mouseover', on)
})

navLinks.forEach(link => {
    link.addEventListener('mouseout', off)
})

document.addEventListener('DOMContentLoaded', () => {
    alert ("Let's Go on an Adventure!")
})

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        return document.body.style.backgroundColor = 'yellow'
    }
})

imgFour.addEventListener( 'mouseup', color)

busImg.addEventListener('mousedown', changeImg)


imgTwo.addEventListener('dblclick', changeImg2)

imgThree.addEventListener('wheel', change3)




