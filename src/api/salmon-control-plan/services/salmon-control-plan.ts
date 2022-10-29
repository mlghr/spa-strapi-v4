// path: ./src/api/<content-type-name>/services/<service-name>.js

import { factories } from '@strapi/strapi'

export default factories.createCoreService(
  'api::salmon-control-plan.salmon-control-plan',
)
