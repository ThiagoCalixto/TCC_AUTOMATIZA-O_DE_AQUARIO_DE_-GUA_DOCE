import * as Yup from 'yup';

export const schemaLogin = Yup.object().shape({
  email: Yup.string()
  .email('Email ínvalido')
  .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
  .email('Email ínvalido')
  .required('Campo obrigatório'),
  cpf: Yup.string(),
  password: Yup.string().required('Campo obrigatório')
});

export const schemaUpdate = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
  .email('Email ínvalido')
  .required('Campo obrigatório'),
  cellphone: Yup.string().notRequired(),
});

function getValidationSchema(values: any) {
  return Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
    .email('Email ínvalido')
    .required('Campo obrigatório'),
    cellphone_number: Yup.string(),
    password: Yup.string().required('Campo obrigatório'),
    password_confirmation: Yup.string()
      .oneOf([values.password], 'Passwords are not the same!')
      .required('Password confirmation is required!'),
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

export function validateForm(values:any) {
  const validationSchema = getValidationSchema(values);
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (error) {
    return getErrorsFromValidationError(error);
  }
}
