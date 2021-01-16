const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
// const databaseUrl = "notetaker";
// const collections = ["notes"];

const db = mongojs(databaseUrl, collections);


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// app.get("/", (req, res) => {
//     db.Workout.find({}, (error, data) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.json(data);
//         }
//     });
// });


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});


app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
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


// app.get("/api/workouts", (req, res) => {
//     db.Workout.find({}, (error, data) => {
//         if (error) {
//             res.send(error);
//             // return res.status(500).end();
//         } else {
//             res.json(data);
//         }
//     });
// });

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, './public/stats.html'));
    // db.Workout.find({}, (error, data) => {
    //     if (error) {
    //         res.send(error);
    //         // return res.status(500).end();
    //     } else {
    //         res.json(data);
    //     }
    // });
});

app.post("/api/workouts", ({ body }, res) => {
    console.log(body);

    db.notes.insert(body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: {
                day: req.body.day,
                $push: {
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    set: req.body.set
                }
                // type: req.body.type,
                // name: req.body.name,

            }


            // {$push: {"majorcities": "Agadir"}}
            // day: {
            //     type: Date,
            //     default: Date.now
            // },
            // exercises: [
            //     {
            //         type: String,
            //         name: String,
            //         duration: Number,
            //         weight: Number,
            //         reps: Number,
            //         sets: Number
            //     }
            // ]
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



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

