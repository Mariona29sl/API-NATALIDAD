window.addEventListener('load', () => {

    //PRESIÓN 
    fetch('https://datos.comunidad.madrid/catalogo/dataset/f64bb1dd-ab6e-46dc-a540-b61b801e3ca3/resource/6c29b6c8-31b4-432f-9418-526bd94c39b8/download/cm.json')
        .then(res => res.json())
        .then(res => {
            let natalidad = document.getElementById("info");

            let item = `<li><span>Lugar:${res.data[2].municipio_nombre}Pa</span></li>`;
            natalidad.innerHTML += item;



            let provincia = document.getElementById("provincia");

            let item2 = `<li><span>localidad:${res.data[2].provincia_nacimiento_de_la_madre}</span></li>`;
            provincia.innerHTML += item2;


            let sexo = document.getElementById("sexo");

            let item3 = `<li><span>sexo:${res.data[2].sexo}</span></li>`;
            sexo.innerHTML += item3;


            let numero = document.getElementById("numero");

            let item4 = `<li><span>codigo de nacimiento:${res.data[2].municipio_codigo}</span></li>`;
            numero.innerHTML += item4;
        

        });

   





});






