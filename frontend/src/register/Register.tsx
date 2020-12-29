/*
The book project lets a user keep track of different books they would like to read, are currently
reading, have read or did not finish.
Copyright (C) 2020  Karan Kumar

This program is free software: you can redistribute it and/or modify it under the terms of the
GNU General Public License as published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.
If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';
import './Register.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Password from '../shared/form/Password';

function Register() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="app-name">
          Book Project
        </h1>

        <br />
        <br />

        <TextField id="standard-basic" className="login" label="Username" variant="outlined" />

        <br />
        <br />
        
        <Password fieldName={'Password'} class={'login'}/>
        <br />
        <br />
        <Password fieldName={'Confirm password'} class={'login'}/>

        <br />
        <br />

        <Button className="login" variant="contained" color="primary">
          Create account
        </Button>

        <br />
        <br />
        <br />
        <br />

      </header>
    </div>
  );
}

export default Register;
