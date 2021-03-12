// Menu
function openNav() {
  document.getElementById('mySidenav').style.width = '300px';
  document.getElementById('menu-icon').style.display = 'none';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('menu-icon').style.display = 'block';
}

// Top Banner Slide
var img = document.querySelector('.banner-images > img');
var slideNum = document.querySelector('#slideNum');
var count = 1;

function onPrev() {
  var imgAlt = img.getAttribute('alt');
  if (imgAlt == 'banner01') {
    count = 3;
  } else {
    count--;
  }
  img.setAttribute('alt', 'banner0' + count);
  img.setAttribute('src', 'images/banner0' + count + '.png');
  slideNum.innerHTML = count;
}

function onNext() {
  var imgAlt = img.getAttribute('alt');
  if (imgAlt == 'banner03') {
    count = 1;
  } else {
    count++;
  }
  img.setAttribute('alt', 'banner0' + count);
  img.setAttribute('src', 'images/banner0' + count + '.png');
  slideNum.innerHTML = count;
}
