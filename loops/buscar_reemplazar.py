#!/usr/bin/python3

def search_replace(my_list, search, replace):
	for i in my_list:
		if search == i:
			my_list.insert(search, replace)
	return my_list



