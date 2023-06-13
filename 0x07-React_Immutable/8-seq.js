import { Seq } from 'immutable';

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function printBestStudents(object) {
    const seq = Seq(object);
    const filteredStudents = seq.filter((student) => student.score > 70);
    const students = filteredStudents.toJS();

    for (const key in students) {
        students[key].firstName = capFirstLetter(students[key].firstName);
        students[key].lastName = capFirstLetter(students[key].lastName);
    }

    console.log(students);
}
