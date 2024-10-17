import { maxLengthString } from "@/helpers";
import { useFavorite } from "@/store/useFavorite.store";
import { UserMappedType } from "@/types/users.types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { GoHeart, GoHeartFill } from "react-icons/go";

export function UserCard({
  user,
  isMobile,
}: {
  user: UserMappedType;
  isMobile: boolean;
}) {
  const router = useRouter();

  const { favorites, toggleFavorite } = useFavorite();

  function handleNavigate(username: string) {
    router.push(`/users/${username}`);
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt={user.login}
        height={isMobile ? 240 : 380}
        image={user.avatar}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="div">
          {maxLengthString(10, user.login)}
        </Typography>

        <Button onClick={() => toggleFavorite(user.id)}>
          {favorites.find((favorite) => favorite.userId === user.id) ? (
            <GoHeartFill
              style={{
                width: "30px",
                height: "30px",
                color: "red",
              }}
            />
          ) : (
            <GoHeart style={{ width: "30px", height: "30px" }} />
          )}
        </Button>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleNavigate(user.login)}>
          Know me!
        </Button>
      </CardActions>
    </Card>
  );
}
