
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wilsonfsouza/github-explorer">
  <a href="https://github.com/wilsonfsouza/happy-frontend-web/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wilsonfsouza/github-explorer">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F26C6C">


  <a href="https://www.linkedin.com/in/wilsonfsouza/">
    <img alt="Made by Wilson Franca" src="https://img.shields.io/badge/made%20by-Wilson%20Franca-%230AA186">
  </a>
</p>

<h1 align="center">
    <img alt="GitHub Explorer" title="#GitHubExplorer" src="./assets/images/banner.png" />
</h1>

<h4 align="center">
	GitHub explorer
</h4>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#user-content-️-user-stories">User Stories</a> •
 <a href="#user-content-️-features">Features</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-how-to-run-the-project">How to run</a> •
 <a href="#-technologies">Technologies</a> •
 <a href="#-author">Author</a> •
 <a href="#user-content--license">License</a>
</p>


## 💻 About the project

Github Explorer is a React project that uses the GitHub API to find repositories you might be interested in, allowing the user to browse through their open issues.

### Live Preview:

<a href="https://hungry-mahavira-6f0d9b.netlify.app/" target="_blank"><img alt="Netlify" src="https://img.shields.io/badge/netlify%20-%23000000.svg?&style=for-the-badge&logo=netlify&logoColor=00ac9e"/></a>


### Layout:

Layout designed by Tiago Luchtenberg:

<a href="https://www.figma.com/file/M25kKsazXcMv54lFaWNqoN/Github-Explorer-UI?node-id=0%3A1" target="_blank"><img alt="Figma" src="https://img.shields.io/badge/figma%20-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white"/></a>

---

## ⭐ User Stories

- A user can search for a GitHub repository by typing the `username/repository-name`
- A user can list searched repositories
- When clicking on a repository, a user can see repository stars, forks, and open issues
- A user can navigate to a specific issue thread on GitHub by clicking on the card
- A user can switch themes for night reading
- A user must be able to navigate between pages

---

## ⚙️ Features

- Search
  - Search by GitHub repository by typing the `username/repository-name`
  - Search bar input gets validated, so no empty searches are allowed

- Repositories
  - History of searched repositories is displayed on the initial page
  - Repository card is animated on mouse-over
  - Each repository card display the photo of the repository's owner, `username/repository-name`, and description
  - You can see more information about that repository by clicking on it

- Repository Information Page
  - You can see the repository stats (stars, forks, and open issues)
  - Each open issue is linked to the open issue on Github, so you can open it on a new tab or click to be forwarded to it
  - Each open issue card displays the issue title followed by the GitHub user who opened that issue

- Theme (*New*)
  - You can switch between light and dark themes
  - The theme is a persisted state with its mode saved on local storage, so it will not be lost on page refresh
---

## 🎨 Layout

<p align="center" style="display: inline-flex; align-items: flex-start; justify-content: center;">
  <img style="max-width: 1100px;" alt="GitHub Explorer" title="#GitHub-Explorer" src="./assets/images/intro.gif" width="100%">
</p>

### Web

<p align="center" style="display: inline-flex; align-items: flex-start; justify-content: center;">
  <img style="margin-right: 5px; max-width: 400px;" alt="Landing Page Light Theme" title="#LandingPageLightTheme" src="./assets/images/light-home.png" width="100%">

  <img style="max-width: 400px;" alt="RepoPage Light Theme" title="#RepoPageLightTheme" src="./assets/images/light-info.png" width="100%">
</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img style="margin-right: 5px; max-width: 400px;" alt="Landing Page Dark Theme" title="#LandingPageDarkTheme" src="./assets/images/dark-intro.png" width="100%">

  <img style="max-width: 400px;" alt="RepoPage Dark Theme" title="#RepoPageDarkTheme" src="./assets/images/dark-info.png" width="100%">
</p>

---

## 🚀 How to run the project

### Requirements

Initial requirements:
[Git](https://git-scm.com), [Yarn](https://yarnpkg.com/), and a code editor of your choice.


#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:wilsonfsouza/github-explorer.git

# Access the folder in your terminal/cmd/cli
$ cd github-explorer

# Install all dependencies
$ yarn install

# Start the app in development mode
$ yarn start

# The application will open at port:3000 - access http://localhost:3000

```

---

## 🛠 Technologies

The following tools were used in this project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[React Switch](https://github.com/markusenglund/react-switch)**
-   **[Styled-components](https://styled-components.com/)**
-   **[Polished](https://polished.js.org/)**

> See the file  [package.json](https://github.com/wilsonfsouza/github-explorer/blob/master/package.json)

#### [](https://github.com/wilsonfsouza/github-explorer#utilities)**Utilities**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Icons:  **[Feather Icons](https://feathericons.com/)**
-   Font-family:  **[Roboto](https://fonts.google.com/specimen/Roboto)**


---

## 💪 How to contribute to this project

1. **Fork** the project.
2. Start a new branch with your changes: `git checkout -b my-new-feature`
3. Save it and create a commit message describing what you have done: `git commit -m "feature: My new feature"`
4. Send your alterations: `git push origin my-feature`


---

## 👨‍💻 Author

<br/>
<h3 style="display: flex; align-items: center; justify-content: flex-start;">
 <img style="border-radius: 50%; margin-right: 20px; width: 80px;" src="https://avatars0.githubusercontent.com/u/21347383?s=460&u=fdb399c92e369762d45d6495cbd2e87eef9e4d65&v=4" width="100px;" alt=""/>
 <br />
 <sub>Wilson Franca</sub></h3>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Wilson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wilsonfsouza/)](https://www.linkedin.com/in/wilsonfsouza/)
[![Gmail Badge](https://img.shields.io/badge/-wilson.franca.92@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wilson.franca.92@gmail.com)](mailto:wilson.franca.92@gmail.com)

---

## 📝 License

This project is being developed under [MIT License](./LICENSE).

Made with ❤️ by Wilson Franca 👋

