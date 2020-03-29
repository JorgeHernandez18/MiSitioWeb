import React from "react";


export default () => (
    <form className="mt-16 text-center">
        <label htmlFor="contact-content" className="block text-gray-700 font-bold mb-2">¿Tienes algun proyecto en mente?, quizá yo te pueda ayudar: </label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea
                id="contact-content"
                name="contact-content"
                className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline">
            </textarea>
            <button className="btn ml-4">Enviar</button>
        </div>
    </form>
);