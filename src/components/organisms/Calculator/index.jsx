import { useState } from 'react';
import Display from '../../atoms/Display';
import ButtonRow from '../../molecules/ButtonRow';

const Calculator = () => {
  const [previousInput, setPreviousInput] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [displayContent, setDisplayContent] = useState('0');

  const updateDisplay = (content) => setDisplayContent(content);

  const handleClick = (value, action) => {
    if (action === 'clear') {
      setPreviousInput('');
      setCurrentInput('');
      setOperator(null);
      updateDisplay('0');
      return;
    }

    if (action === 'clear-entry') {
      setCurrentInput('');
      updateDisplay(
        previousInput && operator ? `${previousInput} ${operator}` : '0'
      );
      return;
    }

    if (action === 'calculate') {
      if (previousInput && currentInput && operator) {
        const result = eval(`${previousInput} ${operator} ${currentInput}`);
        setDisplayContent(
          `${previousInput} ${operator} ${currentInput} = ${result}`
        );
        setPreviousInput(result.toString());
        setCurrentInput('');
        setOperator(null);
      }
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      if (previousInput && !currentInput) {
        setOperator(value);
        updateDisplay(`${previousInput} ${value}`);
      } else if (currentInput) {
        setPreviousInput(currentInput);
        setCurrentInput('');
        setOperator(value);
        updateDisplay(`${currentInput} ${value}`);
      }
      return;
    }

    if (!operator) {
      const newInput = previousInput + value;
      setPreviousInput(newInput);
      updateDisplay(newInput);
    } else {
      const newInput = currentInput + value;
      setCurrentInput(newInput);
      updateDisplay(`${previousInput} ${operator} ${newInput}`);
    }
  };

  const rows = [
    [
      { value: 'AC', action: 'clear', className: '' },
      { value: '7', action: null, className: '' },
      { value: '4', action: null, className: '' },
      { value: '1', action: null, className: '' },
      { value: '0', action: null, className: 'zero' },
    ],
    [
      { value: 'CE', action: 'clear-entry', className: '' },
      { value: '8', action: null, className: '' },
      { value: '5', action: null, className: '' },
      { value: '2', action: null, className: '' },
      { value: '.', action: null, className: '' },
    ],
    [
      { value: '/', action: null, className: '' },
      { value: '9', action: null, className: '' },
      { value: '6', action: null, className: '' },
      { value: '3', action: null, className: '' },
    ],
    [
      { value: '*', action: null, className: '' },
      { value: '-', action: null, className: '' },
      { value: '+', action: null, className: '' },
      { value: '=', action: 'calculate', className: 'equals' },
    ],
  ];

  return (
    <div className='calculator'>
      <Display content={displayContent} />
      {rows.map((buttons, idx) => (
        <ButtonRow key={idx} buttons={buttons} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Calculator;
