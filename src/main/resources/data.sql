DROP TABLE IF EXISTS events;
create table EVENTS (
id int(11) NOT NULL AUTO_INCREMENT,
event_name varchar(100) DEFAULT NULL,
created_by varchar(10) DEFAULT NULL,
created_date date DEFAULT NULL,
updated_by varchar(10) DEFAULT NULL,
team_id int(11) DEFAULT NULL,
PRIMARY KEY (id));

INSERT INTO EVENTS VALUES (1,'Linux IX Event 22/12/2016', 'Mark Peter', '2022-09-17', 'Mark', 12 );
INSERT INTO EVENTS VALUES (2,'Windows Server Event 22/12/2020', 'Peter', '2021-09-17', 'Peter', 13 );
INSERT INTO EVENTS VALUES (3,'Ubuntu Event 22/12/2021', 'Kevin', '2022-09-17', 'Peter', 14 );
INSERT INTO EVENTS VALUES (4,'MQ Server 22/12/2018', 'John', '2020-01-12', 'John', 15 );
INSERT INTO EVENTS VALUES (5,'Linux II Event 22/01/2022', 'Smith', '2021-06-14', 'Smith', 16 );
INSERT INTO EVENTS VALUES (6,'Linux IV Event 22/12/2018', 'John', '2021-11-20', 'John', 17 );
INSERT INTO EVENTS VALUES (7,'Ubuntu XX Event 22/12/2022', 'Smith', '2022-09-16', 'Smith', 18 );

DROP TABLE IF EXISTS ROLES;
CREATE TABLE ROLES (
role_id int(11) NOT NULL,
role_name varchar(25) DEFAULT NULL,
role_user_id int(11) DEFAULT NULL,
PRIMARY KEY (role_id)
);

INSERT INTO ROLES VALUES (1, 'Admin', 11);
INSERT INTO ROLES VALUES (2, 'User', 12);
INSERT INTO ROLES VALUES (3, 'Updater', 13);
INSERT INTO ROLES VALUES (4, 'Creator', 14);
INSERT INTO ROLES VALUES (5, 'Analyst', 15);
INSERT INTO ROLES VALUES (6, 'Sys Analyst', 16);

DROP TABLE IF EXISTS TASK_UPDATES;
CREATE TABLE TASK_UPDATES (
id int(11) NOT NULL,
task_name varchar(45) DEFAULT NULL,
task_updated_by varchar(45) DEFAULT NULL,
task_created_by varchar(45) DEFAULT NULL,
task_created_date date DEFAULT NULL,
task_updated_date date DEFAULT NULL,
task_id int(11) DEFAULT NULL,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS TASKS;
CREATE TABLE TASKS (
task_id int(11) NOT NULL,
task_name varchar(100) DEFAULT NULL,
team_id int(11) DEFAULT NULL,
task_created date DEFAULT NULL,
task_updated varchar(20) DEFAULT NULL,
event_id int(11) DEFAULT NULL,
PRIMARY KEY (task_id)
);

INSERT INTO TASKS VALUES (1, 'Services', 22 , '2019-06-26', 'Peter', 4);
INSERT INTO TASKS VALUES (2, 'Microservices', 22 , '2019-06-26', 'Martin', 3);
INSERT INTO TASKS VALUES (3, 'Operations', 23 , '2019-06-26', 'Kumar', 2);
INSERT INTO TASKS VALUES (4, 'Centos', 24 , '2019-06-26', 'Smith', 4);
INSERT INTO TASKS VALUES (5, 'Zlinux', 23 , '2019-06-26', 'John', 5);
INSERT INTO TASKS VALUES (6, 'Ubuntu', 26 , '2019-06-26', 'Kevin', 1);
INSERT INTO TASKS VALUES (7, 'Windows', 25 , '2019-06-26', 'Raja', 2);


DROP TABLE IF EXISTS TEAMS;
CREATE TABLE TEAMS (
team_id int(11) NOT NULL,
team_name varchar(100) DEFAULT NULL,
event_id int(11) DEFAULT NULL,
task_id int(11) DEFAULT NULL,
PRIMARY KEY (team_id)
);

INSERT INTO TEAMS VALUES (22, 'Services', 2 , 3);
INSERT INTO TEAMS VALUES (23, 'Operations', 1 , 2);
INSERT INTO TEAMS VALUES (24, 'Centos', 3 , 3);
INSERT INTO TEAMS VALUES (25, 'Zlinux', 2 , 4);
INSERT INTO TEAMS VALUES (26, 'Ubuntu', 4 , 5);
INSERT INTO TEAMS VALUES (27, 'Windows', 1 , 6);

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
id int(20) DEFAULT NULL,
firstname varchar(20) DEFAULT NULL,
lastname varchar(20) DEFAULT NULL,
email varchar(25) DEFAULT NULL,
gender varchar(10) DEFAULT NULL,
address varchar(25) DEFAULT NULL,
userrole varchar(25) DEFAULT NULL,
PRIMARY KEY (id)
);

INSERT INTO USERS VALUES(4002543,'Cristal','Lea','clea0@dagondesign.com','Female','097 Upham Lane', 'Architect');
INSERT INTO USERS VALUES(4002544,'Lisabeth','Killick','lkillick1@surveymonkey.com','Female','9284 Linden Drive', 'Supervisor');
INSERT INTO USERS VALUES(4002545,'Latia','Petrie','lpetrie2@alexa.com','Male','351 Merry Trail', 'Electrician');
INSERT INTO USERS VALUES(4002546,'Barbie','MacCoveney','bmaccoveney3@imdb.com','Male','294 Dryden Junction', 'Engineer');
INSERT INTO USERS VALUES(4002547,'Matty','Cufflin','mcufflin4@csmonitor.com','Female','92 Memorial Road','Estimator');
INSERT INTO USERS VALUES(4002548,'Myrta','Campes','mcampes5@vistaprint.com','Male','440 Sunnyside Terrace','Project Manager');
INSERT INTO USERS VALUES(4002549,'Jerrome','Richley','jrichley6@blogs.com','Male','694 Hollow Ridge Center','Surveyor');
INSERT INTO USERS VALUES(4002550,'Lin','Laxen','llaxen7@hostgator.com','Male','932 Mockingbird Crossing','Surveyor');
INSERT INTO USERS VALUES(4002551, 'Lexie', 'Ablett', 'lablett0@google.com.hk', 'Agender', '5 Grim Circle', 'Construction Foreman');
INSERT INTO USERS VALUES(4002552, 'Hashim', 'Ashpole', 'hashpole1@rakuten.co.jp', 'Male', '38 Heath Alley', 'Construction Manager');
INSERT INTO USERS VALUES(4002554, 'Alister', 'Frigout', 'afrigout3@nifty.com', 'Male', '3 Lyons Avenue', 'Project Manager');
