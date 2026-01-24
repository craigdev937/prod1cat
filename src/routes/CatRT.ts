import express from "express";
import { CATEGORY } from "../controllers/CatCTR";

export const catRT: express.Router = express.Router();
    catRT.post("/", CATEGORY.Create);
    catRT.get("/", CATEGORY.FetchAll);
    catRT.get("/:id", CATEGORY.GetOne);
    catRT.put("/:id", CATEGORY.Update);
    catRT.delete("/:id", CATEGORY.Delete);


