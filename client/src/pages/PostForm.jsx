import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/PostContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });
  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
      }
    })();
  }, [params.id]);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header
          className="flex justify-between items-center py-4 text-white
         "
        >
          <h3 className="text-xl">Nuevo Post 😀</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Volver inicio
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("título requerido!"),
            description: Yup.string().required("descripción requerida!"),
          })}
          onSubmit={async (values, actions) => {
            console.log(values)
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false)
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit, setFieldValue,isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Título
              </label>
              <Field
                name="title"
                placeholder="titulo"
                className="px-3 py-2 focus-outline-none rounded bg-gray-600 text-white w-full mb-4"
              ></Field>
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="title"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Descripción
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="descripción"
                className="px-3 py-2 focus-outline-none rounded bg-gray-600 text-white w-full mb-4"
                rows={3}
              ></Field>
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="description"
              />
              <label
                htmlFor="image"
                className="text-sm block font-bold text-gray-400"
              >
                imagen
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full
              "
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500
            px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
              disabled={isSubmitting}
              > 
              {isSubmitting ? (
                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
              ) : 'Guardar' }
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PostForm;
