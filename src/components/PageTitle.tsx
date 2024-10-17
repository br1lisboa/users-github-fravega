import React from "react";
import { Typography, Box } from "@mui/material";
import { useIsMobile } from "@/hooks";

type PageTitleProps = {
  title: string;
};

export function PageTitle({ title }: PageTitleProps): React.ReactElement {
  const isMobile = useIsMobile();

  const paddingBottom = isMobile ? 2 : 8;

  return (
    <Box
      sx={{
        paddingTop: 8,
        paddingBottom: paddingBottom,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
