const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

const express = require('express');
const app = express();

function selection (specialty) {
    for (let user of usersData) {
        
    }
}

app.get('/', (req, res) => {
  res.end(
    `<h1>Hola soy la Ruta Principal</h1><h2>Path: ${req.path}</h2><a href="/marketing">marketing</a><a href="/developers">developers</a>`
  );
});

app.get('/marketing', (req, res) => {
  res.end(
    `<h1>Hola soy el marketing</h1><h2>Path: ${req.path}</h2><a href="/">home</a><a href="/developers">developers</a>`
  );
});

app.get('/QAs', (req, res) => {
    res.end(
      `<h1>Hola soy el QAs</h1><h2>Path: ${req.path}</h2><a href="/">home</a><a href="/developers">developers</a>`
    );
  });

app.get('/developers', (req, res) => {
  res.end(
    `<h1>Hola soy el developers</h1><h2>Path: ${req.path}</h2><a href="/">home</a><a href="/marketing">marketing</a>`
  );
});

app.get('/ventas', (req, res) => {
    res.end(
      `<h1>Departamento de Ventas</h1><h2>Path: ${req.path}</h2><a href="/">home</a><a href="/marketing">marketing</a>`
    );
  });

app.use((req, res) => {
  //si la pagina es 404 (no encontrada), devuelve lo siguiente:
  res.status(404).send('<h1>Error 404. Page not found</h1><a href="/">home</a>');
});

app.listen(3000, () => {
  console.log('Node.js está escuchando en el puerto 3000');
});
