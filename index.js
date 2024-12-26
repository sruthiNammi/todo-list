let inputs=document.getElementById('inputtask');
let text=document.querySelector(".text");
function add(){
    if(inputs.value==""){
        alert("Please Enter Task");
    }
    else
    {
        let newele=document.createElement("ul");
        newele.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.append(newele);
        inputs.value="";
        newele.querySelector("i").addEventListener("click",remove);
        function remove(){
            newele.remove();
        }
    }

}
