const joi = require('@hapi/joi')

const schema = {
    product: joi.object({
        reference: joi.string().required(),
        name: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().required(),
        variants: joi.required()
    })
}

module.exports = schema