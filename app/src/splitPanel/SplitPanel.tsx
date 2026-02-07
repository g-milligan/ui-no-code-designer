import React from 'react';
import './SplitPanel.css';

interface SplitPanelProps {
  readonly children?: React.ReactNode;
}

const SplitPanel: React.FC<SplitPanelProps> = ({ children }) => {
  return (<div className="split-panel">
        {React.Children.map(children, child => (
            <div key={"panel"} className="split-panel-item">
                {child}
            </div>
        ))}
  </div>);
};

export default SplitPanel;