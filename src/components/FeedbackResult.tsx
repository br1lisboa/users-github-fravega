import { Box } from "@mui/material";
import Image from "next/image";

type FeedbackResultProps = {
  alt: string;
  src: string;
};

export function FeedbackResult({ alt, src }: FeedbackResultProps) {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image alt={alt} src={src} width={900} height={500} />
    </Box>
  );
}
