import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  // This useEffect is being used to show the results of the exercises clicked from the carousel.
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' }); // scroll to the top of the page when a new page is clicked.
  };

  // if (!currentExercises.length) return <Loader />;

  // console.log(exercises);
  return (
    <Box 
      id="exercises" 
      sx={{ mt: { lg: '109px' } }} 
      mt="50px" 
      p="20px"
    >
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ fontSize: { lg: '44px', xs: '30px' } }} 
        mb="46px"
      >
      Showing Results
      </Typography>
      <Stack 
        direction="row" 
        sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" 
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack 
        sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center"
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}  // its just like a value in Stack/div . In case of Pagination of Material UI , its the "page" which holds the value.
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;