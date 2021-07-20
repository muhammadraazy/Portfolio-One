import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { data } from "../../constants/constants" 

const Acomplishments = () => {
    return (
       <Section>
           <SectionTitle> Self Accomplishment </SectionTitle>
           <Boxes>
               { data.map(({number, text}, i) => (
                    <Box key={i}>
                          <BoxNum> { number } + </BoxNum>
                          <BoxText> { text }  </BoxText>
                    </Box>
               )) }
           </Boxes>
       </Section>
    )
  }

export default Acomplishments;
