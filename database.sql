CREATE DATABASE "portfolio";

CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048),
    "website_url" varchar(2048),
    "github_url" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);


INSERT INTO "tags" ("name")
VALUES ('React'), ('jQuery'), ('Node.js'), ('postgreSQL'), ('Redux'), ('HTML'), ('CSS'), ('Ruby on Rails'), ('D3.js'), ('OAUTH');

INSERT INTO "projects" ("name", "description", "thumbnail", "website_url", "github_url", "date_completed", "tag_id")
VALUES ("Tweets from Tiny Hands", "Interactive data viz app of Donald Trump's tweets since declaring his candidacy for P.O.T.U.S. Users are able to filter through @realDonaldTrump's tweets by sentiment, device, time of day, day of week, or a range of dates.", "http://ryden-rails.herokuapp.com/assets/tiny-hands-5030420bc3507658492976513cd2ad7a035aa89f7ab816f1ed2010fd292e6486.png", "https://tweetsfromtinyhands.herokuapp.com", "https://github.com/rydena021/tweetsfromtinyhands", 2017-04-01, 10);
