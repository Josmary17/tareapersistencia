import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const Listado = (props) => {

    const {
        data,
        eventoPantallGuardar,
        eventoPantallaEliminar
    } = props

    return (

        <SafeAreaView>
        <Text>Listado de Empleados</Text>
        <Button
        title= 'agregar'
        onPress={eventoPantallGuardar}
        />
        <FlatList
        data={data}
        renderItem={
            ({item}) => <Elemento item={item}
            eventoPantallaEliminar={eventoPantallaEliminar}
          />
        }

    />

     </SafeAreaView>
    )
}

const Elemento = (props) => {

    const {
        item,
        eventoPantallaEliminar,
    } = props

    return (
        <TouchableOpacity
        onLongPress={() => eventoPantallaEliminar(item.key)}
        >
            <Text style={style.elemeto}>
                {item.nombreEmpelado}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color:'green',
        fontSize: 18,
    },
    elemento:{
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        color: 'black',
        height: 50,
        backgroundColor: 'red',
        margin: 8,
    },
})

export default Listado;

