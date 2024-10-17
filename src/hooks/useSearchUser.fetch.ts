import { SearchUserType, UserMappedType } from "@/types/users.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://api.github.com/search/users?q=";
const KEY = "SEARCH_USER";

async function searchUser(userName: string): Promise<UserMappedType[]> {
  if (!userName) return [];
  try {
    const { data } = await axios.get<SearchUserType>(`${URL}${userName}`);

    const dataMapped = mapSearchData(data);

    return dataMapped as UserMappedType[];
  } catch (error) {
    throw new Error(`Fallo el servicio para buscar usuarios: ${error}`);
  }
}

export function useSearchUser({ userName }: { userName: string }) {
  return useQuery({
    queryKey: [KEY, userName],
    queryFn: () => searchUser(userName),
  });
}

function mapSearchData(data: SearchUserType) {
  return data.items.map((item) => ({
    avatar: item.avatar_url,
    id: item.id,
    login: item.login,
  }));
}
