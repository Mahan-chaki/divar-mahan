import { useState } from "react";

import styles from "./CategoryForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";
import AddCategoryNotif from "./AddCategoryNotif";
import DeleteCategory from "./DeleteCategory";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  return (
    <div className={styles.form}>
      <form onChange={changeHandler} onSubmit={submitHandler}>
        <h3>دسته بندی جدید</h3>
        {!!error && <p>مشکلی پیش امده است</p>}
        {data?.status === 201 && <AddCategoryNotif />}
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="slug">اسلاگ</label>
        <input type="text" name="slug" id="slug" />
        <label htmlFor="icon">آیکون</label>
        <input type="text" name="icon" id="icon" />
        <button type="submit" disabled={isLoading}>
          ایجاد
        </button>
      </form>
      <DeleteCategory />
    </div>
  );
}

export default CategoryForm;
