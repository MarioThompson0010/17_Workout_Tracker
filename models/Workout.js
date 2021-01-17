const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    // totalDistance: {
    //     type: Number,
    //     default: 0
    // },
    exercises: [
        {
            type: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },

            duration: {
                type: Number,
                default: 0
            },
            
            weight: {
                type: Number,
                default: 0
            },

            reps: {
                type: Number,
                default: 0
            },

            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ]


    // name: {
    //     type: String,
    //     unique: true
    //   },
    //   books: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "Book"
    //     }
    //   ]



    //   password: {
    //     type: String,
    //     trim: true,
    //     required: "Password is Required",
    //     validate: [({ length }) => length >= 6, "Password should be longer."]
    //   },

    //   email: {
    //     type: String,
    //     unique: true,
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    //   },

    //   userCreated: {
    //     type: Date,
    //     default: Date.now
    //   }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
