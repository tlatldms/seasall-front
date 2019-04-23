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
		if(sValue<=0){
			$(this).siblings("input").val(0);
		}
	});

	//select_box06
	$(".selectBox .select_btn").click(function(){
		$(this).parent(".selectBox").toggleClass("open");
		var that = $(this);
		$(this).siblings(".option_list").find("li a").click(function(e){
			e.preventDefault();
			var optionVal = $(this).text();
			that.find("p span").text(optionVal);
			that.parent(".selectBox").removeClass("open");
		});

	});
	$(document).mouseup(function(e){
		var container01 = $(".selectBox");
		if(!container01.is(e.target)&&container01.has(e.target).length===0){
			container01.removeClass("open");
		}

	});

	//select_box05

	//등급관리 리스트 이벤트
	$(".list02 li .btn_grade").click(function(){
		if($(this).parent().siblings(".grade_option").css("display")=="none"){
			$(this).parents("li").addClass("open");
			$(this).parent().siblings(".grade_option").slideDown(200);
		}else{
			$(this).parents("li").removeClass("open");
			$(this).parent().siblings(".grade_option").slideUp(200);
		}
		
	});

	
});