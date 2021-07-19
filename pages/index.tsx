import { Box, TextInput } from "grommet";
import React, { useEffect, useState, useMemo } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = ({}) => {

  const [loadingError, setLoadingError] = useState<boolean>(false);
  const [studentQuery, setStudentQuery] = useState<string>('');
  const [students, setStudents] = useState<Student[]>([]);

  const onChangeHandler = (event: any) => {
    setStudentQuery(event.currentTarget.value);
  };

  useEffect(() => {
    fetchStudents().then(res => {
      setStudents(res);
    }).catch(() => {
      setLoadingError(true);
    });
  }, []);

  const filteredStudents = useMemo(() => {
    if(studentQuery){
      const formattedQuery = studentQuery.toLowerCase();
      return students.filter(s =>
        s.first_name.toLowerCase().includes(formattedQuery) || 
        s.last_name.toLowerCase().includes(formattedQuery))
    } return students;
  }, [students, studentQuery]);

  const emptyStudentsMessage = useMemo(() => {
    if(loadingError){
      return (<p>Loading students error</p>)
    } return (<p>Student not found</p>);
  }, [students, filteredStudents]);


  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value={studentQuery} onChange={onChangeHandler}/>
      <Box direction="row" wrap={true}>
      {!!filteredStudents.length ? filteredStudents.map((s) => (
        <Box key={s.id} margin="10px">
          <UserCard user={s} />
        </Box>
      )): emptyStudentsMessage}
      </Box>
    </Box>
  );
};

export default Main;
