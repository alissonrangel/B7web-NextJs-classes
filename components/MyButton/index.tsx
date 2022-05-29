
import styles from './MyButton.module.css';

type Props = {
  label: string;
  onClick: () => void;
}

const MyButton = ({label, onClick}: Props) => {
  return (
    <>
      <button onClick={onClick} className={styles.myBtn}>{label}</button>
    </>
  )
}

export default MyButton;