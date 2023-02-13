import * as React from "react";
import Typography from "@mui/material/Typography";
import DevVsEd from "../interactive-images/DebVsEd.component";
import KnowledgeAccordion from "../../components/KnowledgeAccordion.component";

export default function WhatIs() {
  return (
    <div>
      <KnowledgeAccordion title="What is Disordered Eating?">
        <Typography>
          Disordered eating is a term used to describe a range of abnormal
          eating behaviours that do not warrant the diagnosis of an eating
          disorder. It includes a subset of behaviours that although similar, do
          not align with the diagnostic criteria of an eating disorder. As such,
          disordered eating is a descriptive phrase, not a clinical diagnosis.
        </Typography>
      </KnowledgeAccordion>
      <KnowledgeAccordion title="How is Disordered Eating different from an Eating Disorder?">
        <Typography>
          The primary and most significant difference between Eating Disorders
          and disordered eating is they are a clinical diagnosis.
        </Typography>
        <Typography>
          Eating Disorders can be defined as a group of mental health conditions
          that involve persistent disturbances in behaviour, perception,
          cognition, and affect. Those who suffer from eating disorders
          experience many disturbances in their day-to-day function and the
          severity and occurrence are much more frequent and severe than
          disordered eating.
        </Typography>
        <Typography>
          In Canada, Eating Disorders can be diagnosed by a psychiatrist,
          psychologist, or general practitioner based on a set of criteria
          derived from the Diagnostic and Statistical Manual of Mental
          Disorders, Fifth Edition (DSM-5) published by the American Psychiatric
          Association (APA). The criteria outlined in the DSM-5 include
          behavioural, emotional and weight alterations that affect an
          individual's physical, psychological and social function.
        </Typography>
        <Typography>
          There are several types of eating disorders that differ in physical
          and psychological symptoms. The most common types include Anorexia
          Nervosa, Bulimia Nervosa, Binge Eating Disorders, Avoidant/Restrictive
          Food Intake Disorder, and Other Specified Feeding and Eating
          Disorders. For more information on the different types of Eating
          Disorders please click{" "}
          <a
            href="https://www.nimh.nih.gov/health/topics/eating-disorders"
            target="_blank"
          >
            HERE
          </a>
          .
        </Typography>
        <DevVsEd />
      </KnowledgeAccordion>
      <KnowledgeAccordion title="The Continuum of Eating">
        <Typography>
          Eating can be viewed on a continuum that spans from healthy eating to
          disordered eating to eating disorders. Throughout our lives, we can
          experience fluctuations across the continuum based on our lifestyle,
          situations, and experiences. Regardless of where an individual falls
          on the continuum, their experience is as equally important as another
          and valid and deserving of counselling and support.
        </Typography>
        <br />
        <Typography sx={{ textDecoration: "underline" }}>
          Healthy Eating{" "}
        </Typography>
        <Typography>
          Healthy eating is different for everybody and depends on an
          individual's personal preferences, needs, cultural influences, and
          body composition. In general, healthy eating involves a balanced diet,
          a variety of foods, an appropriate calorie intake, and a healthy body
          weight. Individuals who demonstrate healthy eating behaviours are not
          preoccupied with their body image and perform regular bouts of
          exercise. They are intuitive with their body's needs and eat for
          nourishment, pleasure, and joy.{" "}
        </Typography>
        <br />
        <Typography sx={{ textDecoration: "underline" }}>
          Disordered Eating{" "}
        </Typography>
        <Typography>
          Individuals who experience disordered eating behaviours express
          reoccurring negative preoccupations and associations with food,
          dieting, exercise, and body image. This can include regular bouts of
          overeating and undereating, distress caused by body size and image,
          fixation and obsessiveness around exercise, and an unbalanced
          irregular diet. Individuals who experience disordered eating can
          experience a lack of self-worth and associate their food intake with
          their perception of themselves and others. This most often can result
          in feelings and shame and guilt.{" "}
        </Typography>
        <br />
        <Typography sx={{ textDecoration: "underline" }}>
          Eating Disorder{" "}
        </Typography>
        <Typography>
          Eating Disorders are a group of serious and complex mental health
          illnesses that are characterized by persistent disturbances in
          behaviours, thoughts and attitudes toward foods, eating, and body
          size. There are conditions that affect an individual's physical,
          psychological and social function and are clinically diagnosed.
          Individuals may experience restrictive eating, food avoidance, binge
          eating, purging or laxative misuse, and compulsive exercise depending
          upon their diagnosis. As such, this can result in severe alterations
          to their physical and mental function and impact their overall quality
          of life.{" "}
        </Typography>
      </KnowledgeAccordion>
      <KnowledgeAccordion title="Importance of Understanding & Taking Action ">
        <Typography>
          Understanding the influence disordered eating can have on your health
          and well-being is important as it can lead to further health
          complications.{" "}
        </Typography>
        <Typography>
          Disordered eating can have significant long-term health repercussions
          that can affect individuals physically and mentally. Individuals who
          demonstrate disordered eating behaviours can be at risk for the
          development of eating disorders, mood disorders, and other conditions
          including hypertension, diabetes, heart problems, and digestive
          issues.{" "}
        </Typography>
        <Typography>
          It is important to recognize the potential complications of disordered
          eating before potential problems could escalate. The way we eat and
          fuel our bodies is critical to our health and well-being therefore it
          is essential to intervene and use tools and resources to improve our
          relationship with our body and our mind.{" "}
        </Typography>
      </KnowledgeAccordion>
    </div>
  );
}
