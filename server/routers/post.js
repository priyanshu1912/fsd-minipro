import express from "express";
import mongoose from "mongoose";
import postModel from "../models/postModel.js";


// const router = express.Router();




// const handleErrors = (err) => {
//   let errors = { title: '', message: '', creator: '' };

//   //Validation errors
//   if (err.message.includes('user validation failed')) {
//       Object.values(err.errors).forEach(({ properties }) => {
//           errors[properties.path] = properties.message;
//       });
//   }
//   return errors;
// }

//  const getPost = async (req, res) => {
//   try {
//       const allPosts = await postModel.find();
//       res.send({ status: 200, Posts: allPosts });
//   } catch (error) {
//       const errors = handleErrors(error);
//       res.status(400).json(errors);
//   }
// }

//  const createPost = async (req, res) => {
//   const post = req.body;
//   const newPost = new postModel(post);
//   try {
//       await newPost.save();
//       res.status(201).json(newPost);
//   }
//   catch (error) {
//       const errors = handleErrors(error);
//       res.status(400).json(errors);
//   }
// }

//  const updatePost = async (req, res) => {
//   const { id: _id } = req.params;
//   const post = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id))
//       return res.status(404).send('No post with that ID!');

//   const updatedPost = await postModel.findById(_id, { ...post, _id }, { new: true });

//   res.json(updatedPost);
// }

//  const deletePost = async (req, res) => {
//   const { id: _id } = req.params;

//   // if (!mongoose.Types.ObjectId.isValid(_id))
//   //     return res.status(404).send('No post with that ID!');

//   await postModel.findByIdAndRemove(id,function(err){
//     if(!err){
//       console.log("Successfully deleted the post.");
//     }
//   });
//   res.json({ message: 'post deleted successfully' });
// }


// router.get('/', getPost);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);


// export default router;

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",function(req,res){
  
    postModel.find({},function(err,posts){
      if(!err)
      {
        if(posts){
          res.json(posts);
          // res.send(JSON.stringify(posts));
        }
        else{
          console.log("posts not found");
  
        }
      } 
    });
  });
  
app.post("/create",function(req,res){
    
    const newPost= new postModel({
        title: req.body.title,
        description: req.body.description,
        // creator: req.params.id,
        tags: req.body.tags
    });
  
    newPost.save(function(err){
      if(err)
        console.log(err);
    });
    res.status(201).json(newPost);
});

app.post("/:id/update",async function(req,res){

  const postId=req.params.id;
  
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(postId))
      return res.status(404).send('No post with that ID!');

  const updatedPost=await postModel.findById(postId, { ...post, postId }, { new: true });

  res.json(updatedPost);

  // const updatedClub = await clubModel.findById(clubId, { ...club, clubId }, { new: true });

  // res.json(updatedClub);

});



app.post("/:id/delete",function(req,res){

  // const { id: _id } = req.params;

  //   if (!mongoose.Types.ObjectId.isValid(_id))
  //       return res.status(404).send('No post with that ID!');

  //    postModel.findByIdAndRemove(id);
  //   res.json({ message: 'post deleted successfully' });
    
  const postId=req.params.id;

    if (!mongoose.Types.ObjectId.isValid(postId))
        return res.status(404).send('No post with that ID!');


  postModel.findByIdAndRemove(postId,function(err){
    if(!err){
      console.log("Successfully deleted the club.");
    }
  });
  res.json({ message: 'club deleted successfully' });
});


export default app;