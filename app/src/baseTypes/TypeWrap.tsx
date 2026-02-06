import React from 'react';
import './TypeWrap.css';

const TypeWrap: React.FC = () => {
    const toggleExpanded = (e: any) => {
        e.currentTarget.parentElement.classList.toggle('contracted');
    };

  return (<div className="base-type">
    <div data-key="baseTypeHeadingWrap" onClick={toggleExpanded}>
        <span data-key='headingType'>⚙️Object:</span>
        <span data-key='headingKey'>myKey:</span>
        <span data-key='headingLabel'>My Key</span>
        <span data-key='headingIcon'>&gt;</span>
    </div>
    <div data-key="baseTypeFieldsBody">
        <div data-key="baseTypeTypeWrap">
            <label htmlFor='baseTypeType'>type</label>
            <select id='baseTypeType'>
                <option value="object">⚙️Object</option>
                <option value="array">📋Array</option>
                <option value="enum">🏷️Enum</option>
                <option value="number">🔢Number</option>
                <option value="boolean">🚩Boolean</option>
                <option value="string">🧶String</option>
            </select>
        </div>
        <div data-key="baseTypeKeyWrap">
            <label htmlFor='baseTypeKey'>key</label>
            <input type="text" id='baseTypeKey' placeholder='key' />
        </div>
        <div data-key="baseTypeLabelWrap">
            <label htmlFor='baseTypeLabel'>label</label>
            <input type="text" id='baseTypeLabel' placeholder='label' />
        </div>
        <div data-key="baseTypeMinLengthWrap">
            <label htmlFor='baseTypeMinLength'>minLength</label>
            <input type="number" id='baseTypeMinLength' min="-1" />
        </div>
        <div data-key="baseTypeMaxLengthWrap">
            <label htmlFor='baseTypeMaxLength'>maxLength</label>
            <input type="number" id='baseTypeMaxLength' min="-1" />
        </div>
        <div data-key="baseTypeMinNumberWrap">
            <label htmlFor='baseTypeMinNumber'>minNumber</label>
            <input type="number" id='baseTypeMinNumber' min="-1" />
        </div>
        <div data-key="baseTypeMaxNumberWrap">
            <label htmlFor='baseTypeMaxNumber'>maxNumber</label>
            <input type="number" id='baseTypeMaxNumber' min="-1" />
        </div>
        <div data-key="baseTypeRequiredWrap">
            <label htmlFor='baseTypeRequired'>required</label>
            <select id='baseTypeRequired'>
                <option value="false">❌No</option>
                <option value="true">✅Yes</option>
            </select>
        </div>
        <div className='fill' data-key="baseTypeDefaultWrap">
            <label htmlFor='baseTypeDefault'>default</label>
            <textarea id='baseTypeDefault'></textarea>
        </div>
                <div className='fill' data-key="baseTypeValidateWrap">
            <label htmlFor='baseTypeValidate'>validate</label>
            <textarea id='baseTypeValidate'></textarea>
        </div>
        <div className='fill' data-key="baseTypeToStringWrap">
            <label htmlFor='baseTypeToString'>toString</label>
            <textarea id='baseTypeToString'></textarea>
        </div>
        <div data-key="baseTypeOptionsWrap">
            <label htmlFor='baseTypeOptions'>options</label>
            TODO
        </div>
    </div>
  </div>);
};

export default TypeWrap;