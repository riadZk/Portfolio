const express = require('express');
const router = express.Router();
const { Skills } = require('../models/Skills');

/**
 * @description All skills
 * @method GET
 * @access public
 * @routes  /api/skills/
 */
router.get('/', async(req,res)=>{
    const skills = await Skills.find();
    res.status(200).json(skills);
})
/**
 * @description Add skills
 * @method POST
 * @access public
 * @routes  /api/skills/
 */
router.post('/', async(req,res)=>{
    const skills = new Skills(req.body);
    const sk = await skills.save();
    res.status(200).json(sk);

})

module.exports = router