package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.BaseResponse;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and the ID and version
    // of the model we want to delete. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change these to your own model ID and version
    static final String MODEL_ID = "petsID";
    static final String MODEL_VERSION_ID = "304ae281b04349e5ae51d11be10ed95a";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        BaseResponse deleteModelVersionResponse = stub.deleteModelVersion(
            DeleteModelVersionRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .setModelId(MODEL_ID)
            .setVersionId(MODEL_VERSION_ID)
            .build()
        );

        if (deleteModelVersionResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Delete model version failed, status: " + deleteModelVersionResponse.getStatus());
        }

    }

}