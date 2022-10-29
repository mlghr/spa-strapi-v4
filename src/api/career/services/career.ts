// path: ./src/api/<content-type-name>/services/<service-name>.js

const { createCoreService } = require('@strapi/strapi').factories

export default createCoreService('api::career.career')
