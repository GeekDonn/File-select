$(function(){
	$("#right_other").click(function(){
		
		var i = $("#left option:selected");
		$("#right").append(i);
	});
	$("#left_other").click(function(){
		var i = $("#right option:selected");
		$("#left").append(i);
	});
	$("#right_all").on("click",function(){
		var a = $("#left option");
		$("#right").append(a);
	});
	$("#left_all").on("click",function(){
		var a = $("#right option");
		$("#left").append(a);
	});
	
});