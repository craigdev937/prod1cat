import express from "express";
import { CATEGORY } from "../controllers/CatCTR";

export const catRT: express.Router = express.Router();
    catRT.post("/", CATEGORY.Create);
    catRT.get("/", CATEGORY.FetchAll);


