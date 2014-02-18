module.exports = function(app) {

  var Participants = require('../models/participants.js');

  //GET - Return all participants in the DB
  findAll = function(req, res) {
    Participants.find(function(err, participants) {
  		if(!err) { 
  			res.send(participants);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };
    
    
 //GET - Return a participant with specified ID
findById = function(req, res) {
  Participants.findById(req.param.id, function(err, participant) {
    if(!err) {
      res.send(participant);
    } else {
      console.log('ERROR: ' + err);
    }
  });
};
    
//POST - Insert a new participant in the DB
addParticipant = function(req, res) {
  console.log('POST');
  console.log(req.body);

  var participant = new Participants({
    name:    req.body.name
  });

  participant.save(function(err) {
    if(!err) {
      console.log('Created');
    } else {
      console.log('ERROR: ' + err);
    }
  });

  res.send(participant);
};
    
//PUT - Update a register already exists
updateParticipant = function(req, res) {
  Participants.findById(req.params.id, function(err, participant) {
    participant.name   = req.body.name;


    participant.save(function(err) {
      if(!err) {
  	console.log('Updated');
      } else {
  	console.log('ERROR: ' + err);
      }

      res.send(participant);
    });
  });
}    
  
//DELETE - Delete a participant with specified ID
deleteParticipant = function(req, res) {
  Participants.findById(req.params.id, function(err, participant) {
    participant.remove(function(err) {
      if(!err) {
  	console.log('Removed');
      } else {
  	console.log('ERROR: ' + err);
      }
    })
  });
}

app.get('/participants', findAll);
app.get('/participants/:id', findById);
app.post('/participants', addParticipant);
app.put('/participants/:id', updateParticipant);
app.delete('/participants/:id', deleteParticipant);

}





