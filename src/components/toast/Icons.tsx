const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
  >
    <path
      d="M32 15.6286V17.0086C31.9981 20.2432 30.9507 23.3906 29.014 25.9813C27.0772 28.572 24.3549 30.4673 21.253 31.3844C18.1511 32.3016 14.8359 32.1914 11.8017 31.0705C8.76752 29.9495 6.17698 27.8777 4.41644 25.1642C2.6559 22.4506 1.81969 19.2407 2.03252 16.0131C2.24534 12.7854 3.49581 9.71307 5.59742 7.25419C7.69903 4.79531 10.5392 3.08166 13.6943 2.3688C16.8494 1.65595 20.1504 1.98209 23.105 3.29859"
      stroke="#456A3E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 5.00861L17 20.0236L12.5 15.5236"
      stroke="#456A3E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
  >
    <path
      d="M17 32C25.2843 32 32 25.2843 32 17C32 8.71573 25.2843 2 17 2C8.71573 2 2 8.71573 2 17C2 25.2843 8.71573 32 17 32Z"
      stroke="#000006"
      strokeOpacity="0.643137"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 12.5L12.5 21.5"
      stroke="#000006"
      strokeOpacity="0.643137"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 12.5L21.5 21.5"
      stroke="#000006"
      strokeOpacity="0.643137"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
  >
    <path
      d="M17 32C25.2843 32 32 25.2843 32 17C32 8.71573 25.2843 2 17 2C8.71573 2 2 8.71573 2 17C2 25.2843 8.71573 32 17 32Z"
      stroke="#3E606A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 23V17"
      stroke="#3E606A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 11H17.015"
      stroke="#3E606A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
  >
    <path
      d="M14.545 3.59547L2.38479 27.0284C2.13407 27.5296 2.00142 28.0978 2.00001 28.6765C1.99861 29.2552 2.12851 29.8243 2.37679 30.3271C2.62507 30.8299 2.98307 31.2489 3.41519 31.5424C3.8473 31.8359 4.33846 31.9936 4.8398 32H29.1602C29.6615 31.9936 30.1527 31.8359 30.5848 31.5424C31.0169 31.2489 31.3749 30.8299 31.6232 30.3271C31.8715 29.8243 32.0014 29.2552 32 28.6765C31.9986 28.0978 31.8659 27.5296 31.6152 27.0284L19.455 3.59547C19.1991 3.10842 18.8387 2.70574 18.4087 2.42628C17.9787 2.14682 17.4935 2 17 2C16.5065 2 16.0213 2.14682 15.5913 2.42628C15.1613 2.70574 14.8009 3.10842 14.545 3.59547Z"
      stroke="#4A3E6A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 12.1135V18.7424"
      stroke="#4A3E6A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 25.3712H17.0144"
      stroke="#4A3E6A"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

export { SuccessIcon, ErrorIcon, InfoIcon, WarningIcon, CloseIcon };
