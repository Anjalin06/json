//constructor
function Employee(name,emid,city){
this.name=name;
this.emid=employeeid;
this.city=city;
this.getDetails=function(){
    console.log('welcome',this.name,'to Ltts');
}
}
var stud=new Student('Raju','bgl');
console.log(stud);
var stud1=new Student('Anjali','Mys');
console.log(stud1);
stud.getDetails();
stud1.getDetails();

//add property to existing
Student.prototype.salary=9;
Student.prototype.greetMessage=(username)=>{
    console.log('Great day',username);
}
stud.greetMessage('Ann');
