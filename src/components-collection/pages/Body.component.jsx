import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import ButtonToggle from "../components/ButtonToggle.component";
import BodyComposition from "./body-page/BodyCompostition.component";
import Exercise from "./body-page/Exercise.component";
import Nutrition from "./mind-pages/Nutrition.component";

const Body = () => {
  const buttonList = [
    {
      name: "body-comp",
      text: "Body Composition",
      component: <BodyComposition />,
    },
    {
      name: "exercise",
      text: "Exercise",
      component: <Exercise />,
    },
    {
      name: "nutrition",
      text: "Nutrition",
      component: <Nutrition />,
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

export default Body;
