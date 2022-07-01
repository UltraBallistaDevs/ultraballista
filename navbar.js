function getData(selector) {
    return document.querySelector('[data-'+selector+']')
}

let navhome = getData('navhome');
let navhowtoplay = getData('navhowtoplay');
let navsocial = getData('navsocial');
let navdevelopers = getData('navdevelopers');
navhome.onclick = function() {
    window.location.replace('/');
}
navhowtoplay.onclick = function() {
    window.location.replace('/howtoplay/index.html');
}
navsocial.onclick = function() {
    window.location.replace('/social/index.html');
}
navdevelopers.onclick = function() {
    window.location.replace('/developers/index.html');
}