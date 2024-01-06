/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { CryptoWallet } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CryptoWalletUpdateForm(props) {
  const {
    id: idProp,
    cryptoWallet: cryptoWalletModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Wallet_ID: "",
    User_ID: "",
    Balance: "",
  };
  const [Wallet_ID, setWallet_ID] = React.useState(initialValues.Wallet_ID);
  const [User_ID, setUser_ID] = React.useState(initialValues.User_ID);
  const [Balance, setBalance] = React.useState(initialValues.Balance);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cryptoWalletRecord
      ? { ...initialValues, ...cryptoWalletRecord }
      : initialValues;
    setWallet_ID(cleanValues.Wallet_ID);
    setUser_ID(cleanValues.User_ID);
    setBalance(cleanValues.Balance);
    setErrors({});
  };
  const [cryptoWalletRecord, setCryptoWalletRecord] = React.useState(
    cryptoWalletModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CryptoWallet, idProp)
        : cryptoWalletModelProp;
      setCryptoWalletRecord(record);
    };
    queryData();
  }, [idProp, cryptoWalletModelProp]);
  React.useEffect(resetStateValues, [cryptoWalletRecord]);
  const validations = {
    Wallet_ID: [],
    User_ID: [],
    Balance: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Wallet_ID,
          User_ID,
          Balance,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            CryptoWallet.copyOf(cryptoWalletRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CryptoWalletUpdateForm")}
      {...rest}
    >
      <TextField
        label="Wallet id"
        isRequired={false}
        isReadOnly={false}
        value={Wallet_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Wallet_ID: value,
              User_ID,
              Balance,
            };
            const result = onChange(modelFields);
            value = result?.Wallet_ID ?? value;
          }
          if (errors.Wallet_ID?.hasError) {
            runValidationTasks("Wallet_ID", value);
          }
          setWallet_ID(value);
        }}
        onBlur={() => runValidationTasks("Wallet_ID", Wallet_ID)}
        errorMessage={errors.Wallet_ID?.errorMessage}
        hasError={errors.Wallet_ID?.hasError}
        {...getOverrideProps(overrides, "Wallet_ID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={User_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Wallet_ID,
              User_ID: value,
              Balance,
            };
            const result = onChange(modelFields);
            value = result?.User_ID ?? value;
          }
          if (errors.User_ID?.hasError) {
            runValidationTasks("User_ID", value);
          }
          setUser_ID(value);
        }}
        onBlur={() => runValidationTasks("User_ID", User_ID)}
        errorMessage={errors.User_ID?.errorMessage}
        hasError={errors.User_ID?.hasError}
        {...getOverrideProps(overrides, "User_ID")}
      ></TextField>
      <TextField
        label="Balance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Balance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Wallet_ID,
              User_ID,
              Balance: value,
            };
            const result = onChange(modelFields);
            value = result?.Balance ?? value;
          }
          if (errors.Balance?.hasError) {
            runValidationTasks("Balance", value);
          }
          setBalance(value);
        }}
        onBlur={() => runValidationTasks("Balance", Balance)}
        errorMessage={errors.Balance?.errorMessage}
        hasError={errors.Balance?.hasError}
        {...getOverrideProps(overrides, "Balance")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cryptoWalletModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cryptoWalletModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
