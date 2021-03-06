<div align="center">
<img src="https://user-images.githubusercontent.com/56804642/97494386-ff804900-1944-11eb-83be-480431ca0037.png" alt="Project RestAPI" width="300" height="250">

<br />
<h2>Authentication System</h2>

<p><strong>Challenge proposed to create an API REST, user authentication</strong></p>
</div>

---

### Index :bookmark_tabs:

1. [About project](#about)
   - [Demo project](#demo-project)
   - [Technologies used in the project](#technologies-used)
2. [How to use](#how-to-use)
   - [Requirements](#requirements)
   - [How to install](#how-to-install)

---

## About

Challenge proposed to create an API REST, user authentication

---

## Demo Project

![buscar](https://user-images.githubusercontent.com/56804642/97611774-62311d80-19f5-11eb-96ef-e2eb0cd7166c.jpg)
![update](https://user-images.githubusercontent.com/56804642/97611783-63624a80-19f5-11eb-9953-bda266b1ee67.jpg)
![create](https://user-images.githubusercontent.com/56804642/97611785-63fae100-19f5-11eb-8c80-5996b4f21a21.jpg)
![login](https://user-images.githubusercontent.com/56804642/97611787-64937780-19f5-11eb-93c2-1ca943057367.jpg)

## Technology used

- **Frontend:** ---- ----

- **Backend:**

  - [Node.js](https://nodejs.org/en/)
  - Frameworks:
    - [Express.js](https://expressjs.com/)
  - Libraries, Packages and Package Managed:
    - [Yarn](https://yarnpkg.com/)
    - [Nodemon](https://nodemon.io/)
    - [Body-parser](https://www.npmjs.com/package/body-parser)
    - [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
    - [JWT](https://jwt.io/)
    - [Jest](https://jestjs.io/)
    - [Supertest](https://www.npmjs.com/package/supertest)
    - [Mongoose](https://mongoosejs.com/)

- **Database:**
  - [MongoDB](https://www.mongodb.com/)
  - [Docker](https://www.docker.com/)

---

## How to use

### Requirements

> Have [Node.js](https://nodejs.org/en/) installed on the machine.

### How to install

> 1. Download or clone the RestAPI repository

```
    git clone https://github.com/Henrique1818/Authentication-System.git
```

> 2. Open the project in your preferred editor

> 3. In your terminal, install the necessary packages:

```
    yarn
```

or

```
    npm install
```

> 4. Installing the MongoDB using Docker
>    **check if the docker is already installed on the machine**

```
    docker run --name database -p 27017:27017 -d mongo
    docker run start database
    create a database name => RestAPI
```

> 5. Great! Now you can go to the Authentication-System folder and start the server:

```
    cd Authentication-System

    yarn start
```

or

```
    npm start
```

> 6. Open your browser! The RestAPI will be available at http://localhost:3000/singin

### EndPoints

> POST - Sing Up User: http://localhost:3000/admin/singup

```
    {
        "nome": "henrique",
        "email": "henrique@teste.com",
        "senha": "123456",
        "telefones": [
            {
                "numero": 912345678,
                "DDD": 11
            },
            {
                "numero": 20202020,
                "DDD": 14
            }
        ]
    }
```

> GET - Sing In: http://localhost:3000/admin/singin

```
    {
        "email": "henrique@teste.com",
        "senha": "123456"
    }
```

> GET - Search for User: http://localhost:3000/admin/:id

```
    {
        "nome": "Luiz henrique",
        "email": "henrique@teste.com",
        "senha": "1234",
        "telefones": [
            {
                "numero": 912345611,
                "DDD": 14
            }
        ]
    }

```

> PUT - Updating User: http://localhost:3000/admin/update

```
    {
        "nome": "Luiz henrique",
        "email": "henrique@teste.com",
        "senha": "1234",
        "telefones": [
            {
                "numero": 912345611,
                "DDD": 14
            }
        ]
    }

```

> DELETE - Removing User: http://localhost:3000/admin/:id

```
    {
    "message": "Deleted user"
    }
```

---

<div align="center">
<h3>Author</h3>
<p>
<a href="https://www.linkedin.com/in/luiz-henrique-23915916a/" target="_blank">Henrique :space_invader:</a>
</p>

<p align="center">
    <span>
        <a href="https://github.com/Henrique1818" target="_blank">Github</a>
    </span>
    |
    <span>
        <a href="https://www.instagram.com/henrique18_89/" target="_blank">Instagram</a>
    </span>
    :heart:
</p>
</div>
