export default function greeting(): string {
  const date = new Date();
  let hours = date.getHours();
  let message = '';

  if (hours < 12) {
    message = 'Good morning';
  }

  if (hours >= 12 && hours < 18) {
    message = 'Good afternoon';
  }

  if (hours >= 18) {
    message = 'Good evening';
  }

  return message;
}
