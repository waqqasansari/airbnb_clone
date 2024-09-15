FROM python:3.13.0a4-slim

WORKDIR D:/djangobnb/airbnb_clone/backend/djangobnb_backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .