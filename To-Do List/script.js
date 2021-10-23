const div1 = document.querySelector(".div-text1");

const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const removeText = document.querySelector(".remove-text")

const textarea = document.querySelector(".textarea");


remove.addEventListener("click",function(){
     textarea.value = " ";
});

removeText.addEventListener("click",function(){
     div1.innerHTML = " ";
})

add.addEventListener("click",function(){
     if (textarea.value == " ") {
          alert("Please fill in the blank") 
     }else{
          var text;
     text = textarea.value ;
     div1.innerHTML += text;
     textarea.value = " ";
     }
});



