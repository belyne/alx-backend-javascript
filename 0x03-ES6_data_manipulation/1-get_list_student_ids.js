// 1-get_list_student_ids.js

export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.map(student => student.id);
}