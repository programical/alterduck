var classes = ['header__logo', 'logo_homepage'];
var duckPicSource = browser.runtime.getURL('img/duck.png');

classes.forEach((className, i) => {
    var ducks = document.getElementsByClassName(className);
    for (var i = 0; i < ducks.length; i++) {
        ducks[i].style.backgroundImage = 'url("' + duckPicSource + '")';
    }
});
