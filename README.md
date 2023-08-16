# Smart Home Automation System with gRPC (TypeScript)

Welcome to the Smart Home Automation System project! This project aims to create a smart home automation system using gRPC for communication, allowing users to control and monitor devices such as lights, thermostats, and security cameras remotely.

## Features

- Control lights: Turn on/off lights remotely.
- Adjust thermostat: Set thermostat temperature remotely.
- Monitor security cameras: Access camera feeds remotely.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

**Clone the repository:**

```bash
git clone https://github.com/BaseMax/gRPCSmartHome.git
cd gRPCSmartHome
```

**Install dependencies for both the server and client:**

```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

## Usage

**Start the server:**

```bash
# Inside the server directory
npm start
```

**Start the client application:**

```bash
# Inside the client directory
npm start
```

Open your browser and navigate to `http://localhost:3000` to access the client application.

## Architecture

**Server:** Implements the gRPC service and communicates with actual devices.

**Client:** Provides a user interface to interact with the smart devices via the gRPC service.

## Directory Structure
```
smart-home-automation/
├── server/
│   ├── src/
│   │   ├── proto/          # gRPC proto files
│   │   ├── devices/        # Device control logic
│   │   ├── server.ts       # Main server implementation
│   │   └── ...
│   └── ...
│
├── client/
│   ├── src/
│   │   └── ...
│   └── ...
│
├── README.md               # Project documentation (this file)
└── ...
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository, create a feature branch, make your changes, and submit a pull request.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
