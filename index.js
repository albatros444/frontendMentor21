const notifications = document.querySelectorAll(".card__notification");
const markAllAsRead = document.querySelector("button");

const count = document.querySelector(".count");

notifications.forEach((notif) => {
  notif.addEventListener("click", () => {
    notif.classList.remove("new");
    const newNotifs = document.querySelectorAll(".new");
    count.innerText = newNotifs.length;
  });
});
markAllAsRead.addEventListener("click", () => {
  notifications.forEach((notif) => {
    notif.classList.remove("new");
    count.innerText = 0;
  });
});
