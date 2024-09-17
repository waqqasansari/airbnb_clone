#!/bin/sh

if [ "$DATABASE" = "postgres" ]
    echo "check if database is running...."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "The database is up and running :-D"
fi

python manage.py migrate

exec "$@"

