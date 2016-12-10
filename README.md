# genuinecharity
Ffutche charity site
Steps to install development environment for Ffutche Foundation

1. Install NodeJS on the system. NodeJS can be downloaded here: https://nodejs.org/en/

2. Optional: Install WebStorm IDE from JetBrains. It's free for students and very useful for Node applications. Its not required but highly recommended.

3. Install MySQL database - http://dev.mysql.com/downloads/

4. Unzip or extract the ffutche project file. Or it can be cloned from the github repository - https://github.com/deepaumakanth/genuinecharity

5. Import and run the Ffutche database creation script - ffutche_db.sql

6. Navigate to the main project directory, and from there to the config directory. Create another directory called env. Inside this create a file - development.js. This file will contain your mysql db credentials. The format is:

module.exports = {
    dbname: 'ffutche',
    dbuser: 'ffutche',
    dbpassword: 'ffutche'
};
Replace dbname, dbuser, and dbpassword with your database credentials.

7. Install bower on your system. Bower is a front end javascript package manager. In the terminal or CLI type 'npm install -g bower' and press enter to install it.

8. Navigate to the main project folder in the terminal or CLI. Type 'npm install' to install the node packages needed.

9. Navigate to the main project folder in the terminal or CLI. Type 'bower install' to install the node packages needed.

10. Navigate to the main project folder in the terminal or CLI. Type 'node server' to start the application

11. Go to 'localhost:3000' on your web browser. The home page should show up.
