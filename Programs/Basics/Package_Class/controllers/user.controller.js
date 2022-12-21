const bycrypt = require('bcryptjs');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const registerUser = (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({ username }).then(
        (user) => {
            if (user !== null) {
                let err = new Error(`${username} is already a user`);
                err.status = 400;
                return next(err)
            }
            else {
                if (password.length < 8) {
                    let err = new Error(`Password must be at least 8 characters long`);
                    err.status = 400;
                    return next(err)
                }
                if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
                    let err = new Error(`Password must have at least one uppercase, one lowercase, one digit and one special character`);
                    err.status = 400;
                    return next(err)
                }
                bycrypt.hash(password, 10, (err, hash) => {
                    if (err) return next(err)
                    user = new User();
                    user.username = username;
                    user.password = hash;

                    user.save().then(
                        (user) => {
                            res.status(201).json({
                                message: 'User registered successfully',
                                user: { userId: user._id, username: user.username }
                            })
                        }
                    )
                })
            }
        }
    ).then((err) => {
        next(err)
    })
}

const loginUser = (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username }).then(
        (user) => {
            if (user === null) {
                let err = new Error(`$ username} is not registered`);
                err.status = 400;
                return next(err)
            }
            // create access token
            const token = jwt.sign({ _id: user._id }, process.env.ACCESS_SECRET, { expiresIn: '1h' });

            bycrypt.compare(password, user.password, (err, result) => {
                if (err) return next(err)
                if (result === false) {
                    let err = new Error(`Password is incorrect`);
                    err.status = 400;
                    return next(err)
                }
                res.status(200).json({
                    message: 'Login successful',
                    userId: user._id,
                    username: user.username,
                    token,
                })
            }
            )
        }
    ).catch((err) => {
        next(err)
    })
}

module.exports = {
    registerUser,
    loginUser
}