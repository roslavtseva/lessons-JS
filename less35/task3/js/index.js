import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, clearRepoList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: ""
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");
const listElem = document.querySelector(".repo-list");

//пошук по ім'ю
const onSearchUser = () => {
  showSpinner();
  clearRepoList();
  const userName = userNameInputElem.value;
  fetchUserData(userName) //запрос даних користувача
    .then(userData => {
      //прийшли дані
      renderUserData(userData); //відмалювали
      return userData.repos_url; //передаєм дані наст обробнику
    })
    .then(url => fetchRepositories(url)) // запрос за списком
    .then(reposList => {
      renderRepos(reposList); //відмальов список
    })
    .catch(err => {
        alert(err.message);
    })
    .finally(() => {
        hideSpinner();

    })
};

showUserBtnElem.addEventListener("click", onSearchUser);
