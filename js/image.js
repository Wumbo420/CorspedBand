/*image preloading*/
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
/*this plugin allows image zoom compatibility*/
$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});