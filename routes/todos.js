const router = require('express').Router();
const Todo = require('../models/todo');

// Find All
router.get('/', (req, res) => {
  Todo.findAll()
    .then((todos) => {
      if (!todos.length) return res.status(404).send({ err: 'Todo not found' });
      res.send(todos);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by id
router.get('/id/:id', (req, res) => {
  Todo.findOneByTodoid(req.params.id)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(todo);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
  console.log(req.body);

  Todo.create(req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Update by id
router.put('/id/:id', (req, res) => {
  Todo.updateByTodoid(req.params.id, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete All
router.delete('/', (req, res) => {
  Todo.deleteAll()
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

// Delete by id
router.delete('/id/:id', (req, res) => {
  Todo.deleteByTodoid(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
