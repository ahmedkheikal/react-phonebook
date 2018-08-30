import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import PlusOne from '@material-ui/icons/PlusOne';
import Settings from '@material-ui/icons/Settings';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AllContacts from './AllContacts';
import AddContactForm from './AddContactForm';
import AccountSettings from './AccountSettings';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        main: '#ff4400',
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Contacts',
            loading: true,
            completed: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

     componentWillMount() {
         this.setState({
             loading: true
         })
     }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <TopBar value={this.state.value}/>
                    <div className="container">
                        {
                            this.state.loading === true ? 'loading' :
                            this.state.value === 'Contacts' ?
                            <AllContacts /> :
                                this.state.value === 'Add New' ?
                                <AddContactForm /> :
                                    this.state.value === 'Account Settings' ?
                                    <AccountSettings /> : null
                                    }
                    </div>
                    <BottomNavigation
                        value={this.state.value}
                        onChange={this.handleChange}
                        showLabels
                        className="bottom-nav"
                        >
                        <BottomNavigationAction label="Contacts" value="Contacts" icon={<VerifiedUser />} />
                        <BottomNavigationAction label="Add New" value="Add New" icon={<PlusOne />} />
                        <BottomNavigationAction label="Account Settings" value="Account Settings" icon={<Settings />} />
                    </BottomNavigation>
                </MuiThemeProvider>

            </div>
        );
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

}

export default App;
