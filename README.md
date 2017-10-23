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

# 3. serve

```
$ npm start
```

# 4. APIs

| API                      | Method | URL
|:-------------------------|:-------|:----------------------
| Find All                 | GET    | /todos
| Find One by todoid       | GET    | /todos/todoid/:todoid
| Create new todo document | POST   | /todos
| Update by todoid         | PUT    | /todos/todoid/:todoid
| Delete All               | DELETE | /todos
| Delete by todoid         | DELETE | /todos/todoid/:todoid
