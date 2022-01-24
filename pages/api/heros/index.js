import connect from "../../../db/connection";
import Hero from "../../../models/Hero";

export default async function handler(req, res) {
    connect();

    const { method } = req;

    if (method === "GET") {
        try {
            const heros = await Hero.find({});
            res.status(200).json({
                success: true,
                data: heros
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            });
        }

    } else if (method === "POST") {
        try {
            const hero = await Hero.create(req.body);
            res.status(201).json({
                success: true,
                data: hero
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            });
        }

    } else {
        res.status(500).json({
            success: false,
            message: "Something was not quite right!"
        });
    }
}