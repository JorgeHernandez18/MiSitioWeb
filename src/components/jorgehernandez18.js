import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`{

        jorgeHernandez18Json {
            data {
              courses {
                title
                progress
                url
              }
            }
          }

    }`);


    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis cursos online en codigofacilito</h2>
                    <div className="flex mt-8">
                        {
                            data.jorgeHernandez18Json.data.courses.map(courses => (
                                <div className="shadow p-8 bg-white mr-4">
                                    <h4 className="font-bold">
                                        <a className href={courses.url} target="_blank" rel="noopener noreferrer">{courses.title}</a>
                                    </h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 rounded border-purple-700 border-b-4">Progreso: {parseInt(courses.progress)}%</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <h2 className="text-3xl font-bold text-center">Mis Certificados online en codigofacilito</h2>
                    <p className="text-center font-bold text-red-700">Aún no tengo Certificados, pero pronto los tendré :D</p>


                </div>


            </div>
        </section>
    );
}