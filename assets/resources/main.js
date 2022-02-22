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
right.addEventListener('touchstart', handleTouchStart, false);
right.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function handleTouchStart (evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove (evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            debounce(function () {
                onSwipeLeft(evt);
            }, 350)()
        } else {
            debounce(function () {
                onSwipeRight(evt)
            }, 350)()
        }
    } else {
        if (yDiff > 0) {
            // debounce(function () {
            // onSwipeUp(evt)
            // }, 500)()
        } else {
            // debounce(function () {
            // onSwipeDown(evt)
            // }, 500)()
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
