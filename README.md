# Attention Training

## Description

Attention Training is a project that helps you to know if you have an ADHD mental disorder and which type you may have. It gives you more information about the ADHD type you have and tips to help you improve your skills and overcome your challenges.

### Motivation:

Neurodiverse individuals traditionally struggle with focus, social interaction, time-management and memory. We want to provide educational systems tailored to high-variance individuals (e.g. ADHD, autism and dyslexia) building skills to address these unmet needs.

### Live Heroku Link: https://attention-training.herokuapp.com/

### Figma Prototype: https://www.figma.com/file/g0RBgTGKjNm0TAIxJcHD5W/Attention-training-k2?node-id=0%3A1

---

## Development:

### Archeticture:
#### Main Server:
  * The main server is a nodejs server that runs on Heroku.
  * HTML is served as a bundle from ```/client/build/index.html``` directory.
  * Server currently **only** serves the bundle file and has ***no other functionality***.
#### React:
  * Views are created with ```reactjs``` and ```antd``` (ant design).
  * A bundle file is created and exposed to the node server to be served.
  * Images, icons and fonts are stored in the ```/client/src/assets``` directory.
  * Routing is done in the ```index.js``` of ```/clients/src/components```
  * Global style is done via styled components in ```client/src/components/GlobalComponent```

### Run the website locally in dev mode (React):
  - Clone the project repo, and cd to it's directory.
  - change directory to client. `cd client`
  - Run `npm i` to install npm depends.
  - Run `npm start` to start the website.

### Flow of the app:
- Users answer a quiz questions and the answer is stored in `localStorage`.
- when the users click on X button and press OK it will firsltly clear the local storage then the incomplete quiz state is stored in local storage, After that it will be checked in the dashboard.

### Debugging and Troubleshooting:
run heroku command to see the heroku logs.
`heroku logs --tail --app attention-training`
