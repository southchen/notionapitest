const doteng = require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const listDatabase = async () => {
  //   const { results } = await notion.search();
  //   const pages = results.filter(({ object }) => object === 'page');
  const pageId = 'e16d0f60-4173-495c-a2c2-a5fc215bf310';
  //   console.log(results);
  const { results } = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });
  results.forEach((r) => {
    // console.log(r);
    const key = r.type;
    console.log(r);
  });
};

listDatabase();
