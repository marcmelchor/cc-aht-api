# AHT CODE CHALLENGE - `SOURCE`

An express application coded on Typescript to extract the EtLT Process.


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
    - [API Source](#api-source)
    - [API Mini Transform and Sink](#api-mini-transform-and-sink)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Project Overview

The `cc-aht-extract` is the second step in order to source the [EtLT](https://www.integrate.io/blog/what-is-etlt/) process flow connecting the `Mini Transform and Sink` section.
Following the [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) graph theory.


## Features

- ### API Source
  Is where is consumed the request from the `Producer`.

- ### API Mini Transform and Sink
  Getting the data from the API above, is sent to the `Mini Transform and Sink` app.


## Installation

Follow this steps to get `cc-aht-extract` up and running:

1. Be sure to have Node.js and npm installed in your machine.
2. Clone this repository `git clone https://github.com/marcmelchor/cc-aht-extract.git`
3. Navigate to the project folder: `cd cc-aht-extract`
4. Install dependencies: `npm install`
5. Start application: `npm start`


## Usage

Once the application is up and running, you can hit the API on `http://localhost:4001`.

- Get the `DWH (Data Warehouse)` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-dwh-psql`
- Get the `Business Transit` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-business-transit`
- Get the `Transofrm and Sink` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-transform-and-loading`
- Get the `Producer` app and running, you can find it on `https://github.com/marcmelchor/cc-aht-producer`


## Configuration

By default, all the configuration variables are set, but you can modify them on the `./src/environments/environment.ts`.

```
export const environment = {
  authSourceToken: 'YM%Ln#c7Bg94MyAHrs$n4DQnjk$$vErH',
  port: 4001,
  ...
};

```


## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`
3. Make changes and commit: `git commit -am 'Add new feature'`
4. Push the branch: `git push origin feature-new-feature`
5. Open a pull request.


## License

This project is licensed under the <u>[MIT License](https://opensource.org/license/mit/)</u>.


## Contact

For questions or feedback, you can reach me at <u>marc.melchor@outlook.com</u> or follow me on <b>LinkedIn</b> <u>@marc-melchor</u>. 
