const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['student1', 'student2', 'student3']
};

const printCohort = (cohort) => {
  console.log(`${cohort.id}` +
  ' - ' +
  `${cohort.name}` +
  ' - ' +
  `${cohort.students.length} students in this cohort`)
}

printCohort(cohort);