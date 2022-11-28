/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MLModelsCreateFormInputValues = {
    task?: string;
    framework?: string;
    basemodel?: string;
    model_name?: string;
    creator?: string;
    email?: string;
    model_description?: string;
    instructions?: string;
    model_S3?: string;
    likes?: number;
    dataset_description?: string;
    model_size?: number;
};
export declare type MLModelsCreateFormValidationValues = {
    task?: ValidationFunction<string>;
    framework?: ValidationFunction<string>;
    basemodel?: ValidationFunction<string>;
    model_name?: ValidationFunction<string>;
    creator?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    model_description?: ValidationFunction<string>;
    instructions?: ValidationFunction<string>;
    model_S3?: ValidationFunction<string>;
    likes?: ValidationFunction<number>;
    dataset_description?: ValidationFunction<string>;
    model_size?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MLModelsCreateFormOverridesProps = {
    MLModelsCreateFormGrid?: FormProps<GridProps>;
    task?: FormProps<TextFieldProps>;
    framework?: FormProps<TextFieldProps>;
    basemodel?: FormProps<TextFieldProps>;
    model_name?: FormProps<TextFieldProps>;
    creator?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    model_description?: FormProps<TextFieldProps>;
    instructions?: FormProps<TextFieldProps>;
    model_S3?: FormProps<TextFieldProps>;
    likes?: FormProps<TextFieldProps>;
    dataset_description?: FormProps<TextFieldProps>;
    model_size?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MLModelsCreateFormProps = React.PropsWithChildren<{
    overrides?: MLModelsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MLModelsCreateFormInputValues) => MLModelsCreateFormInputValues;
    onSuccess?: (fields: MLModelsCreateFormInputValues) => void;
    onError?: (fields: MLModelsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MLModelsCreateFormInputValues) => MLModelsCreateFormInputValues;
    onValidate?: MLModelsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MLModelsCreateForm(props: MLModelsCreateFormProps): React.ReactElement;
