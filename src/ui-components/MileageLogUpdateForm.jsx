/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { MileageLog } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function MileageLogUpdateForm(props) {
  const {
    id: idProp,
    mileageLog: mileageLogModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Log_ID: "",
    User_ID: "",
    Date: "",
    Start_Location: "",
    End_Location: "",
    Distance_Traveled: "",
  };
  const [Log_ID, setLog_ID] = React.useState(initialValues.Log_ID);
  const [User_ID, setUser_ID] = React.useState(initialValues.User_ID);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Start_Location, setStart_Location] = React.useState(
    initialValues.Start_Location
  );
  const [End_Location, setEnd_Location] = React.useState(
    initialValues.End_Location
  );
  const [Distance_Traveled, setDistance_Traveled] = React.useState(
    initialValues.Distance_Traveled
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mileageLogRecord
      ? { ...initialValues, ...mileageLogRecord }
      : initialValues;
    setLog_ID(cleanValues.Log_ID);
    setUser_ID(cleanValues.User_ID);
    setDate(cleanValues.Date);
    setStart_Location(cleanValues.Start_Location);
    setEnd_Location(cleanValues.End_Location);
    setDistance_Traveled(cleanValues.Distance_Traveled);
    setErrors({});
  };
  const [mileageLogRecord, setMileageLogRecord] =
    React.useState(mileageLogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(MileageLog, idProp)
        : mileageLogModelProp;
      setMileageLogRecord(record);
    };
    queryData();
  }, [idProp, mileageLogModelProp]);
  React.useEffect(resetStateValues, [mileageLogRecord]);
  const validations = {
    Log_ID: [],
    User_ID: [],
    Date: [],
    Start_Location: [],
    End_Location: [],
    Distance_Traveled: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          Log_ID,
          User_ID,
          Date,
          Start_Location,
          End_Location,
          Distance_Traveled,
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
            MileageLog.copyOf(mileageLogRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MileageLogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Log id"
        isRequired={false}
        isReadOnly={false}
        value={Log_ID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Log_ID: value,
              User_ID,
              Date,
              Start_Location,
              End_Location,
              Distance_Traveled,
            };
            const result = onChange(modelFields);
            value = result?.Log_ID ?? value;
          }
          if (errors.Log_ID?.hasError) {
            runValidationTasks("Log_ID", value);
          }
          setLog_ID(value);
        }}
        onBlur={() => runValidationTasks("Log_ID", Log_ID)}
        errorMessage={errors.Log_ID?.errorMessage}
        hasError={errors.Log_ID?.hasError}
        {...getOverrideProps(overrides, "Log_ID")}
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
              Log_ID,
              User_ID: value,
              Date,
              Start_Location,
              End_Location,
              Distance_Traveled,
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
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={Date && convertToLocal(new Date(Date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              Log_ID,
              User_ID,
              Date: value,
              Start_Location,
              End_Location,
              Distance_Traveled,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <TextField
        label="Start location"
        isRequired={false}
        isReadOnly={false}
        value={Start_Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Log_ID,
              User_ID,
              Date,
              Start_Location: value,
              End_Location,
              Distance_Traveled,
            };
            const result = onChange(modelFields);
            value = result?.Start_Location ?? value;
          }
          if (errors.Start_Location?.hasError) {
            runValidationTasks("Start_Location", value);
          }
          setStart_Location(value);
        }}
        onBlur={() => runValidationTasks("Start_Location", Start_Location)}
        errorMessage={errors.Start_Location?.errorMessage}
        hasError={errors.Start_Location?.hasError}
        {...getOverrideProps(overrides, "Start_Location")}
      ></TextField>
      <TextField
        label="End location"
        isRequired={false}
        isReadOnly={false}
        value={End_Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Log_ID,
              User_ID,
              Date,
              Start_Location,
              End_Location: value,
              Distance_Traveled,
            };
            const result = onChange(modelFields);
            value = result?.End_Location ?? value;
          }
          if (errors.End_Location?.hasError) {
            runValidationTasks("End_Location", value);
          }
          setEnd_Location(value);
        }}
        onBlur={() => runValidationTasks("End_Location", End_Location)}
        errorMessage={errors.End_Location?.errorMessage}
        hasError={errors.End_Location?.hasError}
        {...getOverrideProps(overrides, "End_Location")}
      ></TextField>
      <TextField
        label="Distance traveled"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Distance_Traveled}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Log_ID,
              User_ID,
              Date,
              Start_Location,
              End_Location,
              Distance_Traveled: value,
            };
            const result = onChange(modelFields);
            value = result?.Distance_Traveled ?? value;
          }
          if (errors.Distance_Traveled?.hasError) {
            runValidationTasks("Distance_Traveled", value);
          }
          setDistance_Traveled(value);
        }}
        onBlur={() =>
          runValidationTasks("Distance_Traveled", Distance_Traveled)
        }
        errorMessage={errors.Distance_Traveled?.errorMessage}
        hasError={errors.Distance_Traveled?.hasError}
        {...getOverrideProps(overrides, "Distance_Traveled")}
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
          isDisabled={!(idProp || mileageLogModelProp)}
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
              !(idProp || mileageLogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
