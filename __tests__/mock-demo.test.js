import { jest } from '@jest/globals'
//cant import this way--- you need to run the mock code before the import
//so you need to use the import function and where its placed thats when it will run
//thats why we placed it before the mock data so it ran after we set that up 

// import { getNumPokemon }  from "../mock-demo";


//boiler plate code-----------------------------------------------
//this code below mocks a module axios, this is a way for us to test our pokemon function
//without making a call to the pokemon API 
jest.unstable_mockModule('axios', () => {
    return {
        default: {
            get: jest.fn().mockResolvedValue({
                data: {
                    results: [
                        { name: 'bulbasaur'},
                        { name: 'ivysaur'},
                        { name: 'venusaur'},
                        { name: 'charmander'}
                    ]
                }
            })
        }
    }
})
//this is where you are importing to allow the real API and the mock data
const { getNumPokemon } = await import ('../mock-demo.js')


test('returns "ivysaur" object when I run getNumPokemon with 2', async () => {
    expect(await getNumPokemon(2)).toMatchObject({ name: 'ivysaur' })
    expect(await getNumPokemon(4)).toMatchObject({ name: 'charmander' })
})