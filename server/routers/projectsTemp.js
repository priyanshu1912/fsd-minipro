const project = require("./models/projectModel");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/projects",function(req,res){
  
    project.find({},function(err,projects){
      if(!err)
      {
        if(projects){
          res.json(projects);
          // res.send(JSON.stringify(clubs));
        }
        else{
          console.log("projects not found");
  
        }
      }
    });
  });
  
app.post("/projects/compose",function(req,res){
    
    const newProject= new project({
      
      name:req.body.projName,
      faculty: req.body.faculty,
      description: req.body.description,
      studentAlloted: false,
      studentName: ""
    });
  
    newProject.save(function(err){
      if(!err)
        res.redirect("/projects");
      else
        console.log(err);
    });
  
});

