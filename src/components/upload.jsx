import React, { Component } from 'react';

export default class upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    

    // Valores de archivo antes de upload
    result = () =>{
        const file = document.getElementById('input_imagen');
        const img = document.getElementById('imagen_view') ;
        const icon = document.getElementById('clouse') ;

        file.addEventListener("change" , () =>{  
        const archivo = file.files[0];
        const ruta = URL.createObjectURL(archivo);
        img.src = ruta;
        img.style.display = "block";
        icon.style.display = "none";
        document.getElementById('img_name').innerHTML= archivo.name;
    });
    };
     prevEvent = (e) => {
        e.preventDefault()
      }; 
    // Activador de estado 
    activeUpload = () => {
        this.setState({show: !this.state.show})
    };
    render() {
      
        return (
            <div id="btn-min">    
        
              <form onSubmit={this.prevEvent} className="card text-center" id="Form-upload" method="post" enctype="multipart/form-data">
            
                <div className="card-header"> 
                    <button id="btn-minus" onClick={this.props.function}>
                        <span className="bi bi-backspace-fill"/>
                    </button> 
                </div>

            <div className="card-img-top" id="section-img">
                <label for="input_imagen" id="img_preview">
                    <img id="imagen_view" src="" alt="" />
                 <h1 id="img_name">Undefine</h1>
                </label>
            <input className="form-control" type="file" onClick={this.result} placeholder="Ninguna Imagen"  name="input_imagen" id="input_imagen"/>
            {/* <label id="btn-img"  for="input_imagen">Imagen</label> */}
            </div>
            <div classname="card-body">
                <input className="form-control" type="text" placeholder="Marca De Producto:" name="input_marca" id="input-marca" />
                <input className="form-control" type="number" placeholder="Valor:" name="input_precio" id="input-precio" />
               
                <button type="submit" id="btn-fin">
                     <span className="bi bi-cloud-check"/>
                 </button>
            </div>
        </form>
            </div>
        )
        }
}
