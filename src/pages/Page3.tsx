import * as React from "react";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Button, Label, Select, Option, TextArea, Table, TBody, THead, Tr, Th, Td } from "@twilio-paste/core";
import { useNavigate } from "react-router-dom";

const Page3: React.FC = () => {
	const navigate = useNavigate();

  return (
    <Box
      display="flex"
      padding="space100"
      flexDirection="column"
      rowGap="space40"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="column" rowGap="space40" alignItems="center">
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

        <Box display="flex" flexDirection="column" rowGap="space40" alignItems="center">
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

        <Box display="flex" flexDirection="column" rowGap="space40" alignItems="center">
          <Box
            borderStyle="solid"
            borderRadius="borderRadiusCircle"
            borderColor="colorBorderWarning"
            height="30px"
            width="30px"
            backgroundColor="colorBackgroundBusy"
          />
          <Text as="p">Worker Allocated</Text>
        </Box>

        <Box display="flex" flexDirection="column" rowGap="space40" alignItems="center">
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

        <Box display="flex" flexDirection="column" rowGap="space40" alignItems="center">
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

      <Box paddingTop="space100" display="flex" flexDirection="row" justifyContent="space-between">
        <Text as="p">Ref: #SL124364</Text>
        <Button onClick={() => navigate("page3")} variant="primary">Allocate Worker</Button>
      </Box>

      <Box width="15vw">
        <Label htmlFor="category">Category:</Label>
        <Select id="category">
          <Option value="structural">Structural</Option>
        </Select>
      </Box>

      <Box width="15vw">
        <Label htmlFor="description">Description:</Label>
        <TextArea id="description">Top floor leak from roof</TextArea>
      </Box>

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
            <Td>12:00</Td>
            <Td>Inbound</Td>
            <Td>+44 7123 456789</Td>
            <Td>+44 7123 456789</Td>
            <Td>Completed</Td>
            <Td></Td>
            <Td>00:00:00</Td>
            <Td></Td>
          </Tr>
        </TBody>
      </Table>

    </Box>
  );
};

export default Page3;
