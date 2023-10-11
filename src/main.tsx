import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, ButtonGroup } from "./components/Button";

const App = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  const displayHidden = { display: 'none' };

  return(
    <div className="app">
      <h1 className={'title'}>Pet Shop Boys</h1>
      <Button
        id="Test"
        type="button"
        classes={['btn', 'btn-primary']}
        clicked={clickHandler}
      >My Button</Button>
      <ButtonGroup label="control-buttons">
        <Button
          id="Reset"
          type="reset"
          classes={['btn', 'btn-reset']}
          clicked={clickHandler}
          label="Reset"
        >Reset Button</Button>
        <Button
          id="Submit"
          type="submit"
          classes={['btn', 'btn-submit']}
          clicked={clickHandler}
          labelledBy="test-aria"
        >
          <div id="test-aria" style={displayHidden}>Test Aria Description: Submit Button</div>
          Submit Button
        </Button>
      </ButtonGroup>
    </div>
  );
}

const mountPoint = document.getElementById('root');
if (!mountPoint) throw Error('No mount point defined');
else {
  const root = createRoot(mountPoint);
  root.render(<App />);
}
