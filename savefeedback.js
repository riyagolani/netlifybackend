// functions/saveFeedback.js
exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed'
      };
    }
  
    // Parse the feedback data from the request
    const data = JSON.parse(event.body);
    
    // Example data structure (you can customize as needed)
    const feedback = {
      session_id: data.session_id,
      image_id: data.image_id,
      rating: data.rating,
      feedback: data.feedback,
      thumbs_up: data.thumbs_up,
      thumbs_down: data.thumbs_down,
    };
  
    onsole.log("Received feedback:", feedback);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Feedback saved successfully" }),
    };
  };
  