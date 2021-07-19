import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = ({}) => {

  const [students, setStudents] = useState<Student[]>([]);

  const onChangeHandler = (event: any) => {
    // TODO
  };

  useEffect(() => {
    fetchStudents().then(res => {
      setStudents(res);
    });
  }, []);


  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value="" onChange={onChangeHandler} />
      <Box direction="row" wrap={true}>
        {students.map((s) => (
          <Box key={s.id} margin="10px">
            <UserCard user={s} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
