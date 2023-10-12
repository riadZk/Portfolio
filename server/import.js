const { Skills } = require('./models/Skills')
const { Projects } = require('./models/Projects')
const { skills , portfolios} = require('./data')
const dbConnect = require('./config/DbConnect');
// Connection To DB 
dbConnect();
// Import Skills
const importSkillss = async ()=>{
    try {
        await Skills.insertMany(skills);
        console.log('Skills Imported')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
// Delate All Skills
const deleteSkillss = async ()=>{
    try {
        await Skills.deleteMany();
        console.log('Delete All Skills')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// Import Projects
const importProjects = async ()=>{
    try {
        await Projects.insertMany(portfolios);
        console.log('Projects Imported')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
// Delete All Projects
const deleteProjects = async ()=>{
    try {
        await Projects.deleteMany();
        console.log('Delete All Projects')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if(process.argv[2] === '-importSkills'){
    importSkillss();
}else if(process.argv[2] === '-deleteSkills'){
    deleteSkillss();
}else if(process.argv[2] === '-importProjects'){
    importProjects();
}else if(process.argv[2] === '-deleteProjects'){
    deleteProjects();
}