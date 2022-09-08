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
  return <div>TODO?: Content</div>;
};
