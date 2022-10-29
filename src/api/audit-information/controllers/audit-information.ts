// path: ./src/api/<content-type-name>/controllers/<controller-name>.js

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
  'api::audit-information.audit-information',
)
