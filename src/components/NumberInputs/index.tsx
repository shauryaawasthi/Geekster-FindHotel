import { FC } from 'react';
import { css } from '@emotion/css';
import { Button } from '../Button';
import { ReactComponent as PlusIcon } from '../Icons/plus.svg';
import { ReactComponent as MinusIcon } from '../Icons/minus.svg';
import { idText } from 'typescript';

type NumberInputPropTypes = {
  value: number;
  increaseValue: () => void;
 
  decreaseValue: () => void;
  minValue: number;
  maxValue: number;
};



export const NumberInputs: FC<NumberInputPropTypes> = ({
  value,
  increaseValue,
  decreaseValue,
  minValue,
  maxValue,
}) => {
  const isAbleToDecreaseValue = value > minValue;
  const isAbleToIncreaseValue = value < maxValue;

  const isDecreaseDisabled = value === minValue;
  const isIncreaseDisabled = value === maxValue ;

  const num=()=>{
    if(value===1)
    {
      alert("Hello");
    }
  };

 
 

  // const decreaseNumber = () => isAbleToDecreaseValue && decreaseValue();
 
  // const decreaseNumber = () =>isAbleToDecreaseValue && decreaseValue();

  // const increaseNumber = () => isAbleToIncreaseValue && increaseValue();

  const decreaseNumber = () =>{
    if(isAbleToDecreaseValue)
    {
      decreaseValue();
    }

    else{
      alert("No Child is Selected");
    }
   
  };


  
      
    

  
  
  
  

  const increaseNumber  = () =>{
    if(isAbleToIncreaseValue)
    {
      increaseValue();
    }

    else{
      alert("There can only be at max 3 Children");
    }
   
  };


 

  const decreaseButtonVariant = isDecreaseDisabled ? 'disabled' : 'secondary';
  const increaseButtonVariant = isIncreaseDisabled ? 'disabled' : 'secondary';

  

  return (
    <div>
      <Button
        
        onClick={decreaseNumber}

        variant={decreaseButtonVariant}
        
        className={css`
          padding: 8px;
          margin-right: 24px;
          &:hover {
            background-color:white;
            background-color:#bfdaf9;
            color:red;
            font-weight:bold;
        `}
      >
        <MinusIcon />
      </Button>
      <span
        className={css`
          width: 10px;
          display: inline-block;
        `}
      >
        {value}
      </span>
      <Button
        
        onClick={increaseNumber || num}
        variant={increaseButtonVariant}
        
        className={css`
          padding: 8px;
          margin-left: 24px;
          &:hover {
          background-color:white;
          background-color:#bfdaf9;
          // color:black;



          color:red;
          font-weight:bold;
        `}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};
