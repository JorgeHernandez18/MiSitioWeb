import React from "react";
import ilustration from '../img/header_img.svg';
import Form from './contact.form';

export default () => (

    <header className=" bg-blue-200 ">

        <div className=" container mx-auto p-12 max-w-4xl">

            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-gray-800 text-6xl">¡Hola!, Soy Jorge Hernández</h1>
                    <p className="text-xl font-light">Estudiante de Ingenieria de sistemas </p>
                </div>
                <img src={ilustration} alt="Hombre pasando frente a una gran pantalla de codigo" style={{ height: "300px" }}></img>
            </div>

            <div>
                <Form />
            </div>

        </div>



    </header>
)