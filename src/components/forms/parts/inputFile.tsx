import { useField } from 'formik';

interface FileInputProps {
  id: string;
  label: string;
  name: string;
}

const InputFile: React.FC<FileInputProps> = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-6">
        <label
          htmlFor={props.id || props.name}
          className={
            meta.touched && meta.error
              ? 'block mb-2 text-sm font-medium text-red-700 dark:text-red-500'
              : 'block mb-1 text-sm font-medium text-gray-900 dark:text-white'
          }
        >
          {props.label}
        </label>
        <input
          required={false}
          type="file"
          accept="image/*"
          className={
            meta.touched && meta.error
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
              : 'cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          }
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <p
            id="filled_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Error!</span> {meta.error}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default InputFile;
