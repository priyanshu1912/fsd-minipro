// const club = require("./models/clubModel");
import ClubModel from "../models/clubModel.js";

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/clubs",function(req,res){
  
//     club.find({},function(err,clubs){
//       if(!err)
//       {
//         if(clubs){
//           res.json(clubs);
//           // res.send(JSON.stringify(clubs));
//         }
//         else{
//           console.log("clubs not found");
  
//         }
//       } 
//     });
//   });
  
// app.post("/clubs/compose",function(req,res){
    
//     const newClub= new club({
//       name:req.body.clubName,
//       faculty: req.body.faculty,
//       description:"",
//       numberOfStudents: req.body.numberOfStudents,
//       students: ""
//     });
  
//     newClub.save(function(err){
//       if(!err)
//         res.redirect("/clubs");
//       else
//         console.log(err);
//     });
  
// });

