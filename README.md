# 1. clone

```
$ cd ~/Desktop
$ git clone https://github.com/ungmo2/mongoose-exam.git db-server
```

# 2. install

```
$ cd db-server
$ npm install
```

# 3. Create Database

[mLab Hosting service](http://poiemaweb.com/mongdb-basics#43-mlab-hosting-service)

# 4. Create .env file

```
PORT=<server-port>
MONGO_URI=mongodb://<username>:<password>@<host>:<port>/<dbname>
```

# 5. serve

```
$ npm start
```

# 6. APIs

| APIs                     | Method | URL
|:-------------------------|:-------|:----------------------
| Find All                 | GET    | /todos
| Find One by todo id      | GET    | /todos/id/:id
| Create new todo document | POST   | /todos
| Update by todo id        | PUT    | /todos/id/:id
| Delete All               | DELETE | /todos
| Delete by todo id        | DELETE | /todos/id/:id
