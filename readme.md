````
    sudo -- sh -c -e "echo '127.0.0.1   ratings.test' >> /etc/hosts" && 
    cp .env.example .env && 
    sed -i "s/^APP_URL=.*/APP_URL=http:\/\/ratings.test/" .env && 
    sed -i "s/^DB_HOST=.*/DB_HOST=mariadb/" .env && \
    sed -i "s/^DB_DATABASE=.*/DB_DATABASE=default/" .env && \
    sed -i "s/^DB_USERNAME=.*/DB_USERNAME=default/" .env && \
    sed -i "s/^DB_PASSWORD=.*/DB_PASSWORD=secret/" .env && \
    sed -i "s/^REDIS_HOST=.*/REDIS_HOST=redis/" .env && \
    echo "QUEUE_HOST=beanstalkd" >> .env && \
    sed -i "s/^MSSQL_PASSWORD=.*/MSSQL_PASSWORD=secret/" .env && \
    sed -i "s/^WORKSPACE_INSTALL_NPM_GULP=.*/WORKSPACE_INSTALL_NPM_GULP=false/" .env && \
    sed -i "s/^NGINX_HOST_HTTP_PORT=.*/NGINX_HOST_HTTP_PORT=8080/" .env && \
    php artisasn key:generate &&
    cd laradock &&
    cp env-example .env &&
    docker-compose up -d nginx mariadb workspace php-fpm && \
    docker-compose exec workspace bash && \
    composer install && \
    php artisan migrate && \
    npm i && \
    npm run development && \
    exit && \
    xdg-open "http://ratings.test:8080"
````


в папке laradock
````
    docker-compose start nginx maridb workspace php-fpm
    docker-compose stop
````
приконнектиться
````
docker-compose exec workspace bash
````
