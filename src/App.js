import {Provider} from 'react-redux'
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ChocolateContainer from './components/ChocolateContainer';

// To provide a redux store to a react application, the react-redux library makes it's first appearance. Using a component called as the provider we an achieve this.

// Typically the store is provied to the top most app component of the app - doing so the store is available for all the components which are present under the App component in the component tree.

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <ChocolateContainer/>
      </div>
    </Provider>
  );
}

export default App;
