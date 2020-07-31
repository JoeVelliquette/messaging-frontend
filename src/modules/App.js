import React from 'react';
import Button from '@material-ui/core/Button';
import {APP_NAME} from "./Constants";

function App() {
  return (
      <Button variant="contained" color="primary">
          {APP_NAME}
      </Button>
  );
}

export default App;
