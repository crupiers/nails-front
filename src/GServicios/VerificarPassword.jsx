import { useNavigate, useParams } from "react-router-dom";
import {PASSWORD} from "../App.config";
import React from "react";
import { Link } from "react-router-dom";

export default function VerificarPassword() {
    const navegacion = useNavigate();
    const {id} = useParams();
    
async function handleOnSubmit(event) {
    event.preventDefault();
    const password = event.target.password.value;
    
    if(PASSWORD===password) {
        navegacion(`/servicio/${id}`);
    } else {
        alert("CONTRASEÑA INCORRECTA");
        //navegacion("/ServicioList");
    }
}

return (
        <div
          className={
            "vh-100 flex-column d-flex align-items-center justify-content-center gap-2"
          }
        >
          <h1>VERIFICAR CONTRASEÑA PARA EDITAR</h1>
          <form
            onSubmit={handleOnSubmit}
            style={{
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                CONTRASEÑA
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              EDITAR
            </button>
            <div className="col-4">
              <Link to={`/ServicioList`} className="btn btn-info btn-sm">
                Regresar
              </Link>
            </div>
          </form>
        </div>
      );
}