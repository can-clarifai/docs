//index.js file

////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how
// we want to update the model. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to update your own model 
const MODEL_ID = 'petsID';
const MODEL_NAME = 'newname';
const CONCEPT_ID_1 = 'birds';
const CONCEPT_ID_2 = 'hurd';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PatchModels(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        action: "overwrite",
        models: [
            {
                id: MODEL_ID,
                name: MODEL_NAME,
                output_info: {
                    data: { concepts: [{ id: CONCEPT_ID_1 }, { id: CONCEPT_ID_2 }] },
                    output_config: { concepts_mutually_exclusive: true, closed_environment: true }
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch models failed, status: " + response.status.description);
        }
    }
);