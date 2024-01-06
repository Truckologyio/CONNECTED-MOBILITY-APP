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
export declare type TokenRewardCreateFormInputValues = {
    Reward_ID?: string;
    User_ID?: string;
    Date_Earned?: string;
    Mileage_Covered?: number;
    Token_Amount?: number;
};
export declare type TokenRewardCreateFormValidationValues = {
    Reward_ID?: ValidationFunction<string>;
    User_ID?: ValidationFunction<string>;
    Date_Earned?: ValidationFunction<string>;
    Mileage_Covered?: ValidationFunction<number>;
    Token_Amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TokenRewardCreateFormOverridesProps = {
    TokenRewardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Reward_ID?: PrimitiveOverrideProps<TextFieldProps>;
    User_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Date_Earned?: PrimitiveOverrideProps<TextFieldProps>;
    Mileage_Covered?: PrimitiveOverrideProps<TextFieldProps>;
    Token_Amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TokenRewardCreateFormProps = React.PropsWithChildren<{
    overrides?: TokenRewardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TokenRewardCreateFormInputValues) => TokenRewardCreateFormInputValues;
    onSuccess?: (fields: TokenRewardCreateFormInputValues) => void;
    onError?: (fields: TokenRewardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TokenRewardCreateFormInputValues) => TokenRewardCreateFormInputValues;
    onValidate?: TokenRewardCreateFormValidationValues;
} & React.CSSProperties>;
export default function TokenRewardCreateForm(props: TokenRewardCreateFormProps): React.ReactElement;
