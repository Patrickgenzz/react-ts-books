import * as Yup from 'yup';

export interface FormRegisterProps {
  name: string;
  email: string;
  password: string;
  image: File | string;
}

const initialValues: FormRegisterProps = {
  name: '',
  email: '',
  password: '',
  image: '',
};

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name Required'),
  email: Yup.string().email().required('Email Required'),
  password: Yup.string().required('Password Required').min(3, 'Too Short'),
  image: Yup.mixed().required('Image Required'),
});

export { initialValues, registerSchema };
