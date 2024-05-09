import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import { ColorRing } from "react-loader-spinner";
import { sp } from "../../utils/numbers";

import styles from "./PostList.module.css";

function PostList() {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  return (
    <div className={styles.list}>
      {isLoading ? (
        <ColorRing
          wrapperClass="loader"
          colors={["#03AED2", "#CAF4FF", "#C40C0C", "#FC4100", "#803D3B"]}
        />
      ) : (
        <>
          <h3>آگهی های شما</h3>
          {data.data.posts.map((post) => (
            <div key={post._id} className={styles.post}>
              <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post.createdAt).toLocaleDateString("fa-ir")}</p>
                <span>{sp(post.amount)} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
