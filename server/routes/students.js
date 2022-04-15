const StudentModel = require("./models/student");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Create a new entry for the user 
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const confirm_password = req.body.confirmpassword;

        if (password === confirm_password) {
            const newStudent = new StudentModel({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.contact,
                program: req.body.program,
                password: password,
                confirmpassword: confirm_password
            })

            newStudent.save(function (err, newStudent) {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ status: 200, message: "Student record inserted!", studentObj: newStudent });
                }
            });
        }
        else {
            res.send("Password are not same!");
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
});