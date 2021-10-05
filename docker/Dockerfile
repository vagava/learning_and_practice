FROM ubuntu:18.04
MAINTAINER Vanessa Garcia "vagava123@gmail.com"
ENV MYSQL_ROOT_PASSWORD root
RUN apt-get update -y
RUN apt-get install -y python3-lxml
RUN apt-get install -y python3-pip
RUN apt-get install -y python3.6
RUN apt install -y mysql-server
RUN apt-get install -y libmysqlclient-dev
RUN apt-get install -y emacs
ADD requirements.txt .
RUN pip3 install -r requirements.txt
