import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function QuestionCard({
  num,
  title,
  type,
  content,
  handleYes,
  handleNo,
  max,
  score,
}) {
  if (num >= max) {
    return (
      <Card sx={{ minWidth: 275, maxWidth: 720, margin: "4rem auto" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            result
          </Typography>
          <Typography variant="h5" component="div">
            Your Result
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 18 }}>
            Your Total Score Is {score}, some thing based on this?
            <br />
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="contained" color="primary">
            Some Resources
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 720, margin: "4rem auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Question Number {num + 1}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          {content}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained" color="success" onClick={handleYes}>
          YES
        </Button>
        <Button variant="contained" color="error" onClick={handleNo}>
          No
        </Button>
      </CardActions>
    </Card>
  );
}
