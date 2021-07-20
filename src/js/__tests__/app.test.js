import GameSavingLoader from '../app';

test('saving', async () => {
  const x = await GameSavingLoader.load().then();
  expect(x).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
