import { Avatar, Card, CardBody, CardFooter, Text } from "grommet";
import React from "react";
import { useRouter } from 'next/router';
import { Student } from "../services/students";

type Props = {
  user: Student;
};

const UserCard: React.FC<Props> = ({ user }) => {

  const router = useRouter();

  return (
  <button onClick={() => router.push(`student/${user.id}`)}>
    <Card height="small" width="small">
      <CardBody align="center" pad="medium">
        <Avatar src={user.avatar} />
      </CardBody>
      <CardFooter align="start" justify="center" pad="medium">
        <Text textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>
      </CardFooter>
    </Card>
  </button>
)};

export default UserCard;
