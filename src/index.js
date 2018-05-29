module.exports = function(content, map, meta) {
    content = content.replace(/(border.*?):\s+0\.5px(.*?);/g, function(
        string,
        $1,
        $2
    ) {
        const STRING = `${$1}: 1px${$2};
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx){
                ${string}
        }
        `
        return STRING
    })
    this.callback(null, content, map, meta)
}