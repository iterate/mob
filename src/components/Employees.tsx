import React from "react";
import { useQuery } from "react-query";
import { getAllPeople, urlFor } from "../sanityClient";

function useEmployees() {
  return useQuery(["employees"], async () => {
    const people = await getAllPeople();
    return people;
  });
}

export const Employees = () => {
  const { data: employees, isFetching } = useEmployees();

  if (isFetching || !employees) return <div>Laster...</div>;

  return (
    <div>
      <div>
        <h1>Våre ansatte</h1>
      </div>
      <div
        id="Employees"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "pink",
        }}
      >
        {employees.map((person) => (
          <div style={{ padding: "20px" }}>
            <h3>{person.name}</h3>
            <p>{person.email}</p>
            <p>{person.phone}</p>
            <p>{person.title.nb}</p>
            <img
              style={{ width: "200px", maxHeight: "400px" }}
              src={urlFor(person.image).url()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
