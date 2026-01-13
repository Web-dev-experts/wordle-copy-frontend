/* eslint-disable */
import api from "./axios";
import toast from "../../util/toast";

export const login = async function (email, password) {
  try {
    const res = await api.post("/users/login", { email, password });

    if (res.data.status === "success") {
      toast.show("success", "Successfully logged in!");
      return res.data.user;
    }
  } catch (err) {
    const message = err.response?.data?.message || "Something went wrong";

    throw new Error(message);
  }
};

export const signup = async function (user) {
  try {
    const res = await api.post("/users/signin", user);

    if (res.data.status === "success") {
      toast.show("success", "You are successfuly signed up!");
      return res.data.user;
    }
  } catch (err) {
    toast.show("error", err.response?.data.message || "Sign up failed ");
    throw err;
  }
};

export const logout = async function () {
  try {
    await api.get("/users/logout");
    toast.show("success", "Logged out successfully!");
  } catch (err) {
    toast.show("error", err.response?.data.message || "Log out failed ");
    console.error(err);
  }
};

export const getMe = async function () {
  try {
    const user = await api.get("/users/me", { withCredentials: true });
    return user.data;
  } catch (err) {
    toast.show(
      "error",
      err.response?.data.message || "Failed getting your information! "
    );
    console.error(err);
  }
};
