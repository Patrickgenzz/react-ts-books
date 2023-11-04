import { useMutation } from '@tanstack/react-query';
import { axiosInstance as axios } from '../../config/AxiosConfig';
import { FormRegisterProps } from '../..//components/forms/schema/RegisterSchema';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const signUp = async (values: FormRegisterProps) => {
  try {
    await axios.post('/members', values);
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const useSignUpMember = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Sign up success, please login',
      });
      navigate('/login');
    },
  });

  return {
    signUpMember: mutate,
    signUpLoadingMember: isLoading,
  };
};

export default useSignUpMember;
