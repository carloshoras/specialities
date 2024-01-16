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
    let html = ""
    let count = 0
    for (let user of usersData) {
        if (user.specialty === specialty) {
          html += `<li><p>Name: ${user.name} ; Age: ${user.age}</p></li>`
          count++
        }
    }
    return {count, html}
}

app.get('/', (req, res) => {
  res.end(
    `<h1>HOME</h1><a href="/developers">Developers</a><a href="/marketing">Marketing</a><a href="/qas">QAs</a><a>Ventas</a>`
    );
  });
  
  app.get('/marketing', (req, res) => {
  let {count, html} = selection('marketing')
  res.end(
    `<h1>Departamento de Marketing</h1><h2>Compuesto por ${count} personas: </h2><ul>${html}</ul><a href="/">Home</a><a href="/developers">Developers</a><a href="/qas">QAs</a><a href="/ventas">Ventas</a>`
  );
});

app.get('/qas', (req, res) => {
  let {count, html} = selection('QAs')
  res.end(
    `<h1>Departamento de QAs</h1><h2>Compuesto por ${count} personas: </h2><ul>${html}</ul><a href="/">Home</a><a href="/developers">Developers</a><a href="/marketing">Marketing</a><a href="/ventas">Ventas</a>`
  );
  });

app.get('/developers', (req, res) => {
  let {count, html} = selection('developers')
  res.end(
    `<h1>Departamento de Developers</h1><h2>Compuesto por ${count} personas: </h2><ul>${html}</ul><a href="/">Home</a><a href="/marketing">Marketing</a><a href="/qas">QAs</a href="/ventas"><a>Ventas</a>`
  );
});

app.get('/ventas', (req, res) => {
    let {count, html} = selection('ventas')
    res.end(
      `<h1>Departamento de Ventas</h1><h2>Compuesto por ${count} personas: </h2><ul>${html}</ul><a href="/">Home</a><a href="/developers">Developers</a><a href="/marketing">Marketing</a><a href="/qas">QAs</a>`
    );
  });

app.use((req, res) => {
  //si la pagina es 404 (no encontrada), devuelve lo siguiente:
  res.status(404).send('<h1>Error 404. Page not found</h1><a href="/">home</a>');
});

app.listen(3000, () => {
  console.log('Node.js está escuchando en el puerto 3000');
});
