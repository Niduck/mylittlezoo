let index = 0;
let first = true;
render(index)
let audio = new Audio();
function render (_index) {
    if(_index > zoo.length -1){
        index = 0
        _index = index
    }
    if(_index < 0){
        index = zoo.length -1
        _index = index
    }
    document.body.classList.toggle('animal-changing')
    document.body.style.backgroundColor = zoo[_index].colors.background;
    let image = document.getElementById("animal-image");
    let title = document.getElementById("animal-title");
    let desc = document.getElementById("animal-description");
    let facts = document.getElementById("animal-facts");
    facts.innerHTML = "";
    setTimeout(function () {
        document.body.style.setProperty('--accent-color', zoo[_index].colors.accent);
        document.body.classList.remove('animal-changing')
        image.src = zoo[_index].path;
        title.innerText = zoo[_index].title
        desc.innerHTML = zoo[_index].description
        for(let fact of zoo[_index].facts){
            let p = document.createElement("p")
            p.innerHTML = fact
            facts.append(p);
        }
        let sel = document.querySelectorAll('[data-sound]');
        sel.forEach(node => {
            node.addEventListener('click', e => {
                let soundName = e.target.getAttribute('data-sound');
                playAudio(zoo[_index].sounds[soundName]);
            })
        })
        first= false
    }, first ? 0 : 350)
}
function playAudio (src) {
    audio.src = src;
    return new Promise(function (resolve, reject) {
        audio.addEventListener('loadedmetadata', function () {
            audio.volume = 1;
            audio.play();
            setTimeout(function () {
                resolve(audio);
            }, audio.duration * 1000)
        });
    });
}
function debounce (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
//*** Event listeners
window.addEventListener('keyup', function (e) {
    if (e.keyCode === 39) {
        index ++;
        render(index)
    }
    if (e.keyCode === 37) {
        index --;
        render(index)
    }
})
let onSwipeLeft = function (e) {
    index++;
    render(index)

}
let onSwipeRight = function (e) {
    index--;
    render(index)
}
let onSwipeDown = function (e) {
    let body = document.body;
    if (!body.classList.contains('fullscreen')) {
        body.classList.add('fullscreen')
    }
}
let onSwipeUp = function (e) {
    let body = document.body;
    if (body.classList.contains('fullscreen')) {
        body.classList.remove('fullscreen')
    }
}
//? @source : https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
let right = document.body;


// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback){

    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, {passive: false})

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    },{passive: false})

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    },{passive: false})
}
swipedetect(document.body, function(swipedir){
    switch(swipedir){
        case 'left':
            onSwipeLeft();
            break;
        case 'right':
            onSwipeRight();
            break;
    }
});
//Display modal
let ft = localStorage.getItem('mlz:tutorial');
if(Boolean(ft) !== true){
    console.log('passe');
    let modal = document.getElementById("mlz-tutorial");
    modal.style.display = 'block';
    document.getElementById("mlz-tutorial-next").addEventListener('click', function(){
        modal.style.display = "none";
        localStorage.setItem('mlz:tutorial', 'true')
    })
}
