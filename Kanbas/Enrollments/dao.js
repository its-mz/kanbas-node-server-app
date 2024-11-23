import Database from "../Database/index.js";

export function getEnrollments(userId) {
  const { enrollments } = Database;
  return enrollments;
}

export function enrollUser(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({
    _id: Date.now(),
    user: userId,
    course: courseId,
  });
}

export function unenrollUser(userId, courseId) {
  const { enrollments } = Database;

  const index = enrollments.findIndex(
    (enrollment) =>
      enrollment.user === userId &&
      enrollment.course === courseId
  );

  if (index !== -1) {
    enrollments.splice(index, 1);
  }
}
