
$(document).ready(function(){


    $("#myBtn-register").click(function(){
        $("#myModal-register").modal();
    });
    $("#myBtn-login").click(function(){
        $("#myModal-login").modal();
    });
    


    $("#opener-register").click(function(){
        
        var email = $("#register-email").val();
        var password = $("#register-password").val();
    
        var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/");

        ref.createUser({
            email: email,
            password: password
        }, function(error, userData){
            if(error){
                console.log("Error creating user:", error);
            } else {
                console.log("successful:", userData.uid);
                window.location.href="http://whitecrazy.com/AAU/Spring_2016/team/root/";
            }
        });
        return false;
    }); 

    $("#opener-login").click(function(){
      
        var email = $("#login-email").val();
        var password = $("#login-password").val();
    
        var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/");

        ref.authWithPassword({
          email    : email,
          password : password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            window.location.href="http://whitecrazy.com/AAU/Spring_2016/team/root/page.html";
          }
        });
        return false;
    });

    $("#opener-logout").click(function() {

        var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/");
        ref.unauth();

        window.location.href="http://whitecrazy.com/AAU/Spring_2016/team/root/";
        alert("already logged out!");
    });


    $("#autocomplete-1").autocomplete({
        source: [
            { value: "Light", url:'http://www.google.com'},
            { value: "sunshine", url:'#'},
            { value: "b & W", url:'#'},
            { value: "fish", url:'#'},
            { value: "meat", url:'#'},
            { value: "apple", url:'#'},
        ],
        select: function (event, ui) {
            window.location = ui.item.url;
        }

    });




    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }

        e.preventDefault();
    });


    $("#draggable1").draggable({ revert: true });
        $("#draggable2").draggable({ revert: true });
        $("#draggable3").draggable({ revert: true });
        $("#draggable4").draggable({ revert: true });
        $("#draggable5").draggable({ revert: true });
        $("#draggable6").draggable({ revert: true });
        $("#draggable7").draggable({ revert: true });
        $("#draggable8").draggable({ revert: true });
        $("#draggable9").draggable({ revert: true });


        $( "#droppable" ).droppable({ 
            drop: function( event, ui ) {
                var currentId = $(ui.draggable).attr('id');

                if(currentId == "draggable1"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-blur");                   
                }else if(currentId =="draggable2"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-sharpen");
                }else if(currentId =="draggable3"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-lightup");
                }else if(currentId =="draggable4"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-lightdown");
                }else if(currentId =="draggable5"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-satup");
                }else if(currentId =="draggable6"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-satdown");
                }else if(currentId =="draggable7"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-bw");
                }else if(currentId =="draggable8"){
                    $(this).removeAttr('class');
                    $(this).addClass("ui-invert");
                }else if(currentId =="draggable9"){
                    $(this).removeAttr('class');
                    $(this).addClass("basic");
                }
            }
        });
         $('[data-toggle="tooltip"]').tooltip();


});
