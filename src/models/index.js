// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CreatorsTable, MLModels, S3Object } = initSchema(schema);

export {
  CreatorsTable,
  MLModels,
  S3Object
};