# Dockerfile

# Usamos la imagen oficial de PHP 8.2 con Apache
FROM php:8.2-apache

# Instalamos las extensiones necesarias y otras dependencias
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Habilitamos el módulo de reescritura de Apache
RUN a2enmod rewrite

# Copiamos el código de la aplicación al contenedor
COPY silverkingbrazil/ /var/www/html/

# Establecemos el directorio de trabajo
WORKDIR /var/www/html

# Establecemos los permisos adecuados
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Instalamos Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalamos las dependencias de Laravel
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Configuramos Apache para servir desde la carpeta public
COPY ./apache-default.conf /etc/apache2/sites-available/000-default.conf

# Exponemos el puerto 80
EXPOSE 80
