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
  <Card height="small" width="small" onClick={() => router.push(`student/${user.id}`)}>
    <CardBody align="center" pad="medium">
      <Avatar src={user.avatar} />
    </CardBody>
    <CardFooter align="start" justify="center" pad="medium">
      <Text color="text" textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>
    </CardFooter>
  </Card>
)};

export default UserCard;
