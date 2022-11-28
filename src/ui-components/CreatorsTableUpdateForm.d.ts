/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CreatorsTable } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorsTableUpdateFormInputValues = {
    name?: string;
    alias?: string;
    email?: string;
};
export declare type CreatorsTableUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorsTableUpdateFormOverridesProps = {
    CreatorsTableUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    alias?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorsTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreatorsTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    creatorsTable?: CreatorsTable;
    onSubmit?: (fields: CreatorsTableUpdateFormInputValues) => CreatorsTableUpdateFormInputValues;
    onSuccess?: (fields: CreatorsTableUpdateFormInputValues) => void;
    onError?: (fields: CreatorsTableUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreatorsTableUpdateFormInputValues) => CreatorsTableUpdateFormInputValues;
    onValidate?: CreatorsTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorsTableUpdateForm(props: CreatorsTableUpdateFormProps): React.ReactElement;
