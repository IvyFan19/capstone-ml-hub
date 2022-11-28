// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MLModels } = initSchema(schema);

export {
  MLModels
};