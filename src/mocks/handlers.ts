import { http, HttpResponse } from 'msw';

import mockDataDetail from './mockDetail.json';
import mockDataListPage from './mockDataListPage.json';
import { validateSearchInput, validateOffset, validateLimit } from '@/lib/validation';

export const handlers = [
    http.get('/api/products', ({ request }) => {
        const url = new URL(request.url);

        const q = validateSearchInput(url.searchParams.get('q') ?? '').toLowerCase();
        const limit = validateLimit(parseInt(url.searchParams.get('limit') || '10', 10));
        const offset = validateOffset(parseInt(url.searchParams.get('offset') || '0', 10));

        const sort = url.searchParams.get('sort');
        const condition = url.searchParams.get('condition');

        if (condition && condition !== 'new' && condition !== 'used') {
            return new HttpResponse(null, { status: 400, statusText: 'Invalid condition' });
        }

        if (sort && sort !== 'price_asc' && sort !== 'price_desc') {
            return new HttpResponse(null, { status: 400, statusText: 'Invalid sort' });
        }

        let filtered = mockDataListPage.results.filter(item => {
            if (!q) return true;
            return item.title.toLowerCase().includes(q) ||
                item.id.toLowerCase().includes(q);
        });

        if (condition === 'new' || condition === 'used') {
            filtered = filtered.filter(item => item.condition === condition);
        }

        if (sort === 'price_asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filtered.sort((a, b) => b.price - a.price);
        }
        const paginated = filtered.slice(offset, offset + limit);

        return HttpResponse.json({
            query: q,
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
