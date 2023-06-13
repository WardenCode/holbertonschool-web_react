import { Seq } from 'immutable';

export default function printBestStudents(object) {
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const seq = Seq(object);
  const bestStudents = seq.filter((student) => student.score > 70);

  const formatedBestStudents = bestStudents.map((student) => ({
    score: student.score,
    firstName: capFirstLetter(student.firstName),
    lastName: capFirstLetter(student.lastName),
  }));

  const studentOBJ = formatedBestStudents.toObject();
  console.log(studentOBJ);
}
