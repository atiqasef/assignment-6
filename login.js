document.getElementById('login-btn').addEventListener('click', function(event){
event.preventDefault();
const name = document.getElementById('name').value;
const pass = document.getElementById('pass').value;

if(name== ""){
    alert('pleasse inter your name');
    return;
}
if(pass==123456){
    window.location.href = "main.html";
}
else{
    alert('wrong password')
}

})


