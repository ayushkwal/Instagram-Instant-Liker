const puppeteer = require('puppeteer');

(async function() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/', { waitUntil: 'networkidle2' });
    await page.type("input[name='username']", '<email/username>', { delay: 100 });
    await page.type("input[name='password']", '<password>', { delay: 100 });
    // await page.click("button[type='submit']");
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.click("button[type='submit']")
    ]);
    // await page.type("input[placeholder='Search']", 'abc');
    // await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await page.type("input[placeholder='Search']", 'abcd');
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);
    //you got a page of abcd
    //Now you have to select first image
    await page.waitForSelector("._9AhH0", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._9AhH0"),
    ]);
    var temp = 0;
    for (temp = 0; temp < 10; temp++) {
        await page.waitForSelector(".fr66n .wpO6b ", { visible: true });
        await page.click(".fr66n .wpO6b "),
            await Promise.all([
                page.waitForNavigation({ waitUntil: "networkidle2" }),
                page.click("._65Bje"),
            ]);
        page.waitForNavigation({ waitUntil: "networkidle2" });
    }


    // await page.waitForSelector("._65Bje.coreSpriteRightPaginationArrow", { visible: true });
    // await Promise.all([
    //     page.waitForNavigation({ waitUntil: "networkidle2" }),
    //     page.click("._65Bje.coreSpriteRightPaginationArrow"),
    // ]);



})();