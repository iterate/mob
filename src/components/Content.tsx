import React from "react";
import { useQuery } from "react-query";
import { getForside } from "../sanityClient";

function useContent() {
  return useQuery(["content"], async () => {
    const people = await getForside();
    return people;
  });
}

export const Content = () => {
  const { data, isFetching } = useContent();

  if (!data || isFetching) {
    return <div>Laster...</div>;
  }
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Velkommen til Iterate</h1>
      {data[0].facts[0].text}
    </div>
  );
};
