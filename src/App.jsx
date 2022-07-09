import { Provider } from 'react-redux';
import store from './store/store';
import { AppRouter } from './components/';


const App = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
}

export default App;