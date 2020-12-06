const jwt = require('jsonwebtoken');
const User = require('../models/users');
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

exports.createUser = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body)

    const token = signToken(user._id)

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user
            }
        })
})

exports.login = catchAsync(async (req, res, next) => {
  const { userName, password } = req.body;

  // 1) Check if email and password exist
  if (!userName || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  const user = await User.findOne({ userName }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect username or password', 401));
  }

  const token = signToken(user._id)
  res.status(200).json({
      status: 'success',
      token
  })
})