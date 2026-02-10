import ratelimit from "../config/upstash.js";

const rateLimter = async (req, res, next) => {
try {
    const {success} = await ratelimit.limit("My Limiter Key");
    if (!success) {
        return res.status(429).json({
            message: "Too many requests"
        });
    }
    next();

} catch (error) {
    console.log("Rate Limit Errorr",error);
    next(error);
}
}

export default rateLimter;