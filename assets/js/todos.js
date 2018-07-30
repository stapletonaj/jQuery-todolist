//check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete on x click
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        //grab new todo from input
        var todoText = $(this).val();
        //create new li and add to list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
    });

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});

