import Database from "../Database/index.js";
import model from "./model.js";

//find courses for users
export async function findCoursesForUser(userId) {
  const enrollments = await model
    .find({ user: userId })
    .populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

//find users for course
export async function findUsersForCourse(courseId) {
  const enrollments = await model
    .find({ course: courseId })
    .populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

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
