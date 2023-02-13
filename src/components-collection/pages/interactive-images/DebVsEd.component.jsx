import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import debImage from "../../../images/debed.png";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function DevVsEd() {
  return (
    <Box width={800} sx={{ position: "relative" }}>
      <img src={debImage} alt="Disordered Eating and ED" width={800} />

      <HtmlTooltip
        title={
          <Fragment>
            <Typography color="inherit">Behaviours: The way we act</Typography>
            <br></br>
            <p>
              {
                "Behaviour is how someone acts in response to their environment internally; their thoughts and feelings and externally; other people and situations. Distorted behaviours are present with both disordered eating and eating disorders and impacts an individuals actions towards what they eat and how they look."
              }
            </p>{" "}
            <br></br>
            <em>
              {"Example A: Avoids all carbs unless they have exercised enough."}
            </em>{" "}
            <br></br>
            <em>
              {
                "Example B: Looks at a menu and counts all the claroies of each meal in advance "
              }
            </em>
            <br></br>
            <em>
              {"Examples C: Overeats when they are upset about something. "}
            </em>
          </Fragment>
        }
      >
        <Button
          sx={{
            position: "absolute",
            top: "130px",
            left: "250px",
            color: "rgba(0,0,0,0)",
            height: "100px",
            width: "100px",
          }}
        >
          +
        </Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Fragment>
            <Typography color="inherit">Behaviours: The way we act</Typography>
            <br></br>
            <p>
              {
                "Behaviour is how someone acts in response to their environment internally; their thoughts and feelings and externally; other people and situations. Distorted behaviours are present with both disordered eating and eating disorders and impacts an individuals actions towards what they eat and how they look."
              }
            </p>{" "}
            <br></br>
            <em>
              {"Example A: Avoids all carbs unless they have exercised enough."}
            </em>{" "}
            <br></br>
            <em>
              {
                "Example B: Looks at a menu and counts all the claroies of each meal in advance "
              }
            </em>
            <br></br>
            <em>
              {"Examples C: Overeats when they are upset about something. "}
            </em>
          </Fragment>
        }
      >
        <Button
          sx={{
            position: "absolute",
            top: "130px",
            right: "240px",
            color: "rgba(0,0,0,0)",
            height: "100px",
            width: "100px",
          }}
        >
          +
        </Button>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Fragment>
            <Typography color="inherit">Cognition: The way we think</Typography>
            <br></br>
            <p>
              {
                "Cognition includes all the processes in which we accumulate knowledge. With an eating disorder, individuals experience a disturbance in their cognition causing inaccurate or exaggerated thoughts patterns such as black and white thinking, overgeneralizing, catastrophizing, blaming, unfavourable comparisons. "
              }
            </p>{" "}
            <br></br>
            <em>
              {
                "Example: “If I don’t exercise today then I won’t eat dinner tonight” "
              }
            </em>{" "}
          </Fragment>
        }
      >
        <Button
          sx={{
            position: "absolute",
            top: "130px",
            right: "90px",
            color: "rgba(0,0,0,0)",
            height: "100px",
            width: "100px",
          }}
        >
          +
        </Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Fragment>
            <Typography color="inherit">
              Perception: The way we perceive{" "}
            </Typography>
            <br></br>
            <p>
              {
                "Perception is the way we reconginze, organize and interpret sensory information from external stimuli. The way in which we perceive information is dependent upon our unique characteristics and experiences and dictates our ability to receive meaningful knowledge and act accordingly. An individual with an eating disorder will have a distorted perception of themselves and those around them. As such, they are challenged to recongize and process the reality of given situations. "
              }
            </p>{" "}
            <br></br>
            <em>
              {
                "Example: “A underweight female looks in the mirror and sees an obese figure.” "
              }
            </em>{" "}
          </Fragment>
        }
      >
        <Button
          sx={{
            position: "absolute",
            top: "300px",
            right: "90px",
            color: "rgba(0,0,0,0)",
            height: "100px",
            width: "100px",
          }}
        >
          +
        </Button>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Fragment>
            <Typography color="inherit">Affect: The way we feel</Typography>
            <br></br>
            <p>
              {
                "Affect is the outward expression of our feelings about ourselves and those around us through our mood and emotions. With eating disorders, an individuals affective experiences are disregulated which impacts their choices and perceptions of a given situation. As such, their ability to function efficiently throughout the day is distorted and can result in abnormal behaviours and actions. "
              }
            </p>{" "}
            <br></br>
            <em>
              {"Example: “Feels shame and guilt after eating and get upset” "}
            </em>{" "}
          </Fragment>
        }
      >
        <Button
          sx={{
            position: "absolute",
            top: "300px",
            right: "240px",
            color: "rgba(0,0,0,0)",
            height: "100px",
            width: "100px",
          }}
        >
          +
        </Button>
      </HtmlTooltip>
    </Box>
  );
}
