#!/usr/bin/python
import MySQLdb

# open database connection
credential = MySQLdb.connect("localhost", "root", "root", "withoutORM")

# print(credential.__dir__())

# prepare a cursor object using cursor() method
cursor = credential.cursor()
# print(cursor.__dir__())

# execute SQL query using execute() method.
cursor.execute("SELECT VERSION()")

# Fetch a single row using fetchone() method.
data = cursor.fetchone()
print ("Database version : {} ".format(data))

# Drop table if it already exist using execute() method.
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

# Create table as per requirement
sql = """CREATE TABLE EMPLOYEE (
         FIRST_NAME  CHAR(20) NOT NULL,
         LAST_NAME  CHAR(20),
         AGE INT,
         SEX CHAR(1),
         INCOME FLOAT )"""

# excecute the querys
cursor.execute(sql)

cursor.execute("DESCRIBE EMPLOYEE;")

#.fetchone() : This method retrieves the next row of a query result set and
# returns a single sequence, or None if no more rows are available.

print("\nUsing a while loop\n")
row = cursor.fetchone()
while row is not None:
	print(row)
	row = cursor.fetchone()

print("\nUsing the cursor as iterator\n")
for row in cursor:
	print(row)

# disconeccted from server
credential.close()
