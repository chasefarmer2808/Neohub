FROM python:3.7
RUN pip install -U pip
EXPOSE 5000
ADD ./server /neohub/server
COPY ./requirements.txt /neohub
WORKDIR /neohub
RUN pip3 install -r requirements.txt
CMD python3 -u server/app.py