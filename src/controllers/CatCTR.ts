import express from "express";
import { dBase } from "../db/Database";
import { CatSchema, CatType } from "../validation/Schema";

class CategoryClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const C = CatSchema.parse(req.body);
            const QRY = `INSERT INTO category 
            (name) VALUES ($1) RETURNING *`;
            const values = [C.name];
            const category = await dBase.query<CatType>(QRY, values);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    message: "Category was Created!",
                    date: category.rows[0]
                })
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Retriving Categories",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            return next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const QRY = `SELECT * FROM category ORDER BY id ASC`;
            const category = await dBase.query<CatType[]>(QRY);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    count: category.rows.length,
                    data: category.rows
                })
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error Retriving Categories",
                    error: error instanceof Error ?
                        error.message : "Unknown Error!"
                });
            return next(error);
        }
    };
};

export const CATEGORY: CategoryClass = new CategoryClass();





