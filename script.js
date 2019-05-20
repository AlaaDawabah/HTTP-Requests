(function (){
    console.log('hi')
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
xhr.send();

xhr.addEventListener("load",function(res){
    console.log(res);
    console.log(this);
    console.log(this.responseText);
    const arr = JSON.parse(this.responseText);
    console.log(arr);
    renderData(arr);
}); 
function renderData(param){
    const htm=document.getElementById("info")
    param.map(function(element,index){
        const li = document.createElement('li');
        li.innerHTML = (index+1)+" :: "+"<br>"+" <b>THE ID is: </b>"+element.id+"<br>" +" <b>THE USERID is: </b>"+element.userId+"<br>"+"<b> THE TITLE is:</b> "+element.title+"<br>"+" <b>THE BODY is:</b> "+element.body;
         htm.appendChild(li);
    });
}
})();