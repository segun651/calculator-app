   
 let values = document.getElementById("input")
 let button = document.querySelectorAll(".btngrid button")

  let srcvalues = ""
   
   for(i=0; i<button.length; i++) {


     button[i].addEventListener("click",(e)=>{
        let numberEntered = e.target.innerHTML

         srcvalues = values.value
       
           if(numberEntered == 'C') {
            values.value = ""
             
           }
          else  if(numberEntered == "="){
               
            values.value = eval(srcvalues)
          }
            
           else {
            
               values.value += numberEntered
            
           }
            
         
           if(numberEntered == "Del") {
            values.value = srcvalues.slice(0,-1)
        }


             
     })
   }


    colorbtn.addEventListener("click", changestyle)


    function changestyle(e) {
        let body = document.querySelector("body")
        let btns = document.querySelectorAll(".btngrid button")
        let colorbtn = document.querySelector("#colorbtn")
         let input = document.querySelector("#input")
        let btngrid = document.querySelector(".btngrid")
        let text =  e.target.innerHTML
       if(text == "Light Mode")  {
            e.target.innerHTML = "Dark Mode"

            colorbtn.style.backgroundColor = "black"
            colorbtn.style.color = "white"
            body.style.backgroundColor = "white"
            for(i=0; i<btns.length; i++) {
             btns[i].style.backgroundColor = "white"
             btns[i].style.color = "black"
            }
             btngrid.style.backgroundColor = "white"
              input.style.backgroundColor = "black"
              input.style.color = "white"
          } 

        else {
              e.target.innerHTML = "Light Mode"

             colorbtn.style.backgroundColor = "white"
             colorbtn.style.color = "black"
             body.style.backgroundColor = "black"
             for(i=0; i<btns.length; i++) {
              btns[i].style.backgroundColor = "black"
              btns[i].style.color = "white"
             }
              btngrid.style.backgroundColor = "black"
               input.style.backgroundColor = "white"
               input.style.color = "black"
        }


    } 
  window.onload = () => {
   screen.orientation.unlock("portrait")
      
}
    
   



