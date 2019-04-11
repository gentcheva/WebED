$(function(){
    try{
    var id = 1;
    var x = $("section").last().attr("id");
    var y = parseInt(x[1]);
    $(".lectureSearch").attr("placeholder","Lecture lookup by number: 1/"+y)
    
    // hide all the lecture notes
    $(".lectures").hide(); 
    $("#l1").show(); // shows the first lecture
    // show next 
    
    $("#next").on("click" , function(){
        $("#l" +(id)).fadeOut(600);
        $("#l"+(id+1)).fadeIn(1600);
        $(".lectureNum").html("Lecture "+(id+1));
        if ( (id+1) >= y){
            id = id
        }else{
            id += 1;
    
        }
        
    });

    // hide current show next
    $("#prev").on("click" , function(){       
         if (id>=2){
            $("#l"+id).fadeOut(600);
            $("#l" +(id-1)).fadeIn(1600);
            $(".lectureNum").html("Lecture "+(id-1));
            id -= 1;
        }
    });

    // searches for a lecture number
    $(".lectureSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        value = parseInt(value);
        var lastLecture = parseInt(y);
        if (value <= lastLecture){
            $("#l" +(id)).fadeOut(300);
            $("#l"+value).fadeIn(600);
            $(".lectureNum").html("Lecture "+ value);
            id = value
            }
        });
    }
    catch(err){
        console.log("not on lecture slides page")
    }
    try{
        $(".overview h1 + section").toggle();
        $(".overview h1").click(function () {
                    $(this).next("section").toggle("slow")
            });
        
        $(".overview img").css("width","100px");
        $(".overview img").click(function(){
            if($(this).width() > 100){
            $(this).css("width","100px");
            } else{
                $(this).css("width","auto");
            }
        });
    }
    catch(err){
        console.log("not on overview page")
    }
});