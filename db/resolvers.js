const cursos = [
    {
        title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        technology: 'JavaScript ES6',
    },
    {
        title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        technology: 'React',
    },
    {
        title: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        technology: 'Node.js'
    }, 
    {
        title: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        technology: 'React'
    }
];


const resolvers = {
    Query: {
        getCourses: (_, {input}, ctx, info ) => {
            console.log(ctx)
            const response = cursos.filter((curso) => curso.technology === input.technology)
            return response;
        }
    }
}

module.exports = resolvers;