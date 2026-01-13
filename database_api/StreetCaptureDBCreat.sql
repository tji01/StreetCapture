/*drop table locations;
drop table captures;
drop table users;*/

create table users (
	
    uid int auto_increment primary key,
    username varchar(10),
    hash binary,
    email varchar(30),
    dob date,
    capture_list blob,
    created date
);

create table locations (
  id int auto_increment primary key,
  latit float,
  longit float,
  uid int,
  foreign key (uid) references users(uid),
	loc_date date
);

create table captures (
  id int auto_increment primary key,
  uid_one int,
  uid_two int,
  foreign key (uid_one) references users(uid),
  foreign key (uid_two) references users(uid)
);

/*
Table users {
  uid string pk
  user string
  hash string
  email string
  dob timestamp
  capture_list blob
  created_at timestamp
}

Table locations {
  id int pk
  location string
  uid string
  when timestamp
}

Table captures {
  id int pk
  uid_one string
  uid_two string
}
*/