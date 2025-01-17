---
description: Manage your model training jobs.
sidebar_position: 5
---

# Models: Create, Update, Get, Delete

**Manage your model training jobs**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/create_model.py";
import PythonAddConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/add_concepts_model.py";
import PythonRemoveConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/remove_concepts_from_model.py";
import PythonUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/update_model_name_configuration.py";
import PythonListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/list_model_types.py";
import PythonGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_models.py";
import PythonGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_by_id.py";
import PythonGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_output_info_by_id.py";
import PythonListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/list_model_concepts.py";
import PythonListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/list_model_versions.py";
import PythonGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_version_by_id.py";
import PythonGetModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_training_inputs.py";
import PythonGetModelTrainingVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_training_inputs_by_version.py";
import PythonDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/delete_model.py";
import PythonDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/delete_model_version.py";
import PythonDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/delete_all_models.py";
import PythonTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/train_model.py";
import PythonPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/predict_model.py";
import PythonSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/search_models_name_type.py";

import JSCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/create_model.html";
import JSAddConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/add_concepts_model.html";
import JSRemoveConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/remove_concepts_from_model.html";
import JSUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/update_model_name_configuration.html";
import JSListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/list_model_types.html";
import JSGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_models.html";
import JSGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_by_id.html";
import JSGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_output_info_by_id.html";
import JSListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/list_model_concepts.html";
import JSListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/list_model_versions.html";
import JSGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_version_by_id.html";
import JSGetModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_training_inputs.html";
import JSGetModelTrainingVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_training_inputs_by_version.html";
import JSDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/delete_model.html";
import JSDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/delete_model_version.html";
import JSDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/delete_all_models.html";
import JSTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/train_model.html";
import JSPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/predict_model.html";
import JSSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/search_models_name_type.html";

import NodeCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/create_model.js";
import NodeAddConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/add_concepts_model.js";
import NodeRemoveConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/remove_concepts_from_model.js";
import NodeUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/update_model_name_configuration.js";
import NodeListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/list_model_types.js";
import NodeGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_models.js";
import NodeGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_by_id.js";
import NodeGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_output_info_by_id.js";
import NodeListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/list_model_versions.js";
import NodeGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_version_by_id.js";
import NodeGetModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_training_inputs.js";
import NodeGetModelTrainingVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_training_inputs_by_version.js";
import NodeDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/delete_model.js";
import NodeDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/delete_model_version.js";
import NodeDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/delete_all_models.js";
import NodeTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/train_model.js";
import NodePredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/predict_model.js";
import NodeSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/search_models_name_type.js";

import JavaCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/create_model.java";
import JavaAddConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/add_concepts_model.java";
import JavaRemoveConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/remove_concepts_from_model.java";
import JavaUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/update_model_name_configuration.java";
import JavaListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/list_model_types.java";
import JavaGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_models.java";
import JavaGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_by_id.java";
import JavaGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_output_info_by_id.java";
import JavaListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/list_model_versions.java";
import JavaGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_version_by_id.java";
import JavaGetModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_training_inputs.java";
import JavaGetModelTrainingVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_training_inputs_by_version.java";
import JavaDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/delete_model.java";
import JavaDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/delete_model_version.java";
import JavaDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/delete_all_models.java";
import JavaTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/train_model.java";
import JavaPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/predict_model.java";
import JavaSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/search_models_name_type.java";

import CurlCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/create_model.sh";
import CurlAddConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/add_concepts_model.sh";
import CurlRemoveConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/remove_concepts_from_model.sh";
import CurlUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/update_model_name_configuration.sh";
import CurlListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/list_model_types.sh";
import CurlGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_models.sh";
import CurlGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_by_id.sh";
import CurlGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_output_info_by_id.sh";
import CurlListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/list_model_versions.sh";
import CurlListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/list_model_concepts.sh";
import CurlGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_version_by_id.sh";
import CurlGetModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_training_inputs.sh";
import CurlGetModelTrainingVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_training_inputs_by_version.sh";
import CurlDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/delete_model.sh";
import CurlDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/delete_model_version.sh";
import CurlDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/delete_all_models.sh";
import CurlTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/train_model.sh";
import CurlPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/predict_model.sh";
import CurlSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/search_models_name_type.sh";

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

## Create

### Create a Model

To create a model, you need to specify the model's name and other required fields⁠—depending on the type of model you want to create. 

If you want to specify [the type of model](https://docs.clarifai.com/api-guide/model/model-types) you want to create, you need to provide its ID using the `model_type_id` parameter⁠—though specifying the ID is optional.

Below is an example of how you would create an `embedding-classifier` model with one initial concept. You can always add and remove concepts later.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCreateModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateModel}</CodeBlock>
</TabItem>

</Tabs>

### Add Concepts to a Model

You can add concepts to a model at any point. Just as you add concepts to inputs, you may add them to your model as well. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddConceptsModel}</CodeBlock>
</TabItem>

</Tabs>

### Remove Concepts From a Model

Conversely, if you'd like to remove concepts from a model, you can also do that.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonRemoveConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSRemoveConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeRemoveConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaRemoveConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlRemoveConceptsModel}</CodeBlock>
</TabItem>

</Tabs>

## Update

### Update Model Name and Configuration

Let's change the model name to `newname` and set the model's configuration to have `concepts_mutually_exclusive=true` and `closed_environment=true`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateConfiguration}</CodeBlock>
</TabItem>

</Tabs>

## Get

### List Model Types

Learn about the available model types and their hyperparameters. This endpoint lets you list all the possible models that are creatable (when `creatable=true`) or generally in the platform (the other ones have `creatable=false`).

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelTypes}</CodeBlock>
</TabItem>

</Tabs>

### Get Models

Below is an example of how to get a list of all the models you've created in your app.

:::tip

If you want to get a list of the models not within the scope of your app, you need to use your PAT while specifying the `user_id` of their owner and the `app_id` of the application that you’re accessing. For example, to get Clarifai's models in the `main` app, you need to use your PAT while specifying Clarifai's `user_id` as "clarifai" and `app_id` as "main" in the request.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModels}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModels}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetModels}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetModels}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModels}</CodeBlock>
</TabItem>

</Tabs>

### Get Model by ID

All models have unique IDs. You can get a specific model by its ID.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetModelID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetModelID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelID}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Output Info by ID

The output info of a model lists the concepts it contains.

:::note

The `GetModelOutputInfo` endpoint does not support pagination. If you want to split your results into pages, use the below-described `ListModelConcepts` endpoint.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelOutput}</CodeBlock>
</TabItem>

</Tabs>

### List Model Concepts

Apart from the `GetModelOutputInfo` endpoint, you can also use the `ListModelConcepts` endpoint to list the concepts in your model. 

A major difference between the two is that the `ListModelConcepts` endpoint supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/), which lets you easily list concepts instead of displaying all of them at once.


:::note

If you are using any of the Clarifai gRPC clients, the `ListModelConcepts` endpoint is only available from release 8.10.0. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelConcepts}</CodeBlock>
</TabItem>

</Tabs>

### List Model Versions

Every time you train a model, it creates a new version. You can list all the versions created.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelVersions}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Version by ID

To get the details of a specific model version, you must provide the `model_id` as well as the `version_id` parameters. You can inspect the model version status to determine if your model is trained or still training.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelVersion}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Training Inputs

You can list all the inputs that were used to train the model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelTraining}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelTraining}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetModelTraining}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetModelTraining}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelTraining}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Training Inputs by Version

You can also list all the inputs that were used to train a specific model version.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelTrainingVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelTrainingVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetModelTrainingVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetModelTrainingVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelTrainingVersion}</CodeBlock>
</TabItem>

</Tabs>

## Delete

### Delete a Model

You can delete a model by using the `model_id` parameter.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteModel}</CodeBlock>
</TabItem>

</Tabs>

### Delete a Model Version

You can also delete a specific version of a model with the `model_id` and `version_id` parameters.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteModelVersion}</CodeBlock>
</TabItem>

</Tabs>

### Delete all Models

If you would like to delete all models associated with an application, you can also do that. 

:::caution

Please proceed with extreme caution as deleted models cannot be recovered.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteAllModels}</CodeBlock>
</TabItem>

</Tabs>

## Train

### Train a Model

When you train a model, you are telling the system to look at successfully indexed images with concepts you've provided and learn from them. This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.

:::tip

You can repeat this operation as often as you like. By adding more images with concepts and training, you can get the model to predict exactly how you want it to.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>

</Tabs>

## Predict

### Predict With a Model

Once you have trained a model, you are ready to use the new model to make predictions. The predictions returned will only contain the concepts that you told it to see.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonPredictModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPredictModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodePredictModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaPredictModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPredictModel}</CodeBlock>
</TabItem>

</Tabs>

## Search

### Search Models by Name and Type

You can search all your models by name and type of model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchModelsName}</CodeBlock>
</TabItem>

</Tabs>
