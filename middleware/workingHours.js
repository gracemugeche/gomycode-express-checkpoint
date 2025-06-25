function workingHours(req, res, next) {
  const date = new Date();
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = date.getHours(); // 0 - 23

  const isWorkingDay = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWorkingDay && isWorkingHour) {
    next();
  } else {
    res.send(
      "<h1>⏳ Sorry, the site is only available Monday to Friday from 9AM to 5PM.</h1>"
    );
  }
}

module.exports = workingHours;
