import { getPropertyListings } from '../SimplyRETS';

describe('getPropertyListings', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('fetches property listings from the API', async () => {
        const mockData = [
            {
                address: {
                    "crossStreet": "Dunne Ave",
                    "state": "Texas",
                    "country": "United States",
                    "postalCode": "77096",
                    "streetName": "East Sweet Bottom Br",
                    "streetNumberText": "74434",
                    "city": "Houston",
                    "streetNumber": 74434,
                    "full": "74434 East Sweet Bottom Br #18393",
                    "unit": "18393"
                },
                mlsId: 123456,
            },
            {
                address: {
                    "crossStreet": "Fake Ave",
                    "state": "Texas",
                    "country": "United States",
                    "postalCode": "12345",
                    "streetName": "Main Street",
                    "streetNumberText": "4545",
                    "city": "Houston",
                    "streetNumber": 74434,
                    "full": "4545 Main Street #454545",
                    "unit": "454545"
                },
                mlsId: 654321,
            }
        ];
        const mockResponse = {
            json: jest.fn().mockResolvedValue(mockData),
        };

        (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(mockResponse as Response);

        const data = await getPropertyListings();

        expect(fetch).toHaveBeenCalledWith('https://api.simplyrets.com/properties', {
            headers: {
                Authorization: `Basic ${btoa('simplyrets:simplyrets')}`,
                'Content-Type': 'application/json',
            },
        });

        expect(data).toEqual(mockData);
    });

    it('handles errors', async () => {
        const mockErrorResponse = {
            status: 500,
            statusText: 'Internal Server Error',
        };

        (global.fetch as jest.MockedFunction<typeof fetch>).mockRejectedValue(mockErrorResponse);

        const data = await getPropertyListings();

        expect(fetch).toHaveBeenCalledWith('https://api.simplyrets.com/properties', {
            headers: {
                Authorization: `Basic ${btoa('simplyrets:simplyrets')}`,
                'Content-Type': 'application/json',
            },
        });

        expect(data).toEqual({});
    });
});
