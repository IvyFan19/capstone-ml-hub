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
export declare type CreatorsTableCreateFormInputValues = {
    name?: string;
    alias?: string;
    email?: string;
};
export declare type CreatorsTableCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorsTableCreateFormOverridesProps = {
    CreatorsTableCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    alias?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorsTableCreateFormProps = React.PropsWithChildren<{
    overrides?: CreatorsTableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreatorsTableCreateFormInputValues) => CreatorsTableCreateFormInputValues;
    onSuccess?: (fields: CreatorsTableCreateFormInputValues) => void;
    onError?: (fields: CreatorsTableCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreatorsTableCreateFormInputValues) => CreatorsTableCreateFormInputValues;
    onValidate?: CreatorsTableCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorsTableCreateForm(props: CreatorsTableCreateFormProps): React.ReactElement;
