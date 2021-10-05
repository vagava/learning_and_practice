def kwargs(**kwargs):
    print(type(kwargs))
    if kwargs is not None:
        for key, value in kwargs.items():
            print("key {},\tvalue {}".format(key, value))

def args(*args):
    print(type(args))
    for arg in args:
        print("{}".format(arg))




kw = {'2':"que", '3' : "mas", 'lista' : [1,2,3]}
kwargs(**kw)
print("------------\n")

args('un argumento', 'otro argumento', 'un argumento mas')
