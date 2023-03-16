import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
function PostForm() {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("título requerido!"),
          description: Yup.string().required("descripción requerida!"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              placeholder="titulo"
              className="px-3 py-2 focus-outline-none rounded bg-gray-600 text-white w-full"
            ></Field>
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="title"
            />
            <Field
              name="description"
              placeholder="descripción"
              className="px-3 py-2 focus-outline-none rounded bg-gray-600 text-white w-full"
            ></Field>
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="description"
            />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostForm;
