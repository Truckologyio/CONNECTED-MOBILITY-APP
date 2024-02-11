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
export declare type MileageLogCreateFormInputValues = {
    Log_ID?: string;
    User_ID?: string;
    Date?: string;
    Start_Location?: string;
    End_Location?: string;
    Distance_Traveled?: number;
};
export declare type MileageLogCreateFormValidationValues = {
    Log_ID?: ValidationFunction<string>;
    User_ID?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Start_Location?: ValidationFunction<string>;
    End_Location?: ValidationFunction<string>;
    Distance_Traveled?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MileageLogCreateFormOverridesProps = {
    MileageLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Log_ID?: PrimitiveOverrideProps<TextFieldProps>;
    User_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Start_Location?: PrimitiveOverrideProps<TextFieldProps>;
    End_Location?: PrimitiveOverrideProps<TextFieldProps>;
    Distance_Traveled?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MileageLogCreateFormProps = React.PropsWithChildren<{
    overrides?: MileageLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MileageLogCreateFormInputValues) => MileageLogCreateFormInputValues;
    onSuccess?: (fields: MileageLogCreateFormInputValues) => void;
    onError?: (fields: MileageLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MileageLogCreateFormInputValues) => MileageLogCreateFormInputValues;
    onValidate?: MileageLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function MileageLogCreateForm(props: MileageLogCreateFormProps): React.ReactElement;
