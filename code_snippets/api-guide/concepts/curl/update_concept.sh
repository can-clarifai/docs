curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/concepts" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "concepts": [
      {
        "id": "cat",
        "name": "New Cat Name"
      }
      ],
    "action": "overwrite"
  }' 