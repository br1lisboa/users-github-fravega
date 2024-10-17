import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteUsersProps = {
  userId: number;
};

type State = {
  favorites: FavoriteUsersProps[];
  toggleFavorite: (userId: number) => void;
};

export const useFavorite = create<State>()(
  persist<State>(
    (set) => ({
      favorites: [],
      toggleFavorite: (userId: number) => {
        set((state) => {
          const isFavorite = state.favorites.some(
            (fav) => fav.userId === userId
          );
          if (isFavorite) {
            return {
              favorites: state.favorites.filter((fav) => fav.userId !== userId),
            };
          } else {
            return {
              favorites: [...state.favorites, { userId }],
            };
          }
        });
      },
    }),
    {
      name: "favorites",
    }
  )
);
