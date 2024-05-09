import { useState } from "react";

import styles from "./AddCategoryNotif.module.css";

function AddCategoryNotif() {
  const [isVisible, setIsVisible] = useState(false);
  const [bia, setBia] = useState(true);
  if (bia) {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
    setBia(false);
  }
  return (
    <>
      {isVisible && <p className={styles.add}>دسته بندی با موفقیت اضافه شد</p>}
    </>
  );
}

export default AddCategoryNotif;
