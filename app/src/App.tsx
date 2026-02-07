import React from 'react';
import TypesList from './typesList/TypesList';
import SplitPanel from './splitPanel/SplitPanel';
import SplitColumn from './splitPanel/components/SplitColumn';

function App() {
  return (
    <SplitPanel>
      <SplitColumn key="leftPanel" title="Types">
        <TypesList key="typeList" />
      </SplitColumn>

      <SplitColumn key="rightPanel" title="JSON Preview">
        <div key="rightPanel">TODO</div>
      </SplitColumn>
    </SplitPanel>
  );
}

export default App;
