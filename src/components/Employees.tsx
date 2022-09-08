import React from "react";
import { useQuery } from "react-query";
import { getAllPeople } from "../sanityClient";

function useEmployees() {
  return useQuery(["employees"], async () => {
    const people = await getAllPeople();
    return people;
  });
}

export const Employees = () => {
  const { data: employees, isFetching } = useEmployees();

  if (isFetching || !employees) return <div>Laster...</div>;

  return <div>TODO?: Ansatte?</div>;
};
