import React from 'react';
import './SplitColumn.css';

interface SplitColumnProps {
    readonly title: string;
  readonly children?: React.ReactNode;
}

const SplitColumn: React.FC<SplitColumnProps> = ({ children, title }) => {
  return (<div className="split-column">
        <div className="split-column-head">
                <span>{title}</span>
        </div>
        <div className="split-column-body">
                <div className="scroll-y">
                        {children}
                </div>
        </div>
    </div>);
};

export default SplitColumn;