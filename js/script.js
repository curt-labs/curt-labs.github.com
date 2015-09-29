var showVideo, html;
html = "";
$(function(){

	$('img.graphic').after(html);

	$(document).on('click','div.img-action',function(){
		$.modal('<iframe width="853" height="480" src="http://www.youtube.com/embed/FwiXnJOzuDE" frameborder="0" allowfullscreen></iframe>', {
			closeHTML:"",
			containerCss:{
				backgroundColor:"#000",
				borderColor:"#fff",
				height:"auto",
				padding:0,
				width:"auto",
				overflow:"hidden"
			},
			overlayCss:{ backgroundColor:"#fff",opacity:"0.4"},
			overlayClose:true
		});

	});
});
