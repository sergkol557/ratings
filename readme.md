````
    cp .env.example .env && 
    php artisasn key:generate &&
    cd laradock &&
    cp env-example .env &&
    docker-compose up -d nginx mysql workspace 
````
    http://localhost

в папке laradock
````
    docker-compose start nginx mysql workspace 
    docker-compose stop
````
