const Joi = require('joi');

const taskSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Task title is required',
    }),

    description: Joi.string().allow('', null),
    deadline: Joi.date().optional().messages({
        'date.base': 'Deadline must be a valid date',
    }),

    priority: Joi.string().valid('Low', 'Medium', 'High').optional().messages({
        'any.only': 'Priority must be one of: Low, Medium, High',
    }),

    completed: Joi.boolean().optional(),

});

const validateTask = (req, res, next) => {

    const { error } = taskSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const messages = error.details.map((detail) => detail.message);
        return res.status(400).json({error: messages});
    }

    next();
}

module.exports = validateTask;
