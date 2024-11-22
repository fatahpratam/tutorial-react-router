// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  /* const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
    return;
  }, []); */
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub followers: {data.followers}
      <img src={data.avatar_url} width='300' alt="Profile picture" />
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  const data = await response.json()
  console.log(data);
  return data;
}