const timeElement = document.querySelector("[data-clock]");
const dateElement = document.querySelector("[data-date]");

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
});

const updateClock = () => {
  const now = new Date();
  timeElement.textContent = timeFormatter.format(now);
  timeElement.dateTime = now.toISOString();
  dateElement.textContent = dateFormatter.format(now);
};

updateClock();
window.setInterval(updateClock, 1000);
