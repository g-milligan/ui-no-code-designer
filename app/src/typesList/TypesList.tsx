import React from 'react';
import './TypesList.css';
import TypesListButtons from './components/TypesListButtons';
import TypeWrap from './components/TypeWrap';
import { useTypeState } from './hooks/useTypesState';

const TypesList: React.FC = () => {

  const typeSate = useTypeState();

  return (<div className='types-list-wrap'>
    <div className='types-list'>
      {typeSate.state.types.map((type, index) => <TypeWrap 
        key={`type-${type.key}`} 
        index={index} 
        typeSate={typeSate}
        typeData={type} />)}
    </div>
    <TypesListButtons typeSate={typeSate} />
  </div>);
};

export default TypesList;