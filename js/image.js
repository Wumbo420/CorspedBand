const links = document.getElementsByTagName("main_img");
let i, link, image;
for ( i = 0; i < links.length; i++){
    link = links[i];
    image = new Image();
    image.src = links.href;
}

const icons = document.getElementsByClassName(".ico");
let x, icon, ima;
for ( x = 0; x < icons.length; x++){
    ico = icons[x];
    ima = new Image();
    image.src = icons.href;
}
//https://jqueryui.com/tooltip/
$('.ajax-popup-link').magnificPopup({
    type: 'ajax'
  });
  
 