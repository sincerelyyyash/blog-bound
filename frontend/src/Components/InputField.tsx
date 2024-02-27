import React from 'react';

interface InputFieldProps {
  rows: number;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ rows, placeholder }) => {
  let inputClassName = 'm-8 border-2 w-5/6 mt-10 rounded-xl placeholder-center ';
  let inputStyle = {};

  // Set styles based on the number of rows
  switch (rows) {
    case 2:
      inputClassName += 'h-16 text-2xl p-6 italic font-bold border-slate-100 resize-none';
      break;
    case 4:
      inputClassName += 'h-24 text-lg p-6 italic font-semibold border-gray-300 resize-none';
      break;
    case 15:
      inputClassName += 'h-32 text-base p-6 border-gray-200 resize-none';
      break;
    default:
      inputClassName += 'h-16 text-lg p-6 italic font-bold border-slate-100 resize-none';
  }

  return (
    <section className='w-full flex xl:flex-row flex-col justify-center gap-10 max-container'>
      <div className='w-full mt-4'>
        <textarea
          name="title"
          id="title"
          placeholder={placeholder}
          className={inputClassName}
          style={inputStyle}
          rows={rows}
        />
      </div>
    </section>
  );
};

export default InputField;
