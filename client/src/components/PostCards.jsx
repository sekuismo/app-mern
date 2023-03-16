import toast from "react-hot-toast";
function PostCards({ post }) {
  const handleDelete = () => {
    toast((t) => (
      <div>
        <p className="text-white">Quieres eliminar este post?</p>
        <div>
          <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm
           text-white rounded-sm mx-2">Eliminar</button>
          <button
            className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    ),{
        style:{
            background:'#202020'
        }
    });
  };

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default PostCards;
