export const ShirtCutout = ({ onClick, className }) => {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1550 966"
      version="1.0"
      encoding="UTF-8"
      className={`absolute bottom-0 h-[325px]  w-[320px] fill-current transition duration-300 ease-in-out hover:opacity-[95%] hover:drop-shadow-md ${className}`}
    >
      <g id="Layer_1-2">
        <g id="Dygsuv.tif">
          <g>
            <path
              onClick={() => {
                onClick();
              }}
              className="cls-1  z-30"
              d="M1546.8,965.88H5.12c-2.2-4.36-.8-9.01-.02-13.14,3.11-16.49,2.23-33.1,2.74-49.68,.31-10.06,1.48-20.12,3.41-30.04,.42-2.15,.45-4.3,.46-6.46,0-11.98-.05-23.97,.02-35.95,.05-8.05,1.51-15.19,6.74-22.24,7.53-10.15,9.32-22.88,11.26-35.28,2.64-16.88,4.79-33.82,8.3-50.57,4.06-19.39,10.36-38.2,14.43-57.56,3.83-18.25,9.58-35.95,14.19-53.97,4.92-19.22,13.18-37.3,18.81-56.27,2.65-8.94,4.73-18.03,6.82-27.09,4.34-18.79,12.15-36.16,20.48-53.4,2.78-5.76,6.09-10.71,10.93-15.11,10.95-9.96,21.38-20.51,29.85-32.79,2.26-3.28,4.83-6.38,5.26-10.6,.25-2.48,1.83-4.22,3.69-5.73,9.77-7.91,20.63-13.94,32.24-18.67,14.87-6.06,28.59-14.17,41.59-23.53,6.51-4.69,12.67-9.73,17.1-16.58,.82-1.27,2.15-2.03,3.63-2.52,17.99-5.96,35.17-13.82,52.45-21.58,15.24-6.84,29.09-16.33,44.31-22.8,25.86-11,49.16-26.54,73.89-39.49,14.77-7.73,28.76-17.21,40.48-29.69,7.79-8.3,17.62-13.98,29-16.59,5.83-1.34,11.6-3.06,17.19-5.22,12.41-4.78,20.96-13.99,29.07-24.21,8.66-10.91,13.74-24.39,24.78-33.59,2.97-2.47,4.96-6.3,6.05-10.2,1.2-4.32,3.53-7.93,6.61-11.01,10.08-10.04,18.35-21.48,26.05-33.36,5.1-7.86,11.9-14.32,17.52-21.75,2.33-3.09,6.49-3.61,9.34-.93,4.08,3.85,9.08,5.48,14.07,7.21,8.08,2.81,15.49,6.88,22.73,11.32,3.73,2.29,7.81,3.77,12.07,4.62,8.15,1.64,15.86,4.75,23.88,6.84,4.93,1.28,5.51,3.65,2.26,7.37-2.52,2.88-4.88,5.89-7.52,8.67-4.17,4.4-4.49,9.6-1.08,14.54,1.7,2.46,3.49,4.9,5.92,6.72,3.24,2.42,5.84,5.43,8.17,8.7,2.14,3,4.59,5.69,7.56,7.91,7.14,5.33,11.39,13.1,15.87,20.38,10.49,17.05,25.63,29.06,41.44,40.49,2.33,1.68,4.34,3.56,6.1,5.81,14.87,19.01,29.97,37.84,44.93,56.78,9.6,12.14,21.75,21.41,34.81,29.54,1.12,.7,2.25,1.77,3.31-.05,1.74-2.96,3.39-1.27,4.6,.32,6.67,8.73,15.62,15.35,22.14,24.27,4.41,6.04,8.83,12.08,13.51,17.93,5.49,6.85,11.45,12.74,20.28,15.4,10.63,3.2,19.62,8.92,25.34,18.97,2.51,4.42,6.47,7.72,10.69,10.34,9.27,5.76,15.53,14.41,22.69,22.25,13.88,15.18,25.51,32.23,40.44,46.61,10.6,10.21,19.81,21.98,27.65,34.61,2.55,4.1,4.85,8.5,6.39,12.92,2.49,7.19,6.77,12.88,11.69,18.33,5.34,5.93,10.33,12.2,16.26,17.59,3.19,2.91,3.85,2.64,5.49-1.24,5.53-13.06,5.57-26.97,6.24-40.74,.22-4.51,.66-8.97,1.4-13.38,1.57-9.37,2.28-18.81,2.66-28.28,.24-5.98,2.5-11.58,3.01-17.61,1.07-12.71,2.88-25.39,4.5-38.02,1.34-10.44,.39-20.92,2.28-31.25,.75-4.08-.08-8.15-1.6-12.2-2.95-7.88-1.65-16.14-.71-24.19,1.33-11.38,2.65-22.76,3.41-34.19,.78-11.74-.88-23.26-4.24-34.47-2.01-6.73-2.07-13.49-1.33-20.27,.79-7.27,2.24-14.48,3-21.75,1.07-10.22,2.41-20.45,2.53-30.73,.05-4.77,1.86-9.08,2.17-13.75,.95-14.26,2.04-28.51,3.59-42.72,.24-2.19-.22-4.31-.25-6.47-.04-2.68,1.6-4.24,3.73-5.47,2.2-1.27,4.13-.82,5.89,.87,1.46,1.4,3.19,2.39,4.98,3.3,1.03,.53,2.46,1.06,2.53,2.23,.34,5.38,4.32,7.87,7.95,10.81,2.2,1.77,3.96,4.19,4.87,6.87,3.75,11.09,11.06,20.09,17.37,29.63,3.44,5.19,6.15,10.67,8.64,16.25,9.28,20.75,20.93,40.07,34.1,58.53,7.26,10.18,15.44,19.53,24.27,28.41,6.44,6.46,13.76,11.52,21.47,16.13,3.71,2.21,7.36,4.68,11.23,6.47,23.56,10.94,42.31,28.7,62.98,43.75,8.21,5.98,16.96,11.16,26.17,15.5,2.75,1.3,5.13,2.78,6.82,5.52,2.17,3.52,6.41,4.62,9.56,7.04,10.87,8.36,20.25,18.29,29.1,28.64,3.79,4.43,7.79,8.58,11.77,12.81,6.93,7.38,13.23,15.34,20.17,22.74,20.29,21.59,29.12,48.92,37.21,76.41,9.2,31.26,16.22,63.12,25.52,94.37,2.97,9.99,4.67,20.32,6.07,30.74,1.42,10.58,1.04,21.28,2.86,31.73,1.96,11.26,3.22,22.66,6.14,33.76,1.22,4.63,1.49,9.49,2.19,14.22,2.7,18.06,4.43,36.15,2.79,54.58-1.26,14.19-1.58,28.71,.96,42.82,2.97,16.48,5.12,33.13,9.41,49.37,3.77,14.31,6.18,28.92,9.11,43.42,2.28,11.25,5.26,22.33,8.35,33.38,.69,2.47,2.27,4.97,.4,7.61Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
