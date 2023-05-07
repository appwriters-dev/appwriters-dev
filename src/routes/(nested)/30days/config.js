import { PUBLIC_MF_30_PUBLISHED_DATE } from '$env/static/public';

export const config = {
    masterFlutter30Published: (new Date(PUBLIC_MF_30_PUBLISHED_DATE)).getTime(),
}