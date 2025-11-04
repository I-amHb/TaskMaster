const Joi = require('joi');

// Schema for user registration
const registerSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': 'Username is required',
    'string.min': 'Username must be at least 3 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
  }),
});

// Schema for user login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Middleware for registration validation
const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: messages });
  }
  next();
};

// Middleware for login validation
const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: messages });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
};
