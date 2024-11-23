import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentsRoutes(app) {
  const getEnrollments = (req, res) => {
    const enrollments = dao.getEnrollments();
    res.json(enrollments);
  };
  app.get("/api/enrollments", getEnrollments);
}
