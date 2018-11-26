//Pls no

pictures = ['https://i.ytimg.com/vi/gVEdQJ7qtJw/maxresdefault.jpg'];
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

cancer();
setInterval(cancer, 1000);
