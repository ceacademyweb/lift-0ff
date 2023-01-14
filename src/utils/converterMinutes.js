export const converterMinutes = (seconds) => {
  let minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? '0' + minute : minute;
  let second = seconds % 60;
  second = second < 10 ? '0' + second : second;
  return `${minute}:${second}`;
};
