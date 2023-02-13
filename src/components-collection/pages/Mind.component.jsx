import { Box } from "@mui/material";
import { useState } from "react";
import BodyImage from "./mind-pages/BodyImage.component";
import WhatIs from "./mind-pages/WhatIs.component";
import ButtonToggle from "../components/ButtonToggle.component";

const Mind = () => {
  const buttonList = [
    {
      name: "what-is",
      text: "What is Disordered Eating?",
      component: <WhatIs />,
    },
    {
      name: "body-image",
      text: "Body Image",
      component: <BodyImage />,
    },
  ];

  const [selected, setSelected] = useState(buttonList[0].name);
  const handleClick = (event) => {
    setSelected(event.target.id);
  };
  let Component;
  for (const ele of buttonList) {
    if (selected === ele.name) Component = ele.component;
  }

  return (
    <Box>
      <ButtonToggle
        selected={selected}
        handleClick={handleClick}
        buttonList={buttonList}
      />
      <Box sx={{ marginTop: "2rem" }}>{Component}</Box>
    </Box>
  );
};

export default Mind;
