const Button = ({ value, action, onClick, className }) => {
  return (
    <button
      className={className}
      data-value={value}
      data-action={action}
      onClick={() => onClick(value, action)}
    >
      {value}
    </button>
  );
};

export default Button;
