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

## Functionality

### 1. Control Lights

Users can remotely control the lights in their smart home through the client application. The server communicates with the actual smart light devices and sends commands to turn the lights on or off based on user input.

### 2. Adjust Thermostat

The thermostat functionality allows users to set and adjust the temperature in their home using the client application. The gRPC service interacts with the thermostat devices to update the temperature settings and ensure optimal comfort.

### 3. Monitor Security Cameras

Users can access live camera feeds from their security cameras via the client application. The server fetches the camera data and streams it to the client, providing real-time visual updates of the designated areas.

### 4. Real-time Updates

The smart home automation system leverages gRPC's bidirectional streaming to provide real-time updates. This means that when a user interacts with the system (e.g., turns on a light), the server sends immediate feedback to the client, ensuring a responsive user experience.

### 5. User Authentication and Security

To ensure the security and privacy of the smart home, the project includes user authentication mechanisms. Only authorized users can access and control the devices in their home. Password protection and secure token management are implemented to safeguard user data.

### 6. Device Status Monitoring

The client application provides users with the ability to monitor the status of their devices. Users can check whether lights are on or off, view the current thermostat settings, and observe the activity captured by security cameras.

### 7. Energy Efficiency Insights

The system may also include a feature that provides insights into energy consumption. Users can track their energy usage patterns, receive recommendations for energy-efficient settings, and contribute to a more sustainable home environment.

### 8. Automation and Scheduling (Future Enhancement)

A future enhancement could include the ability to create automation rules and schedules. For instance, users might set up rules to automatically turn off lights during specific hours or adjust the thermostat based on time of day.

## gRPC Commands or API Routes

**Lights Control**

- Turn On Lights
    Method: TurnOnLights
    Request: Empty
    Response: Success or error message
- Turn Off Lights
    Method: TurnOffLights
    Request: Empty
    Response: Success or error message

**Thermostat Control**

- Set Temperature
    Method: SetTemperature
    Request: Desired temperature
    Response: Success or error message

- Get Current Temperature
    Method: GetCurrentTemperature
    Request: Empty
    Response: Current temperature

**Security Cameras**

- Get Camera Feeds
    Method: GetCameraFeeds
    Request: Empty or camera ID
    Response: Camera feed stream

**Real-time Updates**

- Subscribe to Device Updates
    Method: SubscribeToDeviceUpdates
    Request: User authentication token
    Response: Real-time updates for device status changes

**User Authentication**

- User Registration

    Method: RegisterUser
    Request: Username, password, email
    Response: Success or error message

- User Login

    Method: Login
    Request: Username, password
    Response: Authentication token or error message

### API Routes (Web Application)

- `/lights/on`: Turn on lights
- `/lights/off`: Turn off lights
- `/thermostat/set`: Set thermostat temperature
- `/thermostat/get`: Get current thermostat temperature
- `/cameras/stream/:cameraId`: Access camera feeds
- `/auth/register`: User registration
- `/auth/login`: User login
- `/dashboard`: View device status and controls

## Roadmap

This project is an ongoing effort. Here are some planned enhancements:

- Integration with additional smart devices (e.g., smart locks, smart appliances).
- Voice command integration using natural language processing.
- Enhanced data visualization and analytics for energy consumption and device usage.

Your contributions and ideas are welcome to help shape the future direction of this project!

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository, create a feature branch, make your changes, and submit a pull request.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
