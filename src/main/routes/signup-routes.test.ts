import request from 'supertest'
import app from '../config/app'

describe('SingUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Joe',
        email: 'joe@gmail1.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
