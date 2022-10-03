// TASK 2 

const student1 = {
    name: "Jan",
    surname: "Jankowski",
    pesel: 11111111,
    studies: "zarządzanie"
}

const student2 = {
    name: "Alicja",
    surname: "Nowak",
    pesel: 22222222,
    studies: "prawo"
}

const student3 = {
    name: "Ola",
    surname: "Malinowska",
    pesel: 33333333,
    studies: "informatyka"
}

const student4 = {
    name: "Paweł",
    surname: "Pawłowski",
    pesel: 44444444,
    studies: "socjologia"
}

const student5 = {
    name: "Marek",
    surname: "Markowski",
    pesel: 55555555,
    studies: "medycyna"
}


const arrayOfStudents = [student1, student2, student3, student4, student5];
console.log(arrayOfStudents);



// Task 3

const allStudentsData = (array) => {
    const length = array.length;
    let msgToReturn = '';
    for (let i = 0; i < length; i++) {
        const message = `Student ${i + 1}: ${array[i].name} ${array[i].surname}, PESEL:${array[i].pesel}, ${array[i].studies}\n`;
        msgToReturn = msgToReturn + message;
    }
    return msgToReturn;
}

console.log(allStudentsData(arrayOfStudents));




// Task 4

const newStudentAdd = (studentsName, studentsSurname, studentsPesel, studentsStudies) => {
    const newStudent = { name: studentsName, surname: studentsSurname, pesel: studentsPesel, studies: studentsStudies }
    arrayOfStudents.push(newStudent);
    return arrayOfStudents;
}

console.log(newStudentAdd("Iwona", "Kowalska", 66666666, "weterynaria"));
console.log(newStudentAdd("Kamil", "Kamilski", 77777777, "budownictwo"));


console.log(allStudentsData(arrayOfStudents));