import { http, HttpResponse } from 'msw';

import mockDataDetail from './mockDetail.json';
import mockDataListPage from './mockDataListPage.json';

export const handlers = [
    http.get('/api/products', ({ request }) => {
        const url = new URL(request.url);
        const q = url.searchParams.get('q');
        const offset = parseInt(url.searchParams.get('offset') || '0', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

        const sort = url.searchParams.get('sort');
        const condition = url.searchParams.get('condition');

        let filtered = mockDataListPage.results.filter(item =>
            !q || item.title.toLowerCase().includes(q.toLowerCase())
        );

        if (condition) {
            filtered = filtered.filter(item => item.condition === condition);
        }

        if (sort === 'price_asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

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
    }),

    http.get('/api/products/:id', ({ params }) => {
        const { id } = params;

        const item = mockDataDetail.find(item => item.id === id);

        if (item) {
            return HttpResponse.json(item);
        }

        const listItem = mockDataListPage.results.find(item => item.id === id);

        if (listItem) {
            return HttpResponse.json(listItem);
        }

        return new HttpResponse(null, { status: 404 });
    })
];
