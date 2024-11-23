import Database from "../Database/index.js";

//create new module
export function createModule(module) {
  const newModule = {
    ...module,
    _id: Date.now().toString(),
  };
  Database.modules = [...Database.modules, newModule];
  return newModule;
}

//delete module
export function deleteModule(moduleId) {
  const { modules } = Database;
  Database.modules = modules.filter(
    (module) => module._id !== moduleId
  );
}

//retricving course's modules
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter(
    (module) => module.course === courseId
  );
}

//update module
export function updateModule(moduleId, moduleUpdates) {
  const { modules = [] } = Database;
  const module = modules.find(
    (module) => module._id === moduleId
  );
  Object.assign(module, moduleUpdates);
  return module;
}
