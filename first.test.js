

test('calling test', _=>{
    const add = jest.fn((x,y) => {return x + y});
    const operator = require('./first');
    console.log(operator);
    console.log("operating test");
    operator(2,3,add);
    console.log("finishing test",add.mock);
    console.log(jest.fn());
    expect(add).toHaveBeenCalled();
    expect(add.mock.calls.length).toBe(1);
})