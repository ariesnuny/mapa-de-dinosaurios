
/*$(document).ready(function(){

    $(".hide").hide();

    $(".marker-noasaurus").click(function(){
      $(".noasaurus-txt").toggle();
    });

    $(".marker-yungavolucris").click(function(){
        $(".hide").hide();
        $(".yungavolucris-txt").toggle();
    });

    $(".marker-saltasaurus").click(function(){
        $(".hide").hide();
        $(".saltasaurus-txt").toggle();
    });

    $(".marker-eoraptor").click(function(){
        $(".hide").hide();
        $(".eoraptor-txt").toggle();
    });

    $(".marker-herrerasaurus").click(function(){
        $(".hide").hide();
        $(".herrerasaurus-txt").toggle();
    });

    $(".marker-zupaysaurus").click(function(){
        $(".hide").hide();
        $(".zupaysaurus-txt").toggle();
    });

    $(".marker-pisanosaurus").click(function(){
        $(".hide").hide();
        $(".pisanosaurus-txt").toggle();
    });

    $(".marker-riojasaurus").click(function(){
        $(".hide").hide();
        $(".riojasaurus-txt").toggle();
    });

    $(".marker-quetecsaurus").click(function(){
        $(".hide").hide();
        $(".quetecsaurus-txt").toggle();
    });

    $(".marker-lapampasaurus").click(function(){
        $(".hide").hide();
        $(".lapampasaurus-txt").toggle();
    });

    $(".marker-amargasaurus").click(function(){
        $(".hide").hide();
        $(".amargasaurus-txt").toggle();
    });

    $(".marker-futalognkosaurus").click(function(){
        $(".hide").hide();
        $(".futalognkosaurus-txt").toggle();
    });

    $(".marker-huinculsaurus").click(function(){
        $(".hide").hide();
        $(".huinculsaurus-txt").toggle();
    });

    $(".marker-isaberrysaura").click(function(){
        $(".hide").hide();
        $(".isaberrysaura-txt").toggle();
    });

    $(".marker-meraxes").click(function(){
        $(".hide").hide();
        $(".meraxes-txt").toggle();
    });

    $(".marker-patagonykus").click(function(){
        $(".hide").hide();
        $(".patagonykus-txt").toggle();
    });

    $(".marker-rayososaurus").click(function(){
        $(".hide").hide();
        $(".rayososaurus-txt").toggle();
    });

    $(".marker-skorpiovenator").click(function(){
        $(".hide").hide();
        $(".skorpiovenator-txt").toggle();
    });

    $(".marker-unenlagia").click(function(){
        $(".hide").hide();
        $(".unenlagia-txt").toggle();
    });

    $(".marker-viavenator").click(function(){
        $(".hide").hide();
        $(".viavenator-txt").toggle();
    });

    $(".marker-giganotosaurus").click(function(){
        $(".hide").hide();
        $(".giganotosaurus-txt").toggle();
    });

    $(".marker-argentinosaurus").click(function(){
        $(".hide").hide();
        $(".argentinosaurus-txt").toggle();
    });

    $(".marker-buitreraptor").click(function(){
        $(".hide").hide();
        $(".buitreraptor-txt").toggle();
    });

    $(".marker-gasparinisaura").click(function(){
        $(".hide").hide();
        $(".gasparinisaura-txt").toggle();
    });

    $(".marker-jakapil").click(function(){
        $(".hide").hide();
        $(".jakapil-txt").toggle();
    });

    $(".marker-willinakaqe").click(function(){
        $(".hide").hide();
        $(".willinakaqe-txt").toggle();
    });

    $(".marker-abelisaurus").click(function(){
        $(".hide").hide();
        $(".abelisaurus-txt").toggle();
    });

    $(".marker-kritosaurus").click(function(){
        $(".hide").hide();
        $(".kritosaurus-txt").toggle();
    });

    $(".marker-carnotaurus").click(function(){
        $(".hide").hide();
        $(".carnotaurus-txt").toggle();
    });

    $(".marker-katepensaurus").click(function(){
        $(".hide").hide();
        $(".katepensaurus-txt").toggle();
    });

    $(".marker-xenotarsosaurus").click(function(){
        $(".hide").hide();
        $(".xenotarsosaurus-txt").toggle();
    });

    $(".marker-patagosaurus").click(function(){
        $(".hide").hide();
        $(".patagosaurus-txt").toggle();
    });

    $(".marker-piatnitzkysaurus").click(function(){
        $(".hide").hide();
        $(".piatnitzkysaurus-txt").toggle();
    });

    $(".marker-epachthosaurus").click(function(){
        $(".hide").hide();
        $(".epachthosaurus-txt").toggle();
    });

    $(".marker-patagotitan").click(function(){
        $(".hide").hide();
        $(".patagotitan-txt").toggle();
    });

    $(".marker-drusilasaura").click(function(){
        $(".hide").hide();
        $(".drusilasaura-txt").toggle();
    });

    $(".marker-orkoraptor").click(function(){
        $(".hide").hide();
        $(".orkoraptor-txt").toggle();
    });

    $(".marker-talenkauen").click(function(){
        $(".hide").hide();
        $(".talenkauen-txt").toggle();
    });

    $(".marker-mussaurus").click(function(){
        $(".hide").hide();
        $(".mussaurus-txt").toggle();
    });
    
});*/

$(document).ready(function () {
    // Click event handler for all markers
    $(".cls-2").click(function () {
        // Get the target element based on the data-target attribute
        var targetClass = $(this).data("target");

        // Check if the target element has the "show" class
        if ($(targetClass).hasClass("show")) {
            // If it has, remove the "show" class
            $(targetClass).removeClass("show");
            console.log(targetClass)
        } else {
            // If it doesn't, add the "show" class
            $(targetClass).addClass("show");

            // Add the "show" class to all other elements except the target
            $(".hide").not(targetClass).removeClass("show");
        }
    });
});