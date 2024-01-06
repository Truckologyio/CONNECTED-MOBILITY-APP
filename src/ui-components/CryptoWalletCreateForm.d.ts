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
export declare type CryptoWalletCreateFormInputValues = {
    Wallet_ID?: string;
    User_ID?: string;
    Balance?: number;
};
export declare type CryptoWalletCreateFormValidationValues = {
    Wallet_ID?: ValidationFunction<string>;
    User_ID?: ValidationFunction<string>;
    Balance?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CryptoWalletCreateFormOverridesProps = {
    CryptoWalletCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Wallet_ID?: PrimitiveOverrideProps<TextFieldProps>;
    User_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Balance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CryptoWalletCreateFormProps = React.PropsWithChildren<{
    overrides?: CryptoWalletCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CryptoWalletCreateFormInputValues) => CryptoWalletCreateFormInputValues;
    onSuccess?: (fields: CryptoWalletCreateFormInputValues) => void;
    onError?: (fields: CryptoWalletCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CryptoWalletCreateFormInputValues) => CryptoWalletCreateFormInputValues;
    onValidate?: CryptoWalletCreateFormValidationValues;
} & React.CSSProperties>;
export default function CryptoWalletCreateForm(props: CryptoWalletCreateFormProps): React.ReactElement;
