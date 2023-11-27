import Joi from 'joi';

const userValidationSchema = Joi.object({
  user: Joi.object({
    userId: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    fullName: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    }).required(),
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    isActive: Joi.boolean().default(false),
    hobbies: Joi.array().items(Joi.string()),
    address: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
  }).required()
 
});

const oderValidationSchema = Joi.object({
    
      productName: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
   
  })

export {userValidationSchema, oderValidationSchema} ;
