const students = [
    {
        id: 1,
        pesel: "123456789",
        name: "Jacek Kowalski",
        notes: [5, 3, 4, 2, 5, 5]
    },
    {
        id: 2,
        pesel: "234567890",
        name: "Ewa Nowak",
        notes: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 3,
        pesel: "345678901",
        name: "Zygmunt Lewandowski",
        notes: [2, 2, 4, 4, 3, 3]
    },
    {
        id: 4,
        pesel: "456789012",
        name: "Marek Markowski",
        notes: [3, 3, 3, 3, 3, 3]
    },
    {
        id: 5,
        pesel: "567890123",
        name: "Marta Markowska",
        notes: [4, 5, 2, 3, 4, 4]
    }

];




////  TASK 1
console.log("-----------------Task 1.  case 1---------------------------")

const getMaxNote1 = (notes) => {
    notes.sort(function (a, b) {
        return a - b;
    });
    const highest = notes[notes.length - 1];
    return `max note is ${highest}`;
}


const getMinNote = (notes) => {
    notes.sort(function (a, b) {
        return a - b;
    })
    const lowest = notes[0];
    return `min note is ${lowest}`;
}



const displayInfo = (array, pesel, display) => {
    const findStudent = array.find(person => {
        if (person.pesel === pesel) {
            return person;
        }
    })
    const notes = findStudent.notes;
    const result = display(notes);
    console.log(` For student ${findStudent.name} `, result);
}

displayInfo(students, "123456789", getMaxNote1);
displayInfo(students, "345678901", getMaxNote1);
displayInfo(students, "123456789", getMinNote);



///////

console.log("-----------------Task 1. case 2 ----------")


const displayInfo2 = (info) => {
    console.log(info);
}

const getMaxNote2 = (array, pesel, callback) => {
    const findStudent2 = array.find(person => {
        if (person.pesel === pesel) {
            return person;
        }
    })
    const notesArray = findStudent2.notes;
    const findMaxNote = (notesArrays) => {
        notesArrays.sort(function (a, b) {
            return a - b;
        });
        const highest = notesArrays[notesArrays.length - 1];
        return `Max note for student ${findStudent2.name} is ${highest}`;
    }
    const thisIsInfo = findMaxNote(notesArray);
    return callback(thisIsInfo);
}

getMaxNote2(students, "123456789", displayInfo2);
getMaxNote2(students, "345678901", displayInfo2);



const getMinNote2 = (array, pesel, callback) => {
    const findStudent2 = array.find(person => {
        if (person.pesel === pesel) {
            return person;
        }
    })
    const notesArray = findStudent2.notes;

    const findMinNote = (notesArrays) => {
        notesArrays.sort(function (a, b) {
            return a - b;
        })
        let lowest = notesArrays[0];
        return `Min note for student ${findStudent2.name} is: ${lowest} `;
    }
    const thisIsInfo = findMinNote(notesArray);
    return callback(thisIsInfo);
}

getMinNote2(students, "234567890", displayInfo2);






// TASK 2 
console.log("---------------------------TASK 2 -------------------------------------------------------------");


const displayStudents = students.map(student => {
    const stud = `Student ${student.name}, Pesel: ${student.pesel}`;
    console.log(stud);
    return stud
})

console.log(displayStudents);

const displayStudentsSrtingsArray = displayStudents.map(student => {
    const stude = student.split(" ");
    console.log(stude);
    return stude

})
console.log(displayStudentsSrtingsArray);

const sortStudent = displayStudentsSrtingsArray.sort((a, b) => { return a[2].localeCompare(b[2])});

console.log(sortStudent);






