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
VALUES (1, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/thing.jpg'),
(2, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/wolfman.jpg'),
(3, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/creature.jpg'),
(4, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/bride.jpg'),
(5, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/frank.jpg'),
(6, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/cotw.jpg'),
(7, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/cyclops.jpg'),
(8, 'https://blackheartcustoms.s3.us-east-2.amazonaws.com/shinzilla.jpg')
;

-- INSERT INTO KIT
INSERT INTO "kit" ("name", "description", "backstory", "user_id", "order") 
VALUES 
('The Thing from Another World', 'Life-sized resin wall-hanger. Painted by Leigh Stephenson. Sculpted by Joe Simon and produced by Black Heart Models. Measures at 10 by 9 by 8.', 'The 1951 film, The Thing From Another World, was inspired by John C. Campbell’s sci-fi short story in which scientists at an Arctic research station discover a spacecraft buried in the ice. Upon closer examination, they discovered the frozen alien pilot, excavated it, and brought it back to their station to examine it. The alien is accidentally thawed and begins killing members of the research team.', 1, 8),


('Wolfman', 'Life-sized resin 360 Series bust. Painted by Leigh Stephenson. Sculpted by Jeff Yagher and produced by Black Heart Models. Measures 15 by 9 by 10', 'The Wolf Man is a 1941 American horror film featuring Lon Chaney, Jr. as the tragic Lawrence Talbot. One night Larry and two lady friends visit a carnival to have their fortunes read. That night, Larry sees one of the friends attacked by a wolf and attempted, unsuccessfully, to rescue her. During the attack he killed the Wolf but suffered a bite on his chest. The next morning the wound was gone. However, during the full moon the following night, Larry transformed into a werewolf and killed a villager. Larry came to understand that he would continue to transform and kill if he didn’t get help but his father, Sir John Talbot believed that he was delusional and being influenced by gypsies. More full moon killing followed and townspeople searched the woods to find the animal that was responsible;  Larry’s father was part of the search.  He encountered Larry fully transformed and, when the werewolf attacked, Sir John beat him to death with a cane that had a silver wolf head for the handle.',  1, 7 ),

('Creature from the Black Lagoon', 'Life-sized 360 degree bust painted by George and Leigh Stephenson. Sculpted by Mark Van Tine and produced by Black Heart Models. Measures at 19 by 14 by 10.', 'Creature from the Black Lagoon is a 1954 American black-and-white 3D monster horror film. The movie follows a group of scientists who encounter a amphibious humanoid in the waters of the Amazon.', 1, 6),

('Bride of Frankenstein', 'Life-sized resin 360 degree bust. Painted by George and Leigh Stephenson. Sculpted by Jeff Yagher and produced by Black Heart Models. Measures at __ by ___ by ___.', 'The 1935 film, The Bride of Frankenstein, was the first sequel in the classic Frankenstein saga. Dr. Frankenstein and his old university affiliate, the mad Dr. Pretorius, created a woman using parts from dead bodies. Their intention was to create a mate for Frankenstein’s monster. When the Monster attempted to hold her hand, the Bride screamed in terror and ran to her creators for protection. The monster understood that neither he nor the bride were meant for this world. “We belong dead,“ the Monster said. Then he pulled a lever to destroy himself, the laboratory and the Bride.', 1, 5 ),

('Frankenstein`s Monster', 'Life-sized, resin wall-hanger painted by George and Leigh Stephenson.  Sculpted by Mike Hill and produced by Black Heart Models. Measures at _ by _ by _. ', 'Boris Karloff’s portrayal of the Monster in the 1931 classic, “Frankenstein” is undoubtedly the best-known, most popular and most widely recognized monster in film history. Based on Mary Shelley’s novel of the same name, “Frankenstein” is as influential as any film in the horror genre. The idea of a scientist assembling body parts from corpses and having that assembly come to life was certainly a shock to  19th century readers and early 20th century movie-goers. Boris Karloff played the role to perfection. ', 1, 4 ),

('Curse of the Werewolf', 'Life-sized, resin wall-hanger painted by Leigh Stephenson. Sculpted by Joe Simon and produced by Black Heart Models. Measures at 14 by 9 by 7. ', 'From the 1961 British horror film based on the novel The Werewolf of Paris by Guy Endore. After a once imprisoned woman kills her captor and flees, she is found pregnant, wandering the forest by a kind man named Alfredo. While giving birth, the woman dies and leaves the new born baby Leon to be cared for by Alfredo. Soon after, the baby is revealed to be a werewolf. After an incident at a brothel, Leon leaves two people dead. When attempting to flee with his lover, Leon is jailed on suspicion of murder. After transforming while in Jail, Leon breaks free and kills two more people. The townspeople then summon Leon`s adoptive father who ends up shooting him with a silver bullet.', 1, 3 ),

('Cyclops', 'Life-sized resin wall-hanger painted by Leigh Stephenson. Sculpted by Joe Simon and produced by Black Heart Models. The 2-horned Cyclops is 15 inches tall, 15 inches from ear to ear and 11 inches from the wall to the tip of his nose.',
 'From the 1958 film, The 7th Voyage of Sinbad. The Cyclops was a giant, one-eyed,man-eating monster with hooves and furry legs, a sharp horn on his head, pointed ears and fangs. He attacked Sinbad and his men when they stole a magic lamp which contained a Genie. In return for freeing the genie from the magic lamp and the Cyclops, the genie used magic to help Sinbad and his crew escape. 

The movie was based on one of the stories from One Thousand and One Arabian Nights.', 1, 2 ),

('Shin Godzilla', 'Life-sized resin wall-hanger painted by George Stephenson. Sculpted by Gabriel Marquez and produced by Black Heart Models. Measures at 19 by 10 by 9.', 'Shin Godzilla is the 31st film in the Godzilla franchise. It is essentially the re-telling of the original 1954 Godzilla film that conveys the story of the giant monster that attacked Japan after being awakened, mutated and angered by the dropping of atomic bombs on Japan during WWII.', 1, 1);


-- SELECT all kit columns PLUS the first photo (list of kits)
SELECT *, (SELECT "url" FROM "photos" WHERE "kit_id" = k.id ORDER BY "order" LIMIT 1) as "photo"  FROM "kit" as k;


-- Use this to log in
INSERT INTO "user" ("username", "password")
VALUES ('admin','$2a$10$IqB5S9f3YKQQcHZbfezd2OPSV0B0hoV.QoeSKRBD4g3uA.iyi7uD2');


SELECT kit.*, photos.id AS photo_id, photos.url
FROM "kit"
LEFT JOIN "photos" ON kit.id = photos.kit_id
WHERE kit.id = 1;

