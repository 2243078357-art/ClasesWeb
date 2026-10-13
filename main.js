const obras ={
    obras : {
        obra1 :{
            numero: 1,
            titulo: 'Identidad sin rostro',
            imagen: 'obras/manos.jpg',
            descripcion: 'Esta serie fotográfica aborda la identidad y el paso del tiempo a través de un unico elemento visual: las manos. El proyecto se fundamenta en la premisa de que las extremidades son capaces de revelar estados ocultos de las personas con la misma precisión que un retrato facial. A través de diferentes capturas, la obra demuestra cómo el lenguaje de las manos posee la carga narrativa suficiente para presentar la condición humana en ausencia de la mirada del sujeto.',
        },

        obra2 :{
            numero: 2,
            titulo: 'El corazón de la calle',
            imagen: 'obras/mercado.PNG',
            descripcion: 'Esta serie fotográfica propone una mirada a la escencia mexicana presente en estos espacios llamados "tianguis", donde la alegría, el intercambio y la convivencia se manifiestan como expresiones vividas de una cultura compartida.',

        },

        obra3 :{
            numero: 3,
            titulo: 'Fachadas',
            imagen: 'obras/puerta.PNG',
            descripcion: 'Esta serie fotográfica explora la estética del abandono y el olvido a través del retrato de fachadas urbanas comunes. Aunque igmnoradas por la rutina, estas estructuras poseen una singularidad visual única que funcionan como un registro del tiempo. L a serie no pretende descifrar las vivencias que albergaron estos espacios, sino honrrar la belleza superficial de su decadencia física.',

        },

    },

    statement : 'Me interesa la fotografía como medio de expresión y comunicación. A través de mis proyectos fotográficos busco explorar la relación entre la imagen y la narrativa visual para transmitir emociones, contar hiostorias y capturar momentos significativos.'
}

let about = document.createElement('p')   //crear una variable about para alojar la creación de un nuevo elemento de párrafo
about.innerHTML = obras.statement
document.getElementsByClassName('about')[0].appendChild(about)

// console.log(obras.obras.obra1)
// console.log(obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
// console.log(obras.obras[listadoObras[0]])
// let contenedorObras = document.getElementsByClassName('obras')[0]

const contenedorObras = document.getElementsByClassName('obras')[0];

for (let i = 0; i < listadoObras.length; i++) {
    let obraId = i + 1
    let diccionarioObraEnTurno = obras.obras[listadoObras[i]]

    let obraEnTurno = document.createElement('div')
    obraEnTurno.setAttribute('class', 'obra');
    obraEnTurno.setAttribute('id', 'obra' + obraId)

    let descripcionObra = document.createElement('div')
    descripcionObra.setAttribute('class', 'descripcion-obra')

    let encabezado = document.createElement('div')
    encabezado.setAttribute('class', 'encabezado-obra')
    encabezado.innerHTML = `<p class=numero-obras>0${obraId}</p><h2>${diccionarioObraEnTurno.titulo}</h2>`

    encabezado.innerHTML = `<p class=numero-obra>0${obraId}</p><h2>${diccionarioObraEnTurno.titulo}</h2>`
    
    let obraContenido = document.createElement('div')
    obraContenido.setAttribute('class', 'obra-contenido')
    obraContenido.innerHTML = `<img src="${diccionarioObraEnTurno.imagen}"><p>${diccionarioObraEnTurno.descripcion}</p>`

    descripcionObra.appendChild(encabezado)
    descripcionObra.appendChild(obraContenido)
    obraEnTurno.appendChild(descripcionObra)
    contenedorObras.appendChild(obraEnTurno);

    console.log(obraEnTurno)
}

 