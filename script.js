const emailInput = document.querySelector(".email__input");
const loginPassword = document.querySelector(".login__password");
const rememberCheckbox = document.querySelector(".remember__checkbox");
const lostPassword = document.querySelector(".lost__password");
const createAccount = document.querySelector(".create__account");
const loginButton = document.querySelector(".login__account--button");
const loginForm = document.querySelector(".login__container");
const navbarContainer = document.querySelector(".navbar__container");
const loginAlertError = document.querySelector(".login__alert--message");
const Dropdownmenu = document.querySelector(".user-dropdown");
const signOutButton = document.querySelector(".btn__sing--out");
const cancelSignOut = document.querySelector(".cancel__signout");
const alertMessage = document.querySelector(".alert__signout-message");

const account1 = {
  name: "Junior Nyatoti",
  email: "Junior@gmail.com",
  password: "1234566",
};
const account2 = {
  name: "Junior Nyatoti",
  email: "Junior@gmail.com",
  password: "1234566",
};
const account3 = {
  name: "Junior Nyatoti",
  email: "Junior@gmail.com",
  password: "1234566",
};
const account4 = {
  name: "Junior Nyatoti",
  email: "Junior@gmail.com",
  password: "1234566",
};
const accounts = [account1, account2, account3, account4];
const users = [{}];

const currentUser = accounts.find((user) => user.email === emailInput.value);

const createUsernames = function (accs) {
  accounts.forEach((accs) => {
    accs.name
      .toLowerCase()
      .split("")
      .map((names) => names[0])
      .join("");
  });
};

console.log(createUsernames(accounts));

loginButton.addEventListener("click", function (e) {
  const currentUser = accounts.find((user) => user.email === emailInput.value);
  if (currentUser?.password === loginPassword.value) {
    loginForm.classList.add("hidden");
    navbarContainer.classList.remove("hidden");
  } else {
    loginAlertError.classList.remove("hidden");
  }
  const html = `
  <div
  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
 
  >
  <div class="px-4 py-3">
    <span class="block text-sm text-gray-900 dark:text-white"
      >${currentUser.name}</span
    >
    <span
      class="block text-sm text-gray-500 truncate dark:text-gray-400"
      >${currentUser.email}</span
    >
  </div>
  
  `;
  Dropdownmenu.insertAdjacentHTML("beforebegin", html);
});

const signOutAlert = function (e) {};
signOutButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("welcome");
  alertMessage.classList.remove("hidden");
});
