import { UserMappedType, UsersType } from "@/types/users.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://api.github.com/users";
const KEY = "USERS";

async function getUsers(): Promise<UserMappedType[]> {
  try {
    const { data } = await axios.get<UsersType[]>(URL);

    const dataMapped = mapUsersData(data);

    return dataMapped as UserMappedType[];
  } catch (error) {
    //TODO DELETE CONSOLE.LOG
    console.error(error);
    return [];
  }
}

export function useGetUsers() {
  return useQuery({
    queryKey: [KEY],
    queryFn: () => getUsers(),
  });
}

function mapUsersData(data: UsersType[]) {
  return data.map((item) => ({
    avatar: item.avatar_url,
    id: item.id,
    login: item.login,
  }));
}
