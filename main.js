const obras ={
    obras : {
        obra1 :{
            numero: 1,
            titulo: 'Identidad sin rostro',
            imagen: 'manos.jpg',
            descripcion: 'Esta serie fotográfica aborda la identidad y el paso del tiempo a través de un unico elemento visual: las manos. El proyecto se fundamenta en la premisa de que las extremidades son capaces de revelar estados ocultos de las personas con la misma precisión que un retrato facial. A través de diferentes capturas, la obra demuestra cómo el lenguaje de las manos posee la carga narrativa suficiente para presentar la condición humana en ausencia de la mirada del sujeto.',
        },

        obra2 :{
            numero: 2,
            titulo: 'El corazón de la calle',
            imagen: 'mercado.PNG',
            descripcion: 'Esta serie fotográfica propone una mirada a la escencia mexicana presente en estos espacios llamados "tianguis", donde la alegría, el intercambio y la convivencia se manifiestan como expresiones vividas de una cultura compartida.',

        },

        obra3 :{
            numero: 3,
            titulo: 'Fachadas',
            imagen: 'puerta.PNG',
            descripcion: 'Esta serie fotográfica explora la estética del abandono y el olvido a través del retrato de fachadas urbanas comunes. Aunque igmnoradas por la rutina, estas estructuras poseen una singularidad visual única que funcionan como un registro del tiempo. L a serie no pretende descifrar las vivencias que albergaron estos espacios, sino honrrar la belleza superficial de su decadencia física.',

        },

    },

    statement : 'Me interesa la fotografía como medio de expresión y comunicación. A través de mis proyectos fotográficos busco explorar la relación entre la imagen y la narrativa visual para transmitir emociones, contar hiostorias y capturar momentos significativos.'
}
let statement = obras.statement

let about = document.createElement('p')
about.innerHTML = statement
document.getElementsByClassName('about')[0].appendChild(about)

//console.log (obras.obras.obra1)
//console.log (obras['obras']['obra1'])
let listadoOras = (Object.keys(obras.obras))
//console.log(obras.obras[listadoObras[0]])

for (let i = 0; i < listadoOras.length; i++){
    console.log(obras.obras[listadoOras[i]])
}