const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Get User!"});
}); 

router.post('/', (req, res) => {
    res.json({message: "Set User!"});
}); 

router.put('/:id', (req, res) => {
    res.json({message : `Update User ${req.params.id}`});
}); 

router.delete('/:id', (req, res) => {
    res.json({message : `Delete User ${req.params.id}`});
}); 

module.exports = router;