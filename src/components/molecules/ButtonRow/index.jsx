import Button from '../../atoms/Button';

const ButtonRow = ({ buttons, onClick }) => {
  return (
    <div className='button-row'>
      {buttons.map(({ value, action, className }) => (
        <Button
          key={value || action}
          value={value}
          action={action}
          className={className}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ButtonRow;
