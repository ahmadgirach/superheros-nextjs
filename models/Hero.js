import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please name the hero"],
        unique: true,
        trim: true
    },
    realName: {
        type: String,
        required: [true],
        maxlength: [200, "Please keep real name short"]
    }
});

// SO THAT IT DOESN'T THROW ERROR, BASICALLY CHECKS IF MODEL EXISTS.
module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
