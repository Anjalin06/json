var student={
    name:'Ann',
    age:21,
    hobbies:['sports','music'],
    address:{
        city:'Bangalore',
        state:'Karnataka'
    }

};
console.log(student);
console.log(student.name);
console.log(student.address.city);
student.stuid=20;
student.hasMobile = true


for (const key in student) {
     const element = student[key];
     console.log(key+" "+element);
 
    }


var student1={
    name:'Ann',stuid:20
    };
    console.log(student1.name);