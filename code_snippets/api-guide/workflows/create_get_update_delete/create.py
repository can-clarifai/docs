########################################################################################
# In this section, we set the user authentication, app ID, and the details of the new
# custom workflow we want to create. Change these strings to run your own example.
########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to create your own custom workflow
WORKFLOW_ID = 'my-custom-workflow'
NODE_ID_1 = 'optical-character-recognizer'
MODEL_ID_1 = 'ocr-scene-english-paddleocr'
MODEL_VERSION_ID_1 = '40dbb2c9cde44a27af226782e7157006'

NODE_ID_2 = 'text-to-text'
MODEL_ID_2 = 'text-translation-english-spanish'
MODEL_VERSION_ID_2 = '643f30558de34013aff72b0e21f244f5'

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT

post_workflows_response = stub.PostWorkflows(
    service_pb2.PostWorkflowsRequest(
      user_app_id=userDataObject,  
      workflows=[
        resources_pb2.Workflow(
          id=WORKFLOW_ID,
          nodes=[
            resources_pb2.WorkflowNode(
              id=NODE_ID_1,
              model=resources_pb2.Model(
                id=MODEL_ID_1,
                model_version=resources_pb2.ModelVersion(
                  id=MODEL_VERSION_ID_1
                )
              )
            ),
            resources_pb2.WorkflowNode(
              id=NODE_ID_2,
              model=resources_pb2.Model(
                id=MODEL_ID_2,
                model_version=resources_pb2.ModelVersion(
                  id=MODEL_VERSION_ID_2
                )
              ),
              node_inputs=[
                resources_pb2.NodeInput(node_id=NODE_ID_1)
                ]
            ),
          ]
        )
      ]
    ),
    metadata=metadata
)               

if post_workflows_response.status.code != status_code_pb2.SUCCESS:
    print(post_workflows_response.status)
    raise Exception("Post workflows failed, status: " + post_workflows_response.status.description) 

