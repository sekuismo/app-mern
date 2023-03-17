import { PostForm,HomePage,NotFoundPage } from './pages';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {PostProvider} from './context/PostContext';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex
    items-center">
      <div className="px-10 container m-auto ">
      <PostProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/new' element={<PostForm/>}></Route>
        <Route path='/posts/:id' element={<PostForm/>}></Route>
        <Route path='/*' element={<NotFoundPage/>}></Route>
 
      </Routes>
      <Toaster/>
      <Footer/>
      </PostProvider>
      </div>
     
    </div>
  );
}

export default App;
