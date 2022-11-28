import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

type LazyS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerCreatorsTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreatorsTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly alias?: string | null;
  readonly email?: string | null;
  readonly image?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreatorsTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreatorsTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly alias?: string | null;
  readonly email?: string | null;
  readonly image?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CreatorsTable = LazyLoading extends LazyLoadingDisabled ? EagerCreatorsTable : LazyCreatorsTable

export declare const CreatorsTable: (new (init: ModelInit<CreatorsTable>) => CreatorsTable) & {
  copyOf(source: CreatorsTable, mutator: (draft: MutableModel<CreatorsTable>) => MutableModel<CreatorsTable> | void): CreatorsTable;
}

type EagerMLModels = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MLModels, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly task?: string | null;
  readonly framework?: string | null;
  readonly basemodel?: string | null;
  readonly model_name?: string | null;
  readonly creator?: string | null;
  readonly email?: string | null;
  readonly model_description?: string | null;
  readonly instructions?: string | null;
  readonly model_S3?: S3Object | null;
  readonly likes?: number | null;
  readonly dataset_description?: string | null;
  readonly model_size?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMLModels = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MLModels, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly task?: string | null;
  readonly framework?: string | null;
  readonly basemodel?: string | null;
  readonly model_name?: string | null;
  readonly creator?: string | null;
  readonly email?: string | null;
  readonly model_description?: string | null;
  readonly instructions?: string | null;
  readonly model_S3?: S3Object | null;
  readonly likes?: number | null;
  readonly dataset_description?: string | null;
  readonly model_size?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MLModels = LazyLoading extends LazyLoadingDisabled ? EagerMLModels : LazyMLModels

export declare const MLModels: (new (init: ModelInit<MLModels>) => MLModels) & {
  copyOf(source: MLModels, mutator: (draft: MutableModel<MLModels>) => MutableModel<MLModels> | void): MLModels;
}