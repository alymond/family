# family Rest API

## To use
Install dependencies
```
npm i
```
Add your MongoDB link to connect it to your database

To start the server, run
```
npm start
```

## API Endpoints



### Family 
- GET /api/family
- GET /api/family/:familyId
- POST /api/family
- PUT /api/family/:familyId
- DELETE /api/family/:familyId

### Member
- GET /api/family/:familyId/member
- GET /api/family/:familyId/member/:memberId/
- POST /api/family/:familyId/member
- PUT /api/family/:familyId/member/:memberId/
- DELETE /api/family/:familyId/member/:memberId/
