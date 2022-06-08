package com.clarifai.example;

import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;


public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the input to add
    // with concept. Change these strings to run your own example.
    ////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to whatever input and concept you want to add
    static final String IMAGE_URL = "https://samples.clarifai.com/puppy.jpeg";
    static final String CONCEPT_ID = "charlie";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiInputResponse postInputsResponse = stub.postInputs(
            PostInputsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addInputs(
                Input.newBuilder().setData(
                    Data.newBuilder()
                    .setImage(
                        Image.newBuilder()
                        .setUrl(IMAGE_URL)
                        .setAllowDuplicateUrl(true)
                    )
                    .addConcepts(
                        Concept.newBuilder()
                        .setId(CONCEPT_ID)
                        .setValue(1f)
                    )
                )
            ).build()
        );

        if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
        }

    }
}