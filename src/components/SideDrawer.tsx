import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useGetUsers } from "@/hooks";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useFavorite } from "@/store/useFavorite.store";
import { GoHeart, GoHeartFill } from "react-icons/go";

export function SideDrawer() {
  const { data, isLoading } = useGetUsers();

  const { favorites, toggleFavorite } = useFavorite();

  const favoriteUsers = data?.filter((user) =>
    favorites.find((favorite) => favorite.userId === user.id)
  );

  const [state, setState] = React.useState({
    top: false,
  });

  const titleSide = favorites.length ? "Favorites" : "No favorites";

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ top: open });
    };

  const drawerContent = () => (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "16px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {!isLoading &&
        favoriteUsers?.map((user) => (
          <Box key={user.id}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {user.login}
                  </Typography>
                </CardContent>

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
              </Box>

              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={user.avatar}
                alt="Live from space album cover"
              />
            </Card>
          </Box>
        ))}
    </Box>
  );

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="center">
        <Button
          disabled={titleSide === "No favorites"}
          onClick={toggleDrawer(true)}
        >
          {titleSide}
        </Button>
      </Box>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer(false)}>
        {drawerContent()}
      </Drawer>
    </Box>
  );
}
