const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/exercise/:id", (req, res) => {

    db.Workout.findOne(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ _id: 1 })
        .then(dbtransaction => {

            res.json(dbtransaction);

        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
});

app.post("/api/workouts", ({ body }, res) => {
    console.log(body);

    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate({
        _id: mongojs.ObjectId(req.params.id)
    },
        {
            $push: {
                exercises: {

                    type: req.body.type,

                    name: req.body.name,
                    duration: req.body.duration,
                    distance: req.body.distance,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets

                }
            }
        }, { new: true })
        .then(dbWorkout => {

            db.Workout.aggregate([

                { $unwind: "$exercises" },
                {
                    $group: {
                        _id: "$_id",
                        totalDur: { $sum: "$exercises.duration" }
                    }
                }
            ], (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    const founditem = result.find(item => item._id.toString() === req.params.id);
                    dbWorkout.totalDuration = founditem.totalDur;

                    db.Workout.findOneAndUpdate({ _id: mongojs.ObjectId(req.params.id) },
                        { $set: { totalDuration: founditem.totalDur } },
                        { new: true })
                        .then(finalSave => {
                            res.json(finalSave);
                        })
                        .catch(err => {
                            res.json(err);
                        });
                }
            });
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

