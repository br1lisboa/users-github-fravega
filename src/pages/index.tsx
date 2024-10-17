import Head from "next/head";
import { useDebounce, useGetUsers, useIsMobile, useSearchUser } from "@/hooks";
import {
  Container,
  Grid2,
  InputAdornment,
  Skeleton,
  TextField,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { FeedbackResult, PageTitle, UserCard } from "@/components";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const searchQuery = useSearchParams().get("q") ?? "";
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const {
    data: dataAllUser,
    isLoading: isLoadingAllUsers,
    isFetching: isFetchingAllUsers,
    isError: isErrorAllUsers,
  } = useGetUsers();

  const {
    data: dataSearch,
    isLoading: isLoadingSearch,
    isFetching: isFetchingSearch,
    isError: isErrorSearch,
  } = useSearchUser({
    userName: debouncedSearchQuery,
  });

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    router.push(`?q=${e.target.value}`, { scroll: false });
  }

  const isLoading =
    isLoadingAllUsers ||
    isLoadingSearch ||
    isFetchingAllUsers ||
    isFetchingSearch;

  const isError = isErrorAllUsers || isErrorSearch;

  const usersToDisplay = searchQuery ? dataSearch : dataAllUser;

  return (
    <>
      <Head>
        <title>Fravega Challenge</title>
        <meta name="description" content="Fravega Challenge - Users GitHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main>
          <PageTitle title="Github Users" />

          <TextField
            label="Search user"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: "100%", marginBottom: 4 }}
            autoFocus
            variant="filled"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <BsSearch />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Grid2 container spacing={4}>
            {isLoading &&
              Array.from({ length: 12 }).map((_, index) => (
                <Grid2 key={index} size={{ xs: 6, md: 4 }}>
                  <Skeleton
                    variant="rectangular"
                    sx={{ bgcolor: "grey.600", borderRadius: 2 }}
                    height={isMobile ? 300 : 500}
                  />
                </Grid2>
              ))}

            {!isLoading && usersToDisplay?.length === 0 && (
              <FeedbackResult
                src="/images/noresult-removebg-preview.png"
                alt="No results"
              />
            )}

            {isError && (
              <FeedbackResult
                src="/images/error-removebg-preview.png"
                alt="Error"
              />
            )}

            {!isLoading &&
              usersToDisplay?.map((user) => (
                <Grid2 key={user.id} size={{ xs: 6, md: 4 }}>
                  <UserCard user={user} isMobile={isMobile} />
                </Grid2>
              ))}
          </Grid2>
        </main>
      </Container>
    </>
  );
}
