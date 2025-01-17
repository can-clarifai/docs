//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the 
// workflow we want to build. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to build your own workflow with multiple connected nodes

const WORKFLOW_ID = 'auto-annotation-workflow-id';
const NODE_ID_1 = 'general-embed';
const GENERAL_EMBED_MODEL_ID = 'bbb5f41425b8468d9b7a554ff10f8581';
const GENERAL_EMBED_MODEL_VERSION_ID = 'bb186755eda04f9cbb6fe32e816be104';

const NODE_ID_2 = 'general-concept';
const GENERAL_CONCEPT_MODEL_ID = 'aaa03c23b3724a16a56b629203edc62c';
const GENERAL_CONCEPT_MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';

const NODE_ID_3 = 'general-cluster';
const GENERAL_CLUSTER_MODEL_ID = 'cccbe437d6e54e2bb911c6aa292fb072';
const GENERAL_CLUSTER_MODEL_VERSION_ID = 'cc2074cff6dc4c02b6f4e1b8606dcb54';

const NODE_ID_4 = 'mapper';
const SYNONYM_MODEL_ID = 'synonym-model-id';
const SYNONYM_MODEL_VERSION_ID = 'YOUR_SYNONYM_MODEL_VERSION_ID';

const NODE_ID_5 = 'greater-than';
const GREATER_THAN_MODEL_ID = 'greater-than-model-id';
const GREATER_THAN_MODEL_VERSION_ID = 'YOUR_GREATER_THAN_MODEL_VERSION_ID';

const NODE_ID_6 = 'less-than';
const LESS_THAN_MODEL_ID = 'less-than-model-id';
const LESS_THAN_MODEL_VERSION_ID = 'YOUR_LESS_THAN_MODEL_VERSION_ID';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostWorkflows(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        workflows: [
            {
                id: WORKFLOW_ID,
                nodes: [
                    {
                        id: NODE_ID_1,
                        model: {
                            id: GENERAL_EMBED_MODEL_ID,
                            model_version: {
                                id: GENERAL_EMBED_MODEL_VERSION_ID
                            }
                        }
                    },
                    {
                        id: NODE_ID_2,
                        model: {
                            id: GENERAL_CONCEPT_MODEL_ID,
                            model_version: {
                                id: GENERAL_CONCEPT_MODEL_VERSION_ID
                            }
                        }
                    },
                    {
                        id: NODE_ID_3,
                        model: {
                            id: GENERAL_CLUSTER_MODEL_ID,
                            model_version: {
                                id: GENERAL_CLUSTER_MODEL_VERSION_ID
                            }
                        }
                    },
                    {
                        id: NODE_ID_4,
                        model: {
                            id: SYNONYM_MODEL_ID,
                            model_version: {
                                id: SYNONYM_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_2 // general-concept
                            }
                        ]
                    },
                    {
                        id: NODE_ID_5,
                        model: {
                            id: GREATER_THAN_MODEL_ID,
                            model_version: {
                                id: GREATER_THAN_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_4 // mapper
                            }
                        ]
                    },
                    {
                        id: NODE_ID_6,
                        model: {
                            id: LESS_THAN_MODEL_ID,
                            model_version: {
                                id: LESS_THAN_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_4 // mapper
                            }
                        ]
                    }
                ]
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.log(response.status);
            throw new Error("Post workflows failed, status: " + response.status.description);
        }
    }
);