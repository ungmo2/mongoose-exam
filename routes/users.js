const router = require('express').Router();
const User = require('../models/user');

// Find All
router.get('/', (req, res) => {
  User.find({ }, (err, users) => {
    if (err) return res.status(500).send(err);
    if (!users.length) return res.status(404).send({ err: 'User not found' });
    res.send(`find successfully: ${users}`);
  });
});

// Find By ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ err: 'User not found' });
    res.send(`findById successfully: ${user}`);
  });
});
// Find One
router.get('/userid/:userid', (req, res) => {
  User.findOne({ userid: req.params.userid }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ err: 'User not found' });
    res.send(`findOne successfully: ${user}`);
  });
});

// Create
router.post('/', (req, res) => {
  User.create(req.body, (err, users) => {
    if (err) return res.status(500).send(err);
    res.send(`create successfully: ${users}`);
  });
});

// FIND BY ID AND UPDATE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) return res.status(500).send(err);
    res.send(`findByIdAndUpdate successfully: ${user}`);
  });
});
// FIND AND UPDATE
router.put('/userid/:userid', (req, res) => {
  User.findOneAndUpdate({ userid: req.params.userid }, req.body, (err, user) => {
    if (err) return res.status(500).send(err);
    res.send(`findOneAndUpdate successfully: ${user}`);
  });
});

// FIND AND REMOVE
router.delete('/userid/:userid', (req, res) => {
  User.remove({ userid: req.params.userid }, (err) => {
    if (err) return res.status(500).send(err);
    res.send('remove successfully');
  });
});

module.exports = router;
