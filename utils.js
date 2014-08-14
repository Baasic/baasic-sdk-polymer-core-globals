'use strict';

if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined' ? args[number] : match;
        });
    };
}

if (!String.slugify) {
    String.slugify = function (input) {
        return input
            .replace(/^\s\s*/, '') // Trim start
            .replace(/\s\s*$/, '') // Trim end
            .toLowerCase() // Camel case is bad
            .replace(/[^a-z0-9_\-~!\+\s]+/g, '') // Exchange invalid chars
            .replace(/[\s]+/g, '-'); // Swap whitespace for single hyphen
    };
}