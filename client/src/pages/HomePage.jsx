import { usePosts } from "../context/PostContext";
import { VscEmptyWindow, vscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PostCards from "../components/PostCards";

function HomePage() {
  const { getPosts, posts } = usePosts();

  //aquí se importa el useState de postContext
  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">No hay publicaciones aún </h1>
      </div>
    );
  }
  return (
    <div className="text-white">
      <header className="flex justify-between py-4 ">
        <h1 className="text-2xl text-gray-300 font-bold">Posts({posts.length})</h1>
      </header>
      <Link to="/new">Crear nueva publicación</Link>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCards post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
