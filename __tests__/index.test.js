const loader = require("../src/index");

describe("测试 loader", () => {
    it('转换',()=>{
        window.callback = (err, content) => {
          expect(content).toEqual(req);
        };
        const text = "border: 0.5px solid red;";
        const req = `border: 1px solid red;
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx){
                border: 0.5px solid red;
        }
        `
        loader(text);
    })
    it('不转换',()=>{
        window.callback = (err, content) => {
            expect(content).toEqual(req);
        };
        const text = "border: 1px solid red;";
        const req = "border: 1px solid red;";
        loader(text);
    })
});
