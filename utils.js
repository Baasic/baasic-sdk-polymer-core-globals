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

var baasicUtils = baasicUtils || {};

baasicUtils.isArrayMatch = function (target, toMatch) {
    var found, targetMap, i, j, cur;

    found = false;
    targetMap = {};

    if (!target || !toMatch)
        return false;

    // Put all values in the `target` array into a map, where
    //  the keys are the values from the array
    for (i = 0, j = target.length; i < j; i++) {
        cur = target[i];
        targetMap[cur] = true;
    }

    // Loop over all items in the `toMatch` array and see if any of
    //  their values are in the map from before
    for (i = 0, j = toMatch.length; !found && (i < j) ; i++) {
        cur = toMatch[i];
        found = !!targetMap[cur];
        // If found, `targetMap[cur]` will return true, otherwise it
        //  will return `undefined`...that's what the `!!` is for
    }

    return found;
};