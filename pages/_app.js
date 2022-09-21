import 'antd/dist/antd.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <div className="app-container">
    <Component {...pageProps} />
  </div>
}

export default MyApp
