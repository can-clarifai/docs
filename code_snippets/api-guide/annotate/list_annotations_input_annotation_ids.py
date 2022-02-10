##########################################################################
# In this section, we set the user authentication, app ID, input IDs, and
# annotation IDs. Change these strings to run your own example.
##########################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to list your own annotations
INPUT_ID_1 = '53d0362a9dfa4e03b2293375e2d0db73'
INPUT_ID_2 = '00f6d742124147ac8ca7788f73736fb9' 
ANNOTATION_ID_1 = '300b8e39a65e4f33ae4e15e86eaf4a3b'
ANNOTATION_ID_2 = 'fcd19d4ad96440e7b1fbda7279c19e44'

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

list_annotations_response = stub.ListAnnotations(
    service_pb2.ListAnnotationsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        input_ids=[INPUT_ID_1, INPUT_ID_2],
        ids=[ANNOTATION_ID_1, ANNOTATION_ID_2],
        per_page=10
    ),
    metadata=metadata
)

if list_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(list_annotations_response.status)
    raise Exception("List annotations failed, status: " + list_annotations_response.status.description)

for annotation_object in list_annotations_response.annotations:
    print(annotation_object)
