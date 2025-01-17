#########################################################################################
# In this section, we set the user authentication, app ID, and how we want to annotate
# a polygon. Change these strings to run your own example.
#########################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these based on the polygon you want to annotate
INPUT_ID = "ca8666e974ac4c2c8dfbd7df1e7cbc44"
CONCEPT_ID_1 = "tree"
CONCEPT_ID_2 = "water"
CONCEPT_ID_3 = "bike"

##########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################


from clarifai_grpc.grpc.api.status import status_code_pb2
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

post_annotations_response = stub.PostAnnotations(
    service_pb2.PostAnnotationsRequest(
        # The userDataObject is created in the overview and is required when using a PAT
        user_app_id=userDataObject,
        annotations=[
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                data=resources_pb2.Data(
                    regions=[
                        resources_pb2.Region(
                            region_info=resources_pb2.RegionInfo(
                                polygon=resources_pb2.Polygon(     # draw a polygon
                                    points=[
                                        resources_pb2.Point(row=0.30),    # row location of the point, with a [0.0-1.0] range
                                        resources_pb2.Point(col=0.50),  # column location of the point, with a [0.0-1.0] range
                                        resources_pb2.Point(z=0.50)     # depth, if applicable, of the point
                                    ]
                                )
                            ),
                            data=resources_pb2.Data(
                                concepts=[                                    
                                    resources_pb2.Concept(id=CONCEPT_ID_1, value=1), # 1 means true, this concept is present                                    
                                    resources_pb2.Concept(id=CONCEPT_ID_2, value=0)  # 0 means false, this concept is not present
                                ]
                            )
                        )
                    ]
                )
                
            ),
            resources_pb2.Annotation(
                input_id=INPUT_ID,
                data=resources_pb2.Data(
                    regions=[
                        resources_pb2.Region(
                            region_info=resources_pb2.RegionInfo(
                                polygon=resources_pb2.Polygon(        # draw another polygon
                                    points=[
                                        resources_pb2.Point(row=0.60),
                                        resources_pb2.Point(col=0.80),
                                        resources_pb2.Point(z=0.50)
                                    ]
                                )
                            ),
                            data=resources_pb2.Data(
                                concepts=[                                    
                                    resources_pb2.Concept(id=CONCEPT_ID_3, value=1), # 1 means true, this concept is present
                                ]
                            )
                        )
                    ]
                )
                
            )
        ]
    ),
    metadata=metadata
)

if post_annotations_response.status.code != status_code_pb2.SUCCESS:
    print(post_annotations_response.status)
    raise Exception("Post annotations failed, status: " + post_annotations_response.status.description)

