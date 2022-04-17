import jsonwebtoken from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jsonwebtoken.verify(token, "fsd project secret", (err, decodedToken) => {
            if (err) {
                res.status(400).json("User not logged in");
            }
            else {
                console.log(decodedToken);
                next();
            }
        })
    }
    else {
        res.status(400).json("User not logged in");
    }
}

export const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    const type = req.body;
    let model;

    if (type === "student") {
        model = "StudentModel";
    }
    else {
        model = "FacultyModel";
    }

    if (token) {
        jsonwebtoken.verify(token, "fsd project secret", async (err, decodedToken) => {
            if (err) {
                res.status(400).json("User not found");
            }
            else {
                let user = await model.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    }
    else {
        res.status(400).json("User not found");
    }
}