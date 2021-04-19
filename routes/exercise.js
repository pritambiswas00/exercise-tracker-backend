const express = require('express');

const router = express.Router();
const Exercise = require('../models/exercise');

router.post('/add', async(req, res)=> {
     const newExercise = new Exercise({
         username : req.body.username,
         description : req.body.description,
         duration : Number(req.body.duration),
         date : Date.parse(req.body.date)
     })

     try{
          await newExercise.save();
          res.status(200).json("New Exercise added.")
     }catch(error){
         res.status(400).json(error)
     }
})

router.get('/', async (req, res)=> {
    const exercises = await Exercise.find();
    if(!exercises) return res.status(400).json("There's no exercises")

    try{
       res.status(200).json(exercises);
    }catch(error){
        res.status(400).json(error);
    }
})
router.get('/:id', async (req, res)=>{
    const userExercise = await Exercise.findById({_id: req.params.id});
    if(!userExercise) return res.status(400).json('Sorry there is no exercise.');
     try{
         res.status(200).json(userExercise);
     }catch(error){
         res.status(400).json(error)
     }
})

router.delete('/:id', async (req, res)=> {
   try{
     await Exercise.findByIdAndDelete({_id : req.params.id})
     res.status(200).json("Exercise deleted.")
   }catch(error){
       res.status(400).json(error)
   }
})

router.post('/update/:id', async (req, res)=> {
   const exercise = await Exercise.findById({_id : req.params.id});
   if(!exercise) return res.status(400).json("No exercise found");
   try{
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
     await exercise.save();
     res.status(200).json("Exercise Updated");
   }catch(error){
       res.status(400).json(error);
   }
})



module.exports = router;

