const axios = require('axios')

exports.handler = async (event) => {
  const { query } = JSON.parse(event.body);

  const results =  await axios.get('https://dog.ceo/api/breeds/list/all', { timeout: 3000 })
    .then((response) => response.json())
    .catch(function (error) {
      return {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        data: error.code,
      }
    })
  
  if (results.status == 200) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(results),
    }
  }
  else {
    return results
  }
};
