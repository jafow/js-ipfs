'use strict'

const boom = require('boom')

exports = module.exports

exports.get = (request, reply) => {
  request.server.app.ipfs.id((err, id) => {
    if (err) { return reply(boom.badRequest(err)) }
    return reply(id)
  })
}
