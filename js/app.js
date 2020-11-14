const makhlof = document.getElementById('m5')
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const sliderpics = document.getElementsByClassName('sliderpics');

const bubbles = document.getElementsByClassName('pic1')


const backgroundpics = new Array(

    'pics/1.jpg',
    'pics/2.jpg',
    'pics/3.jpg',
    'pics/4.jpg',
    'pics/5.jpg',
    'pics/6.jpg',
);

let i = 0;
next.onclick = function () {
    if (i < 5) {

        makhlof.style.backgroundImage = 'url("' + backgroundpics[i + 1] + ' ")';
        sliderpics[i + 1].classList.add('active');
        sliderpics[i].classList.remove('active');

        i++
    }
}



prev.onclick = function () {
    if (i > 0) {

        makhlof.style.backgroundImage = 'url("' + backgroundpics[i - 1] + ' ")';
        sliderpics[i - 1].classList.add('active');
        sliderpics[i].classList.remove('active')
        i--
    }
}


bubbles.forEach(function (bubble, index) {

    console.log(bubble)
})
