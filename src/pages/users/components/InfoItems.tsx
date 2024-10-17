import InfoItem from "@/components/InfoItem";
import { formatDate } from "@/helpers";
import { UserType } from "@/types/users.types";

export function InfoItems({ userData }: { userData: Partial<UserType> }) {
  return (
    <>
      <InfoItem>
        <InfoItem.Label>Followers</InfoItem.Label>
        <InfoItem.Value>{userData.followers}</InfoItem.Value>
      </InfoItem>
      <InfoItem>
        <InfoItem.Label>Following</InfoItem.Label>
        <InfoItem.Value>{userData.following}</InfoItem.Value>
      </InfoItem>
      <InfoItem>
        <InfoItem.Label>Public Repos</InfoItem.Label>
        <InfoItem.Value>{userData.public_repos}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Public Gist</InfoItem.Label>
        <InfoItem.Value>{userData.public_gists}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Login</InfoItem.Label>
        <InfoItem.Value>{userData.login}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Id</InfoItem.Label>
        <InfoItem.Value>{userData.id}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Node id</InfoItem.Label>
        <InfoItem.Value>{userData.node_id}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Gravatar id</InfoItem.Label>
        <InfoItem.Value>{userData.gravatar_id}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Type</InfoItem.Label>
        <InfoItem.Value>{userData.type}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Location</InfoItem.Label>
        <InfoItem.Value>{userData.location}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Bio</InfoItem.Label>
        <InfoItem.Value>{userData.bio ?? ""}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Email</InfoItem.Label>
        <InfoItem.Value>{userData.email ?? ""}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Twitter</InfoItem.Label>
        <InfoItem.Value>{userData.twitter_username ?? ""}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Hireable</InfoItem.Label>
        <InfoItem.Value>{userData.hireable ?? ""}</InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Created at</InfoItem.Label>
        <InfoItem.Value>
          {formatDate(userData.created_at as unknown as string)}
        </InfoItem.Value>
      </InfoItem>

      <InfoItem>
        <InfoItem.Label>Updated at</InfoItem.Label>
        <InfoItem.Value>
          {formatDate(userData.updated_at as unknown as string)}
        </InfoItem.Value>
      </InfoItem>
    </>
  );
}
