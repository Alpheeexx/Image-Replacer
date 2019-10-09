pictures = ['URL-TO-IMAGE.JPG', 'URL-TO-IMAGE2.PNG']
console.log('Loading images');
var picture = '',
  images = document.getElementsByTagName('img');

function cancer() {
  for (var i = 0; i < images.length; i++) {
    rand = parseInt(Math.random() * pictures.length);
    picture = pictures[rand];
    images[i].setAttribute('src', picture);
    images[i].setAttribute('srcset', picture);
    console.log('Replaced Image.');
  }

  var picture = '',
    banners = document.getElementsByTagName('banner');

  for (var i = 0; i < banners.length; i++) {
    rand = parseInt(Math.random() * pictures.length);
    picture = pictures[rand];
    banners[i].setAttribute('style', 'background-image: url('+picture+');');
    console.log('Replaced Banner.');
  }
}

replace_image();
setInterval(replace_image, 1000);
