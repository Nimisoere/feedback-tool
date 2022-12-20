import { fetcher } from './api.utils';

describe('fetcher', () => {
  beforeEach(() => {
    (fetch as any).resetMocks()
  })
  it('should make a successful fetch request and return the response as JSON', async () => {
    (fetch as any).mockResponseOnce(JSON.stringify({ data: '12345' }))
 
    //assert on the response
    fetcher('https://google.com', {}).then(res => {
      expect(res.data).toEqual('12345')
    })
 
    //assert on the times called and arguments given to fetch
    expect((fetch as any).mock.calls.length).toEqual(1)
    expect((fetch as any).mock.calls[0][0]).toEqual('https://google.com')
  });

  it('should throw an error if the fetch request is not successful', async () => {
    
    const mockResponse = {
      ok: false,
      status: 404,
      json: jest.fn().mockResolvedValue({ error: 'Not Found' })
    };
    (fetch as any).mockResponseOnce(JSON.stringify(mockResponse))

    const url = 'https://mock.url';
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      await fetcher(url, init);
    } catch (error) {
      expect(error).toEqual(expect.objectContaining({
        message: 'An error occurred',
        info: { error: 'Not Found' },
        status: 404
      }));
    }
  });
})