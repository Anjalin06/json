//constructor
function Student(name,city){
this.name=name;
this.city=city;
this.getDetails=function(){
    console.log('welcome',this.name,'from',this.city);
}
}
var stud=new Student('Raju','bgl');
console.log(stud);
var stud1=new Student('Anjali','Mys');
console.log(stud1);
stud.getDetails();
stud1.getDetails();

//add property to existing
Student.prototype.studId=90;
Student.prototype.greetMessage=(username)=>{
    console.log('Great day',username);
}
stud.greetMessage('Ann');
