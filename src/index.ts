import express, { Request } from "express";
import router from "./router";

const app = express();
const port = "3000";


app.use(router)