/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { User } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    User_ID: "",
    Username: "",
    Email: "",
    Password: "",
    License_Number: "",
    CDL_Endorsement: "",
    Issued_State: "",
    Issue_Date: "",
    Exp_Date: "",
  };
  const [User_ID, setUser_ID] = React.useState(initialValues.User_ID);
  const [Username, setUsername] = React.useState(initialValues.Username);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Password, setPassword] = React.useState(initialValues.Password);
  const [License_Number, setLicense_Number] = React.useState(
    initialValues.License_Number
  );
  const [CDL_Endorsement, setCDL_Endorsement] = React.useState(
    initialValues.CDL_Endorsement
  );
  const [Issued_State, setIssued_State] = React.useState(
    initialValues.Issued_State
  );
  const [Issue_Date, setIssue_Date] = React.useState(initialValues.Issue_Date);
  const [Exp_Date, setExp_Date] = React.useState(initialValues.Exp_Date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setUser_ID(cleanValues.User_ID);
    setUsername(cleanValues.Username);
    setEmail(cleanValues.Email);
    setPassword(cleanValues.Password);
    setLicense_Number(cleanValues.License_Number);
    setCDL_Endorsement(cleanValues.CDL_Endorsement);
    setIssued_State(cleanValues.Issued_State);
    setIssue_Date(cleanValues.Issue_Date);
    setExp_Date(cleanValues.Exp_Date);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    User_ID: [{ type: "Required" }],
    Username: [{ type: "Required" }],
    Email: [{ type: "Required" }],
    Password: [{ type: "Required" }],
    License_Number: [{ type: "Required" }],
    CDL_Endorsement: [{ type: "Required" }],
    Issued_State: [{ type: "Required" }],
    Issue_Date: [{ type: "Required" }],
    Exp_Date: [{ type: "Required" }],
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
          User_ID,
          Username,
          Email,
          Password,
          License_Number,
          CDL_Endorsement,
          Issued_State,
          Issue_Date,
          Exp_Date,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={User_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID: value,
              Username,
              Email,
              Password,
              License_Number,
              CDL_Endorsement,
              Issued_State,
              Issue_Date,
              Exp_Date,
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
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={Username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username: value,
              Email,
              Password,
              License_Number,
              CDL_Endorsement,
              Issued_State,
              Issue_Date,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.Username ?? value;
          }
          if (errors.Username?.hasError) {
            runValidationTasks("Username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("Username", Username)}
        errorMessage={errors.Username?.errorMessage}
        hasError={errors.Username?.hasError}
        {...getOverrideProps(overrides, "Username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email: value,
              Password,
              License_Number,
              CDL_Endorsement,
              Issued_State,
              Issue_Date,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={Password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email,
              Password: value,
              License_Number,
              CDL_Endorsement,
              Issued_State,
              Issue_Date,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.Password ?? value;
          }
          if (errors.Password?.hasError) {
            runValidationTasks("Password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("Password", Password)}
        errorMessage={errors.Password?.errorMessage}
        hasError={errors.Password?.hasError}
        {...getOverrideProps(overrides, "Password")}
      ></TextField>
      <TextField
        label="License number"
        isRequired={true}
        isReadOnly={false}
        value={License_Number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email,
              Password,
              License_Number: value,
              CDL_Endorsement,
              Issued_State,
              Issue_Date,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.License_Number ?? value;
          }
          if (errors.License_Number?.hasError) {
            runValidationTasks("License_Number", value);
          }
          setLicense_Number(value);
        }}
        onBlur={() => runValidationTasks("License_Number", License_Number)}
        errorMessage={errors.License_Number?.errorMessage}
        hasError={errors.License_Number?.hasError}
        {...getOverrideProps(overrides, "License_Number")}
      ></TextField>
      <TextField
        label="Cdl endorsement"
        isRequired={true}
        isReadOnly={false}
        value={CDL_Endorsement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email,
              Password,
              License_Number,
              CDL_Endorsement: value,
              Issued_State,
              Issue_Date,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.CDL_Endorsement ?? value;
          }
          if (errors.CDL_Endorsement?.hasError) {
            runValidationTasks("CDL_Endorsement", value);
          }
          setCDL_Endorsement(value);
        }}
        onBlur={() => runValidationTasks("CDL_Endorsement", CDL_Endorsement)}
        errorMessage={errors.CDL_Endorsement?.errorMessage}
        hasError={errors.CDL_Endorsement?.hasError}
        {...getOverrideProps(overrides, "CDL_Endorsement")}
      ></TextField>
      <TextField
        label="Issued state"
        isRequired={true}
        isReadOnly={false}
        value={Issued_State}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email,
              Password,
              License_Number,
              CDL_Endorsement,
              Issued_State: value,
              Issue_Date,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.Issued_State ?? value;
          }
          if (errors.Issued_State?.hasError) {
            runValidationTasks("Issued_State", value);
          }
          setIssued_State(value);
        }}
        onBlur={() => runValidationTasks("Issued_State", Issued_State)}
        errorMessage={errors.Issued_State?.errorMessage}
        hasError={errors.Issued_State?.hasError}
        {...getOverrideProps(overrides, "Issued_State")}
      ></TextField>
      <TextField
        label="Issue date"
        isRequired={true}
        isReadOnly={false}
        value={Issue_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email,
              Password,
              License_Number,
              CDL_Endorsement,
              Issued_State,
              Issue_Date: value,
              Exp_Date,
            };
            const result = onChange(modelFields);
            value = result?.Issue_Date ?? value;
          }
          if (errors.Issue_Date?.hasError) {
            runValidationTasks("Issue_Date", value);
          }
          setIssue_Date(value);
        }}
        onBlur={() => runValidationTasks("Issue_Date", Issue_Date)}
        errorMessage={errors.Issue_Date?.errorMessage}
        hasError={errors.Issue_Date?.hasError}
        {...getOverrideProps(overrides, "Issue_Date")}
      ></TextField>
      <TextField
        label="Exp date"
        isRequired={true}
        isReadOnly={false}
        value={Exp_Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User_ID,
              Username,
              Email,
              Password,
              License_Number,
              CDL_Endorsement,
              Issued_State,
              Issue_Date,
              Exp_Date: value,
            };
            const result = onChange(modelFields);
            value = result?.Exp_Date ?? value;
          }
          if (errors.Exp_Date?.hasError) {
            runValidationTasks("Exp_Date", value);
          }
          setExp_Date(value);
        }}
        onBlur={() => runValidationTasks("Exp_Date", Exp_Date)}
        errorMessage={errors.Exp_Date?.errorMessage}
        hasError={errors.Exp_Date?.hasError}
        {...getOverrideProps(overrides, "Exp_Date")}
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
