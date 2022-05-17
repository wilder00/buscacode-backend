
INSERT INTO credentials(cred_username, cred_password, cred_email)
VALUES('estacionx', MD5('password'), 'estacionx35@gmail.com'),
      ('noway', MD5('password'), 'noway@yopmail.com');


INSERT INTO users(usr_name, usr_lastname, credential_id)
VALUES('wilder', 'trujillo', (SELECT cred_id from credentials WHERE cred_username='estacionx')),
      ('pedro', 'donna', (SELECT cred_id from credentials WHERE cred_username='noway'));