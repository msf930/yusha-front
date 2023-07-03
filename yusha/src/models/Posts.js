import {model, models, Schema} from "mongoose";

const PostSchema = new Schema({
    image: [{type: String}],
    date: Date,
    topic: String,
    tags: String,
    title: String,
    author: String,
    body: String,
    summary: String,
    link: String,
});

export const Posts = models?.Posts || model('Posts', PostSchema);