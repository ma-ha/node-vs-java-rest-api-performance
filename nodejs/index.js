const express    = require ( 'express' )
const bodyParser = require( 'body-parser' )

const app = express()

let counter = 0

app.get( '/greeting', ( req, res ) => {
  let name = ( req.query.name ? req.query.name : 'World' )
  return res.json({ 
    id: counter++,
    content: `Hello ${name}`
  })
})
 
app.post( '/employee', bodyParser.json(), ( req, res ) => {
  let name = req.body.name // ouh, no input check, but same as Java
  return res.json({ 
    id: counter++,
    content: `Hello ${name}`
  })
})

app.listen( 8090 )