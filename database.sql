CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "kit" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (200),
    "description" VARCHAR (5000),
    "backstory" VARCHAR (5000),
    "user_id" INTEGER,
    "order" INTEGER
);

CREATE TABLE "photos" (
    "id" SERIAL PRIMARY KEY,
    "kit_id" INTEGER,
    "url" VARCHAR (5000) NOT NULL,
    "order" INTEGER DEFAULT 1
);


INSERT INTO "photos" ("kit_id", "url")
VALUES (1, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/cyclops.png'),
(2, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/cotw.png'),
(3, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/frank.png'),
(4, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/bride.png'),
(5, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/wolfman.png'),
(6, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/thing.png')
;

-- INSERT INTO KIT
INSERT INTO "kit" ("name", "description", "backstory", "user_id", "order") 
VALUES 
('Cyclops', 'description here for cyclops',
 'From the 1958 film, The 7th Voyage of Sinbad. The Cyclops was a giant, one-eyed,man-eating monster with hooves and furry legs, a sharp horn on his head, pointed ears and fangs. He attacked Sinbad and his men when they stole a magic lamp which contained a Genie. In return for freeing the genie from the magic lamp and the Cyclops, the genie used magic to help Sinbad and his crew escape. 

The movie was based on one of the stories from One Thousand and One Arabian Nights', 1, 1 ),

('Curse of the Werewolf', 'description here for cotw', 'backstory here for cotw', 1, 2 ),

('Frankenstein', 'description here for frank', 'backstory here for frank', 1, 3 ),

('Bride of Frankenstein', 'description here for bride', 'backstory here for bride', 1, 4 ),

('Wolfman', 'description here for wolfman', 'backstory here for wolfman',  1, 5 ),

('The Thing', 'description here for thing', 'backstory here for thing',  1, 6);

-- SELECT all kit columns PLUS the first photo (list of kits)
SELECT *, (SELECT "url" FROM "photos" WHERE "kit_id" = k.id ORDER BY "order" LIMIT 1) as "photo"  FROM "kit" as k;


-- SELECT all photos for a kit (kit detail page)
SELECT * FROM "photos" WHERE "kit_id" = 1 ORDER BY "order";
