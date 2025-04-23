//singleton
//Object.create
const Userjs = new Object();//singleton object
// const Userjs2 = {}//non singleton object
// console.log(Userjs);
// console.log(Userjs2);

Userjs.id = "21scse1011029";
Userjs.name="Abhishek";
Userjs.Age=22;
Userjs.batch="2021-2025";
//console.log(Userjs);

const myCom ={
    mail: "abhi@mycom.com",
    UserProfile : {
        userName : "Surbhi Shrivastava",
        age: 22,
        jobProfile: "frontend Devloper",
        Adress : {
            localAdress: "Delhi",
            parmanentAdress: "Darbhanga"
        }
    }
}
// console.log(myCom);
// console.log(myCom.UserProfile.Adress);

const obj1 = {
    1:"a",
    2:"b"
};
const obj2 = {
    3:"c",
    4:"d"
};
const objjjj={obj1, obj2};//take a objjjj a diffrent object and placed ob1 & obj2 as sapreate object
//console.log(objjjj);

// const obj3=Object.assign({},obj1, obj2);//it is not compolusory to {} in condition but it is used to not change on obj1
// console.log(obj1);
// console.log(obj3);
// const obj4={...obj1,...obj2};
// console.log(obj4);
//__________________________________________________
// console.log(Userjs);
// console.log(Object.keys(Userjs));//get all the keys in arrays formate
// console.log(Object.values(Userjs));//similaly get all the values in arrays formate
// console.log(Object.entries(Userjs));
// console.log(Userjs.hasOwnProperty('batch'));






//+++++++++++++++++++++++++++++++++++++++++++++++++++23/04/2025-9:47pm++++++++++++++
const course={
    courseName : "javaScript by hitesh sir",
    courseTime: "19 hour",
    courseDoneBy: "Abhishek Kumar"
}
console.log(course.courseDoneBy);
const {courseDoneBy : student } = course
console.log(student);
