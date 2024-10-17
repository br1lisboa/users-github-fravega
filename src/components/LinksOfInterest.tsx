import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useIsMobile } from "@/hooks";

type InterestedLinksProps = {
  children: React.ReactNode;
};

const LinksOfInterest: React.FC<InterestedLinksProps> & {
  Title: React.FC<{ children: React.ReactNode }>;
  Item: React.FC<{ children: React.ReactNode }>;
  Link: React.FC<{ href: string; children: React.ReactNode }>;
} = ({ children }) => {
  return <Box>{children}</Box>;
};

LinksOfInterest.Title = function Title({ children }) {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </Typography>
  );
};

LinksOfInterest.Item = function Item({ children }) {
  const isMobile = useIsMobile();

  const direction = isMobile ? "column" : "row";
  const align = isMobile ? "flex-start" : "center";
  const gap = isMobile ? 0 : 1;

  return (
    <Box
      sx={{
        display: "flex",
        gap: gap,
        alignItems: align,
        flexDirection: direction,
      }}
    >
      {children}
    </Box>
  );
};

LinksOfInterest.Link = function LinkItem({ href, children }) {
  const isMobile = useIsMobile();
  const strong = isMobile ? "bold" : "normal";

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Typography
        variant="h6"
        sx={{ textDecoration: "underline", fontWeight: strong }}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default LinksOfInterest;
