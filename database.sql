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
VALUES (1, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/cyclops.jpg'),
(2, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/cotw.jpg'),
(3, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/frank.jpg'),
(4, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/bride.jpg'),
(5, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/wolfman.jpg'),
(6, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/thing.jpg')
;

-- INSERT INTO KIT
INSERT INTO "kit" ("name", "description", "backstory", "user_id", "order") 
VALUES 
('Cyclops', 'Life-sized resin wall-hanger painted by Leigh Stephenson. Sculpted by Joe Simon and produced by Black Heart Models. The 2-horned Cyclops is 15 inches tall, 15 inches from ear to ear and 11 inches from the wall to the tip of his nose.',
 'From the 1958 film, The 7th Voyage of Sinbad. The Cyclops was a giant, one-eyed,man-eating monster with hooves and furry legs, a sharp horn on his head, pointed ears and fangs. He attacked Sinbad and his men when they stole a magic lamp which contained a Genie. In return for freeing the genie from the magic lamp and the Cyclops, the genie used magic to help Sinbad and his crew escape. 

The movie was based on one of the stories from One Thousand and One Arabian Nights', 1, 1 ),

('Curse of the Werewolf', 'Life-sized, resin wall-hanger painted by Leigh Stephenson. Sculpted by Joe Simon and produced by Black Heart Models. Measures at __ by __ by __. ', 'From the 1961 British horror film based on the novel The Werewolf of Paris by Guy Endore. After a once imprisoned woman kills her captor and flees, she is found pregnant, wandering the forest by a kind man named Alfredo. While giving birth, the woman dies and leaves the new born baby Leon to be cared for by Alfredo. Soon after, the baby is revealed to be a werewolf. After an incident at a brothel, Leon leaves two people dead. When attempting to flee with his lover, Leon is jailed on suspicion of murder. After transforming while in Jail, Leon breaks free and kills two more people. The townspeople then summon Leon`s adoptive father who ends up shooting him with a silver bullet.', 1, 2 ),

('Frankenstein`s Monster', 'Life-sized, resin wall-hanger painted by George and Leigh Stephenson.  Sculpted by Mike Hill and produced by Black Heart Models. Measures at __ by __ by __. ', 'Frankenstein`s Monster first appeared in Mary Wollstonecraft Shelley`s 1818 novel Frankenstein. The book tells the story of Victor Frankenstein, a Swiss student of natural science who creates an artificial man from pieces of corpses and brings his creature to life. Though it initially seeks affection, the monster inspires loathing in everyone who meets it. Lonely and miserable, the monster turns against its creator. 

The first Frankenstein film was produced by Thomas Edison in 1910. Two German films, The Golem (1914) and Homunculus (1916), dealt with a similar theme derived from Jewish folklore. The Hollywood film Frankenstein (1931), with Boris Karloff as the monster, was based as much on The Golem as on Shelley`s novel.
', 1, 3 ),

('Bride of Frankenstein', 'Life-sized resin 360 degree bust. Painted by George and Leigh Stephenson. Sculpted by Jeff Yagher and produced by Black Heart Models. Measures at __ by ___ by ___.', 'In the 1935 film, The Bride of Frankenstein, the Bride is created as a collaborative project between Dr. Frankenstein and his old university affiliate, the mad Dr. Septimus Pretorius.  The Bride is created by the scientists with the intention of giving it to the monster as a mate. When Frankenstein`s Monster attempts to befriend The Bride, she screams in terror and runs to her creator for protection.  Frankenstein`s monster has the realization that neither he nor the bride are meant for this world, and pulls a switch that destroys the lab.', 1, 4 ),

('Wolfman', 'Life-sized resin 360 degree bust. Painted by Leigh Stephenson. Sculpted by Jeff Yagher and produced by Black Heart Models. Measures at __ by ___ by ___.', 'The Wolf Man is a 1941 American horror film written. The main character, Larry Talbot, goes out with a romantic interest, Gwen, and her friend, Jenny, to have their fortunes read. While waiting for his turn, Larry hears Jenny scream and finds her being attacked by a wolf. Larry attempts to rescue her. Although he could not save Jenny, he was able to kill the wolf and suffered only a bite on the chest. The morning after the attack, Larry discovered the bite was completely healed. The following day, Larry transforms into a werewolf, kills a villager, and is left with no recollection. Eventually, Larry transforms again, kills his romantic interest, and is ultimately killed by his own father.',  1, 5 ),

('The Thing', 'Life-sized resin wall-hanger. Painted by Leigh Stephenson. Sculpted by Joe Simon and produced by Black Heart Models. Measures at __ by ___ by ___.', 'In the 1951 film, The Thing From Another World, scientists at an Arctic research station discover a spacecraft buried in the ice. Upon closer examination, they discover the frozen pilot. All hell breaks loose when they take the body back to their station and he is thawed out.',  1, 6);

-- SELECT all kit columns PLUS the first photo (list of kits)
SELECT *, (SELECT "url" FROM "photos" WHERE "kit_id" = k.id ORDER BY "order" LIMIT 1) as "photo"  FROM "kit" as k;


-- SELECT all photos for a kit (kit detail page)
SELECT * FROM "photos" WHERE "kit_id" = 1 ORDER BY "order";

-- Use this to log in
INSERT INTO "user" ("username", "password")
VALUES ('admin','$2a$10$IqB5S9f3YKQQcHZbfezd2OPSV0B0hoV.QoeSKRBD4g3uA.iyi7uD2');
