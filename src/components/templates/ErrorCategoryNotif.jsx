import { useState } from "react";

import styles from "./AddCategoryNotif.module.css";

function ErrorCategoryNotif() {
  const [isVisible, setIsVisible] = useState(false);
  const [bia, setBia] = useState(true);
  if (bia) {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
    setBia(false);
  }
  return (
    <>
      {isVisible && <p className={styles.add}> با موفقیت حذف شد</p>}
    </>
  );
}

export default ErrorCategoryNotif;
