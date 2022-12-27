export function cutHTTPSFromStringUrl(url: string) {
    return url ? url?.replace(/(^\w+:|^)\/\//, '') : url
};

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function replaceEmojisInline(text: string) {

    function convertEmojiCodeToText(text: string) {
        return text.replace(/\\u[\dA-F]{4}/gi, match => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)));
    }

    if (!text) {
        return '';
    }

    try {
        let str = text.replace(/\\{1,3}([^u\s])/g, '$1');
        if (/^u[2d]{1}[a-f0-9]{3}/i.test(str)) {
            str = '\\' + str;
        }
        return str.split('\n').map(convertEmojiCodeToText).join('\n');
    } catch (e) {
        return text;
    }
}