````
    cp .env.example .env && 
    php artisasn key:generate &&
    cd laradock &&
    cp env-example .env &&
    docker-compose up -d nginx mysql workspace php-fpm
````
    http://localhost

в папке laradock
````
    docker-compose start nginx mysql workspace php-fpm
    docker-compose stop
````
приконнектиться
````
docker-compose exec workspace bash
````
