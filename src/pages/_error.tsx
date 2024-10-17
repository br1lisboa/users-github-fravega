import React from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { Box, Button, Container } from "@mui/material";
import { FeedbackResult } from "@/components";

interface ErrorPageProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const router = useRouter();

  return (
    <Container>
      <Box
        display="flex"
        paddingY={10}
        gap={5}
        alignItems="center"
        flexDirection="column"
      >
        <FeedbackResult
          src="/images/error-removebg-preview.png"
          alt={
            statusCode === 404
              ? "La página que buscas no existe."
              : "Ocurrió un error en el servidor."
          }
        />

        <Button onClick={() => router.push("/")}>Go back to the future</Button>
      </Box>
    </Container>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
