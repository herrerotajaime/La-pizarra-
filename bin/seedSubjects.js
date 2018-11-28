const mongoose = require("mongoose");
const Subject = require("../models/Subject");

mongoose
  .connect('mongodb://localhost/la-pizarra', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let subjects = [
  {
    title: 'Física',
    description: `Ciencia que estudia las propiedades de la materia y de la energía
    y establece las leyes que explican los fenómenos naturales.
    Clases de física de todos los niveles, desde 2º ESO hasta preparación para EVAU`,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329894/Subjects/fisica.svg',
    type: `Escolar`
  },
  {
    title: 'Geografía',
    description: `Ciencia que estudia y describe la superficie de la Tierra en su aspecto físico,
    actual y natural, o como lugar habitado por la humanidad.
    Se imparten clases de geografía tanto físicas como políticas, para todos los niveles. `,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/geografia.svg',
    type: `Escolar`
  },
  {
    title: 'Literatura',
    description: `Estudio de autores, generos literarios ,
    lírica y prosa. clases enfocadas a distintos niveles,
    incluida preparación para EVAU.`,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/literatura.svg',
    type: `Escolar`
  },
  {
    title: 'Guitarra',
    description: `Clases de guitarra por niveles. Desde principiante hasta avanzado`,
    imgPath: 'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/guitarra.svg',
    type: `Extraescolar`,
  },
  {
    title: 'Historia',  
    description:`Estudio de acotencimientos pasados.
    Se imparten clases tanto de historia de España como de historia mundial,
    clases por niveles, incluida preparación para EVAU.`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543338204/Subjects/book.svg`,
    type: `Escolar`
  },
  {
    title: 'Filosofía',
    description:`Estudio de autores y corrientes filosofícas. 
    Clases de explicación y repaso, también preparación para EVAU`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543337369/Subjects/question.svg`,
    type: `Escolar`
  },
    
  {
    title:`Química`,
    description:`Ciencia que estudia la composición y las propiedades de la materia 
    y de las transformaciones que esta experimenta
    sin que se alteren los elementos que la forman.
    Clases enfocadas a formulación orgánica e inorgánica`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/quimica.svg`,
    type: `Escolar`
  },
    
  {
    title: `Economía`,
    description:`Estudio de distintos modelos económicos
     y aplicacion de forumlas finacieras. Clases para todos los niveles `,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/economia.svg`,
    type: `Escolar`
  },
  {
    title: `Inglés`,
    description:`Clases de vocabulario, verbos regurales e irregulares, redacción y conversacion `,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543338204/Subjects/language.svg`,
    type: `Escolar`
  },{
    title: `Lengua`,
    description:`Clases enfocadas a todos los cursos de la ESO y Bachillerato.
    Analisis morfológico y sintáctico.`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329896/Subjects/lengua.svg`,
    type: `Escolar`
  },
  {
    title: `Dibujo técnico`,
    description:`Práctica y relosución de ejercicios, especialmente preparacion para EVAU`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329894/Subjects/dibujoTecnico.svgs`,
    type: `Escolar`
  },

  {
    title: `Biología`,
    description:`Ciencia que estudia la estructura de los seres vivos y de sus procesos vitales.
    Clases enfocadas para todos los cursos y para la EVAU`,
    imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543338332/Subjects/dna.svg`,
    type: `Escolar`

  },
    {
     title:`Matemáticas`,
     description:`Clases para todos los niveles de mates,
     preparacion para la EVAU para ciencias y letras`,
     imgPath:'https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543329894/Subjects/mates.svg',
     type: `Escolar`
    },
    {
      title:`Griego`,
      description:`Estudio de lenguas muertas. 
      Tambien podras encontrar a profesores para griego!`,
      imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543337547/Subjects/museum.svg`,
      type:`Escolar`,

    },
    {
      title:`Latin`,
      description:`Estudio de lenguas muertas. 
      Tambien podras encontrar a profesores para latin`,
      imgPath:`https://res.cloudinary.com/dbbsyfpl1/image/upload/v1543337717/Subjects/colosseum.svg`,
      type:`Escolar`,

    },{
      title:``,
      description:``,
      imgPath:``,
      type:``,

    },
];



Subject.create(subjects, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${subjects.length} subjects`)
  mongoose.connection.close()
});


// .then(usercreated => {
//   console.log(usercreated[1])
//   meeting[0].pupil = usercreated[1]._id;
//   meeting[0].teacher = usercreated[0]._id;
  

//   return Meeting.create(meeting)
// })