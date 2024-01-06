/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    User_ID?: string;
    Username?: string;
    Email?: string;
    Password?: string;
    License_Number?: string;
    CDL_Endorsement?: string;
    Issued_State?: string;
    Issue_Date?: string;
    Exp_Date?: string;
};
export declare type UserCreateFormValidationValues = {
    User_ID?: ValidationFunction<string>;
    Username?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
    License_Number?: ValidationFunction<string>;
    CDL_Endorsement?: ValidationFunction<string>;
    Issued_State?: ValidationFunction<string>;
    Issue_Date?: ValidationFunction<string>;
    Exp_Date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    License_Number?: PrimitiveOverrideProps<TextFieldProps>;
    CDL_Endorsement?: PrimitiveOverrideProps<TextFieldProps>;
    Issued_State?: PrimitiveOverrideProps<TextFieldProps>;
    Issue_Date?: PrimitiveOverrideProps<TextFieldProps>;
    Exp_Date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
