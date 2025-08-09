import css from "./Notification.module.css";

interface NotificationProps {
  message: string;
}

function Notification({ message }: NotificationProps) {
  return <p className={css.notification}>{message}</p>;
}

export default Notification;