import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

const initForm = {
  email: "",
  username: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);
  const { auth, signup } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    await signup(form);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title titulo="Registro" />
      <section className='row'>
        <article className='col'>
        <p className="text-center">{auth.id}</p>
        </article>
      </section>
      <main className='row'>
        <article className='col'>
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                name="username"
                value={form.username}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={form.email}
                onChange={cambio}
              />
              <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie más.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={cambio}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Registrarse
              {/* {auth.loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Registrarse"
                )} */}
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default RegisterPage;