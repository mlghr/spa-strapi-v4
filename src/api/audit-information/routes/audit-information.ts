// path: ./src/api/<content-type-name>/routes/<router-name>.js

import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::audit-information.audit-information', {
  prefix: '',
  only: ['find', 'findOne'],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
})
