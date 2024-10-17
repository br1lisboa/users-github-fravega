import { FeedbackResult, PageTitle } from "@/components";
import { UserType } from "@/types/users.types";
import { Box, Container, Grid2, Skeleton } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { AvatarFavorite, InfoItems, LinkInterest } from "./components";

type UserPageProps = {
  userData: Partial<UserType> | null;
  error?: string;
};

export default function UserPage({ userData, error }: UserPageProps) {
  if (error) {
    return (
      <FeedbackResult src="/images/error-removebg-preview.png" alt="Error" />
    );
  }

  if (!userData) {
    return <Skeleton animation="pulse" width={900} height={900} />;
  }

  return (
    <>
      <Head>
        <title>Fravega Challenge</title>
        <meta name="description" content="Fravega Challenge - Users GitHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <PageTitle title={`User ${userData.name}`} />
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <AvatarFavorite userData={userData} />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                flex: 1,
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <InfoItems userData={userData} />
            </Box>

            <Box
              sx={{
                width: "100%",
                flex: 1,
                paddingY: 2,
                gap: 1,
              }}
            >
              <LinkInterest userData={userData} />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params as { username: string };

  try {
    const res = await axios.get<UserType>(
      `https://api.github.com/users/${username}`
    );
    const userData = res.data;

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    return {
      props: {
        userData: null,
        error: (error as Error).message,
      },
    };
  }
};
