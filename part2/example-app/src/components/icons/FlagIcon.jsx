const FlagIcon = ({ isFilled, className }) => {
  return isFilled ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 1V16H3V10H7L9 12H15V3H9L7 1H1Z" fill="currentColor" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 16H2.5V10H7L9 12H15V3H9L7 1H1V16ZM2.5 2.5V8.5H7.62132L9.62132 10.5H13.5V4.5H8.37868L6.37868 2.5H2.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlagIcon;
