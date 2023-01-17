
const RightArrow = ({size = 32 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 128h176M144 56l72 72-72 72"
    />
  </svg>
);

export default RightArrow
