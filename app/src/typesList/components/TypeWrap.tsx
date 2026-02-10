import React from 'react';
import './TypeWrap.css';
import { AnyType, ArrayType, AvailableType, NumberType, StringType } from '../../typing/BaseTypes';

interface TypeWrapProps {
  readonly index: number;
  readonly typeData: AnyType;
  readonly typeSate: any;
}

const TypeWrap: React.FC<TypeWrapProps> = ({ 
    index,
    typeData,
    typeSate
}) => {
    const {type, key, label, default: defaultValue} = typeData;

    const toggleExpanded = (e: any) => {
        e.currentTarget.parentElement.classList.toggle('contracted');
    };

    const handleTypeChange = (e: any) => {
        typeSate.setTypeAtIndex(index, e.target.value);
    };

  return (<div className="base-type">
    <div data-key="baseTypeHeadingWrap" onClick={toggleExpanded}>
        <span data-key='headingType'>{type}:</span>
        <span data-key='headingKey'>{key}:</span>
        <span data-key='headingLabel'>{label}</span>
        <span data-key='headingIcon'>&gt;</span>
    </div>
    <div data-key="baseTypeFieldsBody">
        <div data-key="baseTypeTypeWrap">
            <label htmlFor='baseTypeType'>type</label>
            <select id='baseTypeType' defaultValue={type} onChange={handleTypeChange}>
                <option value={AvailableType.Object}>⚙️Object</option>
                <option value={AvailableType.Array}>📋Array</option>
                <option value={AvailableType.Enum}>🏷️Enum</option>
                <option value={AvailableType.Number}>🔢Number</option>
                <option value={AvailableType.Boolean}>🚩Boolean</option>
                <option value={AvailableType.String}>🧶String</option>
            </select>
        </div>
        <div data-key="baseTypeKeyWrap">
            <label htmlFor='baseTypeKey'>key</label>
            <input type="text" 
                id='baseTypeKey' 
                placeholder='key' 
                defaultValue={key} />
        </div>
        <div data-key="baseTypeLabelWrap">
            <label htmlFor='baseTypeLabel'>label</label>
            <input type="text" 
                id='baseTypeLabel' 
                placeholder='label' 
                defaultValue={label} />
        </div>
        {(type === AvailableType.String || type === AvailableType.Array) && 
        <>
            <div data-key="baseTypeMinLengthWrap">
                  <label htmlFor='baseTypeMinLength'>minLength</label>
                  <input
                      type="number"
                      id='baseTypeMinLength'
                      min="-1"
                      defaultValue={(typeData as StringType | ArrayType)?.minLength || -1} />
              </div>
              <div data-key="baseTypeMaxLengthWrap">
                      <label htmlFor='baseTypeMaxLength'>maxLength</label>
                      <input 
                        type="number" 
                        id='baseTypeMaxLength' 
                        min="-1" 
                      defaultValue={(typeData as StringType | ArrayType)?.maxLength || -1} />
            </div>
        </>
        }
        {(type === AvailableType.Number) && 
        <>
            <div data-key="baseTypeMinNumberWrap">
                <label htmlFor='baseTypeMinNumber'>minNumber</label>
                <input 
                    type="number" 
                    id='baseTypeMinNumber'
                    min="-1" 
                     defaultValue={(typeData as NumberType)?.minNumber || -1} />
            </div>
            <div data-key="baseTypeMaxNumberWrap">
                <label htmlFor='baseTypeMaxNumber'>maxNumber</label>
                <input 
                    type="number" 
                    id='baseTypeMaxNumber' 
                    min="-1" 
                    defaultValue={(typeData as NumberType)?.maxNumber || -1} />
            </div>
        </>
        }
        <div data-key="baseTypeRequiredWrap">
            <label htmlFor='baseTypeRequired'>required</label>
            <select id='baseTypeRequired' defaultValue={typeData.required ? "true" : "false"}>
                <option value="false">❌No</option>
                <option value="true">✅Yes</option>
            </select>
        </div>
        <div className='fill' data-key="baseTypeDefaultWrap">
            <label htmlFor='baseTypeDefault'>default</label>
            <textarea id='baseTypeDefault' defaultValue={defaultValue}></textarea>
        </div>
                <div className='fill' data-key="baseTypeValidateWrap">
            <label htmlFor='baseTypeValidate'>validate</label>
            <textarea id='baseTypeValidate' defaultValue={typeData.validate.toString()}></textarea>
        </div>
        <div className='fill' data-key="baseTypeToStringWrap">
            <label htmlFor='baseTypeToString'>toCustomString</label>
            <textarea id='baseTypeToString' defaultValue={typeData.toCustomString.toString()}></textarea>
        </div>
    </div>
  </div>);
};

export default TypeWrap;