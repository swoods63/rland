let Properties = require('../models/property')


export default {
  getPropertiesBySearch: {
    path: '/search/',
    reqType: 'post',
    method(req, res, next) {
      let action = 'Return board and all Lists with that Board Id'

      // LoadEntityWithRelationship('Boards', 'Lists', req.params.boardId, action)
      //     .then(res.send)
      //     .catch(next)

        // req.body.data = {
        // 	"view": "forrest",
        // 	"rooms": 4
        // }


// House.find(req.body.data)

      Boards.findById(req.params.boardId)
        .then(board => {
          Lists.find({ boardId: req.params.boardId })
            .then(lists => {
              board.lists = lists
              res.send(handleResponse(action, board))
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getTasksByListId: {
    path: '/boards/:boardId/lists/:listId/tasks',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return list and all Tasks with that List Id'
      console.log('req', req.params)
      // LoadEntityWithRelationship('Lists', 'Tasks', req.params.listId, action)
      //     .then(res.send)
      //     .catch(next)
      Lists.findById(req.params.listId)
        .then(list => {
          //console.log('here?')
          Tasks.find({ listId: req.params.listId })
            .then(tasks => {
              list.tasks = tasks
              res.send(handleResponse(action, list))
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getCommentsByTaskId: {
    path: '/boards/:boardId/lists/:listId/tasks/:taskId/comments',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return comments associated with a Task'
      Tasks.findById(req.params.taskId)
        .then(task => {
          Comments.find({ taskId: req.params.taskId })
            .then(comments => {
              task.comments = comments
              res.send(handleResponse(action, task))
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        })
    },
    deleletsChildrenOfBoards: {
      path: '/boards/:boardId',
      reqType: 'delete',
      method(req, res, next) {
        let action = 'Removing all children of a Board'
        Boards.findById(req.params.boardId)
          .then(board => {
            Tasks.find({ boardId: req.params.boardId })
              .then(tasks => {
                Lists.find({ boardId: req.params.boardId })
                  .then(lists => {
                    Comments.find({ boardId: req.params.boardId })
                    res.send(handleResponse(action))
                  }).catch(error => {
                    return next(handleResponse(action, null, error))
                  })
              }).catch(error => {
                return next(handleResponse(action, null, error))
              })
          }).catch(error => {
            return next(handleResponse(action, null, error))
          })
      }
    }
  }
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