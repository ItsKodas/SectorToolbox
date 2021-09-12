const SystemConfig = require('../local/system.json')
const Permissions = require('./permissions')
const Controls = require('./controls')

const fs = require('fs')
const Gamedig = require('gamedig');

module.exports = {

    ReplaceXml: function (file, field, replace) {
        var extra = file.split(`<${field}`)[1].split(`>`)[0]
        var value = file.split(`<${field}${extra}>`)[1].split(`</${field}>`)[0]
        if (!replace) return value
        return file.replace(`<${field}${extra}>${value}</${field}>`, `<${field}${extra}>${replace}</${field}>`)
    }

}