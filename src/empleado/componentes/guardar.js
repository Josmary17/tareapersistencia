import React from 'react';

import {
    TextInput,
    View,
    Text,
    Button,
} from 'react-native';

const Guardar = (props) => {

    const {
        nombre,
        eventoNombre,
        eventoGuardar
    } = props;

    return(
        <View>
            <Text>
                Añadir un Empleado
            </Text>
            <TextInput
            onChangeText={eventoNombre}
            value={nombre}
            />
            <Button
            title='Añadir'
            onPress={eventoGuardar}
            />
        </View>
    );
}

export default Guardar;
