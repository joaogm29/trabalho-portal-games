fetch(`https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7`).then(resposta => {
    return resposta.json()
}).then(response => {
    let data = response.results;
    
    data.map(element => { 
        
        const root = document.getElementById('root');
        const urlParams = new URLSearchParams(window.location.search);
        const id        = urlParams.get('id')
        const div       = document.createElement("div");
        const img       = document.createElement("img");
        const div_2     = document.createElement("div");
        const ul        = document.createElement("ul");
        const p         = document.createElement("p");
        const ul_1      = document.createElement("ul");
        const ul_2      = document.createElement("ul");
        const p_1       = document.createElement("p");
        const p_2       = document.createElement("p");
        const p_3       = document.createElement("p");
        const platforms = [];
        const genres    = [];
        const stores    = [];

        if(element.id == id) {
            div.setAttribute('class', 'card');
            div.setAttribute('style', '18rem');
            img.setAttribute('src', element.background_image);
            img.setAttribute('class', 'card-img-top');
            div_2.setAttribute('class', 'card-body');

            element.platforms.map(elem => {
                platforms.push(elem.platform.name);

                p.innerHTML = 'Plataformas: ';
                ul.appendChild(p);
            });

            for (let i = 0; i < platforms.length; i++) {
                var li         = document.createElement("li");
                
                li.textContent = platforms[i];

                ul.appendChild(li);
            }

            element.genres.map(elem => {
                genres.push(elem.name);

                p_1.innerHTML = 'Gêneros: ';
                ul_1.appendChild(p_1);
            });

            for (let i = 0; i < genres.length; i++) {
                var li1         = document.createElement("li");
                
                li1.textContent = `${genres[i]}`;

                ul_1.appendChild(li1);
            }

            element.stores.map(stored => {
                stores.push(stored.store.name);

                p_3.innerHTML = 'Lojas: ';
                ul_2.appendChild(p_3);
            });

            for (let i = 0; i < stores.length; i++) {
                var li2         = document.createElement("li");
                
                li2.textContent = `${stores[i]}`;

                ul_2.appendChild(li2);
            }

            p_2.style.textAlign = 'center';
            p_2.innerHTML = `Data da Atualização: ${element.updated}`;

            root.setAttribute('class', 'row');

            div.appendChild(img);
            div.appendChild(div_2);
            div_2.appendChild(ul);
            div_2.appendChild(ul_1);
            div_2.appendChild(ul_2);
            div_2.appendChild(p_2);
            root.appendChild(div);
        }
    });
});
