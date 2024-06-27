setTimeout(function(){$('.box_wrap').isotope()},100)

$('.box_wrap').isotope({
 // options
 itemSelector: '.box',
 layoutMode: 'masonry' 
});

$(".btns>li").click(function(){
	$(this).addClass("active")
	$(this).siblings().removeClass("active")
	const i=$(this).attr("data-filter")//속성값 메서드 호출
//const i=$(this).attr("data-filter", "속성값")//속성 메서드 (호출+값변경)
	$('.box_wrap').isotope({filter:i})
})

$(".fancybox").fancybox();