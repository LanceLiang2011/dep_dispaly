import { Button, Stack } from "@mui/material";

const ButtonToggle = ({ handleClick, selected, buttonList }) => {
  return (
    <Stack direction="row" spacing={3}>
      {buttonList.map((button) => (
        <Button
          key={button.name}
          id={button.name}
          variant={selected === button.name ? "contained" : "outlined"}
          onClick={handleClick}
        >
          {button.text}
        </Button>
      ))}
    </Stack>
  );
};

export default ButtonToggle;
