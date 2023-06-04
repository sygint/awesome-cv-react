# Awesome CV React

This is highly inspired by [Awesome-CV](https://github.com/posquit0/Awesome-CV). It's my attempt at a port to React for an easier config via JSON, simpler styling via CSS, simpler layout with JSX, and easier dependency management via npm.

## Preview

You can see [PDF](preview/resume.pdf)

[![Résumé](preview/resume_page_1.png)](preview/resume.pdf)

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Configuration

All of the config is found in `details.json` in the root directory. It's fairly self explanatory, feel free to hit me up if you have any questions.

# Available Scripts

In the project directory, you can run:

### `npm run build`

Builds your `cv.pdf` to the `build` folder. It utilizes [@react-pdf/renderer](https://github.com/diegomura/react-pdf) to render the JSX into a `.pdf`.

## `npm run dev`

Runs a nodemon watch script that watches for changes and rebuilds your `cv.pdf`.

## Work In Progress

There are many features supported by awesome-cv that are yet to be supported in this, including Honors & Awards, Certifications, and Education, as well as the cover letter.

I hope to work on these in the near future.