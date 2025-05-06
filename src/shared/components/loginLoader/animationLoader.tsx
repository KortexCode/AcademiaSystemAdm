import React from 'react'
import "./style.css";
type AnimationProps = {
  message: string;
};
export function AnimationLoader(props: AnimationProps) {
  const { message } = props;
  return (
    <div className="flex flex-col justify-center items-center space-y-4" >
      <p id="loading-text" className="text-base  text-gray-600">
        {message}
      </p>
      <div
        id="loader"
        className="loader-animation w-24 h-24 rounded-[50%] border-2 border-gray-200"
        data-testid="loader-animation" 
      ></div>
    </div>
  );
}
