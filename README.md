# Anime Tracker

![Anime Tracker](image/Screenshot%202026-01-27%20191118.png)


I am building a small backend-powered Anime Tracker where:

- Users exist (simple, no auth)

- Anime titles are tracked

- Each anime has reviews 

## Users can:

- View anime

- Add a new anime

- Update anime info

- Delete anime

- Leave reviews for anime

- View everything on a rendered page

- Add data through a form

| Method | Route                | Description   |
| ------ | -------------------- | ------------- |
| GET    | `/anime`             | Get all anime |
| GET    | `/anime/:id`         | Get one anime |
| POST   | `/anime`             | Add anime     |
| PUT    | `/anime/:id`         | Update anime  |
| DELETE | `/anime/:id`         | Delete anime  |
| POST   | `/anime/:id/reviews` | Add review    |

## My Struggles

- This was so hard for me because am use to doing my HTML and CSS then do some JS and this was reverse. 
- I had a hard time using postman because it was not showing it was working but, my localHost:3000 would show me if it wasn't working so that's how I was checking some of the time.