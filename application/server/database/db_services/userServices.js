const User = require('../db_models/userModel');
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

const setUser = asyncHandler(async (req, res) => {
    if(req.body._id && req.body.username) {
        const user = await User.create({
            _id: req.body._id,
            username: req.body.username
        })
        res.status(200).json(user);
    } else {
        res.status(400);
        throw new Error('Invalid or No Data Posted');
    }
    
});

const updateUser = asyncHandler(async (req, res) => {
    const user = User.findById(req.params.id);
    if(!user) {
        res.status(400);
        throw new Error('No User With That ID in Database');
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = User.findById(req.params.id);
    if(!user) {
        res.status(400);
        throw new Error('No User With That ID in Database')
    }
    await user.deleteOne();
    res.status(200).json({id : req.params.id});
});

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}