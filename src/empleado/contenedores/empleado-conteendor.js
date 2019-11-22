import React, {Component} from 'react';
import {
    AsyncStorage,
} from 'react-native';
import Listado from './../componentes/listado';
import Guardar from './../componentes/guardar';
import Eliminar from './../componentes/eliminar';

class EmpleadoContenedor extends Component {
    render() {

        const {pantalla, empleado, nombreEmpleado,} = this.state

        switch (pantalla){
            case 'listado':
                return (
                    <Listado
                    data={empleado}
                    eventoPantallaGuardar={this.eventoPantallaGuardar}
                    eventoPantallaEliminar={this.eventoPantallaEliminar}
                    />
                )
            case 'guardar':
            return(
                <Guardar
                nombre={nombreEmpleado}
                eventoNombre={this.eventoNombre}
                eventoGuardar={this.eventoGuardar}
                />
                )
            case 'eliminar':
                const {nombreEmpleadoEliminar} = this.state
                return(
                    <Eliminar
                    nombre={nombreEmpleadoEliminar}
                    eventoEliminar={this.eventoBorrar}
                    />
                )    

        }

    }

    async componentDidMount(){
        const datos = await this.obtenerEmpleado();
        if (datos !== null) {
            const empleado = JSON.parse(datos);
            this.setState({
                empleado: empleado,
            });
        }
    }

constructor(props) {
    super(props)

    this.state = {
        pantalla: 'listado',
        empleado: [],
        nombreEmpleado: '',
        empleadoSeleccionadoId: '',
    };
}

eventoPantallaGuardar = () => {
    this.setState({
        pantalla: 'guardar',
    });
}

eventoPantallaEliminar = (empleadoId) => {
    const {empleado} = this.setState;
    const indiceEliminar = empleado.findIndex(item.key === empleadoId);
    this.setState({

        pantalla: 'eliminar',
        empleadoSeleccionadoId: empleadoId,
        nombreEmpleadoEliminar: empleado[indiceEliminar].nombreEmpleado,
    });
}

obtenerEmpleado = async () => {
    const datos = await AsyncStorage.getItem('DATOS');
    return datos;
}

modificarEmpleado = async (empleado) => {
    const datosConvertidos = JSON.stringify(empleado);
    await AsyncStorage.setItem('DATOS', datosConvertidos);

}

eventoNombre = (textNombre) => {
    this.setState({
        nombreEmpleado: textNombre,
    })   
}

eventoGuardar = async () => {
    const {nombreEmpleado, empleado} = this.setState
    empleado.push({
        key: (empleado.length + 1).toString(),
        nombreEmpleado: nombreEmpleado,
    })
    await this.modificarEmpleado(empleado);
    this.setState({
        nombreEmpleado: '',
        empleado: empleado,
        pantalla: 'listado',
    });
}

eventoBorrar = async () => {
    const {empleadoSeleccionadoId, empleado,} = this.state;
    const indiceEliminar = empleado.findIndex(item => item.key === empleadoSeleccionadoId);
    if(indiceEliminar > -1){
    empleado.splice(indiceEliminar, 1);
    }

    await this.modificarEmpleado(empleado);
    this.setState({
        empleado: empleado,
        pantalla: 'listado',
    });
}
}
export default EmpleadoContenedor;