import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

  // get all modules for a course
  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules(req.params.cid);
    res.json(modules);
  }
  app.get("/api/courses/:cid/modules", findAllModules);

  // delete a module
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  }
  app.delete("/api/modules/:mid", deleteModule);

  // create a module
  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);

    res.json(module);
  }
  app.post("/api/courses/:cid/modules", createModule);

  // update a module
  const updateModule = async (req, res) => {

    const status = await dao.updateModule(req.params.mid, req.body);
    res.json(status);
  }

  app.put("/api/modules/:mid", updateModule);

}
