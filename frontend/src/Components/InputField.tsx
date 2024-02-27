import React from 'react';

interface InputFieldProps {
  rows: number;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ rows, placeholder }) => {
  let inputClassName = 'mr-14 ml-16 border-2 w-5/6 mt-2 rounded-xl placeholder-center font-montserrat text-lg ';
  let inputStyle = {};

  // Set styles based on the number of rows
  switch (rows) {
    case 2:
      inputClassName += 'h-20 text-2xl font-bold  p-4 resize-none';
      break;
    case 4:
      inputClassName += 'h-24  p-6  font-semibold resize-none';
      break;
    case 15:
      inputClassName += 'h-screen  p-6  resize-none ';
      break;
    default:
      inputClassName += 'h-16 text-lg p-6 italic font-bold border-slate-100 resize-none';
  }

  return (
    <section className='w-full flex xl:flex-row flex-col justify-center gap-10 max-container'>
      <div className='w-full '>
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
