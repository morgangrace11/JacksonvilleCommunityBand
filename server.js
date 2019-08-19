const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/jacksonvilleCommunityBand'));
app.listen(process.env.PORT || 8080, () => {
  console.log('App running on port 8080');
});
