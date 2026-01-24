import express from "express";
import { PRODUCT } from "../controllers/ProdCTR";

export const prodRt: express.Router = express.Router();
    prodRt.post("/", PRODUCT.Create);
    prodRt.get("/", PRODUCT.FetchAll);
    prodRt.get("/:id", PRODUCT.GetOne);
    prodRt.put("/:id", PRODUCT.Update);
    


    