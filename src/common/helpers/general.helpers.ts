export function cutHTTPSFromStringUrl(url: string) {
    return url ? url?.replace(/(^\w+:|^)\/\//, '') : url
};