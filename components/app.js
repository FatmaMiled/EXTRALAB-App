import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ScrollableTabsButtonAuto from './vertical-tab-for-cards';

import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core/styles';

import { LIGHT_THEME } from '../redux/actions';

import { FormattedMessage } from 'react-intl';

import Parameters from './parameters';
import VerticalTabs from './vertical-tab';
import CssBaseline from '@material-ui/core/CssBaseline';

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const getMuiTheme = (theme) => {
    if (theme === LIGHT_THEME) {
        return lightTheme;
    } else {
        return darkTheme;
    }
};

const useStyles = makeStyles(() => ({
    h1: {
        marginLeft: 18,
    },
}));

const App = () => {
    const theme = useSelector((state) => state.theme);

    const [showParameters, setShowParameters] = useState(false);

    const history = useHistory();

    const dispatch = useDispatch();

    const location = useLocation();

    const classes = useStyles();

    useEffect(() => {
        console.log('Hello From App Component');
    }, []);

    function onLogoClicked() {
        history.replace('/');
    }

    function showParametersClicked() {
        setShowParameters(true);
    }

    function hideParameters() {
        setShowParameters(false);
    }

    return (
        <ThemeProvider theme={getMuiTheme(theme)}>
            <CssBaseline />
            <Parameters
                showParameters={false}
                hideParameters={hideParameters}
            />

            <Switch>
                <Route exact path="/">
                    <VerticalTabs />
                </Route>
                <Route>
                    <h1>
                        <FormattedMessage id="PageNotFound" />{' '}
                    </h1>
                </Route>
            </Switch>
        </ThemeProvider>
    );
};

export default App;
