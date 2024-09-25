import mongoose from "mongoose";
import schema from "./schema.js";

const moduleModel = mongoose.model("ModuleModel", schema);

export default moduleModel;
