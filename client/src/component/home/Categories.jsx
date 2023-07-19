import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import React from "react";
import { categories } from "../../constants/data";
import styled from "@emotion/styled";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ed;
  color: #fff;
`;
const Categories = () => {
  return (
    <>
      <StyledButton variant="contained">CREATE BLOG</StyledButton>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
