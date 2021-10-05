#!/usr/bin/python
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

# imprimirla version
print(sqlalchemy.__version__)

# to connect the BD
engine = create_engine('mysql://root:root@localhost/Orm', port=3360)
print(engine)

#
