import React, { useState } from "react";
import Navbar from "./Navbar";
import CandidateContainer from "./CandidateContainer";
import { MdSouth } from "react-icons/md";

const ContentBar = () => {
  //   const [query, setQuery] = useState("");

  const list = [
    {
      id: 1,
      name: "Sriram K",
      organization: "Codingmart.pvt.limited",
    },
    {
      id: 2,
      name: "Naresh",
      organization: "Zoho.pvt.limited",
    },
    {
      id: 3,
      name: "Rithick",
      organization: "Naptol.pvt.limited",
    },
    {
      id: 4,
      name: "Ganesh",
      organization: "Techio.pvt.limited",
    },
    {
      id: 5,
      name: "Mukesh",
      organization: "Hundai.pvt.limited",
    },
    {
      id: 6,
      name: "Dhinesh",
      organization: "5k.pvt.limited",
    },
    {
      id: 7,
      name: "Dhanush",
      organization: "Grootan.pvt.limited",
    },
    {
      id: 8,
      name: "Raghu",
      organization: "Zepto.pvt.limited",
    },
    {
      id: 9,
      name: "Narendran",
      organization: "Needle.pvt.limited",
    },
    {
      id: 10,
      name: "Karhick",
      organization: "Google.pvt.limited",
    },
    {
      id: 11,
      name: "Elon",
      organization: "OpenAi.pvt.limited",
    },
    {
      id: 12,
      name: "Mark",
      organization: "Facebook.pvt.limited",
    },
    {
      id: 13,
      name: "Bill gates",
      organization: "Microsoft.pvt.limited",
    },
    {
      id: 14,
      name: "Nobita",
      organization: "Doraemon.pvt.limited",
    },
    {
      id: 15,
      name: "Shizuka",
      organization: "Cartoon.pvt.limited",
    },
  ];
  const [listOfCandidate, setListOfCandidate] = useState(list);

  const handleQuery = (e) => {
    if (e.target.value.length >= 1) {
      const filtered = list.filter((item) => {
        return (
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.organization.toLowerCase().includes(e.target.value)
        );
      });
      setListOfCandidate(filtered);
    } else {
      console.log(e.target.value);
      setListOfCandidate(list);
    }
  };

  return (
    <div className="w-[95vw] h-[100vh] ">
      <Navbar handleQuery={handleQuery} />
      <CandidateContainer
        listOfCandidate={listOfCandidate}
        setListOfCandidate={setListOfCandidate}
      />
    </div>
  );
};

export default ContentBar;
