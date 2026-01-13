import toast from "../../../Back-end/utils/toast";
import api from "./axios";

export const play = async function () {
  try {
    const res = await api.get("/game/play");

    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    toast.show("error", err.response?.data.message || "Failed to play");
    console.error(err);
  }
};

export const guess = async function (guess) {
  try {
    const res = await api.post(
      "/game/guess",
      { guess },
      { withCredentials: true }
    );

    return res.data.data;
  } catch (err) {
    toast.show("error", err.response?.data.message || "Failed to guess");
    console.error(err);
    return err;
  }
};

export const getWord = async function () {
  try {
    const res = await api.get("/game/getWord");
    return res.data.word;
  } catch (err) {
    toast.show("error", err.response?.data.message || "Failed to get word");
    console.error(err);
  }
};
