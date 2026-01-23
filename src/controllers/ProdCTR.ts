import express from "express";
import { dBase } from "../db/Database";
import { ProdSchema, ProdType } from "../validation/Schema";

class ProductClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const P = ProdSchema.parse(req.body);
            const QRY = `INSERT INTO product 
            (name, description, price, currency, quantity, active, category_id) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *`;
            const values = [P.name, P.description, P.price,
                P.currency, P.quantity, P.active, P.category_id];
            const product = await dBase.query<ProdType>(QRY, values);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    message: "Product Created!",
                    data: product.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Retrieving Products!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            return next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const QRY = `SELECT p.id, p.name, p.description, 
            p.price, p.currency, p.quantity, p.active, 
            p.created_at, p.updated_at,
            (SELECT ROW_TO_JSON(category_obj) FROM (
                SELECT id, name FROM category WHERE id = p.category_id
            ) category_obj) AS category
            FROM product p`;
            const products = await dBase.query<ProdType[]>(QRY);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    count: products.rows.length,
                    data: products.rows
                })
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Retrieving Products!",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            return next(error);
        }
    };
};

export const PRODUCT: ProductClass = new ProductClass();


