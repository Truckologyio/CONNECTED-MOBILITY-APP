/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CryptoWallet } from "../models";
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
export declare type CryptoWalletUpdateFormInputValues = {
    Wallet_ID?: string;
    User_ID?: string;
    Balance?: number;
};
export declare type CryptoWalletUpdateFormValidationValues = {
    Wallet_ID?: ValidationFunction<string>;
    User_ID?: ValidationFunction<string>;
    Balance?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CryptoWalletUpdateFormOverridesProps = {
    CryptoWalletUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Wallet_ID?: PrimitiveOverrideProps<TextFieldProps>;
    User_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Balance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CryptoWalletUpdateFormProps = React.PropsWithChildren<{
    overrides?: CryptoWalletUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cryptoWallet?: CryptoWallet;
    onSubmit?: (fields: CryptoWalletUpdateFormInputValues) => CryptoWalletUpdateFormInputValues;
    onSuccess?: (fields: CryptoWalletUpdateFormInputValues) => void;
    onError?: (fields: CryptoWalletUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CryptoWalletUpdateFormInputValues) => CryptoWalletUpdateFormInputValues;
    onValidate?: CryptoWalletUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CryptoWalletUpdateForm(props: CryptoWalletUpdateFormProps): React.ReactElement;
