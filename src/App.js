import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'

import {Button} from 'antd'
import WrappedNormalLoginForm from './FormTest'
import KFormTest from './KFormTest'
import Dialog from './Dialog'
import Tree from './Tree'
function App() {
  return (
    <div className="App">
      <header>
        <Dialog>something!!!
        </Dialog>
        <Tree/>
        <Button type="primary">Button</Button>
        {/*<KFormTest></KFormTest>*/}
        {/*<WrappedNormalLoginForm></WrappedNormalLoginForm>*/}
      </header>
    </div>
  );
}

export default App;
