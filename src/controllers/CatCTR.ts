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

    GetOne: express.Handler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const QRY = `SELECT * FROM category WHERE id = $1`;
            const values = [id];
            const category = await dBase.query<CatType>(QRY, values);
            return res
                .status(res.statusCode)
                .json(category.rows[0]);
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

    Update: express.Handler = async (req, res, next) => {
        try {
            const C = CatSchema.parse(req.body);
            const { id } = req.params;
            const QRY = `UPDATE category SET name = $1 
            WHERE id = $2 RETURNING *`;
            const values = [C.name, id];
            const category = await dBase.query<CatType>(QRY, values);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    message: "Category Updated!",
                    date: category.rows[0]
                });
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

    Delete: express.Handler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const QRY = "DELETE FROM product WHERE id=$1";
            const values = [id];
            const deleteCat = await dBase.query<CatType>(QRY, values);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    message: "The Category was DeletedQ!",
                    data: deleteCat
                });
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





