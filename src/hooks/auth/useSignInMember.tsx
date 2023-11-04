import { useMutation } from '@tanstack/react-query';
import { axiosInstance as axios } from '../../config/AxiosConfig';
import { FormLoginProps } from '../../components/forms/schema/LoginSchema';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const signIn = async (values: FormLoginProps) => {
  try {
    const data = await axios.post('auth/member', values);

    return data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const useSignInMember = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signIn, {
    onSuccess: (data) => {
      if (data) {
        sessionStorage.setItem('user', JSON.stringify(data.data));
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `You have successfully logged in as ${data.data.name}`,
        });
        // localStorage.setItem('token', data.data.token);
        navigate('/member');
      }
    },
  });

  return {
    signInMember: mutate,
    signInLoadingMember: isLoading,
  };
};

export default useSignInMember;
