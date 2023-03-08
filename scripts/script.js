const courseList = [
    {code:'ACIT 1620', name:'Fundemental Web Technologies'},
    {code:'MATH 1310', name:'Technical Math for IT'},
    {code:'COMM 1116', name:'Business Communications'}
]

let crscd
do{
    crscd = prompt('Please input a 4-digit number');
} while(isNaN(crscd) || crscd.length !== 4)

let check = 0

for(let course of courseList){
    if(course['code'].includes(crscd)){
        console.log(`Yes I am taking the course: ${course['code']} - ${course['name']}`);
        check = 1
    }
}
    
if(check == 0){
    let newCourse = {code:'code', name:'name'}
    newCourse["code"] = crscd;
    newCourse['name'] = null;
    courseList.push(newCourse)
    console.log(courseList)
}