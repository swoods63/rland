let Properties = require('../models/property')


export default {

  // House.find(req.body.data)
  getPropertiesBySearch: {
    path: '/propertysearch',
    reqType: 'post',
    method(req, res, next) {
      let action = 'Return properties by search criteria'
      Properties.find(req.body)
        .then(properties => {
          res.send(handleResponse(action, properties))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
}   

function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}