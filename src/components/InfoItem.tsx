import React from "react";
import { Typography, Box } from "@mui/material";

type InfoItemProps = {
  children: React.ReactNode;
};

type LabelProps = {
  children: React.ReactNode;
};

type ValueProps = {
  children: React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> & {
  Label: React.FC<LabelProps>;
  Value: React.FC<ValueProps>;
} = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingY: 1,
        paddingX: 2,
        gap: 1,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 3,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {children}
    </Box>
  );
};

InfoItem.Label = function Label({ children }) {
  return (
    <Typography
      variant="body1"
      sx={{
        fontWeight: "bold",
      }}
    >
      {children}:
    </Typography>
  );
};

InfoItem.Value = function Value({ children }) {
  const val = !children || children === "" ? "Not available" : children;
  return <Typography variant="body1">{val}</Typography>;
};

export default InfoItem;
