// path: ./src/api/<content-type-name>/controllers/<controller-name>.js

const { createCoreController } = require('@strapi/strapi').factories

export default createCoreController('api::career.career')
