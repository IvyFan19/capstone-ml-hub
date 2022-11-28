/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MLModels } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MLModelsUpdateFormInputValues = {
    task?: string;
    framework?: string;
    basemodel?: string;
    model_name?: string;
    creator?: string;
    email?: string;
    model_description?: string;
    instructions?: string;
    likes?: number;
    dataset_description?: string;
    model_size?: number;
};
export declare type MLModelsUpdateFormValidationValues = {
    task?: ValidationFunction<string>;
    framework?: ValidationFunction<string>;
    basemodel?: ValidationFunction<string>;
    model_name?: ValidationFunction<string>;
    creator?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    model_description?: ValidationFunction<string>;
    instructions?: ValidationFunction<string>;
    likes?: ValidationFunction<number>;
    dataset_description?: ValidationFunction<string>;
    model_size?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MLModelsUpdateFormOverridesProps = {
    MLModelsUpdateFormGrid?: FormProps<GridProps>;
    task?: FormProps<TextFieldProps>;
    framework?: FormProps<TextFieldProps>;
    basemodel?: FormProps<TextFieldProps>;
    model_name?: FormProps<TextFieldProps>;
    creator?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    model_description?: FormProps<TextFieldProps>;
    instructions?: FormProps<TextFieldProps>;
    likes?: FormProps<TextFieldProps>;
    dataset_description?: FormProps<TextFieldProps>;
    model_size?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MLModelsUpdateFormProps = React.PropsWithChildren<{
    overrides?: MLModelsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mLModels?: MLModels;
    onSubmit?: (fields: MLModelsUpdateFormInputValues) => MLModelsUpdateFormInputValues;
    onSuccess?: (fields: MLModelsUpdateFormInputValues) => void;
    onError?: (fields: MLModelsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MLModelsUpdateFormInputValues) => MLModelsUpdateFormInputValues;
    onValidate?: MLModelsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MLModelsUpdateForm(props: MLModelsUpdateFormProps): React.ReactElement;
