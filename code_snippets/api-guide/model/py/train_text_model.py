#############################################################################
# In this section, we set the user authentication, app ID, and the ID of the 
# model we want to train. Change these strings to run your own example.
#############################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change this to train your own custom model
MODEL_ID = 'text-model-1' 

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_model_versions_response = stub.PostModelVersions(
    service_pb2.PostModelVersionsRequest(
        user_app_id=userDataObject,
        model_id=MODEL_ID
    ),
    metadata=metadata
)

if post_model_versions_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_versions_response.status)
    raise Exception("Failed response, status: " + post_model_versions_response.status.description)

# Uncomment this line to see the structure and data of the response
#print(post_model_versions_response)