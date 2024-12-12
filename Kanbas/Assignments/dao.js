import model from "./model.js";

//update assignment
export function updateAssignment(
  assignmentId,
  assignmentUpdates
) {
  return model.updateOne(
    { _id: assignmentId },
    { $set: assignmentUpdates }
  );
  // const { assignments } = Database;
  // const assignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );
  // Object.assign(assignment, assignmentUpdates);
  // return assignment;
}

//delete assignment
export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
  // const { assignments } = Database;
  // Database.assignments = assignments.filter(
  //   (assignment) => assignment._id !== assignmentId
  // );
}

//create assignment
export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);
  // const newAssignment = {
  //   ...assignment,
  //   _id: Date.now().toString(),
  // };
  // Database.assignments = [
  //   ...Database.assignments,
  //   newAssignment,
  // ];
  // return newAssignment;
}

//find assignment
export function findAssignmentsForCourse(courseId) {
  return model
    .find({ course: courseId })
    .populate("course");
  // const { assignments } = Database;
  // return assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );
}
