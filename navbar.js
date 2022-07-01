function getData(selector) {
    return document.querySelector('[data-'+selector+']')
}

let navhome = getData('navhome');
let navhowtoplay = getData('navhowtoplay');
let navsocial = getData('navsocial');
let navdevelopers = getData('navdevelopers');
navhome.onclick = function() {
    window.location.replace('/ultraballista/');
}
navhowtoplay.onclick = function() {
    window.location.replace('/ultraballista/howtoplay/index.html');
}
navsocial.onclick = function() {
    window.location.replace('/ultraballista/social/index.html');
}
navdevelopers.onclick = function() {
    window.location.replace('/ultraballista/developers/index.html');
}