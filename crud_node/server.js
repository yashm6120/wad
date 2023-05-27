const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

let todos = [];

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET a specific todo by ID
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// POST a new todo
app.post('/todos', (req, res) => {
  const { id, title, description } = req.body;
  const newTodo = { id, title, description };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (update) an existing todo
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE a todo by ID
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
