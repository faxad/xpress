An implementation of ReSTful web services.

### Technology Stack
- Node JS
- Express
- MongoDB
- Red Hat OpenShift 

### Usage & Configuration

Create a `.env` file in the root directory and set the following environment variables

```dosini
DB_HOST=<MONGO_CONNECTION_STRING>
SECRET=<AUTH_SECRET>
PORT=<PORT>
LOGGER_LEVEL=info
LOGGER_ENABLED=true
ENV=dev
```
### Interactive Demo & Documentation

https://faxad.github.io/xpress


### Generate Documentation

Configure API Server address in *package.json*

```
apidoc: {
    url : <API_SERVER_ADDRESS>,
    sampleUrl: <API_SERVER_ADDRESS>
  },
```

Execute the following to generate API documentation

```node
apidoc -i ./server/controllers -o docs/
```
