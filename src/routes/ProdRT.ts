import express from "express";
import { PRODUCT } from "../controllers/ProdCTR";

// Route:  http://localhost:9000/api/product
export const prodRt: express.Router = express.Router();
    prodRt.post("/", PRODUCT.Create);
    prodRt.get("/", PRODUCT.FetchAll);
    prodRt.get("/:id", PRODUCT.GetOne);
    prodRt.get("/category/:catID", PRODUCT.ProdByCatID);
    prodRt.put("/:id", PRODUCT.Update);
    prodRt.delete("/:id", PRODUCT.Delete);
    


    