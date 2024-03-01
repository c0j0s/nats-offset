import { type NextRequest } from 'next/server'

const flight_data = [
    {
        flight: "SQ1",
        code: "ASRT",
        value: 1000
    },
    {
        flight: "SQ2",
        code: "ASRT",
        value: 1005
    }
]

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('flight')
    console.log(`[GET] ${query}`);
    if (query) {
        let flight = flight_data.filter(x => x.flight.toUpperCase() === query.toUpperCase());
        if (flight.length > 0) {
            return new Response(JSON.stringify(flight), {
                status: 200
            });
        } else {
            return new Response(JSON.stringify({
                message: "not found"
            }), {
                status: 404
            });
        }
    } else {
        return new Response(JSON.stringify(flight_data), {
            status: 200
        });
    }
}

export async function PUT(request: Request) {
    const data = await request.json()
    console.log(`[PUT] ${data}`);
    if (data) {
        flight_data.push(data);
        return new Response(JSON.stringify({
            message: "data added"
        }), {
            status: 200
        });
    } else {
        return new Response(JSON.stringify({
            message: "invalid data"
        }), {
            status: 500
        });
    }
}