//seasall.js
//
$(function(){
	//contentsWrap 최소 높이값 
	var headerH = $("header").outerHeight();
	if(headerH===null){
		headerH=0;
	}
	console.log("headerH: "+headerH);
	var breadH =$(".breadscrumb").outerHeight();
	if(	breadH===null){
		breadH=0;
	}
	console.log("breadH: "+breadH);
	var footerH = $("footer").outerHeight();
	// footerH = footerH+2;
	console.log("footerH : "+footerH);
	var minusH= headerH + breadH + footerH;
	minusH= minusH+"px";
	console.log("minusH: "+minusH)
	$("#contentsWrap").css({
		minHeight: "calc(100% - "+minusH+")"
	})

	//gnb이벤트 
	$(".gnb_area .gnb li a").click(function(){
		if($(this).siblings('.sub_gnb').css("display")==="none"){
			$(".sub_gnb").slideDown(200);
		}else if($(this).siblings('.sub_gnb').css("display")==="block"){
			$(".sub_gnb").slideUp(200);
		}
	});

	//spinner
	$(".spinner").find(".btn_sp_plus").click(function(){
		var sValue = $(this).siblings("input").val();
		sValue++;
		// console.log("sValue: "+sValue);
		$(this).siblings("input").val(sValue);
	});
	$(".spinner").find(".btn_sp_minus").click(function(){
		var sValue = $(this).siblings("input").val();
		sValue--;
		// console.log("sValue: "+sValue);
		$(this).siblings("input").val(sValue);
	});
	
});