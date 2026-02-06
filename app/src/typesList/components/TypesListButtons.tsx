import React from 'react';
import './TypesListButtons.css';

interface TypesListButtonsProps {
    typeSate: any;
}

const TypesListButtons: React.FC<TypesListButtonsProps> = ({
  typeSate
}) => {
      const handleAddType = () => {
      console.log('Add Type button clicked');
      typeSate.addType({});
    };
  return (<div className='btns-wrap'>
        <button onClick={handleAddType} className='btn-add'>+ Add Type</button>
    </div>);
};

export default TypesListButtons;