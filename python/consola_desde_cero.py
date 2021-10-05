import cmd

class ConsolaPy(cmd.Cmd):
	intro = "Soy una Shell de prueba By Vanessa."
	prompt = '(Buenas!)'

	def do_salir(self, args):
		'''Comando de salida'''
		print("adios!")
		return(True)

	def do_saludo(self, args):
		''' holi '''
		print ('holiii!')

if __name__ == '__main__':
	consola = ConsolaPy()
	consola.cmdloop()
