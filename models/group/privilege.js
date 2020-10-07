import { Schema, model } from "mongoose";

const Privilege = new Schema({
    user: Schema.Types.ObjectId,
    permission: [
        String
    ]
}, {
  versionKey: false
});

export default model("privilege",Privilege);