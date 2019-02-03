$(function(){
    var id = 2;
    
    var x = $("section").last().attr("id");
    var y = x[1];
    console.log(x);
    console.log(y);
    $(".lectures").hide();
    $("#l1").show();

    // show next 
    $("#next").on("click" , function(){
        $("#l" +(id-1)).fadeOut();
        $("#l"+id).fadeIn();
        id += 1;
    });

    // hide current show next
    $("#prev").on("click" , function(){
        id -= 1;
        $("#l" +(id-1)).fadeIn();
        $("#l"+id).fadeOut();
    });

});