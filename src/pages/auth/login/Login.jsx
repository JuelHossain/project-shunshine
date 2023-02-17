/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import auth from "../../../firebase";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const setInput = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && !error) {
      setForm({ email: "", password: "" });
      navigate("/");
    }
  },[error,user,setForm,navigate]);

  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-col max-w-md p-6 relative rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
        </div>
        {loading && <Loading />}

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const { email, password } = form;
            await signInWithEmailAndPassword(email, password);
          }}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                value={form.email}
                onChange={setInput}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="/password-reset"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                required
                value={form.password}
                onChange={setInput}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <p className="text-red-500">{error?.message}</p>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Don't have an account yet?
              <Link rel="noopener noreferrer" to="/register" className="hover:underline dark:text-violet-400">
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
