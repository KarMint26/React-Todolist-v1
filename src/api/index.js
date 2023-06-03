import axios from "axios";

export const getDataFromAPI = async () => {
  try {
    const response = await axios.get("http://localhost:5000/todo-list");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postDataAPI = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/todo-list", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDataAPI = async (id) => {
  try {
    const deleteData = await axios.delete(
      `http://localhost:5000/todo-list/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const putDataAPI = async (id, data) => {
  try {
    const patchData = await axios.put(
      `http://localhost:5000/todo-list/${id}`,
      data
    );
  } catch (error) {
    console.log(error.message);
  }
};
