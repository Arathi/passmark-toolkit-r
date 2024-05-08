import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'jotai';

const container = document.createDocumentFragment();
document.body.append(container);

ReactDOM.createRoot(container).render(
  <Provider>
    <App />
  </Provider>
);
