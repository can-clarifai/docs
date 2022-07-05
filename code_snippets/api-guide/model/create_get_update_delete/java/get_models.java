package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import java.util.List;

public class ClarifaiExample {

    ////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication and app ID. 
    // Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////// 

    static final String USER_ID = "YOUR_USER_ID_HERE";
    //Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiModelResponse listModelsResponse = stub.listModels(
            ListModelsRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .build()
        );

        if (listModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List models failed, status: " + listModelsResponse.getStatus());
        }

        List<Model> models = listModelsResponse.getModelsList();
        for (Model model : models) {
            System.out.println(model);
        }

    }

}