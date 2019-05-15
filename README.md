# GamerNow
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"


If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.
## Install

    $ git clone https://github.com/bad-at-names/gamer_now.git
    $ cd gamer_now
    $ git pull
    $ npm install


## Start 

    $ npm start


## Update sources


A common way to update is by doing

    $ git pull
    $ npm install
## Features
# Fantasy league
- Allow users to create leagues that other users can join
- Allow users can join password protected leagues
- Allow users to charge an ante to create prizes for winners
- Allow users to pick their favorite players
- Allow users to see how players perform over time (graphs)

# Coaching forum
- Allow users to create posts
- Allow users to comment in threads
- Allow coach replies to be highlighted in some way

 #  1 on 1 coaching
 - Allow users to apply to coach and set their rate
- Require applicants to verify their in-game rank
- Allow users to rate their experience with that coach
- Allow user to book a time for coaching
- Allow coaches to write a biography to sell their service
- Allow coaches to set availability
## Languages & tools
### JavaScript

- [JSHint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [Browserify](http://browserify.org/) to handle allow us to write our client-side scripts with [es6 syntax](http://es6.github.io/) thanks to [es6ify](https://github.com/thlorenz/es6ify).
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [cssnext](http://cssnext.putaindecode.io) is used to write futureproof CSS for CSS vendor prefix under the hood).

_Autoprefixer_ is included and use [caniuse.com](http://caniuse.com/) database to avoid outdated prefixes. _You can forget CSS prefixes NOW._










