import LinksOfInterest from "@/components/LinksOfInterest";
import { UserType } from "@/types/users.types";
import { Typography } from "@mui/material";

export function LinkInterest({ userData }: { userData: Partial<UserType> }) {
  return (
    <LinksOfInterest>
      <LinksOfInterest.Title>Interested Links:</LinksOfInterest.Title>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Github:</Typography>
        <LinksOfInterest.Link href={userData.html_url ?? ""}>
          {userData.html_url}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Blog:</Typography>
        <LinksOfInterest.Link href={userData.blog ?? ""}>
          {userData.blog}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Repos:</Typography>
        <LinksOfInterest.Link href={userData.repos_url ?? ""}>
          {userData.repos_url}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Subscriptions:</Typography>
        <LinksOfInterest.Link href={userData.subscriptions_url ?? ""}>
          {userData.subscriptions_url}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Organizations:</Typography>
        <LinksOfInterest.Link href={userData.organizations_url ?? ""}>
          {userData.organizations_url}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Events:</Typography>
        <LinksOfInterest.Link href={userData.organizations_url ?? ""}>
          {userData.organizations_url}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>

      <LinksOfInterest.Item>
        <Typography variant={"h6"}>Repos:</Typography>
        <LinksOfInterest.Link href={userData.organizations_url ?? ""}>
          {userData.organizations_url}
        </LinksOfInterest.Link>
      </LinksOfInterest.Item>
    </LinksOfInterest>
  );
}
