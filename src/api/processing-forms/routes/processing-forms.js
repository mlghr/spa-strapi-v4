// path: ./src/api/<content-type-name>/routes/<router-name>.js

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::processing-forms.processing-forms");