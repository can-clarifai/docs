//index.js file

///////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and concept name and language.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever you want to process
const CONCEPT_NAME = '人';
const CONCEPT_LANGUAGE = "zh"; // Chinese


///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostConceptsSearches(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        concept_query: { name: CONCEPT_NAME, language: CONCEPT_LANGUAGE }
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post concepts searches failed, status: " + response.status.description);
        }

        console.log("Found concepts:");
        for (const concept of response.concepts) {
            console.log("\t" + concept.name + " " + concept.value);
        }
    }

);