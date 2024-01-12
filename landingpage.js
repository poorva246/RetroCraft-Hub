// function darklight() {
    console.log("ok")
    //   let toggle = document.getElementById = "toggle";
      // let submenu = document.querySelector(".submenu");
    var flag = 1;
      toggle.addEventListener("click", function () {
        // submenu.classList.toggle('active');
        if(flag%2===1){
    


          document.body.classList.add("dark");
          document.querySelector('header').classList.add("darkheader")
          document.querySelector('footer').classList.add("darkfooter")
          document.querySelectorAll('*').forEach(function(element) {
           element.style.color = 'white';
         });
         toggle.classList.add("darkmode")
         toggle.innerHTML = "DARK MODE"
    
    
    
       }
       else {

        document.body.classList.remove("dark");
        document.querySelector('header').classList.remove("darkheader")
        document.querySelector('footer').classList.remove("darkfooter")
        document.querySelectorAll('*').forEach(function(element) {
           element.style.color = 'black';
        });
        document.querySelector('nav').classList.remove("darkheader")
        toggle.classList.remove("darkmode")
        toggle.innerHTML = "LIGHT MODE"




          }
          flag++;
      });
    // }