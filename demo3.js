//automatically invoke
(function greet(user){
    console.log('great day',user);
})('Anjali');
//callback function
setTimeout(()=>{
    console.log('This is demo')
},3000);
setInterval(()=>{
    console.log('Happy Learning')
}, 3000);