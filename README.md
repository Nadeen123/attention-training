# Attention Training

## About Attention Training

Attention Training is a project that helps you to know if you have an ADHD mental disorder and which type you may have. It gives you more information about the ADHD type you have and tips to help you improve your skills and overcome your challenges.

### Motivation:

Neurodiverse individuals traditionally struggle with focus, social interaction, time-management and memory. We want to provide educational systems tailored to high-variance individuals (e.g. ADHD, autism and dyslexia) building skills to address these unmet needs.

### Live Heroku Link: https://attention-training.herokuapp.com/

### Figma Prototype: https://www.figma.com/file/g0RBgTGKjNm0TAIxJcHD5W/Attention-training-k2?node-id=0%3A1

---

## Development:

### Archeticture:

#### Main Server:

- The main server is a nodejs server that runs on Heroku.
- HTML is served as a bundle from `/client/build/index.html` directory.
- Server currently **only** serves the bundle file and has **_no other functionality_**.

#### React:

- Views are created with `reactjs` and `antd` (ant design).
- A bundle file is created and exposed to the node server to be served.
- Images, icons and fonts are stored in the `/client/src/assets` directory.
- Routing is done in the `index.js` of `/clients/src/components`
- Global style is done via styled components in `client/src/components/GlobalComponent`

### Run the website locally in dev mode (React):

- Clone the project repo, and cd to it's directory.
- Change directory to client. `cd client`
- Run `npm i` to install npm depends.
- Run `npm start` to start the website.

### Flow of the app:

- Users answer a quiz questions and the answer is stored in `localStorage`.
- When the users click on X button and confirm they will lose all progress and be redirected to the `dashboard`.
- At the end of the quiz, scores are calculated and the user is redirected to their appropriate results.
- Users can view their results, basic information about ADHD, and different skills their own type of ADHD gives them.

### Debugging and Troubleshooting:

Run heroku command to see the heroku logs.
`heroku logs --tail --app attention-training`
