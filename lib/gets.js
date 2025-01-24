// lib/gets.js
import axios from 'axios';

/**
 * Función para obtener el contenido de una URL como un buffer.
 * @param {string} url La URL de la que se desea obtener el contenido.
 * @returns {Promise<Buffer>} El buffer de los datos obtenidos.
 */
export const fetchBuffer = async (url) => {
    try {
        // Realizamos una solicitud GET a la URL con tipo de respuesta 'arraybuffer' para obtener los datos binarios.
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        return response.data;  // Retornamos los datos como un buffer.
    } catch (error) {
        // En caso de error, lanzamos una excepción con el mensaje del error.
        throw new Error('Error al obtener el buffer: ' + error.message);
    }
};