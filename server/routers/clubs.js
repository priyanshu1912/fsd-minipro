import express from "express";
import mongoose from "mongoose";
import clubModel from "../models/clubModel.js";
import studentModel from "../models/studentModel.js";
import postModel from "../models/postModel.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {

  clubModel.find({}, function (err, clubs) {
    if (!err) {
      if (clubs) {
        res.json(clubs);
        // res.send(JSON.stringify(clubs));
      }
      else {
        console.log("clubs not found");

      }
    }
  });
});

app.post("/create", function (req, res) {

  const club = req.body;
  const newClub = new clubModel(club);
  try {
    newClub.save();
    res.status(201).json(newClub);
  }
  catch (error) {
    const errors = handleErrors(error);
    res.status(400).json(errors);
  }

});

app.post("/:id/update", async function (req, res) {

  const clubId = req.params.id;
  const club = req.body;

  if (!mongoose.Types.ObjectId.isValid(clubId))
    return res.status(404).send('No club with that ID!');

  const updatedClub = await clubModel.findById(clubId, { ...club, clubId }, { new: true });

  res.json(updatedClub);

});


app.post("/:id/delete", function (req, res) {

  const clubId = req.params.id;

  clubModel.findByIdAndRemove(clubId, function (err) {
    if (!err) {
      console.log("Successfully deleted the club.");
    }
  });
  res.json({ message: 'club deleted successfully' });
});


app.post("/:studentId/join/:clubId", async function (req, res) {

  const clubId = req.params.clubId;
  const studentId = req.params.studentId;

  clubModel.find({ clubId }, async function (err, club) {
    if (!err) {
      if (club) {

        const club1 = {
          name: club[0].name,
          faculty: club[0].faculty,
          description: club[0].description,
          department: club[0].department,
          students: club[0].students,
          posts: club[0].posts
        }
        // find club and add studentID in array
        await clubModel.update(
          { _id: clubId },
          { $push: { students: studentId } }

        );
        // find student and add clubID in array
        await studentModel.update(
          { _id: studentId },
          { $push: { clubs: club1 } }
        );
        res.json({ message: 'club joined successfully' });
        // res.send(JSON.stringify(clubs));
      }
      else {
        console.log("clubs not found");

      }
    }
  });
});

app.post("/:studentId/leave/:clubId", async function (req, res) {
  const clubId = req.params.clubId;
  const studentId = req.params.studentId;

  const club1 = {
    id: club[0]._id,
    name: club[0].name,
    faculty: club[0].faculty,
    description: club[0].description,
    department: club[0].department,
    students: club[0].students,
    posts: club[0].posts,
  }

  // find club and remove studentID from array
  await clubModel.update( 
    { _id: clubId },
    { $pull: { students: studentId } }

  );
  // find student and remove clubID from array
  await studentModel.update(
    { _id: studentId },
    { $pull: { clubs: club1 } }
  );
  res.json({ message: 'club left successfully' });
  // }
  //     else {
  //       console.log("clubs not found");
  //     }
  //   }
  // });
});

app.post("/:clubId/createPost", async function (req, res) {

  console.log(req.body)

  const clubId = req.params.clubId;
  const newPost = new postModel({

    username: req.body.username,
    image: req.body.image,
    content: req.body.content,
  });

  newPost.save(function (err) {
    if (err)
      console.log(err);
  });

  const post1 = {
    username: req.body.username,
    image: req.body.image,
    content: req.body.content,
  }

  // find club and add new post in array
  await clubModel.update(
    { _id: clubId },
    { $push: { posts: post1 } }
  );

  res.json({ message: 'post created successfully', status: 200 });
});


app.get("/:clubId/post", async function (req, res) {

  const clubId = req.params.clubId;

  clubModel.find({ clubId }, function (err, clubs) {
    if (!err) {
      if (clubs) {

        res.json(clubs[0].posts.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        }));
        // res.send(JSON.stringify(clubs));
      }
      else {
        console.log("clubs not found");

      }
    }
  });

});


app.get("/:studentId", async function (req, res) {

  const studentId = req.params.studentId;

  studentModel.find({ studentId }, function (err, student) {
    if (!err) {
      if (student) {
        console.log(student);

        res.json(student);
        // res.send(JSON.stringify(clubs));
      }
      else {
        console.log("student not found");

      }
    }
  });

});

export default app;

// {
//   "name":"Test",
//   "faculty": "abc Singh",
//   "description":"Test desctiption 1",
//   "students": [
//       "fgfd"
//   ]
// }
