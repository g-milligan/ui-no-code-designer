import React from 'react';
import './SplitColumn.css';

interface SplitColumnProps {
    readonly title: string;
  readonly children?: React.ReactNode;
}

const SplitColumn: React.FC<SplitColumnProps> = ({ children, title }) => {
  return (<div className="split-column">
        <div className="split-column-head">
                {title}
        </div>
        <div className="split-column-body">
                {children}
        </div>
    </div>);
};

export default SplitColumn;