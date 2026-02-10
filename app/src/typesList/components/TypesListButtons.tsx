import React from 'react';
import './TypesListButtons.css';

interface TypesListButtonsProps {
    typeSate: any;
}

const TypesListButtons: React.FC<TypesListButtonsProps> = ({
  typeSate
}) => {
    const handleAddType = () => {
      typeSate.addType();
    };
  return (<div className='btns-wrap'>
        <button onClick={handleAddType} className='btn-add'>+ Add Type</button>
    </div>);
};

export default TypesListButtons;