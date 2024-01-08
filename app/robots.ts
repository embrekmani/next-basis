import { MetadataRoute } from 'next';
import { BASE_URL } from './_util/constants';

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/admin/'
        },
        sitemap: BASE_URL + '/sitemap.xml',
    }
}

export default robots;