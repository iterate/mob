import React from "react";
import { useQuery } from "react-query";
import { getForside, urlFor } from "../sanityClient";

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
    <div style={{}}>
      <h1>Velkommen til Iterate</h1>
      {data[0].facts[0].text}
      {data.map((element) => {
        return (
          <div>
            <img
              style={{ width: "200px", maxHeight: "400px" }}
              src={urlFor(element.artikler[0].forsidebilde).url()}
            />
          </div>
        );
      })}
    </div>
  );
};
