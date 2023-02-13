import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KnowledgeAccordion from "../../components/KnowledgeAccordion.component";

export default function WhatIs() {
  return (
    <div>
      <KnowledgeAccordion title="Distorted Body Thoughts"></KnowledgeAccordion>
      <KnowledgeAccordion title="Body Dysmorphia"></KnowledgeAccordion>
    </div>
  );
}
