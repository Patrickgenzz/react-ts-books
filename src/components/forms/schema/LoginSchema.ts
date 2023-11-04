import * as Yup from 'yup';

export interface FormLoginProps {
  email: string;
  password: string;
}

const initialValues: FormLoginProps = {
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email Required'),
  password: Yup.string().required('Password Required').min(3, 'Too Short'),
});

export { initialValues, loginSchema };
