import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker';

const getData = () => {
  const data = { user: [] }
  for (let i = 0; i < 50; i++) {
    data.user.push({
      id: nanoid(),
      avatarUrl: faker.image.avatar(),
      name: faker.internet.userName(),
    })
  }

  return data
}

const data = getData()

console.log(JSON.stringify(data));

export default getData
