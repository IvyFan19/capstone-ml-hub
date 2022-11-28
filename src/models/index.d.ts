import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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
  readonly model_S3?: string | null;
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
  readonly model_S3?: string | null;
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