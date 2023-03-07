# mongo
1. db.books.insertMany([{"title": "Laravel 8", "description": "Laravel 8. Быстрая разработка веб-сайтов на PHP", "authors": ["Дронов В. А."]}, {"title": "JavaScript и Node.js для веб-разработчиков", "description": "JavaScript и Node.js для веб-разработчиков", "authors":["Н. А. Прохоренок",
"В. А. Дронов"}])

2. db.books.find({title: "Laravel 8"})

3.db.books.updateOne({_id : ObjectId("какой то id")}, {$set: {description: "РНР. Полное руководство и СПРАВОЧНИК функций", authors : "Лукьянов М. Ю."}})
