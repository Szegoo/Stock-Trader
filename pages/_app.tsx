import App from 'next/app';
import "../styles/main.scss";
import { Provider } from 'react-redux';
import store from '../redux/store';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}