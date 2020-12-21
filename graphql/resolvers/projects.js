const Project = require('../../models/Project');
const checkAuth = require('../../util/check-auth')

module.exports= {
    Query : {
      async getProjects() {
        try {
          const projects = await Project.find();
          return projects;
        } catch (err) {
          throw new Error(err);
        }
      }
    },
    Mutation: {
        async createProject(_, {name, location, difficulty}, context) {
          const randomUser = checkAuth(context);
          console.log(randomUser);
          console.log("TESTING")
          console.log(typeof randomUser.username);
    
    
          const newProject = new Project({
            //body,
            //user: randomUser.id,
            
            name: name, 
            location: location, 
            difficulty: difficulty,
            createdAt: new Date().toISOString(),
            username: randomUser.username, 
            user: randomUser.id
          });
    
          const project = await newProject.save();
    
          //context.pubsub.publish('NEW_PROJECT', {
            //newProject: project
          //});
    
          return project;
        }
   }, 
   /*async joinProject(_, { projectId }, context) {
    console.log("bruh1")
    const { username } = checkAuth(context);
    console.log("bruh2")

    const project = await Project.findById(projectId);
    console.log("bruh3");
    console.log(project);
    if (project) {
      if (project.users.find((user) => user.username === username)) {
        project.users = project.users.filter((user) => user.username !== username);
      } else {
        project.users.push({
          username,
          email
        });
      }

      await project.save();
      return project;
    } else throw new UserInputError('Project not found');
  }*/
}