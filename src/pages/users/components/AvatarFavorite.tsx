import InfoItem from "@/components/InfoItem";
import { useFavorite } from "@/store/useFavorite.store";
import { UserType } from "@/types/users.types";
import { Alert, Avatar, Box, Button, Fab } from "@mui/material";
import { useRouter } from "next/router";

export function AvatarFavorite({ userData }: { userData: Partial<UserType> }) {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.some((fav) => fav.userId === userData.id);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
      <Avatar
        src={userData.avatar_url}
        alt={userData.login}
        sx={{ width: 400, height: 400 }}
      />

      <Alert severity="info">
        <Box display="flex" gap={2} alignContent="center">
          <InfoItem.Label>Company</InfoItem.Label>
          <InfoItem.Value>{userData.company}</InfoItem.Value>
        </Box>
      </Alert>

      <Fab
        variant="extended"
        color={isFavorite ? "secondary" : "primary"}
        onClick={() => toggleFavorite(userData.id as number)}
        sx={{ width: "250px" }}
      >
        {isFavorite ? "I'm favorite!" : "Add to favorites!"}
      </Fab>

      <Button onClick={() => router.push("/")}>BACK TO ALL USERS</Button>
    </Box>
  );
}
