const express = require('express');
const router = express.Router();
const { Projects } = require('../models/Projects');

/**
 * @description All Projects
 * @method GET
 * @access public
 * @routes  /api/skills/
 */
router.get('/', async(req,res)=>{
    const project = await Projects.find();
    res.status(200).json(project);
})
/**
 * @description Add Project
 * @method POST
 * @access public
 * @routes  /api/skills/
 */
router.post('/', async(req,res)=>{
    const project = new Projects(req.body);
    const pr = await project.save();
    res.status(200).json(pr);

})

module.exports = router