$(function(){
    var id = 2;
    
    var x = $("section").last().attr("id");
    var y = x[1];

    // hide all the lecture notes
    $(".lectures").hide(); 
    $("#l1").show(); // shows the first lecture
    // show next 
    
    $("#next").on("click" , function(){
        $("#l" +(id-1)).fadeOut();
        $("#l"+id).fadeIn();
        $(".lectureNum").html("Lecture "+id);

        if ( (id+1) > y){
            id = id
        }else{
            id += 1;
        }
        
    });

    // hide current show next
    $("#prev").on("click" , function(){
       
        console.log(id);
       
         if (id>=2){
            $("#l"+id).fadeOut();
            $("#l" +(id-1)).fadeIn();
            $(".lectureNum").html("Lecture "+(id-1));
            id -= 1;
        }
       
    });
});