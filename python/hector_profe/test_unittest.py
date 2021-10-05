'''
Unit test es un es parte de una serie de frameworks que se conoces como xUnix.

se direfencia de doctest, por que ofrece la posibilidad de crear pruebas en el codigo
implementando la clase **unittest.TestCase**.
En esta clase se incluira una serie de pruebas para el codigo.
esta pruebas puden devulver tres respuestas posibles:

    - OK : indica que la prueba fue exitosa
    - FAIL: indica que la prueba fallo y lanza un **AsertionError**
    - ERROR: indica que la prueba fallo y que el error es distinto al que teniamos previsto.

pasos:
1) el documentoq ue contiene las pruebas debe iniciar con "test_"
2) creaar una clase que herede unittest.TestCase
3) los metodos creados en esta clase deben iniciar conl a palabra "test"
'''

import unittest
import operations


class Pruebas(unittest.TestCase):
    '''
    heredamos unittest.TestCase para crear
    una serie de pruebas
    '''
    def test_add(self):
        self.assertEqual(operations.add(1, 2), 3)
        self.assertEqual(operations.add(3, 2), 5)

#if __name__ == '__main__':
#    unittest.main()
