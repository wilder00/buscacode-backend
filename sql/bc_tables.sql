CREATE TABLE credentials(
  cred_id serial NOT NULL,
  cred_username varchar(255) NOT NULL,
  cred_password varchar(255) NOT NULL,
  cred_email varchar(255) NOT NULL,
  PRIMARY KEY (cred_id),
  CONSTRAINT cred_username_unique UNIQUE (cred_username)
);

CREATE TABLE users(
  usr_id serial NOT NULL,
  usr_name varchar(255) NOT NULL,
  usr_lastname varchar(255),
  credential_id int,
  CONSTRAINT fk_credential
      FOREIGN KEY(credential_id) 
	      REFERENCES credentials(cred_id)
	        ON DELETE CASCADE,
  PRIMARY KEY (usr_id)
);

