import * as React from "react";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import {
  Button,
  Label,
  Select,
  Option,
  TextArea,
  Table,
  TBody,
  THead,
  Tr,
  Th,
  Td,
  Heading,
} from "@twilio-paste/core";

const Page3: React.FC = () => {
  return (
    <Box
      display="flex"
      padding="space100"
      flexDirection="column"
      rowGap="space40"
    >
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="80%"
        >
          <Box
            display="flex"
            flexDirection="column"
            rowGap="space40"
            alignItems="center"
          >
            <Box
              borderStyle="solid"
              borderRadius="borderRadiusCircle"
              borderColor="colorBorderSuccess"
              height="30px"
              width="30px"
              backgroundColor="colorBackgroundSuccess"
            />
            <Text as="p">Open</Text>
          </Box>

          <Box
            display="flex"
            width="150px"
            borderBottomStyle="solid"
            borderBottomColor="colorBorderWeak"
            marginBottom="space120"
          />

          <Box
            display="flex"
            flexDirection="column"
            rowGap="space40"
            alignItems="center"
          >
            <Box
              borderStyle="solid"
              borderRadius="borderRadiusCircle"
              borderColor="colorBorderSuccess"
              height="30px"
              width="30px"
              backgroundColor="colorBackgroundSuccess"
            />
            <Text as="p">Job Raised</Text>
          </Box>

          <Box
            display="flex"
            width="150px"
            borderBottomStyle="solid"
            borderBottomColor="colorBorderWeak"
            marginBottom="space120"
          />

          <Box
            display="flex"
            flexDirection="column"
            rowGap="space40"
            alignItems="center"
          >
            <Box
              borderStyle="solid"
              borderRadius="borderRadiusCircle"
              borderColor="colorBorderSuccess"
              height="30px"
              width="30px"
              backgroundColor="colorBackgroundSuccess"
            />
            <Text as="p">Worker Allocated</Text>
          </Box>

          <Box
            display="flex"
            width="150px"
            borderBottomStyle="solid"
            borderBottomColor="colorBorderWeak"
            marginBottom="space120"
          />

          <Box
            display="flex"
            flexDirection="column"
            rowGap="space40"
            alignItems="center"
          >
            <Box
              borderStyle="solid"
              borderRadius="borderRadiusCircle"
              borderColor="colorBorderWarning"
              height="30px"
              width="30px"
              backgroundColor="colorBackgroundBusy"
            />
            <Text as="p">Job Complete</Text>
          </Box>

          <Box
            display="flex"
            width="150px"
            borderBottomStyle="solid"
            borderBottomColor="colorBorderWeak"
            marginBottom="space120"
          />

          <Box
            display="flex"
            flexDirection="column"
            rowGap="space40"
            alignItems="center"
          >
            <Box
              borderStyle="solid"
              borderRadius="borderRadiusCircle"
              borderColor="colorBorderWarning"
              height="30px"
              width="30px"
              backgroundColor="colorBackgroundBusy"
            />
            <Text as="p">Closed</Text>
          </Box>
        </Box>
      </Box>

      <Box
        paddingTop="space100"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Heading as="h2" variant="heading20">
          Ref: #SL124364
        </Heading>

        <Button variant="primary">Close Job</Button>
      </Box>

      <Box display="flex" justifyContent="space-between" paddingTop="space60">
        <Box width="15vw">
          <Label htmlFor="category">Category:</Label>
          <Select id="category">
            <Option value="structural">Structural</Option>
          </Select>
        </Box>
        <Text as="p">Job ID: #12314756241</Text>
      </Box>

      <Box display="flex" justifyContent="space-between" paddingTop="space60">
        <Box width="15vw" paddingBottom="space100">
          <Label htmlFor="description">Description:</Label>
          <TextArea id="description">Top floor leak from roof</TextArea>
        </Box>
        <Text as="p">Worker name: Max Monstera</Text>
      </Box>

      <Heading as="h2" variant="heading20">
        Communication History
      </Heading>

      <Table>
        <THead>
          <Tr>
            <Th>Call Start Time</Th>
            <Th>Direction</Th>
            <Th>From</Th>
            <Th>To</Th>
            <Th>Outcome</Th>
            <Th>Recording</Th>
            <Th>Call Duration</Th>
            <Th>Notes</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>10/06/2022 10:00:12</Td>
            <Td>Inbound</Td>
            <Td>+447823162436</Td>
            <Td>+161 123475</Td>
            <Td>Concern Raised</Td>
            <Td>RE1028374618273648192X</Td>
            <Td>5 mins</Td>
            <Td>Call dropped out after 5 minutes - will retry in 10 minutes</Td>
          </Tr>
          <Tr>
            <Td>10/06/2022 10:15:23</Td>
            <Td>Outbound</Td>
            <Td>+161 123475</Td>
            <Td>+447823162436</Td>
            <Td>Voicemail left</Td>
            <Td>RE1295374618273648192X</Td>
            <Td>1 min</Td>
            <Td>Call did not pickup - voicemail left</Td>
          </Tr>
        </TBody>
      </Table>
    </Box>
  );
};

export default Page3;
