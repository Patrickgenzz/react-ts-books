import React from 'react';
import { Formik, Form } from 'formik';
import { InputEmail, InputPassword, InputText, InputFile } from './parts';
import { registerSchema, initialValues } from './schema/RegisterSchema';
import useSignUpMember from '../../hooks/auth/useSignUpMember';
import Button from '../ui/Button';

const RegisterForm: React.FC = () => {
  const { signUpMember, signUpLoadingMember } = useSignUpMember();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        signUpMember(values);
      }}
    >
      <Form>
        <InputText label="Name" id="name" name="name" />
        <InputEmail label="Email" id="email" name="email" />
        <InputPassword label="Password" id="password" name="password" />
        <InputFile label="Upload Image" id="image" name="image" />
        <Button type="submit" title="Sign Up" isLoading={signUpLoadingMember} />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
