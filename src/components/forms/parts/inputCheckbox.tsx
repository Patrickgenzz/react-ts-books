import React, { useState } from 'react';

interface CheckboxInputProps {
  checked: () => void;
}

const InputCheckbox: React.FC<CheckboxInputProps> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onClick = () => {
    setIsChecked(!isChecked);
    props.checked();
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <label className="text-gray-500 dark:text-gray-300">Admin</label>
          <div
            className={`relative ml-3 inline-block w-10 h-6 transition-colors duration-200 ease-in-out ${
              isChecked
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-300 dark:bg-gray-600'
            } rounded-full cursor-pointer`}
          >
            <input
              type="checkbox"
              id="admin"
              className="absolute w-6 h-6 opacity-0 cursor-pointer"
              checked={isChecked}
              onChange={onClick}
            />
            <label
              htmlFor="admin"
              className={`absolute left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform ${
                isChecked ? 'translate-x-4' : 'translate-x-0'
              } bg-white dark:bg-gray-800 rounded-full cursor-pointer`}
            ></label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
    </>
  );
};

export default InputCheckbox;
