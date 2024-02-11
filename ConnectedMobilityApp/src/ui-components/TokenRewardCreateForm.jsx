/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { TokenReward } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TokenRewardCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Reward_ID: "",
    User_ID: "",
    Date_Earned: "",
    Mileage_Covered: "",
    Token_Amount: "",
  };
  const [Reward_ID, setReward_ID] = React.useState(initialValues.Reward_ID);
  const [User_ID, setUser_ID] = React.useState(initialValues.User_ID);
  const [Date_Earned, setDate_Earned] = React.useState(
    initialValues.Date_Earned
  );
  const [Mileage_Covered, setMileage_Covered] = React.useState(
    initialValues.Mileage_Covered
  );
  const [Token_Amount, setToken_Amount] = React.useState(
    initialValues.Token_Amount
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setReward_ID(initialValues.Reward_ID);
    setUser_ID(initialValues.User_ID);
    setDate_Earned(initialValues.Date_Earned);
    setMileage_Covered(initialValues.Mileage_Covered);
    setToken_Amount(initialValues.Token_Amount);
    setErrors({});
  };
  const validations = {
    Reward_ID: [{ type: "Required" }],
    User_ID: [{ type: "Required" }],
    Date_Earned: [{ type: "Required" }],
    Mileage_Covered: [{ type: "Required" }],
    Token_Amount: [{ type: "Required" }],
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
          Reward_ID,
          User_ID,
          Date_Earned,
          Mileage_Covered,
          Token_Amount,
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
          await DataStore.save(new TokenReward(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TokenRewardCreateForm")}
      {...rest}
    >
      <TextField
        label="Reward id"
        isRequired={true}
        isReadOnly={false}
        value={Reward_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Reward_ID: value,
              User_ID,
              Date_Earned,
              Mileage_Covered,
              Token_Amount,
            };
            const result = onChange(modelFields);
            value = result?.Reward_ID ?? value;
          }
          if (errors.Reward_ID?.hasError) {
            runValidationTasks("Reward_ID", value);
          }
          setReward_ID(value);
        }}
        onBlur={() => runValidationTasks("Reward_ID", Reward_ID)}
        errorMessage={errors.Reward_ID?.errorMessage}
        hasError={errors.Reward_ID?.hasError}
        {...getOverrideProps(overrides, "Reward_ID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={User_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Reward_ID,
              User_ID: value,
              Date_Earned,
              Mileage_Covered,
              Token_Amount,
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
        label="Date earned"
        isRequired={true}
        isReadOnly={false}
        value={Date_Earned}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Reward_ID,
              User_ID,
              Date_Earned: value,
              Mileage_Covered,
              Token_Amount,
            };
            const result = onChange(modelFields);
            value = result?.Date_Earned ?? value;
          }
          if (errors.Date_Earned?.hasError) {
            runValidationTasks("Date_Earned", value);
          }
          setDate_Earned(value);
        }}
        onBlur={() => runValidationTasks("Date_Earned", Date_Earned)}
        errorMessage={errors.Date_Earned?.errorMessage}
        hasError={errors.Date_Earned?.hasError}
        {...getOverrideProps(overrides, "Date_Earned")}
      ></TextField>
      <TextField
        label="Mileage covered"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Mileage_Covered}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Reward_ID,
              User_ID,
              Date_Earned,
              Mileage_Covered: value,
              Token_Amount,
            };
            const result = onChange(modelFields);
            value = result?.Mileage_Covered ?? value;
          }
          if (errors.Mileage_Covered?.hasError) {
            runValidationTasks("Mileage_Covered", value);
          }
          setMileage_Covered(value);
        }}
        onBlur={() => runValidationTasks("Mileage_Covered", Mileage_Covered)}
        errorMessage={errors.Mileage_Covered?.errorMessage}
        hasError={errors.Mileage_Covered?.hasError}
        {...getOverrideProps(overrides, "Mileage_Covered")}
      ></TextField>
      <TextField
        label="Token amount"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Token_Amount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Reward_ID,
              User_ID,
              Date_Earned,
              Mileage_Covered,
              Token_Amount: value,
            };
            const result = onChange(modelFields);
            value = result?.Token_Amount ?? value;
          }
          if (errors.Token_Amount?.hasError) {
            runValidationTasks("Token_Amount", value);
          }
          setToken_Amount(value);
        }}
        onBlur={() => runValidationTasks("Token_Amount", Token_Amount)}
        errorMessage={errors.Token_Amount?.errorMessage}
        hasError={errors.Token_Amount?.hasError}
        {...getOverrideProps(overrides, "Token_Amount")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
