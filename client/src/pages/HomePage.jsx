import { usePosts } from "../context/PostContext";
import {VscEmptyWindow, vscEmptyWindow} from 'react-icons/vsc'
function HomePage() {
  const { getPosts, posts } = usePosts();

  //aquí se importa el useState de postContext
  if (posts.length === 0){
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white"/>
        <h1 className="text-white text-2xl">No hay publicaciones aún </h1>
      </div>
    )

  }
  return (
    <div className="text-white">
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}

export default HomePage;
