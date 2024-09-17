FROM python:3.12.2-slim-bullseye

WORKDIR /djangobnb/airbnb_clone/backend/djangobnb_backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /djangobnb/airbnb_clone/backend/djangobnb_backend/entrypoint.sh
RUN chmod +x /djangobnb/airbnb_clone/backend/djangobnb_backend/entrypoint.sh

COPY . .

ENTRYPOINT [ "/djangobnb/airbnb_clone/backend/djangobnb_backend/entrypoint.sh" ]