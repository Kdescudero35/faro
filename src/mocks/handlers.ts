import { http, HttpResponse } from 'msw';
import mockDataListPage from './mockDataListPage.json';

export const handlers = [
    http.get('/api/products', ({ request }) => {
        const url = new URL(request.url);
        const q = url.searchParams.get('q');
        const offset = parseInt(url.searchParams.get('offset') || '0', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

        // Aquí podrías filtrar `mockDataListPage.results` según `q`, `offset`, etc.
        // Ejemplo simple:
        const filtered = mockDataListPage.results.filter(item =>
            !q || item.title.toLowerCase().includes(q.toLowerCase())
        );
        const paginated = filtered.slice(offset, offset + limit);

        return HttpResponse.json({
            query: q || '',
            paging: {
                total: filtered.length,
                offset,
                limit
            },
            results: paginated
        });
    })
];
