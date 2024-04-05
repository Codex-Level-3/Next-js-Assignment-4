"use client";

import { useState } from "react";
import UserProfile from "../UserProfile";
import Navbar from "../Navbar";

export default function page() {
  const [name, setName] = useState("John");
  const [biography, setBiography] = useState("A teacher");
  const [hobbies, setHobbies] = useState(["reading", "cooking", "hiking"]);

  return (
    <>
      <h1>User Profile Page</h1>
      <Navbar />
      <UserProfile name={name} biography={biography} hobbies={hobbies} />
    </>
  );
}
