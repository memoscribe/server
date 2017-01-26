const router = require('express').Router();

const utils = require('../../config/utils');
const Note = require('../../models/notes');

router.post('/add', (req, res) => {

  let newNote = new Note(req.body);

  newNote.save((err, savedNote) => {

    if (err) {
      let error = utils.createResponseJson('error', 'Failed to save note. See details attribute for more information', { objectTriedToSave: newNote }, err);
      res.json(error);
    }

    if (savedNote) {
      res.json(utils.createResponseJson('success', 'Saved new note. See details for saved note.', { savedNote }));
    }

  });

});

router.get('/list', (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) {
      res.json(utils.createResponseJson('error', 'Failed to retrieve list of notes. See details attribute for more information', {}, err));
    }

    if (notes) {
      res.json(notes);
    }
  });
});

router.get('/delete', (req, res) => {
  Note.remove({}, (err) => {
    if (err) {
      res.json(utils.createResponseJson('error', 'Failed to delete list of notes. See details attribute for more information', {}, err))
    }

    res.json(utils.createResponseJson('success', 'Deleted all notes.'));
  });
});

module.exports = router;
