import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  //delete module
  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const status = modulesDao.deleteModule(moduleId);
    res.send(status);
  });

  //update module
  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = modulesDao.updateModule(
      moduleId,
      moduleUpdates
    );
    res.send(status);
  });
}
