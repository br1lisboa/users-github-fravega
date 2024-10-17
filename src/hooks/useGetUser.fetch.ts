import { UserType } from "@/types/users.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://api.github.com/users/";
const KEY = "USER";

async function getUser(userName: string): Promise<UserType> {
  try {
    const { data } = await axios.get(`${URL}${userName}`);
    return data as UserType;
  } catch (error) {
    throw new Error(`Fallo el servicio para traer usuario: ${error}`);
  }
}

export function useGetUser({ userName }: { userName: string }) {
  return useQuery({
    queryKey: [KEY, userName],
    queryFn: () => getUser(userName),
  });
}
