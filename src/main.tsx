import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from "./components/Button";

const App = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return(
    <div className="app">
      <h1 className={'title'}>Pet Shop Boys</h1>
      <Button
        id="Test"
        type="submit"
        classes={['btn', 'btn-primary']}
        clicked={clickHandler}
      >My Submit Button</Button>
    </div>
  );
}

const mountPoint = document.getElementById('root');
if (!mountPoint) throw Error('No mount point defined');
else {
  const root = createRoot(mountPoint);
  root.render(<App />);
}
