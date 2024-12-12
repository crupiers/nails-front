import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { API_URL } from "../App.config";

export default function ServicioDetalle() {
let navegacion = useNavigate();
const {id} = useParams();
const [items, setItems] = useState(null);

async function getItems() {
    const {data} = await axios({
    method: "GET",
    url: `${API_URL}/servicio/detalle/${id}`,
    });
    setItems(data);
}

useEffect(()=>{
    getItems();
},[]);

return (

  <div>
    <h1>ITEMS DEL SERVICIO</h1>
    <hr />
    <table>
      <thead>
        <tr>
          <th>TIPO SERVICIO</th>
          <th>PRECIO</th>
          <th>OBSERVACION</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item,i)=>{
          return <tr key={i}>
            <td>{item?.tipoServicio}</td>
            <td>{item?.precio}</td>
            <td>{item?.observacion}</td>
            </tr>
        })}
      </tbody>
    </table>

    <div className="col-4">
              <Link to={`/ServicioList`} className="btn btn-info btn-sm">
                Regresar
              </Link>
            </div>

            <div className="col-4">
              <Link to={`/verificarPassword/${id}`} className="btn btn-info btn-sm">
                Editar
              </Link>
            </div>

    </div>
);

}