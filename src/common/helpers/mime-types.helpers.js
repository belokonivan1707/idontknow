import db from '../json/mime-db.json'

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/

const extensions = Object.create(null)
const types = Object.create(null)

function populateMaps(extensions, types) {
    var preference = ['nginx', 'apache', undefined, 'iana']

    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type]
        var exts = mime.extensions

        if (!exts || !exts.length) {
            return
        }

        extensions[type] = exts

        for (var i = 0; i < exts.length; i++) {
            var extension = exts[i]

            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source)
                var to = preference.indexOf(mime.source)

                if (types[extension] !== 'application/octet-stream' &&
                    (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
                    continue
                }
            }
            types[extension] = type
        }
    })
}
populateMaps(extensions, types)


export function extension(type) {
    if (!type || typeof type !== 'string') {
        return false
    }

    var match = EXTRACT_TYPE_REGEXP.exec(type)
    var exts = match && extensions[match[1].toLowerCase()]

    if (!exts || !exts.length) {
        return false
    }

    return exts[0]
}