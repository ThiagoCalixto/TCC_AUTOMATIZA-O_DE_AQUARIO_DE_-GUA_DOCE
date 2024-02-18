import * as Yup from 'yup';

export const schemaRoutineLight = Yup.object().shape({
  turnOn: Yup.string().required('Campo obrigatório'),
  turnOff: Yup.string().required('Campo obrigatório')
});
export const schemaRoutineFeedling = Yup.object().shape({
  firstFeedling: Yup.string().required('Campo obrigatório'),
  secondFeedling: Yup.string().required('Campo obrigatório'),
});

function getValidationSchemaLight() {
  return Yup.object().shape({
    turnOn: Yup.string().required('Campo obrigatório'),
    turnOff: Yup.string().required('Campo obrigatório')
  });
}
function getValidationSchemaFeedling() {
  return Yup.object().shape({
    firstFeedling: Yup.string().required('Campo obrigatório'),
  secondFeedling: Yup.string().required('Campo obrigatório'),
  });
}

function getErrorsFromValidationError(validationError: any) {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors:any, error:any) => {
    console.log(error.message)
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR]
    };
  }, {});
}

export function validateFormLight(values:any) {
  const validationSchema = getValidationSchemaFeedling();
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (error) {
    return getErrorsFromValidationError(error);
  }
}
export function validateFormFeedling(values:any) {
  const validationSchema = getValidationSchemaLight();
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (error) {
    return getErrorsFromValidationError(error);
  }
}
