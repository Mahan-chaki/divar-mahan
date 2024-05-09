import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { ColorRing } from "react-loader-spinner";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading });
  return (
    <div className={styles.list}>
      {isLoading ? (
        <ColorRing
          wrapperClass="loader"
          colors={["#03AED2", "#CAF4FF", "#C40C0C", "#FC4100", "#803D3B"]}
        />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p className={styles.id}>id: {i._id}</p>
            <p className={styles.slug}>slug: {i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
