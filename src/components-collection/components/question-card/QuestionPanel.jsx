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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus a pellentesque sit. Et netus et malesuada fames. Ac turpis egestas sed tempus. Nam aliquam sem et tortor consequat id. Eget nulla facilisi etiam dignissim. Adipiscing commodo elit at imperdiet dui. Donec et odio pellentesque diam volutpat commodo.",
  },
  {
    title: "title 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus a pellentesque sit. Et netus et malesuada fames. Ac turpis egestas sed tempus. Nam aliquam sem et tortor consequat id. Eget nulla facilisi etiam dignissim. Adipiscing commodo elit at imperdiet dui. Donec et odio pellentesque diam volutpat commodo.",
  },
  {
    title: "title 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus a pellentesque sit. Et netus et malesuada fames. Ac turpis egestas sed tempus. Nam aliquam sem et tortor consequat id. Eget nulla facilisi etiam dignissim. Adipiscing commodo elit at imperdiet dui. Donec et odio pellentesque diam volutpat commodo.",
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
    setScore((current) => current - 1);
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
