FROM alpine:3.11.0

WORKDIR /srv

COPY . .

RUN apk add --upgrade python3 python3-dev gcc musl-dev && \
    pip3 install --no-cache --upgrade pip setuptools wheel -r requirements.txt

ENTRYPOINT ["python3", "manage.py"]

CMD ["runserver"]