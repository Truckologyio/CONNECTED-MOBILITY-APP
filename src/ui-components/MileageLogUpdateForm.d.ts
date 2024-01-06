/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MileageLog } from "../models";
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
export declare type MileageLogUpdateFormInputValues = {
    Log_ID?: string;
    User_ID?: string;
    Date?: string;
    Start_Location?: string;
    End_Location?: string;
    Distance_Traveled?: number;
};
export declare type MileageLogUpdateFormValidationValues = {
    Log_ID?: ValidationFunction<string>;
    User_ID?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Start_Location?: ValidationFunction<string>;
    End_Location?: ValidationFunction<string>;
    Distance_Traveled?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MileageLogUpdateFormOverridesProps = {
    MileageLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Log_ID?: PrimitiveOverrideProps<TextFieldProps>;
    User_ID?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Start_Location?: PrimitiveOverrideProps<TextFieldProps>;
    End_Location?: PrimitiveOverrideProps<TextFieldProps>;
    Distance_Traveled?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MileageLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: MileageLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mileageLog?: MileageLog;
    onSubmit?: (fields: MileageLogUpdateFormInputValues) => MileageLogUpdateFormInputValues;
    onSuccess?: (fields: MileageLogUpdateFormInputValues) => void;
    onError?: (fields: MileageLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MileageLogUpdateFormInputValues) => MileageLogUpdateFormInputValues;
    onValidate?: MileageLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MileageLogUpdateForm(props: MileageLogUpdateFormProps): React.ReactElement;
