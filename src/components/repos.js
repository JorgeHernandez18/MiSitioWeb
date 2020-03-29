import React, {  useEffect, useState } from "react";
/*  import repos from '../data/repos';  */
import Repo from './repo';

export default () => {
    const [repos, SetRepos] = useState([]);
    const [reposCount, SetReposCount] = useState([]);

    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos;

        if (data) {
            myRepos = JSON.parse(data);

            SetReposCount(myRepos.length);

            /* myRepos = myRepos.slice(1, 13); */
            return SetRepos(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/JorgeHernandez18/repos");
            myRepos = await response.json();
            SetReposCount(myRepos.length);

            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            /* myRepos = myRepos.slice(1, 13); */
            SetRepos(myRepos);
        }

        fetchRepos();

    }, []);


    return (

        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en OpenSource</h2>
                <p>Codigos desarrollados en la UFPS y de práctica</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/JorgeHernandez18" className="btn" target="_blanck" rel="noopener noreferrer" >
                    Ver más en GitHub ({reposCount})
               </a>
            </div>

        </div>

    );

};
