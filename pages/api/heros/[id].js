import connect from "../../../db/connection";
import Hero from "../../../models/Hero";

export default async function handler(req, res) {
    connect();

    const {
        query: { id },
        method
    } = req;

    if (method === "GET") {
        try {
            const hero = await Hero.findOne({ _id: id });
            if (!hero) {
                res.status(404).json({
                    success: false
                });
            }
            res.status(200).json({
                success: true,
                data: hero
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            });
        }

    } else if (method === "PUT") {
        try {
            const hero = await Hero.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });
            if (!hero) {
                res.status(404).json({
                    success: false
                });
            }
            res.status(200).json({
                success: true,
                data: hero
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            });
        }

    } else if (method === "DELETE") {
        try {
            const hero = await Hero.deleteOne({ _id: id });
            if (!hero) {
                res.status(404).json({
                    success: false
                });
            }
            res.status(200).json({
                success: true,
                data: hero
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            });
        }
    }
}