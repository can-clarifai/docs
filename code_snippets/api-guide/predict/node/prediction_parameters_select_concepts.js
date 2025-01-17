//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, URL of the image
// we want as an input, and concept name and ID. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'clarifai';
const APP_ID = 'main';
// Change these to whatever you want to process
const MODEL_ID = 'general-image-recognition';
const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'; 
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';
const CONCEPT_NAME = "train";
const CONCEPT_ID = "ai_6kTjGfF6";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostModelOutputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        model_id: MODEL_ID, 
        version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
        inputs: [
            { data: { image: { url: IMAGE_URL, allow_duplicate_url: true } } }
        ],
        // When selecting concepts, value is ignored, so no need to specify it.
        model: { output_info: { output_config: { select_concepts: [{ name: CONCEPT_NAME }, { id: CONCEPT_ID }] } } }
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log("Predicted concepts:");
        for (const concept of output.data.concepts) {
            console.log(concept.name + " " + concept.value);
        }
    }

);