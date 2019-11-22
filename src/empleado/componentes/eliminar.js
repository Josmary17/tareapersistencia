import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Eliminar = (props) => {
    const {
        nombre,
        eventoEliminar
    } = props;

    return(
        <view>
            <Text>
                nombre: {nombre}
            </Text>
            <Button title = 'Eliminar' onPress= {eventoEliminar}
            ></Button>
        </view>
    )
}
export default Eliminar;
