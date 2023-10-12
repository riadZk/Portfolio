const mongoose = require('mongoose');

const SchemeProjects = new mongoose.Schema({
    ImgSrc:{
        type: String,
        require:true
    },
    Title:{
        type: String,
        require:true
    },
    Description:{
        type: String,
        require:true
    },
    Technologies:{
        type:Array,
        require:true
    },
    UrlP:{
        type: String,
        require:true
    }
})

const Projects = mongoose.model('Projects',SchemeProjects );


module.exports = {
    Projects
}