import { PostForm,HomePage,NotFoundPage } from './pages';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {PostContext} from './context/PostContext';

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex
    items-center">
      <div className="px-10 container m-auto ">
      <PostContext>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/new' element={<PostForm/>}></Route>
        <Route path='/*' element={<NotFoundPage/>}></Route>

      </Routes>
      </PostContext>
      </div>
     
    </div>
  );
}

export default App;
