/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Empleado from './src/empleado/contenedores/empleado-conteendor';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Empleado);
