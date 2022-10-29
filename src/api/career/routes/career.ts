// path: ./src/api/<content-type-name>/routes/<router-name>.js

const { createCoreRouter } = require('@strapi/strapi').factories

export default createCoreRouter('api::career.career')
