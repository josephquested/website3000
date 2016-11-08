var app = require('express')()
var templit = require('templit')
var port = process.env.PORT || 3000

var admin = require("firebase-admin");
var serviceAccount = require("./firebase/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://website3000-28bb3.firebaseio.com/"
});

app.engine('js', templit)
app.set('view engine', 'js')

app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`templit rendering on port ${port}`)
})
