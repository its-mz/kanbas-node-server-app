//import Database from "../Database/index.js";
import model from "./model.js";

export function findAllCourses() {
  return model.find();
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId &&
        enrollment.course === course._id
    )
  );
  return enrolledCourses;
}

//create new courses
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

//delete courses
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

//updating a course
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne(
    { _id: courseId },
    { $set: courseUpdates }
  );
}
