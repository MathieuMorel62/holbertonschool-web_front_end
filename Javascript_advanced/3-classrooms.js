/**
 * Creates a classroom with student seat functions.
 * @param {number} numbersOfStudents - The number of students in the classroom.
 * @returns {Array} - An array of student seat functions.
 */
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    }
  }

  let students = [];
  for (let i=0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);
