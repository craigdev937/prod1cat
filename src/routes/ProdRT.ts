import express from "express";
import { PRODUCT } from "../controllers/ProdCTR";

export const prodRt: express.Router = express.Router();
    prodRt.post("/", PRODUCT.Create);
    prodRt.get("/", PRODUCT.FetchAll);




    