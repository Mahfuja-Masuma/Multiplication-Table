//background color change using onclick

// call function to html
// function changeBackgrounColor(){
//     document.getElementById("body").style.background="gold"
// }

//using addEventListener 
// let button= document.getElementById("button2")
// button. addEventListener("click",function(){

//     document.getElementById("body").style.background="blue"
// })





// value find using onclick
//namta see consol


// document.getElementById("button").addEventListener('click',function()
// {
// let myInput= document.getElementById("enterNumber").value
// for(let i=1; i<=10; i++){
//     result= i*myInput
//     console.log(myInput+ "+"+ i+ "=" +result)
// }
// })

//namta see html onclick function call to html
// function multiply() {
//     let myInput = document.getElementById('num').value;
//     var result= ""
//     for (var i = 1; i <=10; i++) {
//      result = result + myInput + " * " + i + " = " + i * myInput + "<br/>";
//     }
//     document.getElementById("result").innerHTML = result;
// }



//namta see html 

document.getElementById("button").addEventListener('click',function(){
   if(document.getElementById("enterNumber").value==''){
    alert("No More Value")
   }
   else{
    let myInput= document.getElementById("enterNumber").value
      //let result= document.getElementById("result")

    var result=""
    for(var i=1; i<=10; i++){
    result = result + myInput + " * " + i + " = " + i * myInput + "<br/>";  
    document.getElementById("result").innerHTML = result;
}
   }
})





//========Create Element see consol=====
// let myInput= document.getElementById("button").addEventListener("click",function(){
//     let listData =document.createElement('li')
//     listData.innerHTML= document.getElementById("putData").value
//     console.log(listData)
//     document.getElementById("putData").value=''

// })



//========Create Element see html=====
// let myInput= document.getElementById("button").addEventListener("click",function(){
//     let listData =document.createElement('li') //li value insert
//     let itemValue = document.getElementById('itemValue')//ul id insert

//     listData.innerHTML= document.getElementById("putData").value
//     itemValue.appendChild(listData) //li  value get ul, show  html file
   
//     document.getElementById("putData").value='' //do empty 

// })