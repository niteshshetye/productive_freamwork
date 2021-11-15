import React,{lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import App from './App'
const App = lazy(() => import('./App'))

ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={<h1 className='lazy_loading'>Loding App...!</h1>}>
            <App />
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
)