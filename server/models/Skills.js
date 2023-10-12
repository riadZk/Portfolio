
const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const SkillsProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    skills: [SkillSchema]
});
const Skills = mongoose.model('Skills', SkillsProjectSchema);

module.exports = {
    Skills
};
