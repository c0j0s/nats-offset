# NATS-Offset
A collection of tools for interacting with NATS Server in a development environment.

The docker-compose starts the following services:
- A nats client webui for sending messages to NATS.
- A nats web-ui for visualising NATS server status and messages. (credits @sphqxe)
- A local instance of NATS service.

Access the webui at [http://localhost:3001/](http://localhost:3001/)

Initial Setup:
1. nats-client: 
    1. key in the nats-server address to start the connection.
    1. a producer section will be visible.
1. nats-webui:
    1. use the "Add Server" dialog to add the nats server.
    1. go to clients section from sidebar.
    1. add a client and subscribe to a subject to view the activities.