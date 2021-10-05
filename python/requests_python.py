#/usr/bin/python3
'''Use module requests '''

import requests

# get a webpage
# r is a response objects which contains a server's response
# All information that we need is in the onject 'r'
r = requests.get('https://api.github.com/events')

# HTTP POST request:
r = requests.post('https://httpbin.org/post', data = {'key':'value'})

#other http request:

r = requests.put('https://httpbin.org/put', data = {'key':'value'})
r = requests.delete('https://httpbin.org/delete')
r = requests.head('https://httpbin.org/get')
r = requests.options('https://httpbin.org/get')


# Passing Parameters In URLs `httpbin.org/get?key=val`
# Requests allows you to provide these arguments as a dictionary of strings, using the 'params' keyword argument.
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get('https://httpbin.org/get', params=payload)
# >>> https://httpbin.org/get?key2=value2&key1=value1

# You can also pass a list of items as a value:
payload = {'key1': 'value1', 'key2': ['value2', 'value3']}
r = requests.get('https://httpbin.org/get', params=payload)
print(r.url)
# >>> https://httpbin.org/get?key1=value1&key2=value2&key2=value3
