<!-- subir o docker --> docker compose up -d  

<!-- subir o app --> docker exec -it app sh

<!-- atualizar o docker --> docker compose up -d --build



<!-- criando o banco --> npx sequelize db:create

<!-- creando os atributos da tabela --> npx sequelize model:create --name course --underscored --attributes name:string,description:string,creation_date:date,active:boolean

<!-- enviar dados pro banco --> npx sequelize db:migrate

<!-- popular tabela --> npx sequelize db:seed:all
