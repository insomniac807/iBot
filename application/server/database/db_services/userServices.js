const { User } = require('../db_models/userModel');

const getUser = (req, res) => {
    res.status(200).json({message: "Get User!"});
}

const setUser = (req, res) => {
    if(req.body.text) {
        res.status(200).json({message: "Set User!"});
    } else {
        res.status(400);
        throw new Error('Invalid or No Data Posted');
    }
    
}

const updateUser = (req, res) => {
    res.status(200).json({message : `Update User ${req.params.id}`});
}

const deleteUser = (req, res) => {
    res.status(200).json({message : `Delete User ${req.params.id}`});
}

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser
}