import './App.css';
import AppRouter from './router';
import store from './stores'
import { Provider } from 'react-redux'
function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <StateExcercise />
  //       </header>
  //     </div>
  //   );

  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}




export default App;
