################################################################################
# In this section, we set the user authentication, app ID, concept name, and 
# language ID. Change these strings to run your own example.
################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to what you want to search by
CONCEPT_NAME = '犬'
LANGUAGE_ID = 'ja' # Japanese

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

post_annotations_searches_response = stub.PostAnnotationsSearches(
    service_pb2.PostAnnotationsSearchesRequest(
        user_app_id=userDataObject,
        searches = [
            resources_pb2.Search(
                query=resources_pb2.Query(
                    ranks=[
                        resources_pb2.Rank(
                            annotation=resources_pb2.Annotation(
                                data=resources_pb2.Data(
                                    concepts=[  # You can search by multiple concepts.
                                        resources_pb2.Concept(
                                            name=CONCEPT_NAME,  # You could search by concept ID as well.
                                            language=LANGUAGE_ID, 
                                            value=1  # Value of 0 will search for images that don't have the concept.
                                        )
                                    ]
                                )
                            )
                        )
                    ]
                )
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_searches_response.status.code != status_code_pb2.SUCCESS:
    print(post_annotations_searches_response.status)   
    raise Exception("Post searches failed, status: " + post_annotations_searches_response.status.description)

print("Search result:")
for hit in post_annotations_searches_response.hits:
    print("\tScore %.2f for annotation: %s off input: %s" % (hit.score, hit.annotation.id, hit.input.id))