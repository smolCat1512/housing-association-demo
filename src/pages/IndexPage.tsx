import * as React from "react";
import { styled } from "@twilio-paste/core/styling-library";
import { Box, BoxStyleProps } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Option, Select } from "@twilio-paste/core/select";
import { Table, Tr, Td, THead, Th, TBody } from "@twilio-paste/core/table";
import { Anchor } from "@twilio-paste/anchor";

interface FancyBoxProps {
  padding: BoxStyleProps["padding"];
}
const FancyBox: React.FC<FancyBoxProps> = styled(Box)({
  width: "40%",
});

export const IndexPage: React.FC = () => {
  return (
    <Box
      display="flex"
      padding="space100"
      flexDirection="column"
      rowGap="space40"
    >
      <Box display="flex" justifyContent="space-between">
        <Text as="p">Name: John Smith</Text>
        <Text as="p">Last call: 14/06/2022 11:00am</Text>
      </Box>
      <Text as="p">Address: 123 Fake Street</Text>
      <Text as="p">Local Authority: Greater Manchester Combined Authority</Text>
      <Text as="p">Council: Salford</Text>
      <Text as="p">Daytime Phone Number: +447516 029742</Text>
      <Text as="p">Evening Phone Number: +447999 123456</Text>
      <Text as="p">Start of tenancy: 01/01/2022</Text>

      <Box
        paddingTop="space100"
        width="40%"
        flexDirection="row"
        display="flex"
        columnGap="space60"
      >
        <Select>
          <Option value="category">Category</Option>
        </Select>

        <Select>
          <Option value="status">Status</Option>
        </Select>
      </Box>

      <Box display="flex" paddingTop="space100">
        <Table>
          <THead>
            <Tr>
              <Th>Ref</Th>
              <Th>Description</Th>
              <Th>Category</Th>
              <Th>Status</Th>
              <Th>Tenant Review</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="/page1">#SL124364</Anchor>
              </Td>
              <Td>Top floor leak from roof</Td>
              <Td>Structural</Td>
              <Td>Open</Td>
              <Td>n/a</Td>
            </Tr>
            <Tr>
              <Td>
                <Anchor href="">#SL463124</Anchor>
              </Td>
              <Td>Damage to carpet</Td>
              <Td>Flooring</Td>
              <Td>Closed</Td>
              <Td>&#11088; &#11088; &#11088;</Td>
            </Tr>
            <Tr>
              <Td>
                <Anchor href="">#SL182354</Anchor>
              </Td>
              <Td>Radiator leaking</Td>
              <Td>Plumbing</Td>
              <Td>Closed</Td>
              <Td>&#11088;</Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    </Box>
  );
};
