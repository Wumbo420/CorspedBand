/*image preloading*/
$(document).ready(function() {
	const links = document.getElementsByTagName("main_img");
	const icons = document.getElementsByClassName(".ico");
	let x, icon, ima;
	let i, link, image;
	for ( i = 0; i < links.length; i++){
		link = links[i];
		image = new Image();
		image.src = links.href;
	}
	
	for ( x = 0; x < icons.length; x++){
		ico = icons[x];
		ima = new Image();
		image.src = icons.href;
	}
		
		/*ajax using flicker api for images*/
		var url = "https://api.flickr.com/services/feeds/photos_public.gne?%20id=171090944@N04&format=json&jsoncallback=?";
    $.getJSON(url, function(data){
        var html = "";
    $.each(data.items, function(i,item){

            html =html.replace("https://api.flickr.com/services/feeds/photos_public.gne?%20id=171090944@N04&format=json&jsoncallback=?");
            html += "<a href=" + item.media.m + " title=" + item.title + " rel=lightbox[vecta]>"; 
            html += "<img src=" + item.media.m +" width=120 height=100>"; 
            html += "</a>";        
        });
        $('#new_band').html(html); 
		});
		
			/*ajax using plugin for images
			Magnific Popup core JS file
			*/
		
			$('.simple-ajax-popup').magnificPopup({
				type: 'ajax'
			});

  }); 