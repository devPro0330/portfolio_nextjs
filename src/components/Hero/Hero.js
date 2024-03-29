import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Thanks To <br />
          Visit My Portfolio
        </SectionTitle>
        <SectionText>
          Quality focused creative web developer with 9+ years of experience in
          website development using modern UI/UX building technologies and well
          tested/security backend, based on customer satisfy.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
