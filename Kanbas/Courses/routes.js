import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import Database from "../Database/index.js";

export default function CourseRoutes(app) {
  //create courses
  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  });

  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(
      courseId,
      courseUpdates
    );
    res.send(status);
  });

  //find modules
  app.get(
    "/api/courses/:courseId/modules",
    async (req, res) => {
      const { courseId } = req.params;
      const modules = await modulesDao.findModulesForCourse(
        courseId
      );
      res.json(modules);
    }
  );

  //create module
  app.post(
    "/api/courses/:courseId/modules",
    async (req, res) => {
      const { courseId } = req.params;
      const module = {
        ...req.body,
        course: courseId,
      };
      const newModule = await modulesDao.createModule(
        module
      );
      res.send(newModule);
    }
  );

  //assignments
  app.get(
    "/api/courses/:courseId/assignments",
    (req, res) => {
      const { courseId } = req.params;
      const assignments =
        assignmentsDao.findAssignmentsForCourse(courseId);
      res.json(assignments);
    }
  );

  app.post(
    "/api/courses/:courseId/assignments",
    (req, res) => {
      const { courseId } = req.params;
      const assignment = {
        ...req.body,
        course: courseId,
      };
      const newAssignment =
        assignmentsDao.createAssignment(assignment);
      res.send(newAssignment);
    }
  );

  app.get(
    "/api/courses/:courseId/enrollments",
    (req, res) => {
      const { courseId } = req.params;
      const enrollments =
        enrollmentsDao.findEnrollmentsForCourse(courseId);
      res.json(enrollments);
    }
  );
}
