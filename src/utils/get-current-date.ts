export function getCurrentDate() {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0")
  const currentYear = currentDate.getFullYear()
  const dateArray = [currentYear, currentMonth, currentDay]
  const formattedCurrentDate = dateArray.join("-")

  return formattedCurrentDate
}