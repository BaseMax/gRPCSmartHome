// user

```json
{
  "_id": "userIDIsHere",
  "name": "Alex Smith",
  "username": "Alex12",
  "password": "some",
  "permissions": [
    {
      "type": "house",
      "_id": "id",
      "perms": {
        "light": true,
        "thermostat": false,
        "camera": false
      }
    },
    {
      "type": "room",
      "_id": "id",
      "perms": {
        "light": true,
        "thermostat": false,
        "camera": true
      }
    }
  ]
}
```

// thing

```json
{
  "_id": "0b6d347b01d437a092be84c2edfce72c",
  "name": "RGB light",
  "desc": "Big light on the table",
  "room_id": "3e705f22b67270bea6f2bb5feedd7cb4"
}
```

// room

```json
{
  "name": "living room",
  "desc": "",
  "group_id": "afda6124a134ca3277208470da1afde4",
  "house_id": "82ef0148cd6eeb15e349fdb33d32af16"
}
```

// house

```json
{
  "_id": "82ef0148cd6eeb15e349fdb33d32af16",
  "name": "House Dubai w01",
  "desc": "more info here",
  "main_owner": "ID_OF_USER",
  "sub_owner": ["sub1", "sub2", "sub3"]
}
```

// end points

**AUTH**
register user => POST /api/auth/register
login user => POST /api/auth/login

**house**
create house => POST /api/house/
delete house => DELETE /api/house/:id
edit house => PUT /api/house/:id
read house => GET /api/house/:id
get house rooms => GET /api/house/rooms

**room**
get all rooms => GET /api/room/
get one room => GET /api/room/:id
create room => POST /api/room
update room => PUT /api/room/:id
delete room => DELETE /api/room/:id

**Thing**
get all things => GET /api/thing?house=WHITE_HOUSE&room=president&type=camera|light|thermostat|all
get one things => GET /api/thing/:id
create a thing => POST /api/thing
delete a thing => DELETE /api/thing/:id

**actions**
**lights**
turn on => PUT /api/thing/:id?type=light&action=turnOn
turn off => PUT /api/thing/:id?type=light&action=turnOff

**thermostat**
set thermostat => PUT /api/things/:id?type=thermostat&action=setValue&value=20
set thermostat mode => PUT /api/things/:id?type=thermostat&action=setMode&mode=cooling | heating | fan-only
set fan status => PUT /api/things/:id?type=thermostat&action=setStatus&status=on | auto

**camera**
get camera list of a room /api/room/all?type=camera
camera stream => GET /api/thing/:id?type=camera&action=stream
update a thing => PUT /api/thing/:id?type=camera&action=snapshot
update a thing => PUT /api/thing/:id?type=camera&action=snapshot
get suspicious statuses of one camera => GET /api/thing/:id?type=camera&action=getSuspicious
get suspicious statuses of all cameras => GET /api/thing?type=camera&action=getSuspicious

**VIEW**
dashboard => GET /api/dashboard

**MANAGE**
get users of that house => GET /api/setting/users/:houseId
get all users => GET /api/setting/users
main_owner update user permissions => PUT /api/setting/users/:id { room_id:"some" or home_id: "some", permissions: }
