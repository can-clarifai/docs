//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, workflow ID, and
// audio URL. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to make your own predictions
const WORKFLOW_ID = "my-custom-workflow";
const AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostWorkflowResults(
  {
    user_app_id: {
      "user_id": USER_ID,
      "app_id": APP_ID,
    },
    workflow_id: WORKFLOW_ID,
    inputs: [{ data: { audio: { url: AUDIO_URL } } }],
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Post workflow results failed, status: " + response.status.description
      );
    }

    // We'll get one WorkflowResult for each input we used above. Because of one input, we have here 
    // one WorkflowResult
    const results = response.results[0];

    // Each model we have in the workflow will produce its output   
    for (const output of results.outputs) {
      const model = output.model;
      console.log("Output for the model: `" + model.id + "`");        
      for (const concept of output.data.concepts){    
        console.log("\t" + concept.name + " " + concept.value);        
      } 
      if(output.data.text){
      console.log(output.data.text.raw);        
      }               
    }
  }
);
