import { Typography } from "@mui/material";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

const data = [
  {
    title: "title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus a pellentesque sit. Et netus et malesuada fames. Ac turpis egestas sed tempus. Nam aliquam sem et tortor consequat id. Eget nulla facilisi etiam dignissim. Adipiscing commodo elit at imperdiet dui. Donec et odio pellentesque diam volutpat commodo.",
  },
  {
    title: "title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Mus mauris vitae ultricies leo. Ultrices dui sapien eget mi proin sed libero enim. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ",
  },
  {
    title: "title 3",
    content:
      "Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In aliquam sem fringilla ut morbi tincidunt augue. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Eu lobortis elementum nibh tellus. Faucibus ornare suspendisse sed nisi lacus sed viverra. Tempor id eu nisl nunc. Libero nunc consequat interdum varius sit amet. Sem fringilla ut morbi tincidunt augue. Feugiat pretium nibh ipsum consequat nisl vel. Vulputate ut pharetra sit amet. Mi sit amet mauris commodo quis imperdiet. Viverra nam libero justo laoreet sit amet cursus sit amet.",
  },
  {
    title: "title 4",
    content:
      "Mi in nulla posuere sollicitudin aliquam. Donec massa sapien faucibus et molestie ac feugiat. Commodo sed egestas egestas fringilla phasellus. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Sit amet est placerat in egestas erat imperdiet. Cursus euismod quis viverra nibh cras.",
  },
  {
    title: "title 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus a pellentesque sit. Et netus et malesuada fames. Ac turpis egestas sed tempus. Nam aliquam sem et tortor consequat id. Eget nulla facilisi etiam dignissim. Adipiscing commodo elit at imperdiet dui. Donec et odio pellentesque diam volutpat commodo.",
  },
];

export default function QuestionPanel() {
  const [score, setScore] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const toNextPage = () => setCardNum((current) => current + 1);
  const handleYes = () => {
    setScore((current) => current + 1);
    toNextPage();
  };
  const handleNo = () => {
    setScore((current) => current);
    toNextPage();
  };
  return (
    <>
      <QuestionCard
        num={cardNum}
        title={data[cardNum]?.title}
        content={data[cardNum]?.content}
        type="agree or disagree"
        max={data.length}
        score={score}
        handleNo={handleNo}
        handleYes={handleYes}
      />
    </>
  );
}
