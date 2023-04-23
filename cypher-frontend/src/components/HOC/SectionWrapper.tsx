import React from "react";

const SectionWrapper = (
  Component: React.FC,
  name: string,
  editable?: boolean,
  func?: React.MouseEventHandler<HTMLButtonElement>
) => {
  return (
    <div className="relative px-20 py-5">
      <div className="flex justify-between items-center py-4">
        <h2 className="uppercase font-bold text-xl mb-3">{name}</h2>
        {editable && (
          <button
            className="bg-orange-400 hover:bg-orange-300 px-4 rounded text-sm py-1 text-white my-2"
            onClick={func}
          >
            Edit
          </button>
        )}
      </div>
      <Component />
      <hr className="mt-7" />
    </div>
  );
};
export default SectionWrapper;
