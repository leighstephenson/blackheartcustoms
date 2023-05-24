
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "kit" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (200) NOT NULL,
    "description" VARCHAR (5000) NOT NULL,
    "backstory" VARCHAR (5000),
    "user_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL
);

CREATE TABLE "photos" (
    "id" SERIAL PRIMARY KEY,
    "kit_id" INTEGER NOT NULL,
    "url" VARCHAR (5000) NOT NULL,
    "order" INTEGER DEFAULT 1
);

-- todo starting out storing the images locally. 
-- todo will be trying to use AWS s3 buckets later 
-- todo need to work in this new "photos" table 😬

INSERT INTO "kit" ("name", "description", "backstory", "url", "user_id", "order") 
VALUES 
('Cyclops', 'description here for cyclops',
 'From the 1958 film, The 7th Voyage of Sinbad. The Cyclops was a giant, one-eyed,
  man-eating monster with hooves and furry legs, a sharp horn on his head, pointed ears 
  and fangs. He attacked Sinbad and his men when they stole a magic lamp which contained a Genie. 
  In return for freeing the genie from the magic lamp and the Cyclops, the genie used magic to help 
  Sinbad and his crew escape. 

 The movie was based on one of the stories from One Thousand and One Arabian Nights', 
 'images/cyclops.png', 1, 1 ),

('Curse of the Werewolf', 'description here for cotw', 'backstory here for cotw', 'images/cotw.png', 1, 2 ),

('Frankenstein', 'description here for frank', 'backstory here for frank', 'images/frank.png', 1, 3 ),

('Bride of Frankenstein', 'description here for bride', 'backstory here for bride', 'images/bride.png', 1, 4 ),

('Wolfman', 'description here for wolfman', 'backstory here for wolfman', 'images/wolfman.png', 1, 5 ),

('The Thing', 'description here for thing', 'backstory here for thing', 'images/thing.png', 1, 6);

