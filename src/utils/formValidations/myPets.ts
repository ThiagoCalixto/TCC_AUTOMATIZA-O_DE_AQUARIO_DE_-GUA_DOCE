import * as Yup from 'yup';

export const schemaPets = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
});
function getValidationSchemaPets() {
  return Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
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

export function validateFormPets(values:any) {
  const validationSchema = getValidationSchemaPets();
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (error) {
    return getErrorsFromValidationError(error);
  }
}

