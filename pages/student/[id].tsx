import React from 'react';
import Head from 'next/head';
import { Button, Box, Heading, Paragraph, Anchor, Image } from "grommet";
import { useRouter } from 'next/router';
import { LinkPrevious } from "grommet-icons";
import { fetchStudent, Student } from "../../services/students";
import styles from '../../styles/student.module.css';

type studentParams = {
  params: {
    id: string;
  };
}

type props = {
  student: Student
}

const StudentPage: React.FC<props> = ({student}) => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`NGT.ACADEMY | ${student.first_name} ${student.last_name}`}</title>
      </Head>
      <Box className={styles.studentPage}>
        <Image src={student.avatar} alt={student.first_name} />
        <Heading level={3}>{`${student.first_name} ${student.last_name}`}</Heading>
        <Paragraph>({`${student.job} - ${student.company}`})</Paragraph>
        <hr/>
        <Anchor href={`mailto: ${student.email}`}>{student.email}</Anchor>
      </Box>
      <Button icon={<LinkPrevious/>} margin="small" label="Back" onClick={() => router.back()}/>
    </>
  );
}

export default StudentPage;

export async function getServerSideProps({params}: studentParams) {
  const studentData = await fetchStudent(params.id)
    .then((response) => { return response });

  return {
    props: {
      student: studentData,
    },
  }
}