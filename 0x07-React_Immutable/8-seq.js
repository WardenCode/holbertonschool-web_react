import { Seq } from 'immutable';

export function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function printBestStudents(object) {
  const seq = Seq(object);
  const filteredStudents = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  const students = filteredStudents.toJS();

  Object.keys(students).forEach((key) => {
    students[key].firstName = capFirstLetter(students[key].firstName);
    students[key].lastName = capFirstLetter(students[key].lastName);
  });

  console.log(students);
}
