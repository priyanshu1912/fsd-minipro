import express from "express";
import mongoose from "mongoose";
import clubModel from "../models/clubModel.js";
import studentModel from "../models/studentModel.js";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",function(req,res){
  
  clubModel.find({},function(err,clubs){
      if(!err)
      {
        if(clubs){
          res.json(clubs);
          // res.send(JSON.stringify(clubs));
        }
        else{
          console.log("clubs not found");
  
        }
      } 
    });
  });
  
app.post("/create",function(req,res){
    
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

app.post("/:id/update",async function(req,res){

  const clubId=req.params.id;
  const club = req.body;

  if (!mongoose.Types.ObjectId.isValid(clubId))
      return res.status(404).send('No club with that ID!');

  const updatedClub = await clubModel.findById(clubId, { ...club, clubId }, { new: true });

  res.json(updatedClub);

});


app.post("/:id/delete",function(req,res){
    
  const clubId=req.params.id;

  clubModel.findByIdAndRemove(clubId,function(err){
    if(!err){
      console.log("Successfully deleted the club.");
    }
  });
  res.json({ message: 'club deleted successfully' });
});


app.post("/:studentId/join/:clubId",async function(req,res){
    
  const clubId=req.params.clubId;
  const studentId=req.params.studentId;

  // find club and add studentID in array
  await clubModel.update(
    { _id: clubId }, 
    { $push: { students: studentId } }
    
  );
  // find student and add clubID in array
  await studentModel.update(
    { _id: studentId }, 
    { $push: { clubs: clubId } }
  );
  res.json({ message: 'club joined successfully' });
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
