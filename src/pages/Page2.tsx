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
  Modal,
  ModalHeader,
  ModalHeading,
  Heading,
  ModalBody,
  ModalFooter,
  Badge,
  Stack,
} from "@twilio-paste/core";
import { useNavigate } from "react-router-dom";

const Page2: React.FC = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
              borderColor="colorBorderWarning"
              height="30px"
              width="30px"
              backgroundColor="colorBackgroundBusy"
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

        <Button onClick={handleOpen} variant="primary">
          Allocate Worker
        </Button>
      </Box>

      <Box width="15vw">
        <Label htmlFor="category">Category:</Label>
        <Select id="category">
          <Option value="structural">Structural</Option>
        </Select>
      </Box>

      <Box width="15vw" paddingBottom="space100">
        <Label htmlFor="description">Description:</Label>
        <TextArea id="description">Top floor leak from roof</TextArea>
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

      <Modal
        isOpen={isOpen}
        onDismiss={handleClose}
        size="default"
        ariaLabelledby="modal"
      >
        <ModalHeader>
          <ModalHeading>Allocate Worker</ModalHeading>
        </ModalHeader>
        <Box padding="space60">
          <ModalBody>
            <Table>
              <THead>
                <Tr>
                  <Th>Worker Name</Th>
                  <Th>Status</Th>
                  <Th>Current Job Postcode</Th>
                  <Th>Distance from current dwelling</Th>
                  <Th></Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>Max Monstera</Td>
                  <Td>
                    <Badge variant="neutral" as="span">
                      On Job
                    </Badge>
                  </Td>
                  <Td>M1 2NT</Td>
                  <Td>0.2 miles</Td>
                  <Td>
                    <Stack orientation="vertical" spacing="space20">
                      <Button variant="primary">Allocate as next job</Button>
                      <Button variant="primary">Book worker</Button>
                    </Stack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Sandra Eggs</Td>
                  <Td>
                    <Badge variant="neutral" as="span">
                      On Job
                    </Badge>
                  </Td>
                  <Td>WN3 6XA</Td>
                  <Td>22.9 miles</Td>
                  <Td>
                    <Stack orientation="vertical" spacing="space20">
                      <Button variant="primary">Allocate as next job</Button>
                      <Button variant="primary">Book worker</Button>
                    </Stack>{" "}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Joshua Jones</Td>
                  <Td>
                    <Badge variant="neutral" as="span">
                      On Job
                    </Badge>
                  </Td>
                  <Td>M5 4HU</Td>
                  <Td>0.6 miles</Td>
                  <Td>
                    <Stack orientation="vertical" spacing="space20">
                      <Button variant="primary">Allocate as next job</Button>
                      <Button variant="primary">Book worker</Button>
                    </Stack>{" "}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Emma Ross</Td>
                  <Td>
                    <Badge variant="neutral" as="span">
                      On Job
                    </Badge>
                  </Td>
                  <Td>M31 4BX</Td>
                  <Td>8.0 miles</Td>
                  <Td>
                    <Stack orientation="vertical" spacing="space20">
                      <Button variant="primary">Allocate as next job</Button>
                      <Button variant="primary">Book worker</Button>
                    </Stack>{" "}
                  </Td>
                </Tr>
              </TBody>
            </Table>
          </ModalBody>
        </Box>
      </Modal>
    </Box>
  );
};

export default Page2;
function useUID() {
  throw new Error("Function not implemented.");
}
