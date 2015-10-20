$(document).ready(function()
        {
          var div1 = 0;
          var div2 = 0;

          var isMenuVisible = 0;
          var isOverMenu = 0;

          $("#show_div").mouseover(function() { 
            div1 = 1; div2 = 0;
             $("#hello").slideDown();  
             isMenuVisible = 1;
            console.log("label - mouse is over");
          });
          $("#show_div").mouseout(function() { 
            // if(isOverMenu == 0) {
            //   $("#hello").slideUp();
            //   isMenuVisible = 0;
            // } 

            // console.log("label - mouse is out");
          });

          $("#hello").mouseover(function() { 
            isOverMenu = 1;

            if(isMenuVisible == 0) {
              isMenuVisible = 1;
              $("#hello").show(); 
              console.log("hello - show");
            }

            console.log("hello - mouse is over");
          });
          $("#hello").mouseout(function() { 
            isOverMenu = 0;

            $("#hello").hide(); //(300, function() {console.log('up is ready ' + isMenuVisible);}); 
            isMenuVisible = 0;
            console.log("hello - mouse is out");
          });

        });