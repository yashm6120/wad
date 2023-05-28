const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

let todos = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const task = req.body.task;
  if (task !== '') {
    const newTodo = { id: Date.now(), task: task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(400).json({ error: 'Task cannot be empty' });
  }
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = req.body.task;

  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.task = updatedTask;
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1)[0];
    res.status(200).json(deletedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:${port}`);
});
