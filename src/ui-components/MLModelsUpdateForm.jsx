/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { MLModels } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function MLModelsUpdateForm(props) {
  const {
    id,
    mLModels,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    task: undefined,
    framework: undefined,
    basemodel: undefined,
    model_name: undefined,
    creator: undefined,
    email: undefined,
    model_description: undefined,
    instructions: undefined,
    model_S3: undefined,
    likes: undefined,
    dataset_description: undefined,
    model_size: undefined,
  };
  const [task, setTask] = React.useState(initialValues.task);
  const [framework, setFramework] = React.useState(initialValues.framework);
  const [basemodel, setBasemodel] = React.useState(initialValues.basemodel);
  const [model_name, setModel_name] = React.useState(initialValues.model_name);
  const [creator, setCreator] = React.useState(initialValues.creator);
  const [email, setEmail] = React.useState(initialValues.email);
  const [model_description, setModel_description] = React.useState(
    initialValues.model_description
  );
  const [instructions, setInstructions] = React.useState(
    initialValues.instructions
  );
  const [model_S3, setModel_S3] = React.useState(initialValues.model_S3);
  const [likes, setLikes] = React.useState(initialValues.likes);
  const [dataset_description, setDataset_description] = React.useState(
    initialValues.dataset_description
  );
  const [model_size, setModel_size] = React.useState(initialValues.model_size);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...mLModelsRecord };
    setTask(cleanValues.task);
    setFramework(cleanValues.framework);
    setBasemodel(cleanValues.basemodel);
    setModel_name(cleanValues.model_name);
    setCreator(cleanValues.creator);
    setEmail(cleanValues.email);
    setModel_description(cleanValues.model_description);
    setInstructions(cleanValues.instructions);
    setModel_S3(cleanValues.model_S3);
    setLikes(cleanValues.likes);
    setDataset_description(cleanValues.dataset_description);
    setModel_size(cleanValues.model_size);
    setErrors({});
  };
  const [mLModelsRecord, setMLModelsRecord] = React.useState(mLModels);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(MLModels, id) : mLModels;
      setMLModelsRecord(record);
    };
    queryData();
  }, [id, mLModels]);
  React.useEffect(resetStateValues, [mLModelsRecord]);
  const validations = {
    task: [],
    framework: [],
    basemodel: [],
    model_name: [],
    creator: [],
    email: [{ type: "Email" }],
    model_description: [],
    instructions: [],
    model_S3: [],
    likes: [],
    dataset_description: [],
    model_size: [],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          task,
          framework,
          basemodel,
          model_name,
          creator,
          email,
          model_description,
          instructions,
          model_S3,
          likes,
          dataset_description,
          model_size,
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
          await DataStore.save(
            MLModels.copyOf(mLModelsRecord, (updated) => {
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
      {...rest}
      {...getOverrideProps(overrides, "MLModelsUpdateForm")}
    >
      <TextField
        label="Task"
        isRequired={false}
        isReadOnly={false}
        defaultValue={task}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task: value,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.task ?? value;
          }
          if (errors.task?.hasError) {
            runValidationTasks("task", value);
          }
          setTask(value);
        }}
        onBlur={() => runValidationTasks("task", task)}
        errorMessage={errors.task?.errorMessage}
        hasError={errors.task?.hasError}
        {...getOverrideProps(overrides, "task")}
      ></TextField>
      <TextField
        label="Framework"
        isRequired={false}
        isReadOnly={false}
        defaultValue={framework}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework: value,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.framework ?? value;
          }
          if (errors.framework?.hasError) {
            runValidationTasks("framework", value);
          }
          setFramework(value);
        }}
        onBlur={() => runValidationTasks("framework", framework)}
        errorMessage={errors.framework?.errorMessage}
        hasError={errors.framework?.hasError}
        {...getOverrideProps(overrides, "framework")}
      ></TextField>
      <TextField
        label="Basemodel"
        isRequired={false}
        isReadOnly={false}
        defaultValue={basemodel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel: value,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.basemodel ?? value;
          }
          if (errors.basemodel?.hasError) {
            runValidationTasks("basemodel", value);
          }
          setBasemodel(value);
        }}
        onBlur={() => runValidationTasks("basemodel", basemodel)}
        errorMessage={errors.basemodel?.errorMessage}
        hasError={errors.basemodel?.hasError}
        {...getOverrideProps(overrides, "basemodel")}
      ></TextField>
      <TextField
        label="Model name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={model_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name: value,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.model_name ?? value;
          }
          if (errors.model_name?.hasError) {
            runValidationTasks("model_name", value);
          }
          setModel_name(value);
        }}
        onBlur={() => runValidationTasks("model_name", model_name)}
        errorMessage={errors.model_name?.errorMessage}
        hasError={errors.model_name?.hasError}
        {...getOverrideProps(overrides, "model_name")}
      ></TextField>
      <TextField
        label="Creator"
        isRequired={false}
        isReadOnly={false}
        defaultValue={creator}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator: value,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.creator ?? value;
          }
          if (errors.creator?.hasError) {
            runValidationTasks("creator", value);
          }
          setCreator(value);
        }}
        onBlur={() => runValidationTasks("creator", creator)}
        errorMessage={errors.creator?.errorMessage}
        hasError={errors.creator?.hasError}
        {...getOverrideProps(overrides, "creator")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        defaultValue={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email: value,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Model description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={model_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description: value,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.model_description ?? value;
          }
          if (errors.model_description?.hasError) {
            runValidationTasks("model_description", value);
          }
          setModel_description(value);
        }}
        onBlur={() =>
          runValidationTasks("model_description", model_description)
        }
        errorMessage={errors.model_description?.errorMessage}
        hasError={errors.model_description?.hasError}
        {...getOverrideProps(overrides, "model_description")}
      ></TextField>
      <TextField
        label="Instructions"
        isRequired={false}
        isReadOnly={false}
        defaultValue={instructions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions: value,
              model_S3,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.instructions ?? value;
          }
          if (errors.instructions?.hasError) {
            runValidationTasks("instructions", value);
          }
          setInstructions(value);
        }}
        onBlur={() => runValidationTasks("instructions", instructions)}
        errorMessage={errors.instructions?.errorMessage}
        hasError={errors.instructions?.hasError}
        {...getOverrideProps(overrides, "instructions")}
      ></TextField>
      <TextField
        label="Model s3"
        isRequired={false}
        isReadOnly={false}
        defaultValue={model_S3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3: value,
              likes,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.model_S3 ?? value;
          }
          if (errors.model_S3?.hasError) {
            runValidationTasks("model_S3", value);
          }
          setModel_S3(value);
        }}
        onBlur={() => runValidationTasks("model_S3", model_S3)}
        errorMessage={errors.model_S3?.errorMessage}
        hasError={errors.model_S3?.hasError}
        {...getOverrideProps(overrides, "model_S3")}
      ></TextField>
      <TextField
        label="Likes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={likes}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              likes: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes: value,
              dataset_description,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.likes ?? value;
          }
          if (errors.likes?.hasError) {
            runValidationTasks("likes", value);
          }
          setLikes(value);
        }}
        onBlur={() => runValidationTasks("likes", likes)}
        errorMessage={errors.likes?.errorMessage}
        hasError={errors.likes?.hasError}
        {...getOverrideProps(overrides, "likes")}
      ></TextField>
      <TextField
        label="Dataset description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={dataset_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description: value,
              model_size,
            };
            const result = onChange(modelFields);
            value = result?.dataset_description ?? value;
          }
          if (errors.dataset_description?.hasError) {
            runValidationTasks("dataset_description", value);
          }
          setDataset_description(value);
        }}
        onBlur={() =>
          runValidationTasks("dataset_description", dataset_description)
        }
        errorMessage={errors.dataset_description?.errorMessage}
        hasError={errors.dataset_description?.hasError}
        {...getOverrideProps(overrides, "dataset_description")}
      ></TextField>
      <TextField
        label="Model size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={model_size}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              model_size: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              task,
              framework,
              basemodel,
              model_name,
              creator,
              email,
              model_description,
              instructions,
              model_S3,
              likes,
              dataset_description,
              model_size: value,
            };
            const result = onChange(modelFields);
            value = result?.model_size ?? value;
          }
          if (errors.model_size?.hasError) {
            runValidationTasks("model_size", value);
          }
          setModel_size(value);
        }}
        onBlur={() => runValidationTasks("model_size", model_size)}
        errorMessage={errors.model_size?.errorMessage}
        hasError={errors.model_size?.hasError}
        {...getOverrideProps(overrides, "model_size")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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
