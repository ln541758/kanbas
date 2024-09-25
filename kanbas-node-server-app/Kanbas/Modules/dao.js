import moduleModel from "./model.js";

export const createModule = (module) => moduleModel.create(module);

export const findAllModules = (cid) => moduleModel.find({course: cid});

export const deleteModule = (moduleId) => moduleModel.deleteOne({_id: moduleId});

export const updateModule = (moduleId, module) => moduleModel.updateOne({_id: moduleId}, {$set: module});