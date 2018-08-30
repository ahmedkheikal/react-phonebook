import React from 'react';
import { CountryNames } from './dictionary/CountryNames'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './AccountSettings.css'
export default class AccountSettings extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <form onSubmit={this.submit} className="add-contact-form">

                <div>
                    <input id="id" list="countries" />
                    <datalist id="countries">
                        {CountryNames.map((name, i) => {
                            return <option key={ i } value={ name }>{ name }</option>;
                        })}
                    </datalist>
                </div>
                <div>
                    <TextField
						            className="from-control"
                        id="id"
                        label="ID"
                        defaultValue="6412341"
                        helperText="Numeric Value"
                        margin="normal"
                        />
                </div>
                <div>
                    <TextField
						            className="from-control"
                        id="name"
                        label="Name"
                        defaultValue="Ahmed"
                        helperText="Your Full Name"
                        margin="normal"
                        />
                </div>

                <div>
                    <TextField
						            className="from-control"
                        id="phone"
                        label="Phone"
                        defaultValue="01024898545"
                        helperText="Phone"
                        margin="normal"
                        />
                </div>

                <div>
                    <TextField
                        className="from-control"
                        id="email"
                        label="Email"
                        defaultValue="user@example.com"
                        helperText="Email"
                        margin="normal"
                        />
                </div>

                <div>
                    <TextField
                        className="from-control"
                        id="address"
                        label="Address"
                        defaultValue="10 example st"
                        helperText="Address"
                        margin="normal"
                        />
                </div>

                <div>
                    <label>Profile Picture</label> <br />   
                    <Button onClick={toggleFileBrowser} variant="contained" color="default">
                        Upload
                        <CloudUploadIcon  />
                        <input id="profilePicture" placeholder="profilePicture" ref="profilePicture" type="file" required/>
                    </Button>
                </div>
                <div>
                    <Button>Add</Button>
                </div>
            </form>
        );
    }
}

function toggleFileBrowser() {
    document.getElementById('profilePicture').click();
}
