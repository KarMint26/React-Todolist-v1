import React from "react";
import { getDataFromAPI } from "../api";

export default function useFetch() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const resultData = () => {
      getDataFromAPI()
        .then((res) => {
          setData(res);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
          setLoading(false);
        });
    };
    resultData();
  });

  return { loading, error, data };
}
