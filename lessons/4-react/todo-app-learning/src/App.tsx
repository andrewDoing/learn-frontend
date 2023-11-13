import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { NormalTodo } from './pages/NormalTodo'
import { ReduxTodo } from './pages/ReduxTodo'
import { AppBar } from './components/AppBar'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <AppBar />
          <Routes>
            <Route path='/redux' element={<ReduxTodo />} />
            <Route path='/' element={<NormalTodo />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App
