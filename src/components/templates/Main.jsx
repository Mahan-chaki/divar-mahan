import { ColorRing } from "react-loader-spinner";
import { sp } from "../../utils/numbers";
import { getAllPosts } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

import styles from "./Main.module.css"

function Main() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);

  console.log(data);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <ColorRing
          wrapperClass="loader"
          colors={["#03AED2", "#CAF4FF", "#C40C0C", "#FC4100", "#803D3B"]}
        />
      ) : (
        data?.data.posts.map((post) => (
          <div key={post._id} className={styles.card}>
            <div className={styles.info}>
              <p>{post.options.title}</p>
              <div>
                <p>{sp(post.amount)} تومان</p>
                <span>{post.options.city}</span>
              </div>
            </div>
            <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
          </div>
        ))
      )}
    </div>
  );
}

export default Main;
