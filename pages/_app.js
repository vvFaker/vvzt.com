import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import 'normalize.css';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    }
});
class MyApp extends App {
    render () {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <MuiThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    <style global jsx>{`
                        html, body, #__next {
                            width: 100vw;
                            height: 100vh;
                        }
                    `}</style>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp);
