//Check Off Specific Todos By Clicking
$('ul').on("click","li", function(){
	$(this).toggleClass("checkOff")
});

//Click on X to delete todos
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type = "text"]').on("keypress", function(event){
	if(event.which === 13){
		//grabing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>")	
	}
})

$("#icontoggle").click(function(){
	$("input[type = 'text']").fadeToggle();
});