const listElem = document.querySelector(".repo-list");

export const clearRepoList = () => {
  listElem.innerHTML = "";
};

export const renderRepos = reposList => {
  const reposListElem = reposList.map(({ name }) => {
    const listElem = document.createElement("li");
    listElem.classList.add("repo-list__item");
    listElem.textContent = name;

    return listElem;
  });
  clearRepoList();
  
  listElem.append(...reposListElem);
};
