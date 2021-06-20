oc new-project myproj --description-name 'Soumen'
oc new-app --template=nodejs-postgresql-example -p SOURCE_REPOSITORY_URL=https://github.com/soumensaha001/test.git -p DATABASE_USER=admin -p DATABASE_PASSWORD=admin -p DATABASE_NAME=mydb
