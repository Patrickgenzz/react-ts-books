import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { InputEmail, InputPassword, InputCheckbox } from './parts';
import { loginSchema, initialValues } from './schema/LoginSchema';
import useSignInMember from '../../hooks/auth/useSignInMember';
import useSignInAdmin from '../../hooks/auth/useSignInAdmin';
import Button from '../ui/Button';

const LoginForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { signInMember, signInLoadingMember } = useSignInMember();
  const { signInAdmin, signInLoadingAdmin } = useSignInAdmin();

  const onChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        if (!isChecked) {
          signInMember(values);
        } else {
          signInAdmin(values);
        }
      }}
    >
      <Form className="space-y-4 md:space-y-6">
        <InputEmail label="Email" id="email" name="email" />
        <InputPassword label="Password" id="password" name="password" />
        <InputCheckbox checked={onChecked} />
        {isChecked ? (
          <Button
            type="submit"
            title="Sign In as Admin"
            isLoading={signInLoadingAdmin}
          />
        ) : (
          <Button
            type="submit"
            title="Sign In as Member"
            isLoading={signInLoadingMember}
          />
        )}
      </Form>
    </Formik>
  );
};

export default LoginForm;
