const { Theatre, City, PinCode,  Screen, Movie, ShowSchedule } = require('../models')

seedDatabase();

async function seedDatabase () {
  try {
    // Create Theatres
    const theatres = await createTheatres()

    const screen1 = await Screen.create({ name: 'Screen 1', rows: 10, columns: 10, theatreId: theatres[0].id })
    const screen2 = await Screen.create({ name: 'Screen 2', rows: 10, columns: 10, theatreId: theatres[0].id })

    const screenA = await Screen.create({ name: 'Screen A', rows: 10, columns: 10, theatreId: theatres[1].id })
    const screenB = await Screen.create({ name: 'Screen B', rows: 10, columns: 10, theatreId: theatres[1].id })
    const screenC = await Screen.create({ name: 'Screen C', rows: 10, columns: 10, theatreId: theatres[1].id })

    const movies = await createMovies()

    await ShowSchedule.bulkCreate([
      { showStartTime: '2023-11-28 10:00:00', showEndTime: '2023-11-28 12:00:00',  TheatreId: theatres[0].id, ScreenId: screen1.id, MovieId: movies[0].id },
      { showStartTime: '2023-11-28 13:00:00', showEndTime: '2023-11-28 15:30:00', TheatreId: theatres[0].id, ScreenId: screen2.id, MovieId: movies[0].id },
      { showStartTime: '2023-11-29 16:00:00', showEndTime: '2023-11-29 19:00:00', TheatreId: theatres[0].id, ScreenId: screen1.id, MovieId: movies[1].id },
      { showStartTime: '2023-11-28 10:00:00', showEndTime: '2023-11-28 12:00:00',  TheatreId: theatres[1].id, ScreenId: screenA.id, MovieId: movies[0].id },
      { showStartTime: '2023-11-28 13:00:00', showEndTime: '2023-11-28 15:30:00', TheatreId: theatres[1].id, ScreenId: screenB.id, MovieId: movies[2].id },
      { showStartTime: '2023-11-29 16:00:00', showEndTime: '2023-11-29 19:00:00', TheatreId: theatres[1].id, ScreenId: screenC.id, MovieId: movies[1].id }
    ])

  } catch (error) {
    console.error('Error while seeding the database. Details: ', error)
  }
}

async function createTheatres () {
  return Theatre.bulkCreate([
    {
      name: 'Cinepolis',
      city: 'Delhi',
      address: 'Rajori Garden',
      pin_code: '201301',
      contact_no: '1234567890',
      email: 'cinepolis@np.com',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'PVR Forum',
      city: 'Bengaluru',
      address: 'Forum Mall',
      pin_code: '560001',
      contact_no: '1234567890',
      email: 'pvr1@np.com',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])


}

async function createMovies () {
  return Movie.bulkCreate([
    {
      name: 'RRR',
      language: 'Telugu, Hindi, Tamil',
      certificate: 'U/A'
    },
    {
      name: 'Pushpa',
      language: 'Hindi',
      certificate: 'U/A'
    },
    {
      name: 'KGF',
      language: 'Kannada',
      certificate: 'U/A'
    },
    {
      name: 'Baahubali',
      language: 'Telugu',
      certificate: 'U/A'
    },
    {
      name: 'Avenger: End Game',
      language: 'English',
      certificate: 'U/A'
    }
  ])
}

